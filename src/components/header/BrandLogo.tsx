import { Link } from "@/i18n/navigation";
import Image from "next/image";

export default async function BrandLogo() {

  return (
    <div className="flex lg:flex-1">
      <Link
        href="/"
        className="flex items-center hover:text-blue-400 transition-colors duration-500"
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
    </div>
  );
}
