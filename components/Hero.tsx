import styled from 'styled-components';
import HeroImage1 from '../images/hero1.png';
import HeroImage2 from '../images/hero2.png';
import HeroImage3 from '../images/hero3.png';
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const HeroContainer = styled.div`

  
  
`;

export const Hero = () => {
  return (
    <HeroContainer className="sm:pt-10">
      <Carousel 
        infiniteLoop={true} 
        showStatus={true} 
        showArrows={false} 
        showIndicators={false} 
        showThumbs={false} 
        autoPlay={true}
        useKeyboardArrows={false}
        stopOnHover={true}
      >
        <div style={{backgroundImage: `url(${HeroImage1})`,backgroundSize:'cover', backgroundRepeat:"no-repeat", width:"100%", height:"41vw"}} >
            {/* <div className="pt-[30vw]">dfdfdfd1</div> */}
            
        </div>
        <div style={{backgroundImage: `url(${HeroImage2})`,backgroundSize:'cover', backgroundRepeat:"no-repeat", width:"100%", height:"41vw"}} >
            
        </div>
        <div style={{backgroundImage: `url(${HeroImage3})`,backgroundSize:'cover', backgroundRepeat:"no-repeat", width:"100%", height:"41vw"}} >
            
        </div>
      </Carousel>
    </HeroContainer>
  )
};