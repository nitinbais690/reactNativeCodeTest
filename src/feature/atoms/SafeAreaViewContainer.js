import styled from 'styled-components';

const SafeAreaViewContainer = styled.SafeAreaView`
  height: 80px;
  background-color: ${props => props.backgroundColor};
  align-items: center;
`;

export default SafeAreaViewContainer;
