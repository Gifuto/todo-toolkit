import styled from "styled-components";

export const TaskWrapper = styled.li`
  list-style-type: none;
  text-align: start;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  cursor: pointer;
`

export const TaskText = styled.span`
  font-size: 20px;
  font-family: 'Roboto';
`
export const TaskDell = styled.button`
  border: none;
  background: white;
  transition: 0.7s;
  padding: 10px;
  
  &:hover {
    background: red;
    color: white;
    cursor: pointer;
    transition: 0.7s;
    border-radius: 10px;
  }
`