import { default as React, Fragment, useState } from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';
import CountryDetails from './CountryDetails';
import './CountryList.css';

const CountryList = (props) => {

  const [show, setShow] = useState(false);
  const [country, setCountry] = useState(false);
  const handleClose = () => setShow(false);

  const itemClick = (country) => {
    setCountry(country);
    setShow(true);
  }

  return (
    <Fragment>
      <ListGroup>
        {props.countries && props.countries.map((x) => (
          <ListGroup.Item key={x.alpha3Code} className="list-item" onClick={() => itemClick(x)}>
            <div className="coutry">
              <div><img src={x.flag} className="flag-small" width="30px" /></div>
              <div>{x.name}</div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Country details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CountryDetails country={country} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default CountryList;


