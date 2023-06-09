import { ReactNode } from 'react';
import { useRef } from "react";
import { Button } from "@mui/material";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Navigation, Swiper as SwiperType } from "swiper";

interface IProps {
  children?: ReactNode[]
}
const SwiperBox = ({ children }: IProps) => {

  const swiperRef = useRef();
  console.log(swiperRef)
  const swiperLength: number = 4

  return (
    <>
      <div className="relative">
        <Swiper
          slidesPerView={swiperLength}
          spaceBetween={20}
          freeMode={true}
          navigation={true}
          modules={[FreeMode, Pagination, Navigation]}
          className="mySwiper !px-5"
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {children?.map((child, idx) =>
            <SwiperSlide key={idx}> {child}</SwiperSlide>
          )}
          {children && children.length > swiperLength &&
            <>
              <Button
                onClick={() => swiperRef.current?.slidePrev()}
                variant="outlined"
                color="secondary"
                sx={{ translate: '0 -50%' }}
                className="z-[2] !min-w-0 w-10 h-10 p-0 absolute top-1/2 left-0 rounded bg-container"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.97501 15.6833C7.81668 15.6833 7.65835 15.625 7.53335 15.5L2.47501 10.4416C2.23335 10.2 2.23335 9.79998 2.47501 9.55831L7.53335 4.49998C7.77501 4.25831 8.17501 4.25831 8.41668 4.49998C8.65835 4.74164 8.65835 5.14164 8.41668 5.38331L3.80001 9.99998L8.41668 14.6166C8.65835 14.8583 8.65835 15.2583 8.41668 15.5C8.30001 15.625 8.13335 15.6833 7.97501 15.6833Z" fill="#424242" />
                  <path d="M17.0834 10.625H3.05835C2.71668 10.625 2.43335 10.3417 2.43335 10C2.43335 9.65833 2.71668 9.375 3.05835 9.375H17.0834C17.425 9.375 17.7084 9.65833 17.7084 10C17.7084 10.3417 17.425 10.625 17.0834 10.625Z" fill="#424242" />
                </svg>
              </Button>
              <Button
                onClick={() => swiperRef.current?.slideNext()}
                variant="outlined"
                color="secondary"
                sx={{ translate: '0 -50%' }}
                className="z-[2] !min-w-0 w-10 h-10 p-0 absolute top-1/2 right-0 rounded bg-container"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.025 15.6833C11.8667 15.6833 11.7083 15.625 11.5833 15.5C11.3417 15.2583 11.3417 14.8583 11.5833 14.6166L16.2 9.99998L11.5833 5.38331C11.3417 5.14164 11.3417 4.74164 11.5833 4.49998C11.825 4.25831 12.225 4.25831 12.4667 4.49998L17.525 9.55831C17.7667 9.79998 17.7667 10.2 17.525 10.4416L12.4667 15.5C12.3417 15.625 12.1834 15.6833 12.025 15.6833Z" fill="#424242" />
                  <path d="M16.9417 10.625H2.91675C2.57508 10.625 2.29175 10.3417 2.29175 10C2.29175 9.65833 2.57508 9.375 2.91675 9.375H16.9417C17.2834 9.375 17.5667 9.65833 17.5667 10C17.5667 10.3417 17.2834 10.625 16.9417 10.625Z" fill="#424242" />
                </svg>
              </Button>
            </>
          }
        </Swiper>
      </div >
    </>
  )
}

export default SwiperBox;