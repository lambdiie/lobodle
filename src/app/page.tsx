import Link from "next/link";
import Button from "@/components/button";

export default function Home() {
  return (
    <div>
      <Link href="/classic">
        <Button>Classic</Button>
      </Link>
      <Link href="/endless">
        <Button>Endless</Button>
      </Link>
    </div>
  );
}
