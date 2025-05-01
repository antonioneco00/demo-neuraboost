import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { getTypedMessages } from "@/lib/messages";

export default async function Footer() {
  const { about, contact, pricing, programs, terms, copyright } = (
    await getTypedMessages()
  ).components.footer;

  return (
    <footer>
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          <div className="px-5 py-2">
            <a
              href="#about"
              className="text-base leading-6 text-gray-500 hover:text-blue-900"
            >
              {about}
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="#programs"
              className="text-base leading-6 text-gray-500 hover:text-blue-900"
            >
              {programs}
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="#pricing"
              className="text-base leading-6 text-gray-500 hover:text-blue-900"
            >
              {pricing}
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="#contact"
              className="text-base leading-6 text-gray-500 hover:text-blue-900"
            >
              {contact}
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="#"
              className="text-base leading-6 text-gray-500 hover:text-blue-900"
            >
              {terms}
            </a>
          </div>
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
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
            <span className="sr-only">GitHub</span>
            <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
          </a>
        </div>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          {copyright}
        </p>
      </div>
    </footer>
  );
}
