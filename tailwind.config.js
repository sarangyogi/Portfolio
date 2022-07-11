module.exports = {
  content: ["./pages/**/*.{js,jsx}","./components/*.{js,jsx}"],
  theme: {
    // colors:{
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   blackstone:'#0c0c0c',
    // },
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        rubberBand:{
          '0%':{
              transform: 'scale3d(1,1,1)'
          },
          '15%':{
              transform: 'scale3d(1.20,.95,1)'
          },
          '40%':{
              transform: 'scale3d(1.5,0.75,1)'
          },
          '65%':{
              transform: 'scale3d(1,1.35,1)'
          },
          '85%':{
            transform: 'scale3d(1.1,1,1)'
          },
          '90%':{
            transform: 'scale3d(1.25,.85,1)'
          },
          '100%':{
              transform: 'scale3d(1,1,1)'
          }
        },
        bounce:{
         ' 0%' :{
            transform: 'scaleX(1)'
          },
          
          '30%' :{
              transform: 'scale3d(1.25,.75,1)'
          },
          
          '40%' :{
              transform: 'scale3d(.75,1.25,1)'
          },
          
          '50%' :{
              transform: 'scale3d(1.15,.85,1)'
          },
          
          '65%' :{
              transform: 'scale3d(.95,1.05,1)'
          },
          
          '75%' :{
              transform: 'scale3d(1.05,.95,1)'
          },
          
        ' to' :{ 
              transform: 'scaleX(1)'
          },
        },
        pulse:{
        '  0% ':{
            transform: 'scale3d(1, 1, 1)'
        },
    
       ' 50% ':{
            transform: 'scale3d(1.05, 1.05, 1.05)'
        },
    
        '100% ':{
            transform: 'scale3d(1, 1, 1)'
        },
        },
        logopath:{
          "0%" :{
            fill: "#f4f4f4",
          },
          "25%" :{
            fill: "transparent",
          },
          "60%" :{
             fill: "#ddd",
          },
          "100%" :{
            fill: "#fff",
          }
        },
        logo:{
         " 0% ":{
            "stroke-width":" 3",
            "stroke-dasharray": "0 100",
            "stroke-dashoffset": "100",
          },
          "25% ":{
            "stroke-width": 15,
            "stroke-dasharray": "100 0",
            "stroke-dashoffset": "150",
          },
          "35% ":{
            "stroke-width": 15,
            "stroke-dasharray": "150 0",
            "stroke-dashoffset": "150",
          },
          
          "50% ":{
            "stroke-width": 60,
            "stroke-dasharray": "200 0",
            "stroke-dashoffset": "200",
          },
          "60% ":{
            "stroke-dasharray":" 0 200",
            "stroke-dashoffset": 200,
            "stroke-width":" 45",
          },
          "85% ":{
            "stroke-width": 25,
            "stroke-dasharray": "350 0",
            "stroke-dashoffset": "350",
          },
          "100% ":{
            "stroke-dasharray": "450 0",
            "stroke-dashoffset": 450,
            "stroke-width": "0",
          },
        }
      },
      
      animation: {
        wiggle: 'wiggle 2s ease-in-out infinite',
        rubberBand:'rubberBand .7s',
        bounce:'bounce 1s',
        pulse:'pulse 1s',
        logopath:'logopath 7s',
        logo:'logo 6s ease infinite alternate'
      }
    },
  },
  plugins: [require('@tailwindcss/typography'),require('tailwind-scrollbar')],
}
