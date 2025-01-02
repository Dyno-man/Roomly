import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="text-black justify-center col-auto">
      <h1 className="text-center">Home Page</h1>
      <Link
        href='/dashboard'>
          <span>Dashboard Home</span>
        </Link>
    </main>
  );
}
