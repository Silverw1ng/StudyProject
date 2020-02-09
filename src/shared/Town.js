import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from 'react-accessible-accordion';
import Figure from 'react-bootstrap/Figure';

export default class Town extends React.Component {
  render() {
    return (
      <div className="town">
          <Row>
            <Col className="column" md={3}>
              <Figure>
                <Figure.Image
                  width={171}
                  height={180}
                  alt="171x180"
                  src={this.props.image}
                />
                <Figure.Caption>
                  Герб города
          </Figure.Caption>
              </Figure>
            </Col>
            <Col md={9}>
              <Accordion preExpanded={['0']} allowMultipleExpanded={true} className="styles.accordion">
                <AccordionItem uuid={'0'} className="accordion__item">
                  <AccordionItemHeading className="accordion__heading">
                    <AccordionItemButton className="accordion__button">
                      История
            </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="accordion__panel">
                    <p>   
                      {this.props.story}
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="accordion__item">
                  <AccordionItemHeading>
                    <AccordionItemButton className="accordion__button">
                      Достопримечательности
            </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="accordion__panel">
                    {this.props.sightText}
                    <ul>
                      {this.props.sights.map((item) => {
                      return(
                        <React.Fragment key={item}>
                          <li>{item}</li>
                        </React.Fragment>)
                      }
                    )}
                    </ul>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </Col>
          </Row>     
      </div>
    );
  }
}

Town.defaultProps = {
  image: 'image-placeholder.jpg',
  story: '',
  sightText: '',
  sights: []
};