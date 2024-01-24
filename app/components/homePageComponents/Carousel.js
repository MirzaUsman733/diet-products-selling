'use client'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const certifications = [
  {
    id: 1,
    imageUrl: 'https://via.placeholder.com/600x300',
  },
  {
    id: 2,
    imageUrl: 'https://via.placeholder.com/600x300',
  },
  {
    id: 3,
    imageUrl:
      'https://via.placeholder.com/600x300',
  },
  {
    id: 4,
    imageUrl:
      'https://via.placeholder.com/600x300',
  },
  {
    id: 5,
    imageUrl:
      'https://via.placeholder.com/600x300',
  },
  {
    id: 6,
    imageUrl: 'https://via.placeholder.com/600x300',
  },
  {
    id: 7,
    imageUrl: 'https://via.placeholder.com/600x300',
  },
  {
    id: 8,
    imageUrl:
      'https://via.placeholder.com/600x300',
  },
  {
    id: 9,
    imageUrl: 'https://via.placeholder.com/600x300',
  },
  {
    id: 10,
    imageUrl: 'https://via.placeholder.com/600x300',
  },
  {
    id: 11,
    imageUrl: 'https://via.placeholder.com/600x300',
  },
  {
    id: 12,
    imageUrl: 'https://via.placeholder.com/600x300',
  },
];

export default function MicrosoftSlider() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    lazyLoad: 'ondemand',
    autoplay: true,
    autoplaySpeed: 2000,
    // fade: true,
    // cssEase: 'linear'

  };
  return (
    <div className=''>
      <div className="text-center">
        <Slider {...settings}>
          {certifications.map((certification, index) => (
            <div className="mb-4" key={certification.id}>
                  
              <div >
                <img
                  className="homeCertificationSliderContent"
                  src={certification.imageUrl}
                  alt=""
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

    </div>
  )
}
