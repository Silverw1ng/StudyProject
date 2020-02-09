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

const image = require('./uglich_gerb.png');

export default function Uglich() {
  return (
    <div className="town">
      <React.Fragment>
      <Row>
        <Col className="column" md={3}>
        <Figure>
          <Figure.Image
            width={200}
            height={200}
            alt="200ч200"
            src={image}
          />
          <Figure.Caption>
            Герб Углича
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
            История основания Углича окутана глубокой тайной. Нет единого мнения о происхождении названия города.  Принято считать годом основания Углича 937-й. Но достоверных источников, подтверждающих именно эту дату, пока не найдено.
            интересные путешествияПервое летописное доказательство существования Углича относится к 1148 году.  В рассказе о походе великого князя киевского Изяслава Мстиславича на князя суздальского Юрия Владимировича он упоминается как уже существующий город.  Это первый достоверный факт в истории Углича.
            Музеи УгличаСледующее упоминание в летописи относится  к 1207 году,  когда он называется в числе городов в составе Владимиро-Суздальского княжества.
            В 1218 году Углич стал главным городом небольшого Угличского удельного княжества.
            Разрушенный в 1238 году  монголо-татарами, Углич не только быстро восстановился, но даже увеличил свою территорию. В годы правления Ивана Калиты Угличское удельное княжество было присоединено к Москве. Теперь история Углича стала частью истории Московского княжества. При Дмитрии Донском город уже считался полной собственностью московских князей. В дальнейшем московские правители  выделяли угличское княжество в удел младшим сыновьям.
            Временем расцвета в истории Углича было правление князя Андрея Большого (1462—1492 гг.).
            При Иване Грозном Угличем управлял его младший брат Юрий.
            Жители города помогли царю захватить Казань, построив деревянную крепость, которая была сплавлена по Волге. Эта крепость была собрана при впадении в Волгу реки Свияги и  послужила основанием города Свияжска.
            Наиболее известное событие в истории Углича, оказавшее огромное влияние на жизнь всего Русского государства, произошло в конце XVI века.  Сын Ивана Грозного – царевич Дмитрий – был найден мертвым с перерезанным горлом. Об обстоятельсвах угличской драмы споры не утихают до сих пор.
            В 1601 году Углич с окрестностями был пожалован принцу Густаву, неудавшемуся жениху Ксении Годуновой.
            Погибший в Угличе царевич Дмитрий дал имя двум самозванцам. Смутное время  принесло Угличу неисчислимые бедствия. Город несколько раз оказывался в руках врагов. Особенно сильно город пострадал он в 1611 году, были истреблены все жители, сам Углич был полностью разорен и сожжен.
            В 1620 году в городе было лишь 47 домов.
            Царь Михаил Федорович Романов принял меры для восстановления  разрушенного Углича. По его указу были наделены землей и угодьями разрушенные в Смуту монастыри, городу Угличу даровано самоуправление и налоговые льготы. Заново отстроили стены и башни кремля, каменные храмы и жилые дома. XVII век стал временем монументального каменного строительства в Угличе.
            С конца XVII века Углич исчезает со страниц истории. В XVIII веке торговые пути пролегли в стороне от города. В XIX веке промышленности почти не было, на единственной писчебумажной фабрике работало около 500 человек.  Дальнейшая история Углича – это история скромного провинциального городка.  В 1708 году Углич вошел в состав Ингерманландской, а с 1719 года Санкт-Петербургской губернии. В период 1719—1775 гг. Углич был центром Углицкой провинции в составе Санкт –Петербургской, а позднее Московской губернии. С конца XVIII века он сделался уездным городом Ярославской губернии.
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
            Углич является одним из городов Золотого кольца России, часто посещается туристами (в городе останавливаются круизные теплоходы, следующие по Волге).
            В городе сохранились многочисленные образцы традиционной русской архитектуры:
            Среди основных достопримечательностей Углича:
            <ul>
              <li>Свято-Воскресенский монастырь.</li>
              <li>Богоявленский монастырь с грузным собором (1843—1853).</li>
              <li>Алексеевский монастырь (1371) с Успенской («Дивной») церковью (1628).</li>
              <li>Церковь Рождества Иоанна Предтечи (1689—1690).</li>
              <li>Угличский кремль с церковью Димитрия на Крови (1692), Спасо-Преображенским собором (1713), колокольней (1730), палатами царевича Димитрия (1482) и др.</li>
              <li>Ансамбль Торговой площади — Торговые ряды (1860), купеческие дома.</li>
              <li>Старейшее деревянное жилое здание первой трети XVIII века (Дом Меховых-Ворониных)</li>
              <li>Гражданская застройка города XVIII—XIX веков (Супоневский дворец, Зимин двор) (В руинном состоянии).</li>
              <li>В 11 км от города, в селе Улейма, расположен Николо-Улейминский монастырь с ансамблем допетровской архитектуры. Другой древний пригородный монастырь, Покровский Паисиев, был разрушен в советское время в результате строительства ГЭС.</li>
            </ul>        
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
        </Col>
      </Row>
    </React.Fragment>
    </div>
  )
}
