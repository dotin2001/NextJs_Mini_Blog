"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import type { Article } from "@/types";
import { ArticleCard } from "@/components/article-card";
import { Button } from "@/components/ui/button";

export function ArticlePreviewModal({ article }: { article: Article }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <div
          role="button"
          tabIndex={0}
          className="cursor-pointer rounded-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6c4dff]/25"
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setOpen(true);
            }
          }}
        >
          <ArticleCard
            article={article}
            action={
              <Button
                size="sm"
                type="button"
                className="relative z-10"
                onClick={(event) => {
                  event.stopPropagation();
                  setOpen(true);
                }}
              >
                Read more
              </Button>
            }
          />
        </div>
      </Dialog.Trigger>
      <AnimatePresence>
        {open ? (
          <Dialog.Portal forceMount>
          <Dialog.Overlay asChild>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="fixed inset-0 z-40 bg-[#171724]/58 backdrop-blur-[6px]"
            />
          </Dialog.Overlay>
          <Dialog.Content asChild>
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="fixed left-1/2 top-1/2 z-50 w-[calc(100vw-1.5rem)] max-w-[460px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[16px] border border-white/70 bg-white p-5 shadow-[0_30px_80px_-30px_rgba(22,16,50,0.55)] sm:w-[92vw] sm:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <Dialog.Title className="text-[16px] font-semibold leading-6 text-[#232329] sm:text-[17px]">
                    {article.title}
                  </Dialog.Title>
                  <p className="mt-2 text-[11px] leading-6 text-[#6f6b7c] sm:text-[12px]">
                    {article.excerpt}
                  </p>
                </div>
                <Dialog.Close asChild>
                  <button
                    type="button"
                    aria-label="Close modal"
                    className="shrink-0 rounded-full p-2 text-[#7a7691] transition hover:bg-[#f4f1fd] hover:text-[#2f2f36] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6c4dff]/25"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </Dialog.Close>
              </div>
              <div className="mt-5 max-h-[min(50vh,340px)] space-y-4 overflow-y-auto border-t border-[#f1eef7] pt-4 pr-1">
                {article.body.slice(0, 2).map((paragraph, index) => (
                  <p key={index} className="text-[11px] leading-6 text-[#6f6b7c] sm:text-[12px]">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
                <Dialog.Close asChild>
                  <Button variant="outline" size="sm" className="w-full sm:w-auto">
                    Close
                  </Button>
                </Dialog.Close>
              </div>
            </motion.div>
          </Dialog.Content>
          </Dialog.Portal>
        ) : null}
      </AnimatePresence>
    </Dialog.Root>
  );
}
