import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Slider-style.css';


export const Slider = () =>{
    return(
        <div className="slider-container">
            <Swiper
            spaceBetween={0}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide><img src = "./images/monke1.jpg" className="slider-image"/></SwiperSlide>
            <SwiperSlide><img src = "./images/monke2.jpg" className="slider-image"/></SwiperSlide>
            <SwiperSlide><img src = "./images/monke3.jpg" className="slider-image"/></SwiperSlide>
            <SwiperSlide><img src = "./images/monke1.jpg" className="slider-image"/></SwiperSlide>
            <SwiperSlide><img src = "./images/monke2.jpg" className="slider-image"/></SwiperSlide>
            <SwiperSlide><img src = "./images/monke3.jpg" className="slider-image"/></SwiperSlide>
            </Swiper>
            </div>
    )
}
