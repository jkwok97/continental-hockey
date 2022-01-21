import { SharedUiLogosEnum } from '@cha/shared/api';
import ReactLogo from '@cha/shared/ui/logos';
import { Fragment } from 'react';

const HomePage = () => {
  return (
    <Fragment>
      <ReactLogo logo={SharedUiLogosEnum.MUDBUGS} />
    </Fragment>
  );
};

export default HomePage;
