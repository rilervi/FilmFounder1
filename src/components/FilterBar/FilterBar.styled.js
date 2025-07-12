import styled from 'styled-components';

export const StyledForm = styled.form`
  padding: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: flex-end;
`;

export const FormGroup = styled.div``;

export const FormLabel = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
`;

export const FormInput = styled.input`
  padding: 10px;
  border: 1px solid #555;
  border-radius: 4px;
  background-color: #222;
  color: #fff;

  &.input-error {
    border-color: #ff6347;
  }
`;

export const FormSelect = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #555;
  border-radius: 4px;
  background-color: #222;
  color: #fff;
`;

export const ErrorMessage = styled.span`
  color: #ff6347;
  font-size: 12px;
  margin-left: 5px;
`;

export const SubmitButton = styled.button`
  display: block;
  height: 37px;
  padding: 0 10px;
  border: none;
  border-radius: 4px;
  background-color: #ff6347;
  color: #fff;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #ff4500;
  }
`;
