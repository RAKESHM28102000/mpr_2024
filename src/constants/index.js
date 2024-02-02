import {  mano, one, perumal, pradeep, prasanna, three, two } from "../assets/images";
import { facebook,twitter,instagram } from "../assets/icons";
 
export const navLink=[{label:"Home",href:"#home"},{label:"About Us",href:"#about"},{label:"Work",href:"#work"},{label:"Testimonial",href:"#testimonial"},{label:"Contact",href:"#contact"},];
export const services = [
    {
        imgURL:one,
        label: "High voltage",
        subtext: "MPR POWER TECH engineering , high voltage & low voltage systems that distributes power where is needed, safely andreliably, while providing optimal protection for personnel and equipment."
    },
    {
        imgURL:two,
        label: "Plumbing",
        subtext: "Works puts lots of emphasis to ensure that every plumbing system installed isequipped Well sized and securely connected pipes, drainsfittings, values with valve assemblies and devices for theproper distribution of water."
    },
    {
        imgURL:three,
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
        imgURL:mano,
        customerName: 'Mano K',
        rating:"27 years of experience",
        feedback: "Owner"
    },
    {
        imgURL:perumal,
        customerName: 'Perumal K',
        rating:"More than 20 years experience",
        feedback: "Head Electrician"
    },
    {
        imgURL:prasanna,
        customerName: 'Prasanna Kumar M',
        rating:"MEP Engineer",
        feedback: "Electrical Engineer "
    },
    {
        imgURL:pradeep,
        customerName: 'Pradeep Kumar M',
        rating:"more 5 years of experience",
        feedback: "Civil Engineer "
    },
    // {
        // imgURL:rakesh,
        // customerName: 'Rakesh M',
        // rating:"CEO",
        // feedback: "Head of Organisation"
    // }
];

