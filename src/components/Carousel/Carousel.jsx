import MoviePhoto from "../../assets/images/inter.jpg";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

const Carousel = () => {
  return (
    <MDBCarousel dark fade>
      <MDBCarouselItem className="w-100 d-block" itemId={1}>
        <img src={MoviePhoto} alt="banner" className="img-fluid" />
      </MDBCarouselItem>
    </MDBCarousel>
  );
};

export default Carousel;
