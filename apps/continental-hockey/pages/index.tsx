import { SharedUiLogosEnum } from '@continental-hockey-next/shared/api';
import ReactLogo from '@continental-hockey-next/shared/ui/logos';
import { Fragment } from 'react';

const HomePage = () => {
  return (
    <Fragment>
      <ReactLogo
        logo={SharedUiLogosEnum.KILLER_BEES}
        width="150px"
        height="150px"
      />
    </Fragment>
  );
};

export default HomePage;
