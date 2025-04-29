import BrandLogo from "@/components/header/BrandLogo";
import DesktopNavigation from "@/components/header/DesktopNavigation";
import HeaderActions from "@/components/header/HeaderActions";

export default function Header() {
  return (
    <header className="sticky w-full bg-background/60 top-0 z-10 backdrop-blur-md"> {/* Si hay blobs de fondo, eliminar bg-background/60 */}
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <BrandLogo />
        <DesktopNavigation />
        <HeaderActions />
      </nav>
    </header>
  );
}
