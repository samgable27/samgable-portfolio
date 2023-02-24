import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        src="https://i.ibb.co/gRdcjs7/IMG-2261.jpg"
        className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here's a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background...
        </h4>
        <p className="text-base">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi atque,
          ad consequuntur expedita voluptatibus qui perspiciatis repellat non
          inventore quae error facere placeat. Temporibus excepturi vitae
          pariatur voluptatibus assumenda quibusdam molestiae autem molestias
          quae perspiciatis, atque dolorum deleniti velit, sed, ea eligendi
          odio. Facere rem magni non ratione numquam, est ab adipisci optio
          reiciendis quaerat tempora magnam sit dolorum molestiae delectus,
          aperiam earum vero consequatur ullam eum? Voluptatum reprehenderit
          laboriosam commodi adipisci esse dolores magnam dolorum laudantium.
          Iste placeat veritatis, quas beatae alias laborum! Quos aliquid
          accusamus eius veniam a vel labore. Porro iusto deserunt atque in,
          sunt non vel?
        </p>
      </div>
    </motion.div>
  );
}
