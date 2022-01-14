import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SharedUiTableProps {}

const StyledSharedUiTable = styled.div`
  color: pink;
`;

export function SharedUiTable(props: SharedUiTableProps) {
  return (
    <StyledSharedUiTable>
      <h1>Welcome to SharedUiTable!</h1>
    </StyledSharedUiTable>
  );
}

export default SharedUiTable;
