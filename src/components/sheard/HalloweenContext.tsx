"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import { toast } from "sonner";

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

interface HalloweenContextType {
  isOpen: boolean;
  openHalloweenModal: () => void;
  closeHalloweenModal: () => void;
  timeRemaining: TimeRemaining;
  couponCode: string;
  copyCouponCode: () => void;
  isCopied: boolean;
}

const HalloweenContext = createContext<HalloweenContextType | undefined>(
  undefined
);

// Offer ends Oct 31, 2026, 11:59:59 PM Central Time (CDT = UTC-5)
const HALLOWEEN_END_TIME = new Date("2026-10-31T23:59:59-05:00").getTime();
const COUPON_CODE = "HALO-2026";

function calculateTimeRemaining(): TimeRemaining {
  const diff = HALLOWEEN_END_TIME - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
  }
  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds, isExpired: false };
}

export function HalloweenProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(() =>
    calculateTimeRemaining()
  );
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = calculateTimeRemaining();
      setTimeRemaining(remaining);
      if (remaining.isExpired) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const openHalloweenModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeHalloweenModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const copyCouponCode = useCallback(() => {
    const code = COUPON_CODE;
    const performCopy = () => {
      setIsCopied(true);
      toast.success("Halloween Promo Code Copied!", {
        description: `Use code ${code} over the phone or with your quote to claim your Free Car Care Kit!`,
      });
      setTimeout(() => setIsCopied(false), 2500);
    };

    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      navigator.clipboard
        .writeText(code)
        .then(performCopy)
        .catch(() => {
          fallbackCopy(code, performCopy);
        });
    } else {
      fallbackCopy(code, performCopy);
    }
  }, []);

  return (
    <HalloweenContext.Provider
      value={{
        isOpen,
        openHalloweenModal,
        closeHalloweenModal,
        timeRemaining,
        couponCode: COUPON_CODE,
        copyCouponCode,
        isCopied,
      }}
    >
      {children}
    </HalloweenContext.Provider>
  );
}

function fallbackCopy(text: string, onSuccess: () => void) {
  try {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    onSuccess();
  } catch {
    toast.error("Could not copy code automatically. Code: " + text);
  }
}

export function useHalloween() {
  const context = useContext(HalloweenContext);
  if (!context) {
    throw new Error("useHalloween must be used within a HalloweenProvider");
  }
  return context;
}
