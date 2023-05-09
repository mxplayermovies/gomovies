import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Image } from 'cloudinary-react'

export const Carousel = () => {
  const images = [
    { src: 'https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1681610092/selfiee-2023_ffmvnf.webp', alt: 'Selfiee', link: '../../Bollywood/Selfiee-2023/Selfiee' },
    { src: 'https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1681610058/gulmohar-2023_zgvuio.webp', alt: 'Gulmohar', link: '../../Bollywood/Gulmohar-2023/Gulmohar' },
    { src: 'https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1681610061/incar-2023_zk2nrj.webp', alt: 'InCar', link: '../../Bollywood/InCar-2023/InCar' },
    { src: 'https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1681610090/raundal-2023_cipyxy.webp', alt: 'Raundal', link: '../../Bollywood/Raundal-2023/Raundal' },
    { src: 'https://res.cloudinary.com/dezf3wemk/image/upload/v1681610135/tu-jhoothi-main-makkaar-2023_cnmhmd.webp', alt: 'Tu Jhoothi Main Makkaar', link: '../../Bollywood/TuJhoothiMainMakkaar-2023/TuJhoothiMainMakkaar' },
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
          <div onClick={() => handleImageClick(image.link)}  style={{  display: "flex", justifyContent: "center", cursor: 'pointer' }} >
            <Image
              className=" scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl  drop-shadowrounded-3xl"
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
