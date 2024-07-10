import { useEffect, useRef } from "react";

function Home() {
    const viewportHeight = useRef(window.innerHeight)
    const home = useRef(null);
    const sliderWrapper = useRef(null);
    const slider = useRef(null);
    const lastScroll = useRef(0);
    const imagesRefs = useRef([]); // Holds references to image divs
    const slideImages = useRef([])

    const home3 = useRef(null)
    const home3Slider = useRef(null)
    const home3Slide = useRef(null)
    const home3SliderImgRefs = useRef([])
    const home3OffsetTop = useRef(null)

    // VIEWPORT RESIZE RECALCULATIONS
    useEffect(()=>{
        const handleViewportResize = () => {
            viewportHeight.current = window.innerHeight
        }

        window.addEventListener('resize', handleViewportResize)

        return ()=>{
            window.addEventListener('resize', handleViewportResize) 
        }
    }, [])

    // Slider JS LOGIC 
    const images = [
        { src: '/slider-images/img1.jpg', animateSpeed: 4.3, alignItems : "center"},
        { src: '/slider-images/img2.jpg', animateSpeed: 3, alignItems : "start" , margin : "60px 0 0 0"},
        { src: '/slider-images/img3.jpg', animateSpeed: 2, alignItems : "center" },
        { src: '/slider-images/img4.jpeg', animateSpeed: 1.2, alignItems : "end" , margin : "0 0 60px 0"},
        { src: '/slider-images/img5.jpg', animateSpeed: 0.4, alignItems : "start" , margin : "60px 0 0 0"},
        { src: '/slider-images/img6.jpg', animateSpeed: 0, alignItems : "center" },
    ];

    const categorySliderImages = [
        {src: '/category-slider/nike-mens.webp', caption:"Men's"},
        {src: '/category-slider/nike-womens.webp', caption: "Women"},
        {src: '/category-slider/nike-kids.jpg', caption: "Kids"},
        {src: '/category-slider/accessories.jfif', caption: "Accessories"},
        {src: '/category-slider/nike-sale.png', caption: "Sale"}
    ]

    const home4ImagesArray = [
        {src:"/images/nike-cover-photo4.jpg", caption:"Nike Pegasus 41"},
        {src: "/images/nike-cover-photo3.jpg", caption:"Jordan"},
        {src: "/images/nike-cover-photo2.jpg", cpation: "Nike Techwear"},
    ]


    const home3SliderArray =  [
        {src:'/home3-slider/h3-slider-img1.png', slider3AlignItems: 'start', margin: '60px'},
        {src:'/home3-slider/h3-slider-img2.jpg', slider3AlignItems: 'center', margin: '60px'},
        {src:'/home3-slider/h3-slider-img3.jpg', slider3AlignItems: 'end', margin: '60px'},
        {src:'/home3-slider/h3-slider-img4.jpg', slider3AlignItems: 'start', margin: '60px'},
        {src:'/home3-slider/h3-slider-img5.jpg', slider3AlignItems: 'center', margin: '60px'},
    ]

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

        if (window.scrollY>lastScroll.current && percentageScrolled>=0){
            slider.current.style.transform = `translateX(-${percentageScrolled}%)`;

            imagesRefs.current.forEach((image) => {
                if (image && image.ref.current) {
                    image.ref.current.style.transform = `translateX(${percentageScrolled * image.animateSpeed}%)`;
                }
            });
        }
        else if (window.scrollY<lastScroll.current && percentageScrolled>=0){
            slider.current.style.transform = `translateX(-${percentageScrolled}%)`;

            imagesRefs.current.forEach((image) => {
                if (image && image.ref.current) {
                    image.ref.current.style.transform = `translateX(${percentageScrolled * image.animateSpeed}%)`;
                }
            });
        }

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
    }, [imagesRefs.current]);


    // Category sliderr logic

    function CreateCategoryImage({images, index}){

        return (
            <div className="category-slide">
                <div className="category-slide-image-container">
                    <img className="category-slide-image" src={images.src}></img>
                </div>
                <div className="category-slide-caption-container">
                    <h1 className="category-slide-caption">{images.caption}</h1>
                </div>
            </div>
        )
    }



    // Category slider sect animations

    const home2TitleBox = useRef(null)

    function animateHome2Content (){
        const home2TitleBoxRect = home2TitleBox.current.getBoundingClientRect()

        if(home2TitleBoxRect.top <= (viewportHeight.current/2)){
            home2TitleBox.current.style.opacity = '1'
        }
    }

    useEffect(()=>{
        const handleHome2AnimationsScroll = () =>{
            animateHome2Content()
        }

        window.addEventListener('scroll', handleHome2AnimationsScroll)

        return ()=>{
            window.addEventListener('scroll', handleHome2AnimationsScroll)
        }
    }, [])

    const CreateHome3Slider = ({image, index}) => {
        const home3SliderImgRef = useRef(null)
        home3SliderImgRefs.current[index] = {
            ref: home3SliderImgRef
        }
        return (
            <div className="home3-slide" ref={home3Slide}>
                <div className="home3-slide-image-container" style={{display:'flex', alignItems:`${image.slider3AlignItems}`, height:'100vh'}}>
                    <img src={image.src} className="home-slide3-images" ref={home3SliderImgRef} style={{margin:`${image.margin}`}}></img>
                </div>
            </div>
        )
    }

    function home3Animation (){
        home3OffsetTop.current = home3.current.offsetTop
        let percentageScrolledHome3 = (window.scrollY-(home3OffsetTop.current-viewportHeight.current))/(home3.current.offsetHeight)*100
        //console.log('scroll', window.scrollY)
        //console.log(window.scrollY-(home3OffsetTop.current-viewportHeight.current))
        //console.log(home3.current.offsetHeight)
        console.log(percentageScrolledHome3)
        if(window.scrollY>=(home3OffsetTop.current-viewportHeight.current)){
            home3Slider.current.style.transform = `translateX(-${percentageScrolledHome3*0.7}%)`

        }
    }

    useEffect(()=>{
        const handleHome3Scroll = ()=>{
            home3Animation()
        }
        window.addEventListener('scroll', handleHome3Scroll)
        return ()=>{
            window.removeEventListener('scroll', handleHome3Scroll)
        }
    }, [])

    const home4ImageRefs = useRef([])

    function CreateHome4Slider ({image, index}){
        const home4ImageRef = useRef(null)

        home4ImageRefs.current[index] = {
            ref: home4ImageRef,
        }

        return(
            <div className="home4-slide">
                <div className="home4-image-container">
                    <img className="home4-image" src={image.src}></img>
                </div>
            </div>
        )
    }


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
                    <div className="home2-title-container" ref={home2TitleBox}>
                        <h1 className="home2-title">SHOP THE ESSENTIALS</h1>
                    </div>
                    <div className="category-slider">
                        {categorySliderImages.map((images, index) =>{
                            return(
                                <CreateCategoryImage key={index} images={images} index={index}/>
                            )
                        })}
                    </div>
                </div>
            </section>
            <section className="home3" ref={home3}>
                <div className="home3-content-wrapper">
                    <div className="home3-title-container">
                        <h1 className="slogan">JUST DO IT.</h1>
                    </div>
                    <div className="home3-slider-wrapper">
                        <div className="home3-slider" ref={home3Slider}>
                            {home3SliderArray.map((image, index) => {
                                return(
                                    <CreateHome3Slider key={index} image={image} index={index}></CreateHome3Slider>
                                )
                            })}
                        </div>

                    </div>
                </div>
            </section>

            <section className="home4">
                <div className="home4-content-wrapper">
                    <div className="home4-title-container">
                        <h1 className="home4-title">EXPLORE THE LATEST RELEASES</h1>
                    </div>
                    <div className="home4-slider-wrapper">
                        <div className="home4-slider">
                            {home4ImagesArray.map((image, index)=> {
                                return(
                                    <CreateHome4Slider key={index} image={image} index={index}></CreateHome4Slider>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
