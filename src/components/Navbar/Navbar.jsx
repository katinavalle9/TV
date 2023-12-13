import  { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from "mdb-react-ui-kit";
import Carousel from "../Carousel/Carousel";

const Navbar = () => {
  const [openBasic, setOpenBasic] = useState(false);

  return (
    <>
     <MDBNavbar expand="lg" light className="navegacion">
      <MDBContainer fluid>
        <MDBNavbarBrand href="#" className="color-link">TV</MDBNavbarBrand>
      
        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="#">
                
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>

        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    <Carousel/>
    </>
   
  );
};

export default Navbar;
