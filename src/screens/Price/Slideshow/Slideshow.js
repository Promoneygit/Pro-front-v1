import React from "react";
import SlideshowWithPagination from "react-slideshow-with-pagination";

import Image1 from "../image/image1.png";
import Image2 from "../image/image2.png";
import Image3 from "../image/image3.png";

const CARDS_DETAILS = [
  { image: Image1},
  { image: Image2},
  { image: Image3},
]

const Slideshow = () => {
  return (
    // Slideshow with preset card features along with pagination and arrow buttons
    <div><SlideshowWithPagination
      options={CARDS_DETAILS}
      showDots={true}
      showArrows={false}
      numberOfCardsPerScreen={1}
      showOneCardForWidthLower="sm"
      slideshowContainerMaxWidth={false}
      cardWidth={500}
      cardHeight={200}
      />
      </div>

  );
};

export default Slideshow