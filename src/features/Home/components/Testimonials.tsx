"use client";

import { useEffect, useRef, useState } from "react";
import { FiArrowLeft, FiArrowRight, FiStar } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Daniel Carter",
    date: "3 min ago",
    review:
      "The parts specialist made the process easy and helped me understand what vehicle information was needed to find the right engine.",
  },
  {
    name: "Sophia Martinez",
    date: "5 min ago",
    review:
      "I appreciated the clear communication about availability, delivery, and the details I needed before placing an order.",
  },
  {
    name: "Michael Thompson",
    date: "18 min ago",
    review:
      "The team answered my questions and guided me through the process of finding a replacement transmission for my vehicle.",
  },
  {
    name: "Olivia Reynolds",
    date: "32 min ago",
    review:
      "Submitting my vehicle details was straightforward, and the support team explained the next steps in a clear and helpful way.",
  },
  {
    name: "James Wilson",
    date: "1 hour ago",
    review:
      "A simple and convenient experience for checking replacement part options without calling multiple salvage yards.",
  },
  {
    name: "Emma Collins",
    date: "2 hours ago",
    review:
      "The quote process was easy to follow, and I knew which vehicle details to provide before speaking with the parts team.",
  },
  {
    name: "Robert Anderson",
    date: "4 hours ago",
    review:
      "The specialist explained the engine options clearly and helped me understand the fitment information needed for my truck.",
  },
  {
    name: "Mia Robinson",
    date: "Yesterday",
    review:
      "I received helpful answers about shipping and warranty details while searching for a replacement engine for my vehicle.",
  },
  {
    name: "William Harris",
    date: "2 days ago",
    review:
      "The team was patient with my questions and made the process of checking transmission availability feel straightforward.",
  },
  {
    name: "Ava Mitchell",
    date: "3 days ago",
    review:
      "It was convenient to submit the vehicle information online and get guidance about the next steps from a parts specialist.",
  },
  {
    name: "Ethan Walker",
    date: "5 days ago",
    review:
      "Clear communication and a simple process made it easier to review replacement part options for my SUV.",
  },
  {
    name: "Isabella Turner",
    date: "1 week ago",
    review:
      "The support team was responsive and explained the information required to identify the correct engine configuration.",
  },
];

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);

  const visibleCount = viewportWidth >= 1024 ? 3 : viewportWidth >= 640 ? 2 : 1;
  const gap = 20;
  const cardWidth =
    viewportWidth > 0
      ? (viewportWidth - gap * (visibleCount - 1)) / visibleCount
      : 0;
  const maxIndex = testimonials.length - visibleCount;

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const observer = new ResizeObserver(([entry]) => {
      setViewportWidth(entry.contentRect.width);
    });
    observer.observe(viewport);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setStartIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  const showPrevious = () => {
    if (isAnimating || startIndex === 0) return;
    setIsAnimating(true);
    setStartIndex((current) => Math.max(0, current - 1));
  };

  const showNext = () => {
    if (isAnimating || startIndex === maxIndex) return;
    setIsAnimating(true);
    setStartIndex((current) => Math.min(maxIndex, current + 1));
  };

  return (
    <section className="bg-stone-50 px-5 py-16 sm:py-20 lg:px-10">
      <div className="container mx-auto">
        <header className="mx-auto max-w-3xl text-center">
          <p className="font-['Barlow_Condensed'] text-sm font-bold uppercase tracking-[0.18em] text-green-600">
            Customer Reviews
          </p>
          <h2 className="mt-3 font-['Barlow_Condensed'] text-4xl font-extrabold uppercase leading-none text-gray-900 sm:text-5xl">
            Hear From <span className="text-green-600">Our Customers</span>
          </h2>
        </header>

        <div
          ref={viewportRef}
          className={`relative mt-10 px-1 py-2 ${showAll ? "" : "overflow-hidden"}`}
        >
          <motion.div
            animate={{
              x: showAll ? 0 : -startIndex * (cardWidth + gap),
            }}
            transition={{ duration: 0.75, ease: [0.4, 0, 0.2, 1] }}
            onAnimationComplete={() => setIsAnimating(false)}
            className={
              showAll
                ? "grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
                : "flex gap-5"
            }
          >
              {testimonials.map((testimonial) => (
                <article
                  key={testimonial.name}
                  style={
                    showAll
                      ? undefined
                      : { width: cardWidth || "100%", flexShrink: 0 }
                  }
                  className="flex min-h-64 flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_16px_36px_rgba(0,153,0,0.09)] sm:p-6"
                >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <FcGoogle aria-hidden className="size-7" />
                  <div className="text-left leading-tight">
                    <span className="block text-[10px] text-slate-400">
                      Posted on
                    </span>
                    <span className="block text-xs font-bold text-blue-700">
                      Google
                    </span>
                  </div>
                </div>

                <div className="flex gap-1" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <FiStar
                      key={starIndex}
                      aria-hidden
                      className="size-4 fill-amber-400 text-amber-500"
                    />
                  ))}
                </div>
              </div>

              <blockquote className="mt-auto font-['Inter'] text-sm leading-6 text-slate-600">
                “{testimonial.review}”
              </blockquote>

              <footer className="mt-auto border-t border-slate-100 pt-4">
                <p className="font-['Barlow_Condensed'] text-lg font-bold text-gray-900">
                  {testimonial.name}
                </p>
                {/* <p className="mt-0.5 text-xs text-slate-500">
                  {testimonial.date}  
                </p> */}
              </footer>
                </article>
              ))}
          </motion.div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          {!showAll && (
            <button
              type="button"
              onClick={showPrevious}
              disabled={isAnimating || startIndex === 0}
              aria-label="Show previous testimonials"
              className="inline-flex size-11 items-center justify-center rounded-full border border-slate-300 bg-white text-green-700 shadow-sm transition hover:border-green-600 hover:bg-green-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <FiArrowLeft aria-hidden className="size-5" />
            </button>
          )}

          <button
            type="button"
            onClick={() => setShowAll((current) => !current)}
            className="min-w-28 rounded-full border border-green-600 bg-white px-6 py-3 font-['Barlow_Condensed'] text-base font-bold uppercase tracking-wide text-green-700 transition hover:bg-green-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            {showAll ? "Show Less" : "View All"}
          </button>

          {!showAll && (
            <button
              type="button"
              onClick={showNext}
              disabled={isAnimating || startIndex === maxIndex}
              aria-label="Show next testimonials"
              className="inline-flex size-11 items-center justify-center rounded-full border border-slate-300 bg-white text-green-700 shadow-sm transition hover:border-green-600 hover:bg-green-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <FiArrowRight aria-hidden className="size-5" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
