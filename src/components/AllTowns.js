import React from 'react';
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { Link } from "react-router-dom";

const towns = require('../local_towns.json');

export default class AllTowns extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      <CardDeck bsPrefix="card-deck">
        {towns.map((item) => {
          return (
            <React.Fragment>
              <Card key={item.id}>
                <Card.Body>
                  <Card.Header>{item.title}</Card.Header>
                  <Link to={item.link}>
                    <Card.Img variant="top" src={item.image}/>
                  </Link>              
                  <Card.Text>{item.text}</Card.Text>
                </Card.Body>
              </Card>
            </React.Fragment>
          );
        })}
      </CardDeck>
    );
  }
}
