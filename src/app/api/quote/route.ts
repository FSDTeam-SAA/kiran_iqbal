import { NextResponse } from "next/server";
import { parsePhoneNumberFromString } from "libphonenumber-js";

const fields = ["year", "make", "model", "part", "name", "phone", "email"] as const;
type Field = (typeof fields)[number];

const CRM_URL = "https://crm.theprolead.com/api/create_lead_form";

// In-memory deduplication cache to prevent duplicate CRM submissions (5-minute window)
const recentSubmissions = new Map<string, number>();
const DEDUPE_WINDOW_MS = 5 * 60 * 1000;

export async function POST(request: Request) {
  try {
    const body = await request.json() as Record<string, unknown>;
    if (body.website) return NextResponse.json({ message: "Unable to submit request." }, { status: 400 });
    if (!body.consent || fields.some((field) => typeof body[field] !== "string" || !String(body[field]).trim())) {
      return NextResponse.json({ message: "Please complete every required field and consent checkbox." }, { status: 400 });
    }
    if (!/^\S+@\S+\.\S+$/.test(String(body.email))) {
      return NextResponse.json({ message: "Enter a valid email address." }, { status: 400 });
    }
    const phoneNumber = parsePhoneNumberFromString(String(body.phone), "US");
    if (!phoneNumber?.isValid() || phoneNumber.country !== "US") {
      return NextResponse.json({ message: "Enter a valid US phone number." }, { status: 400 });
    }

    // Clean up expired entries
    const now = Date.now();
    for (const [key, timestamp] of recentSubmissions.entries()) {
      if (now - timestamp > DEDUPE_WINDOW_MS) {
        recentSubmissions.delete(key);
      }
    }

    // Prevent duplicate lead submission for identical customer request
    const leadKey = `${phoneNumber.number}:${String(body.email).toLowerCase().trim()}:${String(body.year).trim()}:${String(body.make).toLowerCase().trim()}:${String(body.model).toLowerCase().trim()}:${String(body.part).toLowerCase().trim()}`;
    const previousTimestamp = recentSubmissions.get(leadKey);
    if (previousTimestamp && now - previousTimestamp < DEDUPE_WINDOW_MS) {
      console.warn(`Duplicate lead submission prevented for: ${phoneNumber.number}`);
      return NextResponse.json({
        message: "This form has already been submitted. Our team is processing your request.",
        duplicate: true,
      });
    }

    const username = process.env.CRM_AUTH_USER;
    const password = process.env.CRM_AUTH_PASSWORD;
    if (!username || !password) {
      console.error("CRM credentials are not configured.");
      return NextResponse.json({ message: "Part requests are temporarily unavailable. Please try again later." }, { status: 503 });
    }

    const lead = new URLSearchParams(
      Object.fromEntries([
        ...fields.map((field: Field) => [
          field,
          field === "phone" ? phoneNumber.number : String(body[field]).trim(),
        ]),
        ["host", process.env.NEXT_PUBLIC_SITE_URL ?? new URL(request.url).origin],
      ]),
    );

    const delivery = await fetch(CRM_URL, {
      method: "POST",
      headers: {
        "Authorization-User": Buffer.from(username).toString("base64"),
        "Authorization-Password": Buffer.from(password).toString("base64"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: lead.toString(),
      signal: AbortSignal.timeout(10_000),
    });

    if (!delivery.ok) {
      console.error(`CRM lead delivery failed with status ${delivery.status}.`);
      throw new Error("Lead delivery failed");
    }

    recentSubmissions.set(leadKey, Date.now());

    return NextResponse.json({ message: "Thanks. Your part request was sent successfully." });
  } catch (error) {
    console.error("Quote submission failed.", error);
    return NextResponse.json({ message: "We could not send your request. Please try again." }, { status: 500 });
  }
}
