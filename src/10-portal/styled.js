import styled from 'styled-components';

// DivStyled是组件
const Wrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2)
`

const Center = styled.div`
  position: absolute;
  width: 400px;
  height: 300px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  background: #fff;
`

export { Wrap, Center };