import Image from "next/image";
import React, { useState } from "react";
import BlogContent from "@sanity/block-content-to-react";
import { getProjects } from "../../components/client";
import { urlFor } from "../../components/client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import Layout from "../../components/layout";

const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
};
const Portfolio = ({ data }) => {
  const initialState = {};
  data.map((project, index) => {
    initialState[project.title] = false;
    return;
  });
  const [isOn, setIsOn] = useState(initialState);
  const toggleSwitch = (e, key) => {
    return setIsOn({ ...isOn, [key]: !isOn[key] });
  };
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };
  return (
    <Layout>
      <div className="w-full bg-stone-900 h-full p-8">
        <motion.div className="flex flex-row flex-wrap justify-center gap-5">
          {data.map((project, index) => {
            return (
              <motion.div
                key={project.title}
                className="h-[350px] w-[400px] group relative scroll-auto scrollbar-thin scrollbar-thumb-stone-700 scrollbar-track-stone-900 group-hover:backdrop-brightness-50"
                whileInView={{
                  backgroundImage: `url(${urlFor(project.image.asset._ref)})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className="group-hover:bg-black h-full w-[400px] py-4">
                  <motion.div className="text-white text-4xl text-center font-bold flex justify-center items-center h-full group-hover:hidden">
                    {project.title}
                  </motion.div>
                  <motion.div className="prose w-full my-2 text-xl h-full text-teal-300 hidden group-hover:flex flex-col justify-center items-center content-center">
                    <BlogContent
                      blocks={project.description}
                      serializers={serializers}
                    />
                    <div className="bg-black">
                      <Link
                        href={project.gitHubLink ? project.gitHubLink : ""}
                        target="_blank"
                        passHref
                      >
                        <motion.button
                          className="bg-rose-300 text-stone-800 p-2 rounded-l-lg"
                          whileHover={{
                            color: "#fda4af",
                            backgroundColor: "#1c1917",
                          }}
                          transition={{ duration: 1 }}
                        >
                          Github
                        </motion.button>
                      </Link>
                      <Link 
                      href={project.liveLink ? project.liveLink : ""}
                      target="_blank"
                      passHref
                      >
                      <motion.button
                        className="bg-teal-300 text-black p-2 rounded-r-lg"
                        whileHover={{
                          color: "#81e6d9",
                          backgroundColor: "#1c1917",
                        }}
                        transition={{ duration: 1 }}
                      >
                        Live
                      </motion.button>
                      </Link>
                    </div>
                  </motion.div>
                </div>
                {/* {
                  description?
                (<div className="prose text-xl text-teal-300">
                  <BlogContent
                    blocks={project.description}
                    serializers={serializers}
                  />
                </div>):null
                } */}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Layout>
  );
};
export const getStaticProps = async () => {
  const projects = await getProjects();
  return {
    props: {
      data: projects,
    },
  };
};
export default Portfolio;
