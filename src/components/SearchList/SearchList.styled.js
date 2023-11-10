import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieLink = styled(Link)`
  width: 264px;
  background-image: linear-gradient(to right, violet, pink);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  & img {
    border-radius: 4px 4px 0px 0px;
  }
  & h3 {
    height: 63px;
    display: flex;
    text-align: center;
    align-items: center;
  }
`;
