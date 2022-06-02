import styled from 'styled-components/native';

const RowContainer = styled.View`
  padding-bottom: ${props =>
    props.padding ? props.padding.toString() : '0'}px;
  flex-direction: row;
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'flex-start'};
`;

export default RowContainer;
