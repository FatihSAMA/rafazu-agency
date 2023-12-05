import { useState } from "react"
import { images } from "~/constants/images"
import Slider from "react-slick"
import classNames from "classnames"


const slides = [
    images.portfolio,
    images.seta,
    images.herdemney,
    images.toygar,
]

export default function PortfolioSlider(){
    
    const [slideIndex, setSlideIndex] = useState(0)

    const NextArrow = ({onClick}) => (
        <div className="absolute top-1/2 right-1/4 cursor-pointer z-10 hover:drop-shadow-arrow hover:scale-105" onClick={onClick}>
            <svg className=" -scale-x-100" width="67" height="58" viewBox="0 0 67 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M64.491 57.2213L1.44076 56.9405L32.6955 2.80579L32.2301 38.3002L32.2262 38.5932L32.48 38.7397L64.491 57.2213Z" fill="#F7F7F7" stroke="#F7F7F7"/>
            </svg>
        </div>
    )

    const PrevArrow = ({onClick}) => (
        <div className="absolute top-1/2 left-1/4 z-10 cursor-pointer hover:drop-shadow-arrow hover:scale-105" onClick={onClick}>
            <svg width="67" height="58" viewBox="0 0 67 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M64.491 57.2213L1.44076 56.9405L32.6955 2.80579L32.2301 38.3002L32.2262 38.5932L32.48 38.7397L64.491 57.2213Z" fill="#F7F7F7" stroke="#F7F7F7"/>
            </svg>
        </div>
    )

    const settings = {
        infinite : true,
        lazyLoad : true,
        speed : 450,
        slidesToShow : 3,
        centerMode : true,
        centerPadding : 0,
        nextArrow : <PrevArrow />,
        prevArrow : <NextArrow />,
        beforeChange : (current, next) => setSlideIndex(next),
        slidesToScroll: 1,
        cssEase: "linear"
    }

    return(
       <div className="relative w-full h-full z-0 mx-auto px-auto">
            <div className="flex items-center justify-center opacity-20 w-full h-full absolute z-[-1] top-0 left-0">
                <img src={slides[slideIndex]} alt="portfolio image" className="w-[70%] h-full object-cover object-center rounded-2xl " />
            </div>
            <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-dark from-0% to-30% z-[1] "></div>
            <Slider {...settings}>
                {slides.map((img, index) => (
                    <div className=" h-[550px]" key={index}>
                        <div
                        className={
                            classNames(" drop-shadow-benek",
                            {
                                "w-[500px] h-[500px] translate-y-[20px]" : index === slideIndex,
                                "w-[400px] h-[400px] scale-50 translate-y-[250px]" : index !== slideIndex
                            })}
                        
                        style={{
                            borderRadius : "86% 14% 81% 19% / 50% 51% 49% 50% ",
                            backgroundImage : `url(${img})`,
                            backgroundRepeat : "none",
                            backgroundSize : "cover",
                            backgroundPosition : "center",
                            transition : "all .5s ease"
                        }}> 
                        </div>
                    </div>
                ))}
            </Slider>

           
       </div>
    )

}

