import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Contacts() {
  return (
    <div className="section-page contacts">
      <Container>
        <div className="section-title">Контакти</div>
        <div className="section-description">
          Якщо у вас виникли запитання, звяжіться з нами, ми зрадісю вам надамо
          інформацію
        </div>
        <Row>
          <Col md={4}>
            <div className="section-sub-block">
              <div className="section-sub-icon">
                <i className="fa-solid fa-house"></i>
              </div>
              <div className="address">
                <div className="section-sub-title">Адреса</div>
                <div className="section-sub-description">
                  Львівська обл.,
                  <br />
                  м. Львів,
                  <br />
                  вул. Зелена 251
                </div>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="section-sub-block">
              <div className="section-sub-icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="phones-email">
                <div className="section-sub-title">Телефон і E-mail</div>
                <div className="section-sub-description">
                  +38 (067) 709 88 11
                  <br /> +38 (032) 225 93 30
                  <br /> Avtosklo_Lviv@i.ua
                </div>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="section-sub-block">
              <div className="section-sub-icon">
                <i className="fa-regular fa-clock"></i>
              </div>
              <div className="working-hour">
                <div className="section-sub-title">Графік</div>
                <div className="section-sub-description">
                  пн-пт: 9:00-20:00
                  <br />
                  сб: 9:00-18:00
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
