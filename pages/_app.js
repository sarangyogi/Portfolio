import "../styles/globals.css";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="flex w-full flex-col min-h-screen bg-stone-900 sm:flex-row">
        <motion.div
          className="bg-gray-900 z-50 h-full mr-16"
          // whileInView={{width:'5%'}}
        >
          <Navbar />
        </motion.div>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
