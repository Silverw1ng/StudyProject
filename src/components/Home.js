import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import { OverlayTrigger, Popover } from 'react-bootstrap';

const styles = require('./Styling.css');

export default function HomePage() {
  return(
      <Carousel>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="carousel1.jpg"
            alt="Беседка"
          />
          <Carousel.Caption>
            <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={besedka}
            >
              <h3>Беседка на Волжской набережной</h3>
            </OverlayTrigger>        
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="carousel2.jpg"
            alt="Стрелка"
          />
          <Carousel.Caption>
            <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={strelka}
            >
              <h3>Парк на Стрелке</h3>
            </OverlayTrigger>          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="carousel3.jpg"
            alt="Кремль"
          />
          <Carousel.Caption>
            <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={bogoyavlenka}
            >
              <h3>Богоявленская площадь</h3>
            </OverlayTrigger>       
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  );
}

const besedka = (
  <Popover id="popover-basic">
      <Popover.Title as="h3">Беседка</Popover.Title>
      <Popover.Content>
        Построена в 1840-х годах на месте деревянного «китайского павильона» на Волжской набережной у Мякушкинского спуска. 
        Выполнена в стиле позднего классицизма из кирпича и белого камня. Беседка состоит из шести каннелюрованных колонн и круглого барабана.
      </Popover.Content>
    </Popover> 
);

const strelka = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Стрелка</Popover.Title>
      <Popover.Content>
        Стрелка — это начало Ярославля. И в прямом, и в переносном смысле. Город отсюда начинает расти и исторически, и территориально. 
        В IX веке здесь, на месте слияния рек Волги и Которосли, появилось финно-угорское поселение. И сюда же спустя век «водным путём» прибыла дружина Ярослава Мудрого. 
        Князь убил медведя тем самым «остриём», на которое так похожа форма берега, образованного соединением рек. 
        После этого события в 1010 году, согласно преданию, и был основан Ярославль.
      </Popover.Content>
  </Popover>  
);

const bogoyavlenka = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Богоявленская площадь</Popover.Title>
      <Popover.Content>
        Богоявленская площадь Ярославля относится к одному из самых посещаемых туристических мест города. 
        Связано это, прежде всего, с нахождением на ней Спасского монастыря, являющегося сегодня крупнейшим городским историческим музеем, Церкви Богоявления и Памятника Ярославу Мудрому.
      </Popover.Content>
  </Popover>  
);