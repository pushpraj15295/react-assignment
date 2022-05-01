import navbar from "../components/navbar";

// import {navbar} from "../components/navbar"

// for CSS
import '../styles/navbar.css';

let navbar_div=document.getElementById("navbar")
    navbar_div.innerHTML = navbar();

// console.log("navbar:",navbar)
