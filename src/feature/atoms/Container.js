import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.backgroundColor};
  padding: ${props => (props.padding ? props.padding : 0)};
`;

export default Container;
