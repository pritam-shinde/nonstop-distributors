import React from 'react'

const ExpertPartner = () => {
    return (
        <>
            <section className="why-choose-one" style={{backgroundColor:"#0E222A"}}>
              
                <div className="container">
                    <div className="row justify-content-center gutter-y-30">
                        
                        <div className="col-12 wow fadeInUp" data-wow-delay="100ms">
                            <div className="why-choose-one__content" style={{paddingLeft:"unset", paddingRight:"unset"}}>
                                <div className="sec-title text-left">

                                    <h3 className="sec-title__title bw-split-in-up text-white">The Expert Witness Partner <br /> <span>Attorneys Trust</span></h3>
                                </div>
                                <p className="why-choose-one__text text-white">
                                    For over two decades, Homestead has been helping law firms secure trial-ready experts across <br className="d-none d-lg-inline" />   every discipline. Our hands-on process, national reach, and no-shortcuts vetting make us the <br className="d-none d-lg-inline" /> partner attorneys turn to when credibility matters most.
                                </p>
                                
                                <div className="why-choose-one__item">
                                    <div className="why-choose-one__experiance count-box">
                                        <h3 className="why-choose-one__experiance__count">
                                            <span className="count-text" data-stop="20" data-speed="1500" data-suffix="+">
                                                20+
                                            </span>
                                        </h3>
                                        <p className="why-choose-one__experiance__text text-white">Years Of Experience</p>
                                    </div>
                                    <div className="why-choose-one__booking count-box">
                                        <h3 className="why-choose-one__booking__count">
                                            <span className="count-text" data-stop="5000" data-speed="1500" data-suffix="+">
                                                5000+
                                            </span>
                                        </h3>
                                        <p className="why-choose-one__booking__text text-white">Experts Sourced </p>
                                    </div>
                                    <div className="why-choose-one__customers">
                                        <div className="why-choose-one__customers__item">
                                            <img src="/assets/images/resources/coustomer-1.jpg" alt="procounsel" />
                                            <img src="/assets/images/resources/coustomer-2.jpg" alt="procounsel" />
                                            <img src="/assets/images/resources/coustomer-3.jpg" alt="procounsel" />
                                            <img src="/assets/images/resources/coustomer-4.jpg" alt="procounsel" />
                                            <div className="why-choose-one__customers__total">5k+</div>
                                        </div>
                                        <h3 className="why-choose-one__customers__text text-white">Satisfied Customers</h3>
                                    </div>
                                    <div className="why-choose-one__video">
                                        <h3 className="why-choose-one__video__text text-white">Watch Story</h3>
                                        <div className="why-choose-one__video__img bw-img-anim-right">
                                            <img src="/assets/images/resources/why-choose-1-1.jpg" alt="procounsel" />
                                            <a href="https://www.youtube.com/watch?v=h9MbznbxlLc" className="video-popup">
                                                <i className="icon-play-1"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </section>
        </>
    )
}

export default ExpertPartner