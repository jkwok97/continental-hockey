import { render } from '@testing-library/react';

import SharedUiLogos from './shared-ui-logos';

describe('SharedUiLogos', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUiLogos logo={''} />);
    expect(baseElement).toBeTruthy();
  });
});
