import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Figure from "react-bootstrap/Figure";

const styles = require('./Styling.css');

const info = "Ярославль – это город в России, расположенный к северо-востоку от Москвы. Он входит в группу древних городов \"Золотое кольцо\". " +
  "Одна из основных достопримечательностей – Спасо-Преображенский монастырь XII века. На территории монастыря возвышается одноименный собор с золотыми куполами и фресками XVI века. " +
  "В Ярославском музее-заповеднике также можно увидеть иконы XVI–XVIII веков. Недалеко от него находится церковь Богоявления с фасадом, украшенным разноцветными изразцами.";

export default function HomePage() {
  return(
    <Container>
      <Row>
        <Col sm={5}>
          <Figure>
            <Figure.Image
              src="yaroslavl.gif"
            />
            <Figure.Caption>
              Герб Ярославля
            </Figure.Caption>
          </Figure>
        </Col>
        <Col sm={7}>
          {info}
        </Col>
      </Row>
    </Container>
  )

}
