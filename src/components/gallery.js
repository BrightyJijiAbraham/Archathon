import React, { useEffect } from 'react'
import './home.css'
import Scripts from './scripts'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import img2 from '../img/xlogo.png.pagespeed.ic.3zPSnGSrom.png'

function Gallery() {


    const particlesInit = async (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (

        <div>
            {/* <div id="preloder">
        <div className="loader"></div>
    </div> */}

            <Scripts />
            <div id="particles-js"></div>
            <header>
                <div className="header__warp">
                    <div className="row">
                        <div className="col-lg-2">
                            <a href="index-2.html" className="site__logo">
                                <img src={img2} alt="" />
                            </a>
                        </div>
                        <nav className="navbar">
                            <div className="max-width">
                                <ul className="menu">
                                    <li><a href="#home" className="menu-btn">Home</a></li>
                                    <li><a href="#about" className="menu-btn">About Us</a></li>
                                    <li><a href="#sign" className="menu-btn">Sign in</a></li>
                                    <li><a href="#Catogery" className="menu-btn">Catogery</a></li>
                                    <li><a href="#gallery.html" className="menu-btn">Gallery</a></li>
                                    <li><a href="#contact.html" className="menu-btn">Contact us</a></li>
                                </ul>
                                <div className="menu-btn" onClick={() => {
                                    document.querySelector('.navbar .menu').classList.toggle('active');
                                    document.querySelector('.menu-btn i').classList.toggle('active');
                                }}>
                                    <i className="fas fa-cog fa-spin"></i>
                                </div>

                            </div>
                        </nav>
                        <div className="col-lg-8">
                            <ul className="main__menu">
                                <li><a href="index.html" className="menu--active">Home</a></li>
                                <li><a href="about.html">About</a></li>
                                <li><a href="Catogery.html">Catogery</a></li>
                                <li><a href="gallery.html">Gallery</a></li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 text-lg-right d-none d-lg-block">
                            <a href="#" className="site__btn">Login</a>
                        </div>
                    </div>
                </div>

            </header>



            {/* PARTICLE JS */}

            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 3,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />
        </div>

    )
}

export default Gallery