import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { getTypedMessages } from "@/lib/messages";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

export default async function Footer() {
  const { links, index, about, programs, blog, contact, follow, copyright } = (
    await getTypedMessages()
  ).components.footer;

  return (
    <footer className="bg-linear-120 from-background to-blue-50 dark:to-blue-950 pt-20 pb-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-4/12 2xl:w-5/12 px-4">
            <div className="mb-6">
              <Link
                href="/"
                className="flex w-fit items-center hover:text-blue-400 mb-6 transition-colors duration-500"
              >
                <Image
                  alt=""
                  src="/logo.png"
                  width={32}
                  height={32}
                  className="size-9"
                />
                <h1 className="text-xl font-semibold ml-2">NeuraBoost</h1>
              </Link>
              <p className="text-base text-gray-500 font-medium">{copyright}</p>
            </div>
          </div>
          <div className="w-full md:w-8/12 lg:w-5/12 2xl:w-5/12 px-4">
            <div className="mb-6 mt-4">
              <h3 className="font-medium text-xl mb-4">{links}</h3>
              <div className="flex flex-wrap items-center">
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-blue-500 font-medium mr-8 transition-colors duration-500"
                >
                  {index}
                </a>
                <Link
                  href="/about"
                  className="text-base text-gray-500 hover:text-blue-500 font-medium mr-8 transition-colors duration-500"
                >
                  {about}
                </Link>
                <Link
                  href="/programs"
                  className="text-base text-gray-500 hover:text-blue-500 font-medium mr-8 transition-colors duration-500"
                >
                  {programs}
                </Link>
                <Link
                  href="/blog"
                  className="text-base text-gray-500 hover:text-blue-500 font-medium mr-8 transition-colors duration-500"
                >
                  {blog}
                </Link>
                <Link
                  href="/contact"
                  className="text-base text-gray-500 hover:text-blue-500 font-medium transition-colors duration-500"
                >
                  {contact}
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-4/12 lg:w-3/12 2xl:w-2/12 px-4">
            <div className="mb-6 mt-4">
              <h3 className="font-medium text-xl mb-4">{follow}</h3>
              <div className="flex flex-wrap items-center gap-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-500"
                >
                  <span className="sr-only">Facebook</span>
                  <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-500"
                >
                  <span className="sr-only">Twitter</span>
                  <FontAwesomeIcon icon={faXTwitter} className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-500"
                >
                  <span className="sr-only">YouTube</span>
                  <FontAwesomeIcon icon={faYoutube} className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-500"
                >
                  <span className="sr-only">LinkedIn</span>
                  <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
