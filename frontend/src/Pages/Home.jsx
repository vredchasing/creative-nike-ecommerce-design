function Home (){

    return(
        <section className="home">
            <section className="slide-1">
                <section className="hero-section">
                    <div className="hero-section-left">
                        <div className="slogan-container"><h1 className="slogan">JUST DO IT.</h1></div>
                    </div>
                    <div className="hero-section-right">
                        <div className="background-image-container">
                            <img className="background-image" src='/images/nike-cover-photo.jpg'></img>
                        </div>
                    </div>
                </section>
            </section>
            <div className="section-right-caption-container-main">
                <div className="section-right-caption-container">
                    <h1 className="hero-section-right-caption">
                        SHOP THE LATEST.
                    </h1>
                    <button className="shop-button">
                        <h1 className="shop-text">Shop</h1>
                    </button>
                </div>
            </div>
            <section className="home-2nd-slide-container">
                <div className="banner">
                    <img className="banner-image" src="/images/nike-hero-banner.jpg"></img>
                </div>
                <div className="slide2-caption-container">
                    <div className="s2-caption-small">Nike Pegasus 41 </div>
                    <div className="s2-caption-big-container"><h1 className="s2-caption-big">DON'T WASTE YOUR ENERGY</h1></div>
                    <div className="s2-caption-small-v2">
                        Run in Pegasus. Feel the responsive energy return of Air Zoom and all-new ReactX foam.
                    </div>
                </div>
            </section>
        </section>    
    )
}

export default Home