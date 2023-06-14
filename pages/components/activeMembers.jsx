import React from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';


const ActiveMembers = () => {
  return (
    <div className="section mt-116 active_members container_custom row">
        <div className="content col-md-12">
            <div className="row">
                <div className="nav_titles">Valuable Team</div>
            </div>
            <div className="row title">
                    <h1> Our Active Members</h1>
            </div>
            <div className="row col-md-12">
                <p>when an unknown printer took a galley of type and meeting fari scrambled it.</p>
            </div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="third">
            <Row className="table_row">
              <Col sm={5}>
                <Nav variant="pills" className="flex-column">
                <Nav.Item>
                    <Nav.Link eventKey="second" className='tabs_titles'>Newst</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="first" className='tabs_titles'>Popular</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third" className='tabs_titles'>Active</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={12} className="account_row">
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                 
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
                  <Tab.Pane eventKey="third">
                  <div className="col-12 row accounts">
                      <div className="card col-3">
                          <div className="card-body">
                          <div>
                              <img src="/images/cha.png" alt="" />
                              <img className="ellipse_image" src="/images/Ellipse 22.png" alt="" />
                              <div className="account-verification">
                                <i className="fa fa-check"></i>
                              </div>
                            </div>
                              <a className="row member_name" href="#" >Fahim Rahman</a>
                              <a className="row member_account" href="#" >@Master</a>
                          </div>
                      </div>
                      <div className="card col-3">
                          <div className="card-body">
                          <div>
                              <img src="/images/cha.png" alt="" />
                              <img className="ellipse_image" src="/images/Ellipse 22.png" alt="" />
                              <div className="account-verification">
                                <i className="fa fa-check"></i>
                              </div>
                            </div>
                              <a className="row member_name" href="#" >Fahim Rahman</a>
                              <a className="row member_account" href="#" >@Master</a>
                          </div>
                      </div>
                      <div className="card col-3">
                          <div className="card-body">
                          <div>
                              <img src="/images/cha.png" alt="" />
                              <img className="ellipse_image" src="/images/Ellipse 22.png" alt="" />
                              <div className="account-verification">
                                <i className="fa fa-check"></i>
                              </div>
                            </div>
                              <a className="row member_name" href="#" >Fahim Rahman</a>
                              <a className="row member_account" href="#" >@Master</a>
                          </div>
                      </div>
                      <div className="card col-3">
                          <div className="card-body dashed-border">
                            <div>
                              <img src="/images/cha.png" alt="" />
                              <img className="ellipse_image" src="/images/Ellipse 22.png" alt="" />
                              <div className="account-verification">
                                <i className="fa fa-check"></i>
                              </div>
                            </div>
                              <a className="row member_name" href="#" >Fahim Rahman</a>
                              <a className="row member_account" href="#" >@Master</a>
                          </div>
                      </div>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
        
    </div>
       
  );
};

export default ActiveMembers;