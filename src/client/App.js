import { ConnectedRouter } from 'connected-react-router'
import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Navbar from 'react-bootstrap/Navbar'
import { LinkContainer } from 'react-router-bootstrap'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import { Question1, Question2, Question3, Question4, Question5 } from './features'

export const App = props => {
  return (
    <ConnectedRouter history={props.history}>
      <Container>
        <Navbar bg="light" variant="light">
          <LinkContainer to="/">
            <Navbar.Brand href="">
              <b>Countries</b>
            </Navbar.Brand>
          </LinkContainer>
          <Nav activeKey="/">
            <Nav.Item>
              <LinkContainer to="/">
                <Nav.Link>Question 1</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to="/question2">
                <Nav.Link>Question 2</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to="/question3">
                <Nav.Link>Question 3</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to="/question4">
                <Nav.Link>Question 4</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to="/question5">
                <Nav.Link>Question 5</Nav.Link>
              </LinkContainer>
            </Nav.Item>
          </Nav>
        </Navbar>
        <ContentRow>
          <Switch>
            <Route exact path="/">
              <Question1 />
            </Route>
            <Route path="/question2">
              <Question2 />
            </Route>
            <Route path="/question3">
              <Question3 />
            </Route>
            <Route path="/question4">
              <Question4 />
            </Route>
            <Route path="/question5">
              <Question5 />
            </Route>
          </Switch>
        </ContentRow>
      </Container>
    </ConnectedRouter>
  )
}

const ContentRow = styled(Row)`
  padding: 20px;
`
