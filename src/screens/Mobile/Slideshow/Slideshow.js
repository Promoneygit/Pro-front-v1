import React from "react";
import SlideshowWithPagination from "react-slideshow-with-pagination";

import Image1 from "../image/image1.jpg";
import Image2 from "../image/image2.jpg";
import Image3 from "../image/image3.jpg";
import Image4 from "../image/image4.jpg";

const CARDS_DETAILS = [
  { image: Image1},
  { image: Image2},
  { image: Image3},
  { image: Image4},
]

const Slideshow = () => {
  return (
    // Slideshow with preset card features along with pagination and arrow buttons
    <SlideshowWithPagination
      options={CARDS_DETAILS}
      showDots={true}
      showArrows={false}
      numberOfCardsPerScreen={1}
      showOneCardForWidthLower="sm"
      slideshowContainerMaxWidth={true}
      cardWidth={390}
      cardHeight={200}
      />


  );
};

export default Slideshow