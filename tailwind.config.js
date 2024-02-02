/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      keyframes: {
        rightoleft: {
        "from": { transform: "translateX(-300px)" },
        "to": { transform: "translateX(0)"},
               },
        lefttoright: {
                "from": { transform: "translateX(300px)" },
                "to": { transform: "translateX(0)"},
                       },
        righttoleftinfinite:{
          "from":{transform:"translateX(2000px)"},
          "to":{transform:"translateX(-2000px)"}
        }
             },
        animation: {
             rightoleft: "rightoleft 2s ease-in-out ",
             lefttoright: "lefttoright 2s ease-in-out  ",
             righttoleftinfinite:"righttoleftinfinite 20s linear  infinite alternate "
                        },
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary': "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'hero': "url('assets/images/img1.jpg')",
        'card': "url('assets/images/img3.jpg')",
        'one': "url('assets/images/1.jpg')",
        'two': "url('assets/images/2.jpg')",
        'three': "url('assets/images/3.jpg')",
        'four': "url('assets/images/4.jpg')",
        'five': "url('assets/images/5.jpg')",
        'six': "url('assets/images/6.jpg')",
        'seven': "url('assets/images/7.jpg')",
        'eight': "url('assets/images/8.jpg')",
        'nine': "url('assets/images/9.jpg')",
        'ten': "url('assets/images/10.jpg')",
        'work1':"url('assets/images/work-1.jpg')",
        'work2':"url('assets/images/work-2.jpg')",
        'work3':"url('assets/images/work-3.jpg')",
        'work4':"url('assets/images/work-4.jpg')",
        'work5':"url('assets/images/work-5.jpg')",
        'work6':"url('assets/images/work-6.jpg')",
        'work7':"url('assets/images/work-7.jpg')",
        'work8':"url('assets/images/work-8.jpg')",
        'work9':"url('assets/images/work-9.jpg')",
        'work10':"url('assets/images/work-10.jpg')",
        'work11':"url('assets/images/work-11.jpg')",
        'work12':"url('assets/images/work-12.jpg')",
        'work13':"url('assets/images/work-13.jpg')",
        'work14':"url('assets/images/work-14.jpg')",
        'work15':"url('assets/images/work-15.jpg')",
        'work16':"url('assets/images/work-16.jpg')",
        'work17':"url('assets/images/work-17.jpg')",
        'work18':"url('assets/images/work-18.jpg')",
        'work19':"url('assets/images/work-19.jpg')",
        'work20':"url('assets/images/work-20.jpg')",
        't1':"url('assets/images/transform-3.jpg')",
        't2':"url('assets/images/transformer-4.jpg')",
        't3':"url('assets/images/transformer1.jpg')",
        't4':"url('assets/images/transformer2.jpg')",
        'w1':"url('assets/images/weilding1.jpg')",
        'w2':"url('assets/images/weilding2.jpg')",
        'h1':"url('assets/images/highvoltage1.jpg')",
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}
