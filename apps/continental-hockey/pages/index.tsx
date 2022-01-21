import { SharedUiLogosEnum } from '@cha/shared/api';
import ReactLogo from '@cha/shared/ui/logos';
import ReactButton from '@cha/shared/ui/react/button';
import { Fragment } from 'react';

const HomePage = () => {
  return (
    <Fragment>
      <ReactLogo
        logo={SharedUiLogosEnum.KILLER_BEES}
        width="150px"
        height="150px"
      />

      <ReactButton label="CHA" hasIcon={false} />
    </Fragment>
  );
};

export default HomePage;
