import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Header() {
  return (
    <div className="header header-component">
      <Container>
        <Row className="header-component-block">
          <Col md={5}>
            <div className="brand-name">
              Aвтоскло<span>Зелена</span>
            </div>
          </Col>
          <Col md={2}>
            <div className="header-sub-block">
              <div className="header-sub-icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="phones-email">
                <div className="header-sub-description">
                  <p>
                    <b>+38 (032) 225 93 30</b>
                  </p>
                  <p>Avtosklo_Lviv@i.ua</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div className="header-sub-block">
              <div className="header-sub-icon">
                <i className="fa-solid fa-house"></i>
              </div>
              <div className="address">
                <div className="header-sub-description">
                  <p>
                    <b>Львівська обл., м. Львів</b>
                  </p>
                  <p> вул. Зелена 251</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={2}>
            <div className="header-sub-block">
              <div className="header-sub-icon">
                <i className="fa-regular fa-clock"></i>
              </div>
              <div className="working-hour">
                <div className="header-sub-description">
                  <p>
                    <b>9:00-20:00</b>
                  </p>
                  <p>Понеділок - Пятниця</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
