'use client'

import Image from "next/image";
import Link from 'next/link';
import { useState, useEffect } from 'react';
//import loginForm from '@/ui/users/loginForm';

export default function Home() {

  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/")
    .then(res => res.text())
    .then(text => setMessage(text))
    .catch(err => console.error(err))
  }, [])


  return (
    <main>
      <div className="text-xl">
        <h1 className="text-center text-2xl">Home Page</h1>
        <div className="text-blue-500">
          <Link href="/dashboard">Dashboard Home</Link>
          <p>{message}</p>
        </div>
      </div>
      <div>
      </div>
      </main>
  );
}
