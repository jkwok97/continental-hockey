import { Fragment } from 'react';

import SharedUiLogos, {
  SharedUiLogosEnum,
} from '@continental-hockey-next/shared/ui/logos';

const HomePage = () => {
  return (
    <Fragment>
      <SharedUiLogos
        logo={SharedUiLogosEnum.KILLER_BEES}
        width="150px"
        height="150px"
      />
    </Fragment>
  );
};

export default HomePage;
