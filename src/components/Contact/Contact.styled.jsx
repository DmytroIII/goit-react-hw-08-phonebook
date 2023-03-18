import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  font-size: 18px;
  min-width: 292px;
  width: 100%;
  padding: 8px 0px;
  transition: border-bottom 250ms linear, background-color 250ms linear, color 250ms linear;
  border-bottom: 1px solid rgba(0, 0, 0, 0.54);
  :hover {
    border-bottom: 1px solid #1363df;
    color: #003380;
    /* box-shadow: 3px 6px 6px rgba(0, 0, 0, 0.15); */
    text-shadow: 3px 6px 6px rgba(0, 0, 0, 0.15);
    /* :hover > svg {
      transition: color 250ms linear;
      color: #1363df;
    } */
    :hover > div {
      transition: background-color 250ms linear, color 250ms linear;
      background-color: #e74c3c;
      color: #fafafa;
    }
  }
`;

export const DeleteContact = styled.button`
  display: flex;
  justify-content: center;
  margin-left: auto;
  background: transparent;
  border: none;
  cursor: pointer;  
  :hover > svg {
    transition: color 150ms linear;
    color: tomato;
  }
`;

export const Circle = styled.div`
margin-top: 3px;
width: 30px;
height: 30px;
border-radius: 50%;
background-color: #e74c3c;
justify-content: center;
align-items: center;
display: flex;
margin-right: 10px;
`;