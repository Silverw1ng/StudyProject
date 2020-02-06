import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import {Figure} from "react-bootstrap";

export default class Sight extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Row>
        <Col md={3}>
          <Image src={this.props.image} thumbnail>
          </Image>
        </Col>
        <Col md={9}>
          {this.props.text}
        </Col>
      </Row>
    );
  }
}

Sight.defaultProps = {
  image: 'image-placeholder.jpg',
  text: ''
};
