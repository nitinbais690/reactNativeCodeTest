import styled from 'styled-components';

const StyleText = styled.Text`
  font-size: ${props => props.fontSize}px;
  color: ${props => props.color};
  font-weight: ${props => props.fontWeight};
`;

export default StyleText;
