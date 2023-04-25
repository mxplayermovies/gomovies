import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Image } from 'cloudinary-react'

export const Carousel = () => {
  const images = [
    { src: 'https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1681610057/gandii-baat-s7-2023_nedy5m.webp', alt: 'Gandi Baat S7', link: '../../Adult/GandiIBaatS7-2023/GandiIBaatS7' },
    { src: 'https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1681610078/jungle-cottage-2023_mxv3n6.webp', alt: 'Jungle Cottage', link: '../../Adult/JungleCottage-2023/JungleCottage' },
    { src: 'https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1681610084/nasha-2023_wip2od.webp', alt: 'Nasha', link: '../../Adult/Nasha-2023/Nasha' },
    { src: 'https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1681610082/mohan-chabhiwala-p1-2023_beslt3.webp', alt: 'Mohan Chabhiwala', link: '../../Adult/MohanChabhiwalaP1-2023/MohanChabhiwalaP1' },
    { src: 'https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1681610081/love-guru-s2-p2-2023_aknvjr.webp', alt: 'Love Guru S2 P2', link: '../../Adult/LoveGuruS2-P2-2023/LoveGuruS2P2' },
  ];

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
              className="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl  drop-shadowrounded-3xl"
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
