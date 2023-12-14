import { motion } from "framer-motion";
import { useRef } from "react";
import ScrollBar from "../components/ScrollBar.astro";
import ajlPhoto from "../assets/images/adam-levoy.png";
import shopify from "../assets/logos/shopify.png";
import googleAds from "../assets/logos/google-ads.png";
import googleAnalytics from "../assets/logos/google-analytics.png";
import gorgias from "../assets/logos/gorgias.png";
import klaviyo from "../assets/logos/klaviyo.png";
import shipbob from "../assets/logos/shipbob.png";

export default function Hero() {
  const constraintRef = useRef(null);

  return (
    <section className="max-w-[1200px] mx-auto px-4 h-screen">
      <div className="grid md:grid-cols-2">
        <div className="text-left flex items-center">
          <h1 className="ff-heading text-6xl inline">
            <span>Ahoy, I'm </span>
            <span className="text-gradient">Adam</span>
            <br></br>
            <span className="ff-subheading text-5xl">
              Shopify Expert Brand Founder Growth Marketer
            </span>
          </h1>
        </div>
        <motion.div
          ref={constraintRef}
          className="relative flex justify-center"
        >
          <div className="rounded-full bg-black">
            <img src={ajlPhoto.src} alt="adam levoy" className="rounded-full" />
          </div>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            drag
            dragConstraints={constraintRef}
            src={shopify.src}
            alt="shopify logo"
            className="absolute top-12 left-12 w-12 shadow-xl"
          />
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            drag
            dragConstraints={constraintRef}
            src={googleAds.src}
            alt="google ads logo"
            className="absolute top-40 left-24 w-12 shadow-xl"
          />
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            drag
            dragConstraints={constraintRef}
            src={gorgias.src}
            alt="gorgias logo"
            className="absolute top-20 right-20 w-16 shadow-xl"
          />
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            drag
            dragConstraints={constraintRef}
            src={googleAnalytics.src}
            alt="google analytics logo"
            className="absolute top-40 right-40 w-14 shadow-xl"
          />
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            drag
            dragConstraints={constraintRef}
            src={shipbob.src}
            alt="shipbob logo"
            className="absolute top-60 right-12 w-10 shadow-xl"
          />
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            drag
            dragConstraints={constraintRef}
            src={klaviyo.src}
            alt="klaviyo logo"
            className="absolute top-60 left-12 w-12 shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
