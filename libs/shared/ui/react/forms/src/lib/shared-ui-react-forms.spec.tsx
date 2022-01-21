import { render } from '@testing-library/react';

import SharedUiReactForms from './shared-ui-react-forms';

describe('SharedUiReactForms', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUiReactForms />);
    expect(baseElement).toBeTruthy();
  });
});
