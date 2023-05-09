import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Image } from 'cloudinary-react'

export const Carousel = () => {
  const images = [
    { src: 'https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1681610140/we-have-a-ghost-2023_awtiot.webp', alt: 'We Have A Ghost', link: '../../Hollywood/WeHaveAGhost-2023/WeHaveAGhost' },
    { src: 'https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1681610080/little-dixie-2023_op4nq5.webp', alt: 'Little Dixie', link: '../../Hollywood/LittleDixie-2023/LittleDixie' },
    { src: 'https://res.cloudinary.com/dezf3wemk/image/upload/v1681609998/creed-III-2023_uy7lwa.webp', alt: 'Creed-III', link: '../../Hollywood/Creed3-2023/Creed3' },
    { src: 'https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1681609994/bikini-hackers-2023_kwby7j.webp', alt: 'Bikini Hackers', link: '../../Hollywood/BikiniHackers-2023/BikiniHackers' },
    { src: 'https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1681610092/sayen-2023_plqspx.webp', alt: 'Sayen', link: '../../Hollywood/Sayen-2023/SayenP1' },
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
          <div onClick={() => handleImageClick(image.link)} style={{  display: "flex", justifyContent: "center", cursor: 'pointer' }}>
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
