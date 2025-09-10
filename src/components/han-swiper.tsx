'use client';

import Image from 'next/image';
import { useMemo, useRef, useState, forwardRef, useImperativeHandle } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

// Images
import HouseImage from '@/assets/images/second_home.jpg';

type HanSwiperProps = {
  slides: Array<React.ReactNode>;
  autoplayDelay?: number; // ms
  animationTime?: number; // ms (progress bar)
  onNext?: () => void;
  onPrev?: () => void;
};

export type HanSwiperRef = {
  handleNext: () => void;
  handlePrev: () => void;
};

const HanSwiper = forwardRef<HanSwiperRef, HanSwiperProps>(({
  slides,
  autoplayDelay = 3000,
  animationTime = 3000,
  onNext,
  onPrev,
}, ref) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [count, setCount] = useState<number>(slides.length);
  const [progressWidth, setProgressWidth] = useState<string>('0%');

  const sections = useMemo(() => Array.from({ length: count }), [count]);

  const calcPercent = (activeIndex: number, total: number) =>
    `${((activeIndex + 1) / total) * 100}%`;

  const handleNext = () => {
    swiperRef.current?.slideNext();
    onNext?.();
  }
  const handlePrev = () => {
    swiperRef.current?.slidePrev();
    onPrev?.();
  }

  useImperativeHandle(ref, () => ({
    handleNext,
    handlePrev,
  }));

  return (
    <div className="han-swiper relative w-full">
      {/* Swiper */}
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
        onInit={(swiper) => {
          swiperRef.current = swiper;
          const total = swiper.params.loop ? swiper.slides.length - 2 : swiper.slides.length;
          setCount(total);
          setProgressWidth(calcPercent(swiper.realIndex, total));
        }}
        onSlideChange={(swiper) => {
          const total = swiper.params.loop ? swiper.slides.length - 2 : swiper.slides.length;
          setProgressWidth(calcPercent(swiper.realIndex, total));
        }}
        className="mt-4"
      >
        {slides.map((content, idx) => (
          <SwiperSlide key={idx}>
            <div className="w-full h-full flex items-center justify-center rounded">
              <Image src={HouseImage.src} alt="House" width={1400} height={761} className="md:h-[761px] w-full h-full object-cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Progress */}
      <div className="w-full flex justify-center absolute bottom-6">
        <div className="progress h-1 w-[90%] bg-[#FFFFFF4D] overflow-hidden rounded z-10">
          {/* sections (tick marks) */}
          <div className="progress-sections absolute inset-0 flex">
            {sections.map((_, i) => (
              <span key={i} className="flex-1 border-r last:border-none border-gray-300/60" />
            ))}
          </div>

          {/* animated bar */}
          <div
            className="progress-bar h-full bg-white"
            style={{
              width: progressWidth,
              transitionProperty: 'width',
              transitionTimingFunction: 'linear',
              transitionDuration: `${animationTime}ms`,
            }}
          />
        </div>
      </div>
    </div>
  );
});

HanSwiper.displayName = 'HanSwiper';

export default HanSwiper;
