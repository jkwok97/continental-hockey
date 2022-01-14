import { render } from '@testing-library/react';

import SharedUiTab from './shared-ui-tab';

describe('SharedUiTab', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUiTab />);
    expect(baseElement).toBeTruthy();
  });
});
