import { useRef, useState } from 'react';
import Image from 'next/image';
import { IProducts } from '@/models/cart';
import ReactImageZoom from 'react-image-zoom';

interface IProp {
  data: IProducts | undefined
}

const props = {
  width: 546,
  height: 340,
  zoomPosition: "right",
  zoomWidth: 500,
  img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
};
const Product = ({ data }: IProp) => {

  const [imageSrc, setImageSrc] = useState<string>(data && data.images[0] ? data.images[0] : '');
  const changeImage = (image: string) => {
    setImageSrc(image)
  }

  return (
    <div className='flex flex-row items-center justify-center w-[48%] gap-4'>
      <ReactImageZoom width={246} height={346} zoomPosition='right' zoomWidth={500} img={imageSrc} />
      {/* <Zoom
        img={imageSrc}
        zoomScale={3}
        ref={zoomImg}
        className='rounded'
        height={550}
        width={600}
        transitionTime={0.5}
      /> */}
      <div className="flex flex-col justify-between items-center w-[14%]">
        {data?.images.map(item => item !== imageSrc &&
          <Image
            key={item}
            className='w-auto h-24 cursor-pointer'
            src={item}
            height={90}
            width={70}
            alt={data.name}
            onClick={() => changeImage(item)}
          />
        )}
      </div>
    </div>
  )
}

export default Product