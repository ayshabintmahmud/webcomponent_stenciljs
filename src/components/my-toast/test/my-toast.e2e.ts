import { newE2EPage } from '@stencil/core/testing';

describe('my-toast', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-toast></my-toast>');

    const element = await page.find('my-toast');
    expect(element).toHaveClass('hydrated');
  });
});
