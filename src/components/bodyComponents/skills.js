import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

const Example = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    
    <div>
    <Row id="skills">
        <Col>
            <h2 class="text-center">
                <hr/>
                Skills
                <hr/>
            </h2>
        </Col>
    </Row>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Perfered-laungages
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            Environment
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '4' })}
            onClick={() => { toggle('4'); }}
          >
            Front-end
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '5' })}
            onClick={() => { toggle('5'); }}
          >
            Server-side
          </NavLink>
        </NavItem>

      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col>
              <h4>Perfered-laungages:</h4>
                <ul className="list-unstyled">
                    <li>
                        HTML
                    </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        JavaScript
                    </li>
                    <li>
                        Node
                    </li>
                </ul>
            </Col>
            <Col>
                <h4>Other-laungages</h4>
                <ul className="list-unstyled">
                    <li>
                        Python
                    </li>
                    <li>
                        C/C++
                    </li>
                    <li>
                        Java
                    </li>
                </ul>
            </Col>
          </Row>
        </TabPane>

        <TabPane tabId="3">
          <Row>
            <Col>
                <h4>Environment</h4>
                <ul class="list-unstyled">
                    <li>
                        Postman
                    </li>
                    <li>
                        GitHub
                    </li>
                    <li>
                        Heroku
                    </li>
                    <li>
                        Windows
                    </li>
                    <li>
                        Mac
                    </li>
                </ul>
            </Col>
          </Row>
        </TabPane>

        <TabPane tabId="4">
          <Row>
            <Col>
                <h4>Front-end</h4>
                <ul class="list-unstyled">
                    <li>
                        Bootstrap
                    </li>
                    <li>
                        React
                    </li>
                    <li>
                        Reactstrap
                    </li>
                    <li>
                        Redux/Sagas
                    </li>
                </ul>
            </Col>
          </Row>
        </TabPane>

        <TabPane tabId="5">
          <Row>
            <Col>
                <h4>Back-end</h4>
                <ul class="list-unstyled">
                    <li>
                        Express
                    </li>
                    <li>
                        Axios
                    </li>
                    <li>
                        AJAX
                    </li>
                    <li>
                        Jquery
                    </li>
                    <li>
                        REST API’s
                    </li>
                    <li>
                        Postico
                    </li>
                    <li>
                        PostgreSQL
                    </li>
                </ul>
            </Col>
          </Row>
        </TabPane>

      </TabContent>
    </div>
  );
}

export default Example;