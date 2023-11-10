import styled from 'styled-components';

export const PaginationContainer = styled.div`
  margin: 25px auto;
  @media (min-width: 500px) {
    margin: 50px auto;
  }
  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    outline: none;
    height: 42px;
    gap: 3px;
    @media (min-width: 500px) {
      gap: 5px;
    }
  }

  .pagination > li > a {
    border: 1px solid #fff;
    padding: 2px 7px;
    outline: none;
    transition: all 250ms ease-out;
    border-radius: 50%;
    cursor: pointer;

    @media (min-width: 500px) {
      padding: 7px 15px;
    }
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

  .pagination > li > a {
    color: #c8c8c8;
  }
`;
