import styled from 'styled-components';

export const PaginationContainer = styled.div`
  margin: 50px auto;

  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    outline: none;
    height: 42px;
    gap: 5px;
  }

  .pagination > li > a {
    border: 1px solid #fff;
    padding: 7px 15px;
    outline: none;
    cursor: pointer;
    transition: all 250ms ease-out;
    border-radius: 50%;
    &:is(:hover, :focus) {
      background-color: #ffffffc5;
      border-color: #ffffffc5;
      outline: none;
      color: #eb3324;
      transform: scale(1.1);
    }
  }
  .pagination > .active > a {
    background-color: #fff;
    border-color: #fff;
    outline: none;
    color: #eb3324;
    transform: scale(1.1);
  }

  .pagination > li > a,
  .pagination > li > span {
    color: #c8c8c8;
  }
`;
