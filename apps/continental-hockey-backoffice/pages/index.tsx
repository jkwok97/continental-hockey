import { Fragment } from 'react';

import SharedUiLogos, {
  SharedUiLogosEnum,
} from '@continental-hockey-next/shared/ui/logos';

const HomePage = () => {
  return (
    <Fragment>
      <SharedUiLogos logo={SharedUiLogosEnum.MUDBUGS} />
    </Fragment>
  );
};

export default HomePage;
