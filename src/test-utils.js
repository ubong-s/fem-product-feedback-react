import { render } from '@testing-library/react';
import { AllProviders } from './providers/AllProviders';

const customRender = (ui, options) =>
  render(ui, { wrapper: AllProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
