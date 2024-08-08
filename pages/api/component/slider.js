<<<<<<< HEAD
import { Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import {A11y} from 'swiper/modules';
import 'swiper/css/navigation';
import { EffectFade } from 'swiper/modules';
import dayjs from 'dayjs';

import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';

import 'swiper/css';
import { useEffect, useState } from 'react';
import Image from 'next/image';



export function Slidernews(){
  const [news, Setnews] = useState([]);
  useEffect(() => {
    fetch(`https://dev.to/api/articles?username=dumebii&per_page=4`)
    .then((response) => {return response.json()})
    .then ((data) => {Setnews(data) });
  },
[])
const SwiperButtonNext = ({children}) => {
  const swiper= useSwiper();
  return <button onClick={()=> swiper.slideNext()}>{children}</button>;
};
const SwiperButtonPrev =  ({children}) => {
  const swiper= useSwiper();
  return <button onClick={()=> swiper.slidePrev()}>{children}</button>;
};
return(
  <Swiper className='mx-auto my-auto'
    modules={[A11y, EffectFade]}
    spaceBetween={50}
    effect='fade'
    slidesPerView={1} >
      {news.map((item, index) => (
        <SwiperSlide key={item.id} className='mx-auto'>
          <Image src={item.social_image} width={600} height={400} alt="Image" className='mx-auto'/>
          <div className='w-1/2 h-2/5 aspect-video bg-white border-border-card-color border p-10 rounded-xl absolute left-[11px] flex flex-col gap-4'>
            <div className='flex flex-col gap-2'> 
              <div className='badge badge-secondary '>{item.tags}</div>
              <p className='text-title-color font-semibold text-4xl'>{item.title}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <SwiperButtonPrev>
        <IoIosArrowDropleft/>
      </SwiperButtonPrev>
      <SwiperButtonNext>
        <IoIosArrowDropright/>
      </SwiperButtonNext>
  </Swiper>
);
};
=======
>>>>>>> f06f67f92bbeb5ae53b99fae17a461a054eed541
