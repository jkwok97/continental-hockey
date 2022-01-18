import { render } from '@testing-library/react';
import { SharedUiLogosEnum } from '../models';

import ReactLogo from './react-logo';

describe('ReactLogo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ReactLogo logo={SharedUiLogosEnum.KILLER_BEES} />
    );
    expect(baseElement).toBeTruthy();
  });
});
