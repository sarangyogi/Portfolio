import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "./../components/layout";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import Link from "next/link";
import { loadFull } from "tsparticles";
export default function Home() {
  const heading = ["Hi !", "I'm   Sarang ,", "Full   stack   developer"];
  const particlesInit = async (main) => {

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
  return (
    <Layout className="bg-stone-900 h-full">
      <Particles
        id="tsparticles"
        className="z-10"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "rgb(28 25 23 / var(--tw-bg-opacity))",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.1,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 50,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="">
        <Head>
          <title>Sarang Yogi</title>
          <meta name="description" content="Student at Sardar Patel Institute of Technology" />
          <meta name="google-site-verification" content="OW31sKP9pViaPn-7Foim5xHb4XFA8O56w64uhhWdG4M" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <article className="mx-10 p-6">
          <motion.div className="py-6">
            {heading.map((name, index) => (
              <motion.div key={index} className="leading-10 mr-4">
                {name.split("").map((element, index) => {
                  return (
                    <div
                      className={`inline-block ${
                        element === "F" ||
                        element === "S" ||
                        // element === "I" ||
                        element === "H"
                          ? "text-rose-600"
                          : "text-white"
                      } pr-1 font-black text-7xl hover:animate-rubberBand hover:text-teal-300`}
                      key={index}
                    >
                      {element}
                    </div>
                  );
                })}
              </motion.div>
            ))}
          </motion.div>
          <motion.div className="text-stone-400 text-xl leading-9">
            I enjoy the creativity and difficulties that come with dissecting
            complex problems into smaller answers in order to develop beautiful,
            effective products. I write modular, adaptable code that can
            withstand the test of time long beyond my last keystroke because I
            pay rigorous attention to detail. I&apos;m constantly looking for
            new challenges and ways to expand my horizons. In my quest to make
            an impact on the world, I&apos;m adamant that I&apos;ll increase my
            technological literacy and immerse myself in the vibrant programming
            community. I&apos;m passionate about helping people grow and
            learning from them. My capacity to inspire, educate, empathise, and
            increase productivity can result in measurable outcomes for a team.
          </motion.div>
          <Link href="/contact" passHref>
            <motion.button
              className="btn2 mt-6 px-10 py-5 group relative border border-teal-300 uppercase font-semibold tracking-wider leading-none overflow-hidden"
              type="button"
            >
              <span className="absolute inset-0 bg-teal-300"></span>
              <span className="absolute inset-0 flex justify-center items-center font-bold text-teal-300 group-hover:text-black">
                Contact me !
              </span>
              <span className="text-black">Contact me</span>
            </motion.button>
          </Link>
        </article>
      </div>
    </Layout>
  );
}
