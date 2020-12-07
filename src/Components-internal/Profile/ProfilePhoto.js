import React from 'react';
import profilPhoto from ".\Components-internal\Profile\profileComponents.png/";
import {Card} from "react-bootstrap";
const profilPhoto = () => {
  return (
    <Card.Img variant="top" src={profilPhoto} style={{ borderRadius: "4px" }} />
  );
};


export default ProfilePhoto;
