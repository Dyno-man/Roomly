import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
      <div className="text-xl">
        <h1 className="text-center text-2xl">Home Page</h1>
        <div className="text-blue-500">
          <Link href="/dashboard">Dashboard Home</Link>
        </div>
        <div>
        </div>
      </div>
  );
}
