import React from 'react';
import { MDBBtn, MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBIcon } from 'mdbreact';

import "../CardHomeInfo/CardHomeInfo.css";



const CardHomeInfo = (props) => {
  return (
    


    <MDBRow>
    <MDBCol style={{maxWidth: "22rem"}}>
      <MDBCard>
        <MDBCardImage className="img-fluid customImage" src={props.src} waves></MDBCardImage>
        <MDBCardBody>
        <MDBIcon className="heartIconPosition" far icon="heart" />
          <MDBCardTitle>{props.address}</MDBCardTitle>
          <MDBCardText>Price: ${props.price} |  Beds:{props.bedrooms} | Baths:{props.bathrooms} | Sqft:{props.sqft}</MDBCardText>
          <MDBBtn href="#">Save Home</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
      </MDBRow>

    
  )
}

export default CardHomeInfo;

