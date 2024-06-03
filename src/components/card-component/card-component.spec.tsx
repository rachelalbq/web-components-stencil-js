import { newSpecPage } from '@stencil/core/testing';
import { CardComponent } from './card-component';

describe('CardComponent', () => {
  it('should render component with data', async () => {
    const page = await newSpecPage({
      components: [CardComponent],
      html: '<card-component></card-component>',
    });

    page.rootInstance.data = [
      {
        name: 'user',
        id: 1,
        image: 'image-url',
        age: 30,
        email: 'user@example.com',
        active: true,
        hobbies: ['Reading', 'Gaming'],
      },
    ];

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it('should expand item on click', async () => {
    const page = await newSpecPage({
      components: [CardComponent],
      html: '<card-component></card-component>',
    });

    page.rootInstance.data = [
      {
        name: 'user',
        id: 1,
        image: 'image-url',
        age: 30,
        email: 'user@example.com',
        active: true,
        hobbies: ['Reading', 'Gaming'],
      },
    ];

    await page.waitForChanges();

    const cardElement = page.root.shadowRoot.querySelector('.card');
    cardElement.dispatchEvent(new MouseEvent('click'));

    expect(page.rootInstance.expandedItem).toEqual(page.rootInstance.data[0]);
  });
});
