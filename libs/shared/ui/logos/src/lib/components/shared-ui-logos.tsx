import Image from 'next/image';

import { SharedUiLogosEnum } from '../models';

import * as Logos from '../../assets';

export interface SharedUiLogosProps {
  logo: SharedUiLogosEnum;
  width?: string;
  height?: string;
}

const SharedUiLogos = (props: SharedUiLogosProps) => {
  const teamName = props.logo;

  return (
    <Image
      src={Logos[`${teamName}`]}
      alt="team logo"
      width="75px"
      height="75px"
    />
  );
};

export default SharedUiLogos;
