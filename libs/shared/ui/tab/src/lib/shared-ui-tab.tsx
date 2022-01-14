import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SharedUiTabProps {}

const StyledSharedUiTab = styled.div`
  color: pink;
`;

export function SharedUiTab(props: SharedUiTabProps) {
  return (
    <StyledSharedUiTab>
      <h1>Welcome to SharedUiTab!</h1>
    </StyledSharedUiTab>
  );
}

export default SharedUiTab;
