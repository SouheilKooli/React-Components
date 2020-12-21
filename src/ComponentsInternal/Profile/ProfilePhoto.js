import React from 'react';
import profilPhoto from "../Profile/profileComponents.png";
import {Card} from "react-bootstrap";
const ProfilPhoto = () => {
  return (
    <Card.Img variant="top" src={profilPhoto} style={{ borderRadius: "4px" }} />
  );
};


export default ProfilPhoto;
