import React from 'react';
import { Link, navigate } from 'gatsby';
import styled from 'styled-components';
import Logo from '../components/Logo';

const NavStyles = styled.nav`
  margin-bottom: 3rem;
  .logo {
    transform: translateY(-25%);
  }
  ul {
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr auto 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
    text-align: center;
    list-style: none;
    margin-top: -6rem;
  }
  li {
    transform: rotate(-2deg);
    order: 1;
    &:nth-child(1) {
      transform: rotate(1deg);
    }
    &:nth-child(2) {
      transform: rotate(-2.5deg);
    }
    &:nth-child(4) {
      transform: rotate(2.5deg);
    }
    &:hover {
      transform: rotate(3deg);
    }
  }
  a {
    font-size: 3rem;
    text-decoration: none;
    &:hover {
      color: var(--red);
    }
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/">Hot Now</Link>
        </li>
        <li>
          <Link to="/pizzas">Pizza Menu</Link>
        </li>
        <li>
          <Link to="/"><Logo /></Link>
        </li>
        <li>
          <Link to="/slicemasters">SliceMasters</Link>
        </li>
        <li>
          <Link to="/order">Order Here!</Link>
        </li>
      </ul>
    </NavStyles>
  );
}
