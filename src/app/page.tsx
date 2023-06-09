"use client";
import Image from "next/image";
import Navbar from "./components/NavBar";
import Section from "./components/HeroSection";
import ParticlesComponent from "./components/Particles";

export default function Home() {
  return (
    <>
      <ParticlesComponent />
      <div className="container mx-auto">
        <Navbar />
        <Section />
      </div>
    </>
  );
}
