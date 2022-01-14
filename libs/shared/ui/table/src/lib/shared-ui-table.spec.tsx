import { render } from '@testing-library/react';

import SharedUiTable from './shared-ui-table';

describe('SharedUiTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUiTable />);
    expect(baseElement).toBeTruthy();
  });
});
