import styled from 'styled-components/native';

const SafeAreaViewContainer = styled.SafeAreaView`
  height: ${props => (props.height ? props.height.toString() : '0')}px;
  background-color: ${props => props.backgroundColor};
  align-items: center;
  justify-content: center;
`;

export default SafeAreaViewContainer;
