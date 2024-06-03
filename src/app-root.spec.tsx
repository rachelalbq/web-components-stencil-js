import { newSpecPage } from '@stencil/core/testing';
import { AppRoot } from './app-root';

describe('AppRoot', () => {
  it('should render component with data', async () => {
    const page = await newSpecPage({
      components: [AppRoot],
      html: '<app-root></app-root>',
    });

    const component = page.rootInstance;

    expect(component.searchQuery).toBe('');
    expect(component.totalPages).toBe(5);
    expect(component.activePage).toBe(1);
    expect(component.data.length).toBeGreaterThan(0);

    await page.waitForChanges();

    const pagination = page.root.shadowRoot.querySelector('pagination-component');

    expect(pagination).not.toBeNull();

    if (pagination) {
      pagination.dispatchEvent(new CustomEvent('change', { detail: { page: 1 } }));

      await page.waitForChanges();

      expect(component.activePage).toBe(1);
    } else {
      throw new Error('Pagination component not found');
    }
  });
});
