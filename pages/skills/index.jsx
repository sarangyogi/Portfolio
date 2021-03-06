import Layout from "./../../components/layout";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Home() {
  return (
    <Layout className="">
      <motion.div className="bg-stone-900 p-4">
        <motion.div className="border-b-2 text-center text-6xl mx-8 mb-4 text-slate-200 pb-8">
          Programming Languages
        </motion.div>
        <motion.div className="container p-4 flex flex-wrap justify-evenly">
          <svg
            viewBox="0 0 128 128"
            className="logo-react animate-logo"
            width="100px"
            height="100px"
          >
            <g fillRule="evenodd" clipRule="evenodd">
              <path
                fill="#386f9f"
                d="M51.834 23.017c3.756 0 7.512.058 11.263-.04.995-.026 2.78.797 2.7-1.271-.061-1.683-1.622-1.074-2.568-1.089-4.237-.067-8.488-.228-12.708.037-3.003.187-3.888-.953-3.511-3.707.13-.95.005-1.934.025-2.902.132-6.446 1.69-8.64 7.942-10.23 6.888-1.75 13.937-1.692 20.806-.184 6.175 1.356 8.74 6.16 8.428 10.604-.38 5.423-.086 10.893-.091 16.343-.009 6.853-3.55 10.49-10.459 10.585-5.69.078-11.387.14-17.074-.018-6.778-.19-11.75 5.44-11.784 11.82 0 .484.083.984-.013 1.451-.488 2.343 1.462 6.13-1.022 6.826-3.78 1.062-8.206 1.062-11.54-2.311-1.13-1.14-2.082-2.417-2.584-3.893-2.679-7.865-3.102-15.83-.58-23.818 1.572-4.986 5.848-8.087 11.145-8.176 3.874-.065 7.749-.013 11.623-.013l.002-.014zm6.902-11.12c-.162-1.903-1.185-3.292-3.296-3.35-2.309-.06-3.502 1.336-3.505 3.608-.002 2.106 1.145 3.455 3.241 3.516 2.303.067 3.418-1.36 3.56-3.774z"
              ></path>
              <path
                fill="#ffcf46"
                d="M80.824 61.572c-4.24 0-8.482-.037-12.722.03-.955.012-2.557-.592-2.607 1.041-.056 1.852 1.663 1.37 2.755 1.381 4.24.053 8.484.098 12.723-.02 2.178-.06 3.067.357 3.23 2.925.737 11.625-4.308 12.63-13.613 14.745-5.338 1.213-11.061.57-16.325-1.788-4.353-1.947-7.024-4.753-6.687-10.007.334-5.186.39-10.439-.009-15.62-.48-6.253 3.41-10.852 10.975-10.854 5.09-.001 10.214-.389 15.26.075 7.215.662 12.872-5.592 13.12-12.864.01-.241-.052-.5.01-.724.636-2.235-1.626-5.557 1.4-6.686 4.573-1.705 9.73.087 12.066 3.557 2.945 4.369 3.343 9.51 3.819 14.53.515 5.411-1.003 10.505-3.276 15.386-1.544 3.31-4.14 4.91-7.757 4.915-4.12.003-8.239 0-12.36 0-.002-.008-.002-.015-.002-.022zm-1.104 10.8c-.453-2.066-1.385-3.476-3.785-3.535-2.496-.06-3.14 1.807-3.127 3.474.014 1.772.508 3.952 3.21 3.748 2.246-.172 3.341-1.563 3.702-3.687z"
              ></path>
              <path
                fill="#386f9f"
                d="M14.129 114.849c0 2.582.117 5-.055 7.397-.074 1.034 1.066 2.98-1.103 2.978-1.912 0-2.403-1.522-2.342-3.361.117-3.51.034-7.027.034-10.54v-7.998c0-4.82 1.293-6.452 5.903-7.45 4.286-.932 7.654.511 9.386 4.263 1.732 3.753 1.866 7.62.133 11.438-1.708 3.762-4.854 5.166-8.884 4.051-.918-.25-1.845-.467-3.072-.778zm0-9.448c0 1.33.18 2.686-.037 3.98-.502 2.991 1.408 3.728 3.66 4.26 2.227.526 3.754-.421 4.647-2.383 1.501-3.29 1.753-6.683.613-10.162-1.012-3.092-3.349-3.454-6.077-3.07-2.694.383-3.059 2.215-2.824 4.48.1.955.018 1.93.018 2.895zM43.116 114.689c-1.845.48-3.447.992-5.087 1.3-3.59.671-6.248-1.3-7.183-4.894-1.16-4.448-.178-8.879-.148-13.317.013-2.023 1.885-1.234 3.18-2.318 0 4.75.018 8.85-.006 12.947-.013 2.058.519 3.75 2.465 4.835 2.148 1.198 3.91.057 5.78-.712 1.34-.551 1.173-1.676 1.175-2.746.01-3.872-.001-7.74.012-11.612.002-.955-.097-2.122 1.313-2.075 1.257.041 1.804.788 1.783 2.158-.091 6.407.09 12.823-.17 19.221-.197 4.838-3.61 7.793-8.52 8.01-.735.031-1.505.099-1.78-.813-.419-1.404.718-1.139 1.465-1.378 5.401-1.718 6.107-2.744 5.721-8.606zM65.94 98.064c1.429-.675 2.25-1.293 3.153-1.46 5.067-.937 8.95-.58 8.94 6.245-.007 3.515.002 7.031-.007 10.545-.002.984.061 1.942-1.406 2.027-1.547.092-1.887-.793-1.88-2.006.018-3.387.11-6.774.107-10.16-.002-2.63-.539-4.958-3.884-4.95-2.934.005-5.012 2.195-5.027 5.217a899.58 899.58 0 00.003 9.814c.003 1.162.028 2.181-1.652 2.085-1.513-.09-1.327-1.11-1.327-2.049-.01-8.6.032-17.209-.041-25.815-.013-1.508.582-2.444 1.92-2.508 1.888-.087 1.023 1.564 1.051 2.392.123 3.371.05 6.75.05 10.623zM81.93 105.775c-.191-6.715 2.994-10.3 8.76-10.092 2.894.106 5.065 1.39 6.466 3.89 2.475 4.422 2.14 8.846-.538 12.987-1.84 2.844-4.67 4.185-8.12 3.453-3.402-.72-6.066-3.783-6.548-7.353-.128-.945-.02-1.924-.02-2.885zm13.32.157c-.152-1.172-.125-2.806-.613-4.264-.667-2-1.883-3.61-4.364-3.72-2.503-.108-3.752 1.355-4.587 3.38-1.311 3.179-1.226 6.371.194 9.493.912 2.011 2.32 3.483 4.76 3.075 2.403-.401 3.821-1.976 4.312-4.313.223-1.059.187-2.168.298-3.65zM102.257 106.827c0-1.212-.023-2.422.004-3.628.056-2.325-.685-4.901 2.45-6.089 3.59-1.356 7.148-2.372 10.762-.273 1.352.786 1.85 2.214 1.864 3.73.037 4.231-.019 8.464.038 12.695.02 1.476-.368 2.214-2.027 2.174-1.818-.043-1.435-1.283-1.423-2.273.043-3.38.278-6.757.214-10.132-.084-4.25-2.416-5.983-6.389-4.94-1.648.434-2.678 1.234-2.597 3.274.161 3.982.037 7.978.052 11.967.004 1.156.021 2.18-1.647 2.083-1.528-.088-1.278-1.145-1.29-2.062-.028-2.176-.008-4.353-.011-6.526zM58.689 97.403c-.25.296-.46.76-.68.764-3.964.055-2.864 3.014-2.966 5.209-.097 2.045 0 4.1-.029 6.151-.03 2.038.147 3.932 2.627 4.473.711.154 1.035.564.887 1.274-.163.784-.788.753-1.407.745-2.85-.05-4.963-2.065-5.047-5.015-.086-3.014.031-6.035-.04-9.046-.037-1.43.706-3.255-1.6-3.822-.253-.061-.343-.778-.508-1.187 3.076-.965 1.8-3.618 2.222-5.631.2-.953 1.105-1.214 1.96-1.295.865-.082.872.618.9 1.203.114 2.32-1.087 5.425 3.184 5.256.143-.005.31.562.497.92z"
              ></path>
            </g>
          </svg>
          <svg
            viewBox="0 0 128 128"
            className="logo-react animate-logo"
            width="100px"
            height="100px"
          >
            <path
              fill="#659AD3"
              d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"
            ></path>
            <path
              fill="#03599C"
              d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"
            ></path>
            <path
              fill="#fff"
              d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"
            ></path>
          </svg>
          <svg
            viewBox="0 0 128 128"
            className="logo-react animate-logo"
            width="100px"
            height="100px"
          >
            <path
              fill="#D26383"
              d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"
            ></path>
            <path
              fill="#9C033A"
              d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"
            ></path>
            <path
              fill="#fff"
              d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"
            ></path>
            <path
              d="M82.1 61.8h5.2v-5.3h4.4v5.3H97v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4zm18.5 0h5.2v-5.3h4.4v5.3h5.3v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4z"
              fill="#fff"
            ></path>
          </svg>
        </motion.div>
      </motion.div>
      <motion.div className="bg-stone-900 p-4">
        <motion.div className="text-center text-6xl p-4 text-slate-200 pb-8 border-b-2 mx-8 mb-4">
          Web Development
        </motion.div>
        <motion.div className="container p-4 flex flex-wrap justify-around">
          <div className="w-32">
            <svg
              className="logo-react animate-logo"
              //
              //
              viewBox="0 0 236 236"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d)">
                <circle
                  cx="118"
                  cy="114"
                  r="111.5"
                  stroke="#20232A"
                  strokeWidth="5"
                />
                <circle
                  cx="118"
                  cy="114"
                  r="90.5"
                  fill="#20232A"
                  stroke="#20232A"
                />
                <path
                  className="path-react animate-logopath"
                  d="M130.601 113.804C130.601 117.287 129.218 120.627 126.756 123.091C124.293 125.554 120.954 126.939 117.471 126.94C113.987 126.94 110.645 125.556 108.182 123.093C105.718 120.629 104.334 117.288 104.334 113.804C104.334 110.321 105.717 106.98 108.18 104.517C110.642 102.054 113.982 100.669 117.465 100.667C120.949 100.667 124.29 102.051 126.754 104.515C129.217 106.978 130.601 110.32 130.601 113.804V113.804ZM146.158 51C138.251 51 127.905 56.64 117.441 66.4043C106.984 56.6929 96.632 51.1175 88.7301 51.1175C86.3214 51.1175 84.13 51.6639 82.2324 52.7507C74.1543 57.4096 72.3448 71.9267 76.516 90.1451C58.6325 95.6676 47 104.498 47 113.804C47 123.145 58.6913 131.999 76.6276 137.48C72.4916 155.769 74.3364 170.309 82.4321 174.962C84.3121 176.061 86.4859 176.578 88.9064 176.578C96.8082 176.578 107.16 170.938 117.623 161.162C128.081 170.879 138.433 176.455 146.335 176.455C148.743 176.455 150.935 175.926 152.832 174.839C160.904 170.186 162.72 155.669 158.549 137.445C176.367 131.969 188 123.121 188 113.804C188 104.462 176.309 95.6089 158.372 90.1157C162.508 71.8445 160.664 57.2921 152.568 52.6332C150.7 51.5522 148.526 51.0059 146.152 51H146.158ZM146.129 57.4037V57.439C147.451 57.439 148.514 57.6975 149.407 58.1851C153.32 60.4294 155.018 68.9657 153.696 79.9461C153.379 82.6486 152.862 85.498 152.227 88.4061C146.587 87.0196 140.442 85.9562 133.973 85.2689C130.096 79.952 126.072 75.1227 122.018 70.8927C131.371 62.1977 140.154 57.4272 146.135 57.4096L146.129 57.4037ZM88.7301 57.5212C94.6756 57.5212 103.5 62.2682 112.876 70.9162C108.846 75.1462 104.828 79.9461 101.009 85.263C94.5052 85.9504 88.3541 87.0137 82.72 88.4237C82.062 85.545 81.5744 82.7602 81.2278 80.0812C79.8765 69.1067 81.545 60.5762 85.4225 58.3026C86.5387 57.7739 87.7725 57.5565 88.7301 57.5271V57.5212ZM117.412 75.44C120.085 78.1895 122.758 81.268 125.402 84.6285C122.817 84.511 120.173 84.4287 117.5 84.4287C114.797 84.4287 112.124 84.4875 109.51 84.6285C112.095 81.268 114.768 78.1895 117.412 75.4341V75.44ZM117.5 90.8677C121.848 90.8677 126.177 91.0675 130.437 91.4141C132.822 94.8334 135.149 98.4817 137.387 102.342C139.572 106.102 141.558 109.92 143.368 113.774C141.558 117.622 139.572 121.471 137.416 125.231C135.184 129.108 132.875 132.798 130.484 136.217C126.207 136.587 121.871 136.793 117.5 136.793C113.152 136.793 108.823 136.587 104.563 136.246C102.178 132.827 99.8515 129.173 97.6131 125.319C95.4276 121.559 93.4419 117.74 91.6324 113.886C93.4125 110.026 95.4276 106.172 97.5837 102.406C99.8162 98.5287 102.125 94.851 104.516 91.4317C108.793 91.0557 113.129 90.856 117.5 90.856V90.8677ZM96.1444 92.36C94.7344 94.5749 93.3244 96.8426 92.0084 99.175C90.6865 101.466 89.4528 103.769 88.2778 106.072C86.7209 102.218 85.399 98.376 84.3062 94.6336C88.0662 93.7524 92.0319 92.971 96.1444 92.3659V92.36ZM138.797 92.36C142.88 92.9651 146.816 93.7112 150.582 94.6336C149.525 98.3466 148.203 102.165 146.705 105.99C145.53 103.699 144.296 101.39 142.945 99.0927C141.623 96.7897 140.213 94.5455 138.803 92.36H138.797ZM156.792 96.3256C159.635 97.2069 162.338 98.188 164.87 99.2514C175.046 103.599 181.626 109.286 181.626 113.798C181.596 118.31 175.016 124.02 164.841 128.338C162.373 129.396 159.671 130.348 156.88 131.235C155.235 125.607 153.085 119.743 150.418 113.727C153.061 107.752 155.176 101.919 156.792 96.3139V96.3256ZM78.0964 96.3491C79.7296 101.989 81.8858 107.846 84.5589 113.857C81.9151 119.831 79.7884 125.665 78.1786 131.27C75.3351 130.389 72.6326 129.402 70.1299 128.333C59.9544 124.003 53.3744 118.31 53.3744 113.798C53.3744 109.286 59.9544 103.564 70.1299 99.2514C72.5974 98.1939 75.2999 97.2421 78.0964 96.3491V96.3491ZM146.705 121.494C148.262 125.354 149.583 129.202 150.676 132.939C146.916 133.861 142.945 134.642 138.832 135.23C140.242 133.027 141.652 130.753 142.974 128.427C144.296 126.135 145.53 123.797 146.711 121.494H146.705ZM88.2778 121.612C89.4528 123.915 90.6865 126.212 92.0377 128.515C93.389 130.806 94.7696 133.05 96.1796 135.23C92.0965 134.631 88.1602 133.879 84.3944 132.962C85.4519 129.261 86.7796 125.43 88.2719 121.606L88.2778 121.612ZM152.28 139.16C152.938 142.057 153.455 144.847 153.772 147.52C155.123 158.495 153.455 167.025 149.577 169.305C148.714 169.834 147.592 170.057 146.27 170.057C140.324 170.057 131.5 165.316 122.124 156.662C126.154 152.432 130.172 147.638 133.991 142.327C140.495 141.634 146.646 140.564 152.28 139.154V139.16ZM82.7788 139.219C88.4188 140.594 94.564 141.657 101.032 142.344C104.91 147.661 108.934 152.491 112.988 156.715C103.617 165.427 94.8225 170.198 88.8418 170.198C87.5493 170.168 86.4565 169.904 85.5929 169.422C81.6801 167.19 79.9823 158.648 81.3041 147.667C81.6214 144.965 82.1384 142.121 82.7729 139.219H82.7788ZM109.569 142.979C112.154 143.096 114.797 143.179 117.471 143.179C120.173 143.179 122.846 143.12 125.461 142.979C122.876 146.339 120.203 149.412 117.559 152.173C114.886 149.412 112.212 146.339 109.569 142.979Z"
                  fill="#61DAFB"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d"
                  x="0"
                  y="0"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="w-32">
            <svg
              className="logo-javascript animate-logo"
              //
              //
              viewBox="0 0 236 236"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d)">
                <circle
                  cx="118"
                  cy="114"
                  r="111.5"
                  stroke="#F7DF1E"
                  strokeWidth="5"
                />
                <circle cx="118" cy="114" r="91" fill="#F7DF1E" />
                <path
                  className="path-javascript animate-logopath"
                  d="M143.266 108.676C154.281 113.145 157.995 117.937 158.906 123.64L158.667 123.291C159.531 128.213 158.432 131.416 158.281 131.885C154.214 145.791 131.557 146.26 122.495 137.114C120.62 134.926 119.37 133.838 118.276 131.338L127.807 125.864C130.385 129.77 132.724 131.885 136.948 132.822C142.656 133.525 148.437 131.572 147.187 125.478C145.859 120.473 135.464 119.306 128.354 113.994C121.167 109.15 119.453 97.4315 125.391 90.7075C127.422 88.2075 130.776 86.3325 134.297 85.4732L137.969 85.0096C145.078 84.8482 149.448 86.7232 152.729 90.395C153.677 91.3273 154.374 92.2704 155.781 94.4579C152.026 96.7961 152.026 96.7963 146.641 100.317C145.464 97.8169 143.589 96.2544 141.557 95.6294C138.432 94.6919 134.448 95.7023 133.667 99.0669C133.359 100.083 133.432 101.02 133.906 102.739C135.172 105.629 139.432 106.879 143.266 108.676Z"
                  fill="#252525"
                />
                <path
                  className="path-javascript animate-logopath"
                  d="M100.411 85.9055H112.12L112.099 86.1971C112.099 96.9784 112.161 107.681 112.099 118.379C112.125 125.025 112.687 130.963 110.031 135.806C108.193 139.556 104.677 141.978 100.599 143.155C94.3333 144.562 88.349 143.702 83.8958 141.046C80.9063 139.249 78.5885 136.426 77 133.145L86.5052 127.286C86.5938 127.286 86.8385 127.76 87.1666 128.306C88.3802 130.333 89.4271 131.739 91.4896 132.76C93.5 133.39 97.9271 133.848 99.6458 130.26C100.693 128.447 100.365 122.557 100.365 116.14C100.365 106.03 100.411 95.9992 100.411 85.9055Z"
                  fill="#252525"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d"
                  x="0"
                  y="0"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="w-32">
            <svg
              className="logo-nextjs animate-logo"
              viewBox="0 0 236 236"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d)">
                <circle cx="118" cy="114" r="91" fill="black" />
                <circle
                  cx="118"
                  cy="114"
                  r="111.5"
                  stroke="black"
                  strokeWidth="5"
                />
                <path
                  className="path-nextjs animate-logopath"
                  d="M79.2627 68.6146V140.131C79.9539 141.472 80.475 141.825 81.5549 141.965H88.8899L90.7237 140.131V87.4106C115.685 124.279 130.056 144.664 156.739 180.244L162.698 176.118C133.538 132.93 105.37 91.4998 88.8899 66.7809H81.5549L79.2627 68.6146Z"
                  fill="white"
                />
                <path
                  className="path-nextjs animate-logopath"
                  d="M146.424 66.7809V130.045L135.88 113.542V66.7809C135.87 65.4358 136.371 64.9052 137.943 64.2595H143.673C145.408 64.8569 145.795 65.5349 146.424 66.7809Z"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d"
                  x="0"
                  y="0"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="w-32">
            <svg
              className="logo-figma animate-logo"
              viewBox="0 0 236 236"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d)">
                <circle
                  cx="118"
                  cy="114"
                  r="111.5"
                  stroke="#F24E1E"
                  strokeWidth="5"
                />
                <circle
                  cx="118"
                  cy="114"
                  r="90.5"
                  fill="#F24E1E"
                  stroke="#F24E1E"
                />
                <path
                  className="animate-logopath"
                  d="M136.933 99.1566H114.385V55H136.933C149.102 55 159 64.9022 159 77.0758C159 89.2495 149.102 99.1566 136.933 99.1566ZM121.615 91.9242H136.933C145.116 91.9242 151.771 85.2621 151.771 77.0807C151.771 68.8994 145.111 62.2373 136.933 62.2373H121.615V91.9242ZM121.615 99.1566H99.0714C86.9029 99.1566 77.0049 89.2544 77.0049 77.0807C77.0049 64.9071 86.9029 55 99.0714 55H121.62V99.1566H121.615ZM99.0714 62.2324C90.8886 62.2324 84.2343 68.8945 84.2343 77.0758C84.2343 85.2572 90.8886 91.9242 99.0714 91.9242H114.39V62.2324H99.0714ZM121.615 136.076H99.0714C86.9029 136.076 77.0049 126.174 77.0049 114C77.0049 101.826 86.9029 91.9242 99.0714 91.9242H121.62V136.076H121.615ZM99.0714 99.1566C90.8886 99.1566 84.2343 105.819 84.2343 114C84.2343 122.181 90.8936 128.843 99.0714 128.843H114.39V99.1566H99.0714ZM99.1894 173C86.957 173 77 163.098 77 150.924C77 138.75 86.898 128.848 99.0665 128.848H121.615V150.683C121.615 162.99 111.555 173 99.1894 173ZM99.0714 136.076C95.138 136.081 91.3671 137.647 88.5857 140.429C85.8043 143.212 84.2395 146.984 84.2343 150.919C84.2343 159.105 90.9427 165.763 99.1943 165.763C107.574 165.763 114.395 158.997 114.395 150.678V136.076H99.0714ZM136.933 136.076H136.452C124.283 136.076 114.385 126.174 114.385 114C114.385 101.826 124.283 91.9242 136.452 91.9242H136.933C149.102 91.9242 159 101.826 159 114C159 126.174 149.102 136.076 136.933 136.076ZM136.457 99.1566C128.274 99.1566 121.62 105.819 121.62 114C121.62 122.181 128.279 128.843 136.457 128.843H136.938C145.121 128.843 151.776 122.181 151.776 114C151.776 105.819 145.116 99.1566 136.938 99.1566H136.457Z"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d"
                  x="0"
                  y="0"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="w-32">
            <svg
              className="logo-typescript animate-logo fill-transparent"
              viewBox="0 0 236 236"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d)">
                <circle
                  cx="118"
                  cy="114"
                  r="111.5"
                  stroke="#007ACC"
                  strokeWidth="5"
                />
                <circle
                  cx="118"
                  cy="114"
                  r="90.5"
                  fill="#007ACC"
                  stroke="#007ACC"
                />
                <path
                  className="path-typescript animate-logopath"
                  d="M161.166 74.0008C165.749 74.0008 169.808 74.268 173.349 74.8023C176.69 75.2849 179.968 76.1079 183.129 77.2573V95.0058C181.612 93.994 180 93.1213 178.314 92.3991C176.575 91.6448 174.781 91.0172 172.945 90.5217C169.468 89.5873 165.877 89.1017 162.267 89.0776C160.021 89.0776 157.976 89.2798 156.134 89.6986C154.493 90.0372 152.918 90.6271 151.469 91.446C150.196 92.1969 149.223 93.0995 148.527 94.1465C147.826 95.2018 147.462 96.4318 147.478 97.6847C147.478 99.0999 147.875 100.378 148.646 101.504C149.425 102.631 150.533 103.699 151.964 104.71C153.394 105.721 155.131 106.703 157.175 107.671C159.219 108.646 161.533 109.649 164.109 110.675C167.629 112.097 170.788 113.613 173.589 115.209C176.389 116.812 178.793 118.625 180.8 120.646C182.807 122.661 184.334 124.964 185.398 127.557C186.461 130.149 187 133.16 187 136.604C187 141.348 186.064 145.341 184.207 148.562C182.393 151.738 179.789 154.43 176.629 156.396C173.223 158.478 169.449 159.937 165.494 160.7C161.256 161.566 156.786 161.999 152.091 161.999C147.47 162.019 142.857 161.622 138.313 160.815C134.381 160.159 130.568 158.96 126.991 157.255V138.265C133.759 143.818 142.344 146.887 151.23 146.93C153.723 146.93 155.902 146.713 157.759 146.28C159.624 145.847 161.174 145.24 162.424 144.475C163.667 143.695 164.596 142.785 165.217 141.731C165.904 140.503 166.217 139.114 166.119 137.722C166.021 136.33 165.516 134.994 164.663 133.868C163.551 132.448 162.19 131.226 160.642 130.257C158.723 129.03 156.702 127.958 154.599 127.051C152.108 125.954 149.594 124.904 147.059 123.903C140.185 121.137 135.063 117.751 131.686 113.758C128.316 109.765 126.624 104.934 126.624 99.2804C126.624 94.8469 127.545 91.0416 129.387 87.8573C131.229 84.673 133.73 82.0519 136.905 79.994C140.263 77.8577 143.991 76.3194 147.913 75.4522C152.255 74.4648 156.704 73.9776 161.166 74.0008ZM48 75.3583H119.608V90.9983H93.909V160.649H73.5641V90.9983H48V75.3583Z"
                  fill="#E8E8E8"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d"
                  x="0"
                  y="0"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="w-32">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.0"
              width="100.000000pt"
              height="100.000000pt"
              viewBox="0 0 718.000000 709.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,709.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path d="M3210 7060 c-266 -31 -413 -62 -535 -110 -135 -54 -156 -60 -204 -66 -75 -10 -178 -44 -306 -101 -397 -179 -772 -445 -1083 -770 -68 -70 -129 -135 -135 -143 -7 -8 -28 -35 -47 -60 -19 -25 -39 -53 -45 -62 -44 -75 -128 -186 -152 -201 -75 -49 -276 -402 -389 -684 -125 -310 -182 -542 -235 -948 -19 -149 -17 -625 4 -795 52 -411 102 -598 238 -877 55 -112 99 -210 99 -218 0 -28 97 -219 132 -260 19 -22 52 -67 73 -100 73 -115 119 -174 228 -289 27 -28 58 -68 69 -90 11 -21 38 -62 61 -90 23 -29 83 -104 133 -167 221 -276 655 -583 1099 -777 118 -51 434 -155 555 -181 116 -26 262 -46 435 -62 228 -20 1030 14 1079 47 12 7 73 25 136 38 153 33 198 50 240 90 22 22 56 40 94 51 33 9 73 27 90 40 39 28 129 62 220 81 38 8 77 20 86 27 8 7 47 28 85 47 39 19 79 42 90 51 11 9 38 22 60 29 22 7 57 23 77 36 21 13 43 24 51 24 7 0 21 6 32 14 11 7 31 17 45 21 14 4 39 18 55 29 17 12 43 28 59 36 15 8 41 33 57 56 15 23 44 49 63 58 19 9 38 21 41 26 4 6 23 17 43 26 48 20 304 274 440 437 299 359 562 835 621 1122 10 50 28 112 40 137 11 26 21 54 21 62 0 9 12 50 26 93 18 55 28 114 34 203 5 69 18 163 30 210 12 47 26 146 32 220 11 150 4 467 -13 605 -12 94 -85 408 -114 485 -9 25 -23 68 -30 95 -14 54 -32 109 -45 140 -5 11 -14 38 -20 60 -36 125 -249 564 -358 740 -17 28 -42 70 -56 95 -13 25 -34 54 -46 65 -12 11 -34 40 -48 65 -47 81 -107 153 -217 259 -114 109 -160 149 -200 169 -23 11 -59 40 -80 63 -59 64 -133 133 -193 181 -29 24 -88 72 -130 108 -106 89 -154 126 -193 148 -19 10 -76 42 -127 71 -207 117 -464 217 -631 246 -46 8 -89 19 -95 24 -6 4 -29 11 -52 15 -23 3 -65 17 -95 30 -179 81 -819 122 -1199 76z m-732 -2166 c228 -36 418 -138 582 -311 108 -114 161 -193 236 -352 31 -65 43 -98 83 -226 34 -107 75 -420 69 -525 l-3 -55 -989 -3 -989 -2 6 -114 c14 -252 102 -452 258 -586 147 -126 333 -189 559 -190 221 0 390 62 529 194 68 65 98 113 131 206 l26 75 207 3 c183 2 208 1 214 -14 9 -24 -46 -199 -89 -283 -132 -257 -364 -437 -673 -521 -190 -51 -555 -51 -740 1 -203 57 -363 147 -501 284 -96 95 -156 178 -218 302 -170 338 -216 845 -110 1214 141 490 512 833 984 908 93 15 322 12 428 -5z m1824 -126 c53 -79 141 -208 196 -288 54 -80 154 -226 222 -325 67 -99 128 -186 134 -193 12 -13 42 24 180 222 64 92 422 596 468 659 l50 67 269 0 c148 0 269 -3 269 -6 0 -4 -159 -219 -352 -477 -299 -399 -411 -549 -535 -716 -10 -13 -26 -35 -35 -50 l-17 -26 114 -160 c63 -88 133 -187 157 -219 24 -32 61 -85 83 -116 22 -32 135 -189 250 -349 116 -161 228 -317 250 -349 22 -31 77 -108 123 -171 45 -62 80 -116 78 -120 -2 -3 -133 -4 -292 -1 l-287 5 -133 195 c-73 107 -139 205 -146 217 -54 90 -476 706 -483 705 -9 0 -240 -329 -265 -377 -6 -11 -120 -182 -254 -380 l-243 -360 -269 -5 c-148 -3 -272 -3 -276 0 -4 3 15 37 42 75 28 39 85 119 128 178 42 60 84 119 92 131 8 11 42 59 75 104 33 46 67 94 75 105 8 12 126 178 261 368 136 190 270 378 297 418 l51 73 -64 87 c-35 47 -72 97 -82 111 -10 14 -81 111 -158 215 -77 105 -148 201 -157 215 -9 14 -87 120 -172 235 -86 116 -162 219 -170 230 -8 11 -44 60 -80 110 -36 49 -66 93 -66 97 0 4 130 8 288 8 l288 0 96 -142z" />
                <path d="M2090 4515 c-239 -38 -429 -182 -534 -406 -49 -106 -77 -200 -79 -274 l-2 -50 753 -3 752 -2 0 30 c0 16 -9 68 -20 116 -77 327 -320 553 -641 593 -101 13 -120 13 -229 -4z" />
              </g>
            </svg>
          </div>
          <div className="w-32">
            <svg viewBox="0 0 128 128" className="logo-react animate-logo">
              <path
                d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
                fill="#38b2ac"
              ></path>
            </svg>
          </div>
          <div className="w-32">
            <svg viewBox="0 0 128 128" className="logo-react animate-logo">
              <path
                fill="#83CD29"
                d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"
              ></path>
            </svg>
          </div>
        </motion.div>
      </motion.div>
      <motion.div className="bg-stone-900 p-4">
        <motion.div className="text-center text-6xl p-4 text-slate-200 pb-8 border-b-2 mx-8 mb-4">
          Developer Tools
        </motion.div>
        <motion.div className="container p-4 flex flex-wrap justify-evenly">
          <svg
            viewBox="0 0 128 128"
            className="logo-react animate-logo"
            width="100px"
            height="100px"
          >
            <path
              fill="#F34F29"
              d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z"
            ></path>
          </svg>

          <svg
            viewBox="0 0 128 128"
            className="logo-react animate-logo"
            width="100px"
            height="100px"
          >
            <defs>
              <linearGradient
                id="jira-original-a"
                gradientUnits="userSpaceOnUse"
                x1="22.034"
                y1="9.773"
                x2="17.118"
                y2="14.842"
                gradientTransform="scale(4)"
              >
                <stop offset=".176" stopColor="#0052cc"></stop>
                <stop offset="1" stopColor="#2684ff"></stop>
              </linearGradient>
              <linearGradient
                id="jira-original-b"
                gradientUnits="userSpaceOnUse"
                x1="16.641"
                y1="15.564"
                x2="10.957"
                y2="21.094"
                gradientTransform="scale(4)"
              >
                <stop offset=".176" stopColor="#0052cc"></stop>
                <stop offset="1" stopColor="#2684ff"></stop>
              </linearGradient>
            </defs>
            <path
              d="M108.023 16H61.805c0 11.52 9.324 20.848 20.847 20.848h8.5v8.226c0 11.52 9.328 20.848 20.848 20.848V19.977A3.98 3.98 0 00108.023 16zm0 0"
              fill="#2684ff"
            ></path>
            <path
              d="M85.121 39.04H38.902c0 11.519 9.325 20.847 20.844 20.847h8.504v8.226c0 11.52 9.328 20.848 20.848 20.848V43.016a3.983 3.983 0 00-3.977-3.977zm0 0"
              fill="url(#jira-original-a)"
            ></path>
            <path
              d="M62.219 62.078H16c0 11.524 9.324 20.848 20.848 20.848h8.5v8.23c0 11.52 9.328 20.844 20.847 20.844V66.059a3.984 3.984 0 00-3.976-3.98zm0 0"
              fill="url(#jira-original-b)"
            ></path>
          </svg>
          <svg
            width="100"
            height="100"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.403013 37.3991L26.6009 63.597C13.2225 61.3356 2.66442 50.7775 0.403013 37.3991Z"
              fill="#5E6AD2"
            ></path>
            <path
              d="M0 30.2868L33.7132 64C35.7182 63.8929 37.6742 63.6013 39.5645 63.142L0.85799 24.4355C0.398679 26.3259 0.10713 28.2818 0 30.2868Z"
              fill="#5E6AD2"
            ></path>
            <path
              d="M2.53593 19.4042L44.5958 61.4641C46.1277 60.8066 47.598 60.0331 48.9956 59.1546L4.84543 15.0044C3.96691 16.402 3.19339 17.8723 2.53593 19.4042Z"
              fill="#5E6AD2"
            ></path>
            <path
              d="M7.69501 11.1447C13.5677 4.32093 22.2677 0 31.9769 0C49.6628 0 64 14.3372 64 32.0231C64 41.7323 59.6791 50.4323 52.8553 56.305L7.69501 11.1447Z"
              fill="#5E6AD2"
            ></path>
          </svg>
        </motion.div>
      </motion.div>
    </Layout>
  );
}
