import React from "react";
import Navbar from "./navbar";
import { motion } from "framer-motion";

function Layout(props) {
  return <div className={`w-full ${props.className}`}>{props.children}</div>;
}

export default Layout;
