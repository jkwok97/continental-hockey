import { render } from '@testing-library/react';

import SharedUiDivider from './shared-ui-divider';

describe('SharedUiDivider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUiDivider />);
    expect(baseElement).toBeTruthy();
  });
});
