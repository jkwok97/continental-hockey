import { render } from '@testing-library/react';

import SharedUiCard from './shared-ui-card';

describe('SharedUiCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUiCard />);
    expect(baseElement).toBeTruthy();
  });
});
