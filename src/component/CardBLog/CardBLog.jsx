import React from 'react';
import './CardBLog.css';
import Card from "react-bootstrap/Card";

const CardBLog = ({ data }) => {
  return (
    <div className="CardBLog">
      <Card>
        <Card.Img variant="top" src={data.img} alt={data.title} />
        <Card.Body className="p-5">
          <Card.Title>{data.title}</Card.Title>
          <Card.Text className="text-secondary">{data.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardBLog;
