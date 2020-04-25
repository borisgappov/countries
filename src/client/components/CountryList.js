import { default as React, Fragment, useState } from 'react'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import Modal from 'react-bootstrap/Modal'
import styled from 'styled-components'

import { CountryDetails } from './CountryDetails'

export const CountryList = props => {
  const [show, setShow] = useState(false)
  const [country, setCountry] = useState(false)
  const handleClose = () => setShow(false)

  const itemClick = country => {
    setCountry(country)
    setShow(true)
  }

  return (
    <Fragment>
      <ListGroup>
        {props.countries &&
          props.countries.map(x => (
            <ListItem key={x.alpha3Code} onClick={() => itemClick(x)}>
              <Country>
                <Flag src={x.flag} />
                <div>{x.name}</div>
              </Country>
            </ListItem>
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
  )
}

const ListItem = styled(ListGroup.Item)`
  cursor: pointer;
`

const Country = styled.div`
  display: flex;
  padding: 5px;
  max-width: 350px;
`

const Flag = styled.img`
  width: 40px;
  height: 24px;
  margin-right: 20px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.19);
`
