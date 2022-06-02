import styled from 'styled-components/native';

const StyleImage = styled.Image`
  height: ${props => props.height.toString()}px;
  width: ${props => props.width.toString()}px;
  border-radius: ${props => props.borderRadius.toString()};
  over-flow: ${props => props.overFlow};
`;

export default StyleImage;
