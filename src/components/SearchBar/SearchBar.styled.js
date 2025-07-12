import styled from 'styled-components';

export const Search = styled.div`
  margin-left: 780px;
`;

export const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #555;
  border-radius: 4px;
  background-color: #222;
  color: #fff;

  &.input-error {
    border-color: #ff6347;
  }
`;

export const SearchBtn = styled.button`
  width: 37px;
  height: 37px;
  color: #555;
  background-color: #222;
  border: 1px solid #555;
  border-radius: 4px;
`;
