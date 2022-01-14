import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SharedUiCardProps {}

const StyledSharedUiCard = styled.div`
  color: pink;
`;

export function SharedUiCard(props: SharedUiCardProps) {
  return (
    <StyledSharedUiCard>
      <h1>Welcome to SharedUiCard!</h1>
    </StyledSharedUiCard>
  );
}

export default SharedUiCard;
