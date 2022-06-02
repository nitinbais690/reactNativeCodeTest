import styled from 'styled-components/native';

const StyleText = styled.Text`
  font-size: ${props => (props.fontSize ? props.fontSize.toString() : '0')}px;
  color: ${props => props.color};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 'normal')};
`;

export default StyleText;
