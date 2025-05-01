import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { getTypedMessages } from "@/lib/messages";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

export default async function FooterWithDetails({
  locale,
}: {
  locale: string;
}) {
  const {
    links,
    about,
    contact,
    pricing,
    programs,
    terms,
    info,
    street,
    city,
    country,
    phone,
    email,
    copyright,
  } = (await getTypedMessages()).components.footer;
  const { introduction } = (await getTypedMessages()).home;

  return (
    <section>
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <div className="-mx-4 flex flex-wrap justify-between">
          <div className="w-full px-4 sm:w-1/2 lg:w-1/3">
            <div className="mb-6 mx-auto text-center sm:mx-0 sm:text-left max-w-[360px]">
              <Link
                href="/"
                className="mb-4 sm:mb-8 inline-flex items-center w-fit"
              >
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={32}
                  height={32}
                  className="size-9"
                />
              </Link>
              <p className="mb-4 sm:mb-8 text-base text-gray-400 leading-relaxed">
                {introduction}
              </p>
              <div className="flex justify-center sm:justify-start mt-4 space-x-6">
                <a href="#" className="text-gray-400 hover:text-blue-500">
                  <span className="sr-only">Facebook</span>
                  <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-500">
                  <span className="sr-only">Instagram</span>
                  <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-500">
                  <span className="sr-only">Twitter</span>
                  <FontAwesomeIcon icon={faXTwitter} className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-500">
                  <span className="sr-only">YouTube</span>
                  <FontAwesomeIcon icon={faYoutube} className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 lg:w-1/3 text-center">
            <div className="mb-2">
              <h2 className="mb-4 text-xl font-bold">{links}</h2>
              <ul>
                <li>
                  <Link
                    href="/about"
                    className="mb-4 inline-block text-base duration-300 hover:text-blue-400"
                  >
                    {about}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/programs"
                    className="mb-4 inline-block text-base duration-300 hover:text-blue-400"
                  >
                    {programs}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#pricing"
                    className="mb-4 inline-block text-base duration-300 hover:text-blue-400"
                  >
                    {pricing}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="mb-4 inline-block text-base duration-300 hover:text-blue-400"
                  >
                    {contact}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="mb-4 inline-block text-base duration-300 hover:text-blue-400"
                  >
                    {terms}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/3 text-center">
            <div className="mb-2">
              <h2 className="mb-4 text-xl font-bold">{info}</h2>
              <ul className="flex flex-col w-fit mx-auto text-left">
                <li className="flex items-center space-x-2 mb-4">
                  <MapPinIcon className="w-6" />
                  <span className="inline-block text-base">
                    {street}
                    <br />
                    {city}
                    {locale === "es" ? ", " : <br />}
                    {country}
                  </span>
                </li>
                <li className="flex items-center space-x-2 mb-4">
                  <PhoneIcon className="w-6" />
                  <span className="inline-block text-base duration-300 hover:text-blue-400">
                    <a
                      href={
                        locale === "es" ? `tel:+34${phone}` : `tel:+1${phone}`
                      }
                    >
                      {phone}
                    </a>
                  </span>
                </li>
                <li className="flex items-center space-x-2 mb-4">
                  <EnvelopeIcon className="w-6" />
                  <span className="inline-block text-base duration-300 hover:text-blue-400">
                    <a href={`mailto:${email}`}>{email}</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          {copyright}
        </p>
      </div>
    </section>
  );
}
