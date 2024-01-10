import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import { render } from 'react-dom';
import spotlight from 'strings/spotlight.json';
import 'swiper/css/bundle';

const defaultSwiperOptions = {
    loop: true,
    centeredSlides: true,
    pagination: {
        clickable: true,
    },
    autoplay: {
        delay: 10000,
    },
    modules: [Pagination, EffectFade, Autoplay],
    effect: 'fade',
};


const Spotlight = () => {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const handleImagesReady = () => {
        setImagesLoaded(true);
    };
    if (!spotlight.length) {
        return null;
    }
    return (
        <Swiper {...defaultSwiperOptions} onImagesReady={handleImagesReady}>
            {spotlight.map((element) => (
                <SwiperSlide key={element.id}>
                    <a href={`/#/details?id=${element.id}`} target='_top' rel='noreferrer'>
                        <div className='swiper-left'>
                            <img className='swiper-logo' src={`https://abc.gautrang.xyz/Items/${element.id}/Images/Logo?quality=50`} loading='lazy' />
                            <p className='swiper-content'>{element.content}</p>
                        </div>
                        <div className='swiper-right'>
                            <img className='swiper-backdrop' src={`https://abc.gautrang.xyz/Items/${element.id}/Images/Backdrop/0?maxWidth=720`} loading='lazy' />
                        </div>
                    </a>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

render(<Spotlight />, document.querySelector('.spotlight'));
