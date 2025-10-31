"use client";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LaptopScreen from "./LaptopScreen";
import MobileScreen from "./MobileScreen";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <LaptopScreen />
      <MobileScreen />
    </motion.div>
  );
}
