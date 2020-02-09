import React from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import Sight from "../shared/Sight";

const sights = require('../sights');


export default class Sights extends React.Component{
  componentDidMount() {
    console.log("Хуй для Сержа");
  }
  render() {
    return(
      <ListGroup>
        {sights.map((item) => {
          return(
            <React.Fragment key={item.key}>
              <ListGroup.Item>
                <Sight image={item.image} text={item.text} />
              </ListGroup.Item>
            </React.Fragment>)
          }
        )}
      </ListGroup>
    );
  }
}
