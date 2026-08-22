"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { faqs } from "@/data/faq";
import type { FAQItem } from "@/data/faq";

interface FAQItemComponentProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItemComponent({ item, isOpen, onToggle }: FAQItemComponentProps) {
  return (
    <div
      className={cn(
        "border rounded-2xl overflow-hidden transition-all duration-300",
        isOpen
          ? "border-navy-300 shadow-md"
          : "border-navy-100 hover:border-navy-200"
      )}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-right gap-4 hover:bg-navy-50 transition-colors"
        aria-expanded={isOpen}
      >
        <span
          className={cn(
            "font-semibold text-sm leading-relaxed",
            isOpen ? "text-navy-900" : "text-navy-800"
          )}
        >
          {item.question}
        </span>
        <ChevronDown
          className={cn(
            "w-5 h-5 flex-shrink-0 text-navy-500 transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-5 pb-5 border-t border-navy-100">
              <p className="text-navy-600 text-sm leading-relaxed pt-4">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface FAQProps {
  items?: FAQItem[];
  limit?: number;
}

export default function FAQ({ items = faqs, limit }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const displayItems = limit ? items.slice(0, limit) : items;

  return (
    <div className="space-y-3">
      {displayItems.map((item) => (
        <FAQItemComponent
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          onToggle={() => setOpenId(openId === item.id ? null : item.id)}
        />
      ))}
    </div>
  );
}
