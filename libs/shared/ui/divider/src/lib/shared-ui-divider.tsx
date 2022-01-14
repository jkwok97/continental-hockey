import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SharedUiDividerProps {}

const StyledSharedUiDivider = styled.div`
  color: pink;
`;

export function SharedUiDivider(props: SharedUiDividerProps) {
  return (
    <StyledSharedUiDivider>
      <h1>Welcome to SharedUiDivider!</h1>
    </StyledSharedUiDivider>
  );
}

export default SharedUiDivider;
