import { render } from '@testing-library/react';

import SaltDS from './saltDS';

describe('SaltDS', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SaltDS />);
    expect(baseElement).toBeTruthy();
  });
});
