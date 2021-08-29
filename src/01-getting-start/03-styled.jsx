import styled from 'styled-components';

// DivStyled是组件
const DivStyled = styled.div`
  background: red;
  color: green;
  font-size: ${ (props) => props.primary }
`

export { DivStyled };