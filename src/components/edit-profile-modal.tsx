"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { Author } from "@/types";

export function EditProfileModal({ author }: { author: Author }) {
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
        <Button size="sm" type="button">
          Update
        </Button>
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
              className="fixed inset-0 z-[60] bg-[#171724]/58 backdrop-blur-[6px]"
            />
          </Dialog.Overlay>
          <Dialog.Content asChild>
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.97 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="fixed left-1/2 top-1/2 z-[70] w-[calc(100vw-1.5rem)] max-h-[calc(100vh-2rem)] max-w-[360px] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-[16px] border border-white/70 bg-white p-5 shadow-[0_30px_80px_-30px_rgba(22,16,50,0.55)] sm:max-w-[380px] sm:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <Dialog.Title className="text-[14px] font-semibold text-[#232329] sm:text-[15px]">
                  Update Profile
                </Dialog.Title>
                <Dialog.Close asChild>
                  <button
                    type="button"
                    aria-label="Close modal"
                    className="rounded-full p-2 text-[#7a7691] transition hover:bg-[#f4f1fd] hover:text-[#2f2f36] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6c4dff]/25"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </Dialog.Close>
              </div>
              <div className="mt-4 space-y-3">
                <Input defaultValue={author.name} />
                <Input defaultValue={author.location} />
                <Textarea defaultValue={author.bio} className="min-h-[100px] resize-none" />
              </div>
              <div className="mt-5 flex flex-col-reverse gap-2 sm:flex-row sm:justify-between">
                <Dialog.Close asChild>
                  <Button variant="ghost" size="sm" className="w-full sm:w-auto">
                    Cancel
                  </Button>
                </Dialog.Close>
                <Dialog.Close asChild>
                  <Button size="sm" className="w-full sm:w-auto">
                    Save Changes
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
