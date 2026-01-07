import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex flex-col items-center gap-4 hover:scale-110 transition">
      <div
        className="flex gap-4 items-center"
      >
        <Image
          src="/images/logo.webp"
          alt="Logo"
          width={797}
          height={963}
          className="w-24"
        />
        <h1 className="text-6xl">Lobodle</h1>
      </div>
      <p className="font-gill-sans-mt text-2xl text-border">
        FACE THE ABNOS, GUESS THE FUTURE
      </p>
    </Link>
  );
}
