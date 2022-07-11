import React, { useState } from "react";
import { initMap } from "./../api/googlemap";
// import ReactMapboxGl, { Layer, Feature,
// import {Marker, Popup } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Layout from "../../components/layout";
import Head from "next/head";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../components/client";

function Index() {
  const heading = "Contact  me";
  const [viewport, setViewport] = useState({
    // width:"100%",
    // height:"100%",
    latitude: 17.722989,
    longitude: 73.408836,
    zoom: 4,
  });
  const [popup, setpopup] = useState(false);

  const handleChange=(e)=>{
    e.preventDefault()
    const contact = {
      _type:'contact',
      name:e.target.firstname.value+" "+e.target.lastname.value,
      email:e.target.email.value,
      message:e.target.message.value,
    }
    client.create(contact).then(res=>{
      console.log("Response send successfully");
    })
  }

  return (
    <Layout>
      <Head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      {/* https://github.com/sanity-io/sanity-template-nextjs-blog-comments/blob/main/template/pages/api/createComment.js */}
      <div className="flex flex-row flex-wrap">
        <div className="w-full sm:w-1/2 bg-stone-900">
          <div>
            <div className="grid min-h-screen place-items-center">
              <div className="p-6 md:px-12">
                <div className="text-teal-300 text-4xl text-bold mb-6">
                  {heading.split("").map((element, index) => {
                    return (
                      <div
                        className="inline-block text-teal-300 pr-1 font-bold text-5xl hover:animate-rubberBand"
                        key={index}
                      >
                        {element}
                      </div>
                    );
                  })}
                </div>
                <h1 className="text-xl font-semibold">
                  <span className="text-base text-white">
                    I`m interested in learning opportunities especially
                    ambitious or large projects. However, if you have other
                    request or question, don`t hesitate to use the form.
                  </span>
                </h1>
                <form className="mt-6" onSubmit={handleChange}>
                  <div className="flex justify-between gap-3">
                    <span className="w-1/2">
                      <input
                        id="firstname"
                        type="text"
                        name="firstname"
                        placeholder="Firstname"
                        autoComplete="given-name"
                        className="block w-full p-3 mt-3 text-stone-400 bg-stone-800 appearance-none focus:outline-none border-b-2 border-stone-800 focus:border-teal-300 focus:shadow-inner"
                        required
                      />
                    </span>
                    <span className="w-1/2">
                      <input
                        id="lastname"
                        type="text"
                        name="lastname"
                        placeholder="Lastname"
                        autoComplete="family-name"
                        className="block w-full p-3 mt-3 text-stone-400 bg-stone-800 appearance-none focus:outline-none border-b-2 border-stone-800 focus:border-teal-300 focus:shadow-inner"
                        required
                      />
                    </span>
                  </div>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    autoComplete="email"
                    className="block w-full p-3 mt-3 text-stone-400 bg-stone-800 appearance-none focus:outline-none border-b-2 border-stone-800 focus:border-teal-300 focus:shadow-inner"
                    required
                  />
                  <textarea
                    id="message"
                    type="text"
                    name="message"
                    placeholder="Enter your message"
                    autoComplete="message"
                    className=" block w-full p-3 mt-3 text-stone-400 bg-stone-800 appearance-none focus:outline-none border-b-2 border-stone-800 focus:border-teal-300  focus:shadow-inner"
                    required
                  />
                  <div className="flex justify-end">
                    {/* <Link href="/contact" passHref> */}
                      <button
                        className="btn2 mt-6 px-10 py-5 group relative border border-teal-300 uppercase font-semibold tracking-wider leading-none overflow-hidden"
                        type="submit"
                      >
                        <span className="absolute inset-0 bg-teal-300"></span>
                        <span className="absolute inset-0 flex justify-center items-center font-bold text-teal-300 group-hover:text-black">
                          Contact me !
                        </span>
                        <span className="text-stone-900">Contact me</span>
                      </button>
                    {/* </Link> */}
                    {/* <button
                      type="submit"
                      className="w-full py-3 mt-6 font-medium tracking-widest text-teal-300 uppercase bg-stone-900 shadow-lg focus:outline-none hover:shadow-none border-2 border-teal-300 hover:bg-teal-300 hover:text-black md:w-1/2"
                    >
                      Send Message
                    </button> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2">
          <ReactMapGL
            mapStyle="mapbox://styles/samuald/cl2jahxv6000214o6ug9u0tjx"
            mapboxAccessToken="pk.eyJ1Ijoic2FtdWFsZCIsImEiOiJjbDJqNHM4ODAwdTRmM25xdzBhNmRsMXJ0In0.B-meWuOVa7syjbJewMhbgg"
            {...viewport}
            onMove={(e) => setViewport(e.viewState)}
          >
            <Marker
              longitude={73.408836}
              latitude={17.722989}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <p className="animate-bounce text-2xl text-teal-300 cursor-pointer">
                <Image
                  src={"/marker.png"}
                  alt="marker"
                  width={"35px"}
                  height={"35"}
                  // onClick={(e)=>{
                  //   console.log(popup,"0000000000")
                  //   return setpopup(!popup)
                  // }}
                />
              </p>
            </Marker>
            {/* {popup?
            <Popup onClose={()=>setpopup(false)} closeOnClick={true} latitude={17.722989} longitude={73.408836} >
              MY Home
            </Popup>:null} */}
          </ReactMapGL>
        </div>
      </div>
    </Layout>
  );
}
export const getStaticProps = () => {
  return { props: { heading: "contact me" } };
};
export default Index;
