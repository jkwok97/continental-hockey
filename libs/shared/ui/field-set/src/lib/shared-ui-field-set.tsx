import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SharedUiFieldSetProps {}

const StyledSharedUiFieldSet = styled.div`
  color: pink;
`;

export function SharedUiFieldSet(props: SharedUiFieldSetProps) {
  return (
    <StyledSharedUiFieldSet>
      <h1>Welcome to SharedUiFieldSet!</h1>
    </StyledSharedUiFieldSet>
  );
}

export default SharedUiFieldSet;
