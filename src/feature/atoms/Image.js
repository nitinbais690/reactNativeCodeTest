import styled from 'styled-components';

const StyleImage = styled.Image`
  height: ${props => props.height};
  width: ${props => props.width};
  border-radius: ${props => props.radius};
  over-flow: ${props => props.overFlow};
`;

export default StyleImage;
