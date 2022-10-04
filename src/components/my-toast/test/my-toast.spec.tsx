import { newSpecPage } from '@stencil/core/testing';
import { MyToast } from '../my-toast';

describe('my-toast', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyToast],
      html: `<my-toast></my-toast>`,
    });
    expect(page.root).toEqualHtml(`
      <my-toast>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-toast>
    `);
  });
});
