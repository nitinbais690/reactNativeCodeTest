import styled from 'styled-components/native';

const Wrapper = styled.View`
  background-color: ${props => props.backgroundColor};
  padding: ${props => (props.padding ? props.padding : 0)};
`;

export default Wrapper;
