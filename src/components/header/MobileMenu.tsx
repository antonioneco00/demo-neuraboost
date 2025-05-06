"use client";

import { Link } from "@/i18n/navigation";
import { MobileMenuProps } from "@/types";
import { Messages } from "@/types/messages";
import { Dialog, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useMessages } from "next-intl";
import Image from "next/image";

export default function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  const { home, about, programs, blog, contact } = (useMessages() as Messages)
    .components.header;

  return (
    <Dialog open={isOpen} onClose={setIsOpen} className="lg:hidden">
      <div className="fixed inset-0 z-10" />
      <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5 flex items-center">
            <Image
              alt=""
              src="/logo.png"
              width={32}
              height={32}
              className="size-9"
            />
          </a>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon aria-hidden="true" className="size-6 text-foreground" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <Link
                href="/"
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {home}
              </Link>
              <Link
                href="/about"
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {about}
              </Link>
              <Link
                href="/programs"
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {programs}
              </Link>
              <Link
                href="/blog"
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {blog}
              </Link>
              <Link
                href="/contact"
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {contact}
              </Link>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );
}
