import Link from "next/link";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Stack from "@/components/Stack";
import Service from "@/components/Service";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <div id="mainSite">
      {/* HERO */}
      <Hero/>

      {/* SERVICE */}
      <Service/>

      {/* WORK */}
      <Work/>

      {/* TECH STACK */}
      <Stack/>

      {/* CONTACT */}
      <Contact/>

    </div>
  );
}
