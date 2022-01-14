import { render } from '@testing-library/react';

import SharedUiFieldSet from './shared-ui-field-set';

describe('SharedUiFieldSet', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUiFieldSet />);
    expect(baseElement).toBeTruthy();
  });
});
