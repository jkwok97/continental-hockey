import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SharedUiInputProps {}

const StyledSharedUiInput = styled.div`
  color: pink;
`;

export function SharedUiInput(props: SharedUiInputProps) {
  return (
    <StyledSharedUiInput>
      <h1>Welcome to SharedUiInput!</h1>
    </StyledSharedUiInput>
  );
}

export default SharedUiInput;
