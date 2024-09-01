import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import  '../customcss.css';


const items = [
  {
    
    src: '../assets/images/carouselimg1.jpg',
    caption: 'Property of your choice',
    description:'Our skilled executives shall serve your queries 24x7 to help you find a suitable property.',
    key: 1,
  },
  {
    src: '../assets/images/carouselimg2.jpg',
    caption: 'Property of your choice',
    description:'Our skilled executives shall serve your queries 24x7 to help you find a suitable property.',
    key: 2,
  },
  {
    src: '../assets/images/carouselimg3.jpg',
    caption: 'Property of your choice',
    description:'Our skilled executives shall serve your queries 24x7 to help you find a suitable property.',
    key: 3,
  },
];

export function CarouselHeader(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="carousel-images" />
        <div className='carousel-caption-div'>
        <CarouselCaption
          captionText={item.description}
          captionHeader={item.caption}
        />
        </div>
        
      </CarouselItem>
    );
  });

  return (
<Carousel fade="true"
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
     
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
    
  );
}
