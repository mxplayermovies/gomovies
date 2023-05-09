import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Image } from 'cloudinary-react'

export const Carousel = () => {
  const images = [
    { src: 'https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1681610061/ipl-2023-highlight01_uik3pa.webp', alt: 'HighlightMatch01', link: '../../Sports-2023/IPL-Highlights/HighlightMatch01' },
    { src: 'https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1681610061/ipl-2023-highlight02_ctvem9.webp', alt: 'HighlightMatch02', link: '../../Sports-2023/IPL-Highlights/HighlightMatch02' },
    { src: 'https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1681610061/ipl-2023-highlight03_pkt3td.webp', alt: 'HighlightMatch03', link: '../../Sports-2023/IPL-Highlights/HighlightMatch03' },
    { src: 'https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1681610061/ipl-2023-highlight04_jtdtrp.webp', alt: 'HighlightMatch04', link: '../../Sports-2023/IPL-Highlights/HighlightMatch04' },
    { src: 'https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1681610061/ipl-2023-highlight05_pijbl0.webp', alt: 'HighlightMatch05', link: '../../Sports-2023/IPL-Highlights/HighlightMatch05' },
 
  ];
 {/*
  link: '../../Adult/LoveGuruS2-P2-2023/LoveGuruS2P2'
 */} 
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const handleImageClick = (link) => {
    window.location.href = link;
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <div onClick={() => handleImageClick(image.link)} style={{  display: "flex", justifyContent: "center", cursor: 'pointer' }} >
            <Image
              className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl  drop-shadowrounded-3xl"
              src={image.src}
              alt={image.alt}
              width={600}
              height={400}
            />
          </div>
        </div>
      ))}
    </Slider>
  );
};
