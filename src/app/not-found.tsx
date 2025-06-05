import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="relative min-h-[calc(100vh-64px)] flex items-center justify-center pt-16 overflow-hidden">
      <Image
        src="/404.jpg"
        alt="Fondo"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        priority
      />

      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10 text-center px-4 max-w-md mx-auto">
        <h1 className="text-7xl font-extrabold text-white mb-6 drop-shadow-lg">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 drop-shadow-md">
          Página no encontrada
        </h2>
        <p className="text-white mb-8 drop-shadow-sm">
          Lo sentimos, la página que buscas no existe o fue movida.
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md shadow-lg transition"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
