import React from 'react';
import { Layout, Card, Col, Row, Descriptions } from 'antd';
import store from './store/store.json';

const { Header, Footer, Content } = Layout;

const About = ({ about }) => (
  <div>
    <h1>{about.name}</h1>
    <p>{about.data}</p>
  </div>
);

const Manufactures = ({ manufacturers }) => {
  const { name, data } = manufacturers;
  return (
    <div>
      <h2>{name}</h2>
      <Row gutter={16}>
        {data.map((item) => (
          <Col span={8} key={item.key}>
            <Card title={item.name} size="small" extra={<a href={item.site}>Site</a>}>
              <p>{item.description}</p>
              <p>{item.country}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

const Services = ({ services }) => {
  const { name, data } = services;
  return (
    <div>
      <h2>{name}</h2>
      {data.map((service, index) => (
        <Card key={index} title={service.name} size="small">
          <p>{service.description}</p>
        </Card>
      ))}
    </div>
  );
};

const Contacts = ({ contacts }) => {
  const { name, data } = contacts;
  return (
    <div>
      <Descriptions title={name}>
        {data.map((item) => (
          <Descriptions.Item key={item.key} label={item.label}>
            {Array.isArray(item.children) ? item.children.join(', ') : item.children}
          </Descriptions.Item>
        ))}
      </Descriptions>
    </div>
  );
};

function App() {
  const { about, manufacturers, services, contacts } = store;
  return (
  <Layout>
    <Header className="header">Header</Header>
    <Content>
      { about && <About className="about" about={about} ></About> }
      { manufacturers && <Manufactures className="manufacturers" manufacturers={manufacturers} ></Manufactures> }
      { services && <Services className="services" services={services} ></Services> }
      { contacts && <Contacts className="contacts" contacts={contacts} ></Contacts> }
    </Content>
    <Footer className="footer">
      @copyrigth 2025 by Avtosklo Zelena
    </Footer>
  </Layout>
  );
}

export default App;