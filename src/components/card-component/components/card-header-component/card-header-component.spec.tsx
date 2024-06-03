import { newSpecPage } from '@stencil/core/testing';
import { CardHeaderComponent } from './card-header-component';

describe('CardHeaderComponent', () => {
  it('should render component with data', async () => {
    const page = await newSpecPage({
      components: [CardHeaderComponent],
      html: '<card-header-component></card-header-component>',
    });

    page.rootInstance.data = {
      name: 'user',
      image: 'image-url',
    };

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it('should not render component without data', async () => {
    const page = await newSpecPage({
      components: [CardHeaderComponent],
      html: '<card-header-component></card-header-component>',
    });

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });
});
