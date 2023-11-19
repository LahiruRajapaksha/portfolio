import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import homeMe from "../../assets/home-me.png";
import homeBackground from "../../assets/autumBg1.png";

type LandingProps = {
  selectedPage: string;
};

const Landing = (props: LandingProps) => {
  const { selectedPage } = props;
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center h-full gap-16 py-10 bg-homeBg bg-cover"
    >
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-32">
        {isAboveMediumScreens ? (
          <motion.div
            initial={{ y: 30, opacity: 1, scale: 1, rotate: 3 }}
            animate={{ y: -30, opacity: 1, scale: 1, rotate: -3 }}
            transition={{
              duration: 3,
              delay: 0.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <img
              alt="home-image"
              src={homeMe}
              className="w-full max-w-[300px] md:max-w-[300px] lg:max-w-[400px] xxl:max-w-[400px]"
            />
          </motion.div>
        ) : (
          <motion.div
            initial={{ y: 20, opacity: 1, scale: 1, rotate: 3 }}
            animate={{ y: -20, opacity: 1, scale: 1, rotate: -3 }}
            transition={{
              duration: 4,
              delay: 0.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <img
              alt="home-image"
              src={homeMe}
              className="w-full max-w-[300px] md:max-w-[300px] lg:max-w-[400px] 2xl:max-w-[500px]"
            />
          </motion.div>
        )}
      </div>
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: {
              opacity: 0,
              x: -50,
            },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            hi
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
