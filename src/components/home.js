import React, { useEffect } from 'react'
import './home.css'
import img1 from '../img/members/30.jpg'
import img2 from '../img/xlogo.png.pagespeed.ic.3zPSnGSrom.png'
import img3 from '../img/members/3.jpg'
import img4 from '../img/members/18.jpg'
import img5 from '../img/members/8.jpg'
import img6 from '../img/members/26.jpg'
import img7 from '../img/members/30.jpg'
import img8 from '../img/members/14.jpg'
import img9 from '../img/members/16.jpg'
import img10 from '../img/members/17.jpg'
import img11 from '../img/members/13.jpg'
import img12 from '../img/members/18.jpg'
import Scripts from './scripts'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


function Home() {


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
                                    <li><a href="#Catogery" className="menu-btn">Category</a></li>
                                    <li><a href="#gallery" className="menu-btn">Gallery</a></li>
                                    <li><a href="#contact" className="menu-btn">Contact us</a></li>
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
                                <li><a href="Catogery.html">Category</a></li>
                                <li><a href="gallery">Gallery</a></li>
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
            <section className="hero__section set-bg" data-setbg="img/hero-bg.png">
                <div className="container text-white">
                    <div className="hero__slider owl-carousel">

                        <div className="hero__items">
                            <span>DISCOVER</span>
                            <h2>CULTURAL NFTs</h2>
                            <p>Live monitor all NFT contracts being minted on Ethereum so you can see a real-time feed of NFT
                                mints</p>
                        </div>
                        <div className="hero__items">
                            <span>COLLECT</span>
                            <h2>CULTURAL NFTs</h2>
                            <p>All you need to do to buy an NFT is connect your crypto wallet, such as Trust Wallet, and then
                                purchase the NFT you want</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about__section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={img3} alt="" />
                        </div>
                        <div className="col-lg-6">
                            <div className="about__text">
                                <span>ABOUT US</span>
                                <h2>JUST NEFT IT</h2>
                                <p>At 𝘼𝙍𝙏𝘧𝘰𝘭𝘪𝘰, we're excited about a brand new type of digital good called a non-fungible token, or NFT. NFTs have exciting new properties: they’re unique, provably scarce, tradeable, and usable across multiple applications. Just like physical goods, you can do whatever you want with them! You could throw them in the trash, gift them to a friend across the world, or go sell them on an open marketplace. But unlike physical goods, they're armed with all the programmability of digital goods.

                                    A core part of our vision is that open protocols like Ethereum and interoperable standards like ERC-721 and ERC-1155 will enable vibrant new economies. We're building tools that allow consumers to trade their items freely, creators to launch new digital works, and developers to build rich, integrated marketplaces for their digital items.

                                    <br /> We’re proud to be the first and largest marketplace for NFTs.</p>
                                <a href="#" className="site__btn">Contact us</a>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="discography__section set-bg" data-setbg='' >
                    <div className="container" style={{ paddingTop: 50}}>
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="section-title">
                                    <div className="sub-title">THIS WEEK's DROP</div>

                                </div>
                            </div>
                            <div className="col-lg-4 text-left text-lg-right pt-2">
                                <a href="#" className="site__btn mb-5">Buy on OpenSea</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="album__card">
                                    <img src={img4} alt="" />
                                    <h4>Manjusha Painting</h4>
                                    <p>Painting</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="album__card">
                                    <img src={img5} alt="" />
                                    <h4>Chhau</h4>
                                    <p>Dance</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="album__card">
                                    <img src={img6} alt="" />
                                    <h4>Naga Art</h4>
                                    <p>Sculpture</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="album__card">
                                    <img src={img7} alt="" />
                                    <h4>Patta Chitra</h4>
                                    <p>Painting</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </section>

            <section className="player__section">
                <div className="container-fluid player-one-style p-0">
                    <div id="jquery_jplayer_2" className="jp-jplayer"></div>
                    <div id="jp_container_2" className="jp-audio" role="application" aria-label="media player">
                        <div className="jp-type-playlist">
                            <div className="row m-0">
                                <div className="col-lg-6 p-0">
                                    <div className="player_left" id="player__thumb">
                                        <div className="player_left_inner">
                                            <div className="row">
                                                <div className="col-lg-5 col-sm-4">
                                                    <div className="track-info">
                                                        <h5>Garba Dance</h5>
                                                        <p>Gujarat | India</p>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6  p-0 player_right" >
                                    <div className="player_right">
                                        <div className="section-title">
                                            <div className="sub-title">OUR TRENDING COLLECTIONS</div>
                                            <h2>The NFT marketplace with everything for everyone</h2>
                                        </div>
                                        <div className="about__text" style={{ paddingTop: 20, paddingLeft: 50, paddingRight: 20 }}>
                                            <span>Mural Art</span>
                                            <p>A mural is any piece of graphic artwork that is painted or applied directly to a wall, ceiling or other permanent substrate. Mural techniques include fresco, mosaic, graffiti and marouflage.</p>
                                        </div>
                                        <div className="about__text" style={{ paddingTop: 0, paddingLeft: 50, paddingRight: 20 }}>
                                            <span>Phag Dance</span>
                                            <p>Faag or Phaag dance is a popular folk dance form of Haryana. This folk dance is performed by the agricultural community of Haryana. Phag dance is celebrated primarily in the months of February and March. These months fall in Falgun month in the Hindu calendar, which has lent its name to the dance.</p>
                                        </div>
                                        <div className="about__text" style={{ paddingTop: 0, paddingLeft: 50, paddingRight: 20, paddingBottom: 20 }}>
                                            <span>Naga Art</span>
                                            <p>The artwork is purely a result of an inspiring feature in Buddhism. Naga is a Sanskrit word, which means a serpent or sneak. It is one of many mythical divine beings in the Buddhist tradition. Nagas have a magical power that able them to transform themselves into a human appearance.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="video__section set-bg" data-setbg="img/video-overlay.png">

                <div className="container">
                    <div className="section-title text-center pb-3">
                        <div className="sub-title">Our Exclusives</div>
                        <h2>Investers NFTs</h2>
                    </div>

                    <div className="about__page__text">
                        <div cclassNamelass="section-title">
                            <div className="sub-title" style={{ color: "#e934ff" }}>About Investers NFTs</div>
                            <h2 style={{ color: 'white' }}>What is Investers NFTs ?</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <p>Its the most exclusive,intresting and beneficial product of an initiative.
                                    It is an Investment instrument that can be used as an Investment tool to make a regular revenue with a single investment.
                                    You will be benefited from your Investment on th NFT paid.</p>
                            </div>
                            <div className="col-lg-6">
                                <p>You will be getting a 2-3% of returns per month to your NFTs.
                                    We will reinvest the shares into a stable coins were we will be able to produce a regular revenue. </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="shows__section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="section-title">
                                <div className="sub-title">Upcoming NFTs</div>
                                <h2>NEXT FRESH THING</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 text-left text-lg-right pt-2 mb-5">
                            <a href="#" className="site__btn">View all </a>
                        </div>
                    </div>
                    <div className="show__item">
                        <div className="show__date">
                            <h2>25</h2>
                            <p>aug</p>
                        </div>
                        <div className="show__title">
                            <h4>Thol Pavakoothu</h4>
                            <p>Tholpavakoothu is a form of shadow puppetry that is practiced in Kerala, Tamil Nadu, India. It is performed using leather puppets and is performed in temples or in villages in specially built theatres </p>
                        </div>
                        <div className="show__location">
                            <p><i className="fa fa-map-marker"></i> Kerala | India </p>
                        </div>
                        <div className="show__time">
                            <p><i className="fa fa-clock-o"></i>02:00PM</p>
                        </div>
                        <div className="show__btn">
                            <a href="#" className="site__btn sb--line ">Pre-Book</a>
                        </div>
                    </div>
                    <div className="show__item">
                        <div className="show__date">
                            <h2>05</h2>
                            <p>SEP</p>
                        </div>
                        <div className="show__title">
                            <h4>Kathi Kundhei Nach</h4>
                            <p>Traditional rod puppet theatre from the state of Orissa (today, Odisha) located in the east of India. The puppets of kathi kundhei nacha (“wooden-rod puppet dance”, also called kandhei nach or kandhei nata) are manipulated by a kathi, or wooden rod.</p>
                        </div>
                        <div className="show__location">
                            <p><i className="fa fa-map-marker"></i> Odisha | India</p>
                        </div>
                        <div className="show__time">
                            <p><i className="fa fa-clock-o"></i>02:00PM</p>
                        </div>
                        <div className="show__btn">
                            <a href="#" className="site__btn sb--line ">Pre-Book</a>
                        </div>
                    </div>
                    <div className="show__item">
                        <div className="show__date">
                            <h2>16</h2>
                            <p>SEP</p>
                        </div>
                        <div className="show__title">
                            <h4>Toda Embroidery</h4>
                            <p>The Toda Embroidery, also locally known as "pukhoor", is an art work among the Toda pastoral people of Nilgiris, in Tamil Nadu, made exclusively by their women. The embroidery, which has a fine finish, appears like a woven cloth but is made with use of red and black threads with a white cotton cloth background.</p>
                        </div>
                        <div className="show__location">
                            <p><i className="fa fa-map-marker"></i> Tamil Nadu | India</p>
                        </div>
                        <div className="show__time">
                            <p><i className="fa fa-clock-o"></i>02:00PM</p>
                        </div>
                        <div className="show__btn">
                            <a href="#" className="site__btn sb--line ">Pre-Book</a>
                        </div>
                    </div>
                </div>
            </section>


            <footer className="footer__section">
                <div className="container">
                    <div className="footer-top">
                        <div className="row m-0">
                            <div className="col-lg-8 p-0">
                                <div className="footer-form-warp">
                                    <div className="section-title">
                                        <div className="sub-title">Contact us</div>
                                        <h2>Got a Question?</h2>
                                    </div>
                                    <form>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <input type="text" placeholder="Name" />
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text" placeholder="E-mail" />
                                            </div>
                                            <div className="col-lg-12">
                                                <textarea placeholder="Message"></textarea>
                                                <button className="site__btn">Send Email</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-4 p-0">
                                <img src={img11} alt="" style={{ width: 'auto' , height: '500px'}}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="info__box">
                                <div className="info_icon">
                                    <i className="fa fa-map-marker"></i>
                                </div>
                                <p>SBCE, Pattoor<br /> Alappuzha, Kerala </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="info__box info_box_center">
                                <div className="info_icon">
                                    <i className="fa fa-map-marker"></i>
                                </div>
                                <p>9207863690 | 8130963211 <br /> <a href="#" className="__cf_email__">info@artfolio.io</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="footer__social">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-youtube-play"></i></a>
                                <a href="#"><i className="fa fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="footer__copyright__text">
                        <p>Copyright &copy;
                            <script data-cfasync="false"
                                src="../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
                            <script>document.write(new Date().getFullYear());</script> All rights reserved |  by <a href="#" target="_blank">Zeno</a>
                        </p>
                    </div>

                </div>
            </footer>


        </div>
    )
}

export default Home