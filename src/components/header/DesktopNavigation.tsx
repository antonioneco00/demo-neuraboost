import { Link } from "@/i18n/navigation";
import { getTypedMessages } from "@/lib/messages";
import { PopoverGroup } from "@headlessui/react";

export default async function DesktopNavigation() {
  const { home, about, contact, programs } = (await getTypedMessages())
    .components.header;

  return (
    <PopoverGroup className="hidden lg:flex lg:gap-x-12">
      <Link
        href="/"
        className="text-md hover:text-blue-400 font-semibold transition-colors duration-500"
      >
        {home}
      </Link>
      <Link
        href="/about"
        className="text-md hover:text-blue-400 font-semibold transition-colors duration-500"
      >
        {about}
      </Link>
      <Link
        href="/contact"
        className="text-md hover:text-blue-400 font-semibold transition-colors duration-500"
      >
        {contact}
      </Link>
      {/* Cambiar por enlace a si no se necesita otra página */}
      {/* <a
        href="#contact"
        className="text-md hover:text-blue-400 font-semibold transition-colors duration-500"
        >
        {contact}
        </a> */}
      <Link
        href="/programs"
        className="text-md hover:text-blue-400 font-semibold transition-colors duration-500"
      >
        {programs}
      </Link>
    </PopoverGroup>
  );
}
