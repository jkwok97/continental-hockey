import Image from 'next/image';

import { SharedUiLogosEnum } from '@cha/shared/api';

import * as Logos from '../../assets';

export interface SharedUiLogosProps {
  logo: SharedUiLogosEnum;
  width?: string | null;
  height?: string | null;
}

const ReactLogo = (props: SharedUiLogosProps) => {
  const teamName = props.logo;
  const width = props.width || '75px';
  const height = props.height || '75px';

  return (
    <Image
      src={Logos[`${teamName}`]}
      alt={props.logo}
      width={width}
      height={height}
    />
  );
};

export default ReactLogo;
