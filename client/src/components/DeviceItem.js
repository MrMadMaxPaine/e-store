import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import star from '../assets/star.png';
import { useHistory } from 'react-router-dom';
export const DeviceItem = ({ device }) => {
 const history = useHistory();
 console.log(history);
 return (
  <Col className="mt-2 d-flex" md={3}>
   <Card style={{ width: 150, cursor: 'pointer' }} border={"light"}>
    <Image style={{ 'padding': 5 }} width={150} height={150} src={device.img}></Image>
    <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
     <div>Some item...</div>
     <div className="d-flex">
      <div>{device.rating}</div>
      <Image width={20} height={20} src={star}></Image>
     </div>
    </div>
    <div>{device.name}</div>
   </Card>
  </Col>
 )
}
