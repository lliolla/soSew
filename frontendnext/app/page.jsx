"use client"; // pour utiliser les hooks de react

import Link from "next/link";
import Footer from './components/Footer'
import Header from './components/Header'

export default function Home() {
  return (
    <main>
    <Header/>
      <Link className="link link-primary" href="/auth">Loging</Link>
      <Link className="link link-primary" href="/dashboard">dashboard</Link>
    <Footer/>
    </main>
  );
}
