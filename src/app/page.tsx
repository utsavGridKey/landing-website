"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LaptopScreen from "./LaptopScreen";
import MobileScreen from "./MobileScreen";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <Navbar />
      <LaptopScreen />
      <MobileScreen />
      <Footer />
    </motion.div>
  );
}
