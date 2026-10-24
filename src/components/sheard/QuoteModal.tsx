"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { FiX } from "react-icons/fi";
import QuoteForm, { QuoteFormData } from "./QuoteForm";

// ----------------------------------------------------
// 1. Direct Modal Component Props
// ----------------------------------------------------
export interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMake?: string;
  initialPart?: string;
  title?: string;
  badge?: string;
  description?: string;
  onSubmit?: (data: QuoteFormData) => void;
}

export function QuoteModal({
  isOpen,
  onClose,
  initialMake,
  initialPart,
  title,
  badge,
  description,
  onSubmit,
}: QuoteModalProps) {
  const lenis = useLenis();

  // Lock body scroll and pause Lenis when modal is open
  useEffect(() => {
    if (isOpen) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      lenis?.start();
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen, lenis]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          data-lenis-prevent
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
        >
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Card (compact size as requested: "coto modal hobe") */}
          <motion.div
            data-lenis-prevent
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl my-auto"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close quote modal"
              className="absolute right-3 top-3 z-20 inline-flex size-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-600 cursor-pointer"
            >
              <FiX className="size-5" />
            </button>

            {/* Quote Form wrapped inside modal container */}
            <div data-lenis-prevent className="max-h-[85vh] overflow-y-auto p-1 sm:p-2 overscroll-contain">
              <QuoteForm
                title={title}
                badge={badge}
                description={description}
                initialMake={initialMake}
                initialPart={initialPart}
                onSubmit={(data) => {
                  onSubmit?.(data);
                }}
                className="border-none shadow-none"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

// ----------------------------------------------------
// 2. Global Context & Provider for easy usage anywhere
// ----------------------------------------------------
interface QuoteModalContextType {
  isOpen: boolean;
  openModal: () => void;
  openModalWithSelection: (options: { make?: string; part?: string }) => void;
  closeModal: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextType | undefined>(
  undefined
);

export function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialSelection, setInitialSelection] = useState<{
    make?: string;
    part?: string;
  }>({});

  const openModal = () => {
    setInitialSelection({});
    setIsOpen(true);
  };
  const openModalWithSelection = (options: {
    make?: string;
    part?: string;
  }) => {
    setInitialSelection(options);
    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);

  return (
    <QuoteModalContext.Provider
      value={{ isOpen, openModal, openModalWithSelection, closeModal }}
    >
      {children}
      <QuoteModal
        isOpen={isOpen}
        onClose={closeModal}
        initialMake={initialSelection.make}
        initialPart={initialSelection.part}
      />
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error("useQuoteModal must be used within a QuoteModalProvider");
  }
  return context;
}

export default QuoteModal;
