import styled from 'styled-components';

export const CategoryStyled = styled.div`
  padding-bottom: 34px;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;

  border-bottom: 1px solid grey;
`;

export const CategoryTitleStyled = styled.p`
  font-size: 24px;
  margin-bottom: 18px;
`;

export const ShowMoreBtn = styled.button`
  display: block;
  height: 35px;
  margin-left: auto;

  font-size: 16px;
  color: gray;
  background-color: transparent;

  border: 2px solid #ad9236;
  border-radius: 10px;

  &:hover {
    border: 2px solid yellow;
    color: #ad9236;
  }
`;
