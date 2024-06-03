import { newSpecPage } from '@stencil/core/testing';
import { PaginationComponent } from './pagination-component';

describe('PaginationComponent', () => {
  it('should emit pageChange event when a page button is clicked', async () => {
    const page = await newSpecPage({
      components: [PaginationComponent],
      html: '<pagination-component total-pages="3" active-page="1"></pagination-component>',
    });

    const emittedValues: number[] = [];

    page.root.addEventListener('pageChange', (event: CustomEvent<number>) => {
      emittedValues.push(event.detail);
    });


    const prevPageButton = page.root.shadowRoot.querySelector('.pagination button:nth-child(1)');
    prevPageButton.dispatchEvent(new MouseEvent('click'));

    await page.waitForChanges();

    expect(emittedValues.length).toBe(1);
    expect(emittedValues[0]).toBe(0);

    const currentPageButton = page.root.shadowRoot.querySelector('.pagination button:nth-child(2)');
    currentPageButton.dispatchEvent(new MouseEvent('click'));

    await page.waitForChanges();

    expect(emittedValues.length).toBe(2);
    expect(emittedValues[1]).toBe(1);

    const nextPageButton = page.root.shadowRoot.querySelector('.pagination button:nth-child(3)');
    nextPageButton.dispatchEvent(new MouseEvent('click'));

    await page.waitForChanges();

    expect(emittedValues.length).toBe(3);
    expect(emittedValues[2]).toBe(2);
  });
});
