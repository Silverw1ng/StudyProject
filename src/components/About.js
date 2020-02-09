import React from 'react';
import Figure from 'react-bootstrap/Figure';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

function About() {
  return(
    <div className="about">
      <a href="https://city-yaroslavl.ru/">
        <Figure.Image
          width={100}
          height={100}
          src="yaroslavl.gif"
        />
        <span style={{display: "block", paddingLeft: "5px" }}>Сайт мэрии</span>
      </a>
      <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={<Tooltip>Статья о городе на Википедии</Tooltip>}
      >
      <a href="https://ru.wikipedia.org/wiki/%D0%AF%D1%80%D0%BE%D1%81%D0%BB%D0%B0%D0%B2%D0%BB%D1%8C">
        <Figure.Image
          width={200}
          height={200}
          src="wikipedia.png"
        />
      </a>
      </OverlayTrigger>
      <a href="https://yarportal.ru/">
        <Figure.Image
          width={200}
          height={200}
          src="yarportal.gif"
        />
        <span style={{display: "block", paddingLeft: "35px" }}>Городской форум</span>
      </a>
    </div>
  );
}

export default About;
