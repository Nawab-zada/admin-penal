import Baner from '../images/baner.png';
import './Adminpnl.css';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dropdown from 'react-bootstrap/Dropdown';
import Calendar from 'react-calendar';
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function Adminpnl() {
 
  const [startDate, setStartDate] = useState(new Date());
  return (
 <>
  
            {/* <Calendar value={date} onChange={(e) => setDate(e.value)} /> */}
       
      <Container>
        <Row>
          <Col xxl={12} xl={12} lg={12} md={12} sm={12}>
            <div className='bg_img' style={{ backgroundImage: `url(${Baner})` }}>
            </div>
          </Col>

          <Col xxl={12} xl={12} lg={12} md={12} sm={12} className='mt-5 '>
            <h4 className=' blue'><span className='pe-2  '><FontAwesomeIcon icon="fa-solid fa-circle-check" /></span>One Way</h4>
            <Row>
              <Col xxl={3} xl={3} lg={3} md={12} sm={12} className='mt-5'>
                <p className='my-0'>From</p>
                <Dropdown className=''>
                  <Dropdown.Toggle variant="success" id="dropdown-basic" className='dropdown_btn'>
                    <span className='pe-2 blue'><FontAwesomeIcon icon="fa-solid fa-plane-departure" /></span> Leave From
                  </Dropdown.Toggle >
                  <Dropdown.Menu className='dropdown_tgle'>
                    <Dropdown.Item href="#/action-1"><span className='blue'><FontAwesomeIcon icon="fa-solid fa-plane-up" /></span><b>Islambad, Pakistan <span className='blue'>ISB</span></b></Dropdown.Item>
                    <Dropdown.Item href="#/action-2"><span className='blue'><FontAwesomeIcon icon="fa-solid fa-plane-up" /></span><b>Lahore, Pakistan <span className='blue'>LHR</span></b></Dropdown.Item>
                    <Dropdown.Item href="#/action-3"><span className='blue'><FontAwesomeIcon icon="fa-solid fa-plane-up" /></span><b>Bahawalpur, Pakistan <span className='blue'>BHV</span></b></Dropdown.Item>
                    <Dropdown.Item href="#/action-3"><span className='blue'><FontAwesomeIcon icon="fa-solid fa-plane-up" /></span><b>Bannu, Pakistan <span className='blue'>BHp</span></b></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>

              <Col xxl={3} xl={3} lg={3} md={12} sm={12} className='mt-5'>
                <p className='my-0'>To</p>
                <Dropdown className=''>
                  <Dropdown.Toggle variant="success" id="dropdown-basic" className='dropdown_btn'>
                    <span className='pe-2 blue'><FontAwesomeIcon icon="fa-solid fa-plane-arrival" /></span> Going To
                  </Dropdown.Toggle>
                  <Dropdown.Menu className='dropdown_tgle '>
                    <Dropdown.Item href="#/action-1"><span className='blue'><FontAwesomeIcon icon="fa-solid fa-plane-up" /></span><b>Islambad, Pakistan <span className='blue'>ISB</span></b></Dropdown.Item>
                    <Dropdown.Item href="#/action-2"><span className='blue'><FontAwesomeIcon icon="fa-solid fa-plane-up" /></span><b>Lahore, Pakistan <span className='blue'>LHR</span></b></Dropdown.Item>
                    <Dropdown.Item href="#/action-3"><span className='blue'><FontAwesomeIcon icon="fa-solid fa-plane-up" /></span><b>Bahawalpur, Pakistan <span className='blue'>BHV</span></b></Dropdown.Item>
                    <Dropdown.Item href="#/action-3"><span className='blue'><FontAwesomeIcon icon="fa-solid fa-plane-up" /></span><b>Bannu, Pakistan <span className='blue'>BHp</span></b></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>

              <Col xxl={3} xl={3} lg={3} md={12} sm={12} className='mt-5'>
                <p className='my-0'>Departure Date</p>
                <div className='d-flex btndate'>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='input_btn' /> 
                  </div>
              </Col>

              <Col xxl={3} xl={3} lg={3} md={12} sm={12} className='mt-5'>
                <p className='my-0'>Return Date</p>
                <div className='d-flex btndate'>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='input_btn' /> 
                  </div>
              </Col>
            </Row>
          </Col>

          <Col xxl={12} xl={12} lg={12} md={12} sm={12} className=''>
            <Row>
              <Col xxl={3} xl={3} lg={3} md={12} sm={12} className='mt-4'>
                <p className='my-0'>Traveler</p>
                <Dropdown className=''>
                  <Dropdown.Toggle variant="success" id="dropdown-basic" className='dropdown_btn'>
                    <span className='pe-2 blue'><FontAwesomeIcon icon="fa-solid fa-wheelchair" /></span> 1 Adult | 0 Child
                  </Dropdown.Toggle>
                  <Dropdown.Menu className='dropdown_tgle '>
                    <Dropdown.Item href="#/action-1"><span className='blue'><FontAwesomeIcon icon="fa-solid fa-plane-up" /></span><b>Islambad, Pakistan <span className='blue'>ISB</span></b></Dropdown.Item>
                    <Dropdown.Item href="#/action-2"><span className='blue'><FontAwesomeIcon icon="fa-solid fa-plane-up" /></span><b>Lahore, Pakistan <span className='blue'>LHR</span></b></Dropdown.Item>
                    <Dropdown.Item href="#/action-3"><span className='blue'><FontAwesomeIcon icon="fa-solid fa-plane-up" /></span><b>Bahawalpur, Pakistan <span className='blue'>BHV</span></b></Dropdown.Item>
                    <Dropdown.Item href="#/action-3"><span className='blue'><FontAwesomeIcon icon="fa-solid fa-plane-up" /></span><b>Bannu, Pakistan <span className='blue'>BHp</span></b></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>

              <Col xxl={3} xl={3} lg={3} md={12} sm={12} className='mt-4'>
                <p className='my-0'>Cabin Class</p>
                <Dropdown className=''>
                  <Dropdown.Toggle variant="success" id="dropdown-basic" className='dropdown_btn'>
                     Economy
                  </Dropdown.Toggle>
                  <Dropdown.Menu className='dropdown_tgle '>
                    <Dropdown.Item href="#/action-1"><span className='blue'><FontAwesomeIcon icon="fa-solid fa-plane-up" /></span><b>Islambad, Pakistan <span className='blue'>ISB</span></b></Dropdown.Item>
                    <Dropdown.Item href="#/action-2"><span className='blue'><FontAwesomeIcon icon="fa-solid fa-plane-up" /></span><b>Lahore, Pakistan <span className='blue'>LHR</span></b></Dropdown.Item>
                    <Dropdown.Item href="#/action-3"><span className='blue'><FontAwesomeIcon icon="fa-solid fa-plane-up" /></span><b>Bahawalpur, Pakistan <span className='blue'>BHV</span></b></Dropdown.Item>
                    <Dropdown.Item href="#/action-3"><span className='blue'><FontAwesomeIcon icon="fa-solid fa-plane-up" /></span><b>Bannu, Pakistan <span className='blue'>BHp</span></b></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>

              <Col xxl={3} xl={3} lg={3} md={12} sm={12} className='mt-4'>
                <div className='mt-4'>
                  <Button className='search_btn'>Search Flights</Button>
                </div>
              </Col>

              <Col xxl={3} xl={3} lg={3} md={12} sm={12} className='mt-3'>

              </Col>
            </Row>
          </Col>

        </Row>
      </Container>

    </>
  );
}

export default Adminpnl;
