import {  highvolt, lineman, mano, mprlogo, perumal, pradeep, prasanna, rakesh, two } from "../assets/images";
import { facebook,twitter,instagram } from "../assets/icons";
 
export const navLink=[{label:"Home",href:"/"},{label:"About Us",href:"/about"},{label:"Work",href:"/work"},{label:"Testimonial",href:"/testimonial"},{label:"Team",href:"/team"},{label:"Contact",href:"/contact"},];

export const services = [
    {
        imgURL:highvolt,
        label: "High voltage",
        subtext: "MPR POWER TECH engineering , high voltage & low voltage systems that distributes power where is needed, safely andreliably, while providing optimal protection for personnel and equipment."
    },
    {
        imgURL:two,
        label: "Plumbing",
        subtext: "Works puts lots of emphasis to ensure that every plumbing system installed isequipped Well sized and securely connected pipes, drainsfittings, values with valve assemblies and devices for theproper distribution of water."
    },
    {
        imgURL:lineman,
        label: "MECHANICAL",
        subtext: "We install, maintain and repair climate-control systems in homes, schools, hospital, factories, offices, laboratories thermal comfort and maintaining good indoor air quality areour main purpose."
    },
];

export const footerLinks = [
    {
        title: "Services",
        links: [
            { name: "Electrical", link: "/" },
            { name: "PLUMBING", link: "/" },
            { name: "Mechanical", link: "/" },
            { name: "FIRE FIGHTING", link: "/" },
            { name: "FACILITY MANAGEMENT", link: "/" },
            { name: "BULIDING MAINTENANCE SERVICE", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How we work", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "mprpowertech@gmail.com", link: "mailto:mprpowettech@gmail.com" },{ name: "+91-9994202384", link: "tel:+919994202384" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
export const reviews = [
    {
        imgURL:mprlogo,
        customerName: 'Meenambigai M',
        rating:"Owner & Founder",
        feedback: "Head of MPR POWER TECH"
    },
    {
        imgURL:mano,
        customerName: 'Mano K',
        rating:"25+ years of experience",
        feedback: "CEO & ELECTRICAL SPECIALIST",
        link:"https://www.linkedin.com/in/mano-k-189891279/"
    },
    {
        imgURL:perumal,
        customerName: 'Perumal K',
        rating:"20+ years of experience",
        feedback: "Head Electrician",
        link:"https://www.linkedin.com/in/mano-k-189891279/"
    },
    {
        imgURL:mprlogo,
        customerName: 'Ariv Arasu R',
        rating:"20+ years of experience",
        feedback: "Electrian ",
        link:"https://www.linkedin.com/in/mano-k-189891279/"
    },
    {
        imgURL:mprlogo,
        customerName: 'Billa ',
        rating:"10+ years of experience",
        feedback: "Electrian & Driver",
        link:"https://www.linkedin.com/in/mano-k-189891279/"
    },
    {
        imgURL:mprlogo,
        customerName: 'Douglas K',
        rating:"7+ years of experience",
        feedback: "Material Handler Expert ",
        link:"https://www.linkedin.com/in/mano-k-189891279/"
    },
    {
        imgURL:pradeep,
        customerName: 'Pradeep Kumar M',
        rating:"5+ years of experience",
        feedback: "Civil Engineer ",
        link:"https://www.linkedin.com/in/mano-k-189891279/"
    },
    {
        imgURL:prasanna,
        customerName: 'Prasanna Kumar M',
        rating:"5+ years of experience",
        feedback: "Electrical Engineer ",
        link:"https://www.linkedin.com/in/m-prasanna-kumar-b4b125178/"
    },
    // {
        // imgURL:rakesh,
        // customerName: 'Rakesh M',
        // rating:"WEB DEVELOPER",
        // feedback: "Agricultural&Irrigation Engineer",
        // link:"https://www.linkedin.com/in/rakesh-m-b67121217/"
    // },
];

