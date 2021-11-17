import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import {NavLink} from "react-router-dom";
import { Account } from "./Account";
import { Avatar, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';
export const HeaderMenu = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as = {NavLink} to="/">Anime TOP</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as = {NavLink} to="/">Home</Nav.Link>
          <Nav.Link as = {NavLink} to="/Search">Search Anime</Nav.Link>
          <Nav.Link as = {NavLink} to="/MyTop">My Top</Nav.Link>
          <Nav.Link as = {NavLink} to="/TopAnime">Top Anime</Nav.Link>
          {/* <Nav.Link as = {NavLink} to="/Login">Login</Nav.Link> */}
          
        </Nav>
        <Account/>
      </Container>
    </Navbar>
  )
}
