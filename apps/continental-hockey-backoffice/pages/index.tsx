import { Fragment } from 'react';

import SharedUiLogos, {
  SharedUiLogosEnum,
} from '@continental-hockey-next/shared/ui/logos';

const HomePage = () => {
  return (
    <Fragment>
      <SharedUiLogos logo={SharedUiLogosEnum.STELLAR_JAYS} />
    </Fragment>
  );
};

export default HomePage;
