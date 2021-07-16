import styled from "@emotion/styled/macro";
export const Form = styled.form`
  padding: 15px;
`;
export const Button = styled.button`
  box-sizing: border-box;
  background-color: transparent;
  border: 2px solid #e74c3c;
  border-radius: 0.6em;
  color: #e74c3c;
  cursor: pointer;
  line-height: 1;
  padding: 1.2em 2.8em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 3em;
  border-color: #2ecc71;
  color: #2ecc71;
  margin-top: 15px;
  width: 200px;
  background-image: linear-gradient(to bottom, transparent 50%, #2ecc71 50%);

  &:hover {
    color: #fff;
    background-position: 0 100%;
  }
`;
export const Label = styled.label`
  color: #2ecc71;
`;

export const Input = styled.input`
  width: 180px;
  padding: 10px;
  border-radius: 1em;
  background-color: #2ecc71;
  outline: none;
  &:focus {
    background-color: #9bb9e9;
  }
  &::placeholder {
    color: #5f91e2;
  }
`;
