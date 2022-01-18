import { SharedUiLogosEnum } from '@continental-hockey-next/shared/api';
import ReactLogo from '@continental-hockey-next/shared/ui/logos';
import { Fragment } from 'react';

const HomePage = () => {
  return (
    <Fragment>
      <ReactLogo logo={SharedUiLogosEnum.MUDBUGS} />
    </Fragment>
  );
};

export default HomePage;
