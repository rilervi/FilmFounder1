import styled from 'styled-components';

export const PageSection = styled.section`
  display: flex;
  align-items: center;
  height: 90vh;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;

  padding: 20px;
  background-color: #2c2c2c;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  .auth {
    font-size: 20px;
    margin-bottom: 20px;
  }

  .link-to {
    margin-bottom: 20px;
  }
  .linkl {
    color: yellow;
    text-decoration: underline;
  }
`;

export const FormGroup = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 300px;
  padding: 10px;
  background-color: #1c1c1c;
  border: 1px solid #444;
  border-radius: 4px;
  color: #fff;
  &:focus {
    outline: none;
    border-color: #777;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #2c2c2c;
  color: #888;
  padding: 0 5px;
  transition: 0.3s;
  ${Input}:focus + & {
    top: -10px;
    left: 10px;
    font-size: 12px;
    color: #fff;
  }
  ${Input}:not(:placeholder-shown) + & {
    top: -10px;
    left: 10px;
    font-size: 12px;
  }
`;

export const ErrorMessage = styled.span`
  color: #ff6b6b;
  font-size: 12px;
  margin-top: 5px;
  display: block;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #3a3a3a;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`;
