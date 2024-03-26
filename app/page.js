"use client"
import { Flex, Text, Button, Box } from "@radix-ui/themes";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import EmailSection from "@/components/email";
import Handshake from "@/components/handshake";
import Review from "@/components/review";
import Vison from "@/components/vision";
import Footer from "@/components/footer";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <EmailSection />
      <Handshake />
      <Review />
      <Vison />
      <Footer />
    </>
  );
}
