import { useEffect, useRef } from "react";

function Home() {
    const home = useRef(null);
    const sliderWrapper = useRef(null);
    const slider = useRef(null);
    const lastScroll = useRef(0);
    const imagesRefs = useRef([]); // Holds references to the image divs
    const slideImages = useRef([])

    // Slider JS LOGIC 
    const images = [
        { src: '/slider-images/img1.jpg', animateSpeed: 4.3, alignItems : "center"},
        { src: '/slider-images/img2.jpg', animateSpeed: 3, alignItems : "start" , margin : "60px 0 0 0"},
        { src: '/slider-images/img3.jpg', animateSpeed: 2, alignItems : "center" },
        { src: '/slider-images/img4.jpeg', animateSpeed: 1.2, alignItems : "end" , margin : "0 0 60px 0"},
        { src: '/slider-images/img5.jpg', animateSpeed: 0.4, alignItems : "start" , margin : "60px 0 0 0"},
        { src: '/slider-images/img6.jpg', animateSpeed: 0, alignItems : "center" },
    ];

    function CreateImage({ image, index }) {
        const imageRef = useRef(null);

        useEffect(() => {
            imagesRefs.current[index] = {
                ref: imageRef,
                animateSpeed: image.animateSpeed,
            };
        }, [index]);

        return (
            <div className="slide" ref={imageRef} style={{alignItems: `${image.alignItems}`, padding: `${image.padding}`}}>
                <img src={image.src} style={{ width: '200px', height: 'auto', margin: `${image.margin}`}} alt="Slide" className="slide-image" />
            </div>
        );
    }

    function handleScroll() {
        const homeOffsetTop = home.current.offsetTop;
        const homeHeight = home.current.offsetHeight;
        const scrollY = window.scrollY;
        const percentageScrolled = ((scrollY - homeOffsetTop) / homeHeight) * 100;

        // Move the slider
        slider.current.style.transform = `translateX(-${percentageScrolled}%)`;

        // Move each image with its own animateSpeed
        imagesRefs.current.forEach((image) => {
            if (image && image.ref.current) {
                image.ref.current.style.transform = `translateX(${percentageScrolled * image.animateSpeed}%)`;
            }
        });

        lastScroll.current = scrollY;
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        slideImages.current = document.querySelectorAll('.slide-image');

        const logoContainer = document.querySelector('.center-logo-container');
        const logoContainer2 = document.querySelector('.center-logo-container2')

        slideImages.current.forEach(image => {
            image.addEventListener('mouseover', () => {
                logoContainer.style.opacity = 0;
                logoContainer2.style.opacity = 1
            });
            image.addEventListener('mouseout', () => {
                logoContainer.style.opacity = 1;
                logoContainer2.style.opacity = 0
            });
        });

        return () => {
            slideImages.current.forEach(image => {
                image.removeEventListener('mouseover', () => {
                    logoContainer.style.opacity = 0;
                    logoContainer2.style.opacity = 0;
                });
                image.removeEventListener('mouseout', () => {
                    logoContainer.style.opacity = 1;
                    logoContainer2.style.opacity = 0
                });
            });
        };
    }, [imagesRefs.current]); // Depend on imagesRefs to run this effect after all images are rendered

    return (
        <div className="home-main">
            <section className="home" ref={home}>
                <div className="slider-wrapper" ref={sliderWrapper}>
                    <div className="center-logo-container">
                        <img className="center-logo" src="/slider-images/nike-word.png" alt="Logo" />
                    </div>
                    <div className="center-logo-container2">
                        <img className="center-logo2" src="/images/nike-logo.svg" alt="Logo" />
                    </div>
                    <div className="slider" ref={slider}>
                        {images.map((img, index) => (
                            <CreateImage key={index} image={img} index={index} />
                        ))}
                    </div>
                </div>
            </section>
            <section className="home2">
                <div className="home2-content-wrapper">
                    <div className="home2-title-container">
                        <h1 className="home2-title">SHOP THE ESSENTIALS</h1>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
