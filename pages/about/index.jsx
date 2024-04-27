import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Layout from "../../components/layout";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Cloud = dynamic(() => import("./TagCloud"), {
  ssr: false,
});
function About(props) {
  const heading = "Me , Myself  &  I";
  const particlesInit = async (main) => {

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
    <Layout>
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
      <div className="flex flex-row flex-wrap">
        <div className="w-full md:w-1/2 bg-stone-900">
          <div>
            <div className="grid min-h-screen place-items-center">
              <div className="p-6 md:px-12">
                <div className="text-teal-300 text-bold mb-6">
                  {heading.split("").map((element, index) => {
                    return (
                      <div
                        className="inline-block text-teal-300 pr-1 font-bold text-7xl hover:animate-bounce"
                        key={index}
                      >
                        {element}
                      </div>
                    );
                  })}
                </div>
                <div className="font-semibold">
                  <h1 className="text-4xl text-white mb-4">
                    Hi, I&apos;m Sarang.
                  </h1>
                  <div className="text-base text-white mb-4 md:text-xl">
                    And as you already might have guessed, I&apos;m a developer,
                    designer and programming enthusiast. Currently I&apos;m a Software Developer 
                    at Barclays.
                  </div>
                  <div className="text-base text-white md:text-xl">
                    I design and code beautifully simple things, and I love what
                    I do. I&apos;ve always been someone who can think creatively
                    as well as logically.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-stone-900 md:w-1/2">
          <Cloud />
        </div>
      </div>
    </Layout>
  );
}
export default About;
