import Image from "next/image";

export default function BackgroundImage() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="relative sm:h-[85vh] h-[70vh]"> {/* Cambiar 70vh, 85vh o lg:h-screen por el valor que convenga según el diseño */}
        <Image
          src="/hero-image.jpg"
          alt="Background Image"
          fill
          className="object-cover object-[center_100%]" // Cambiar 100% o center por el valor que convenga según la imagen
          priority
        />

        {/* Overlay oscuro con blur */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-xs" />
      </div>
    </div>
  );
}
