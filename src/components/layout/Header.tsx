import Link from "next/link";
import Container from "../Container";

export default function Header() {
  return (
    <header>
        <Container>
            <div className="h-20 flex items-center">
                <Link href={'/'} className="text-white uppercase tracking-[2px]">OSTW</Link>
            </div>
        </Container>
    </header>
  )
}
