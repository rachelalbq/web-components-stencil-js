import { newSpecPage } from '@stencil/core/testing';
import { CardBodyComponent } from './card-body-component';

describe('CardBodyComponent', () => {
  it('should render component with data', async () => {
    const testData = {
      name: 'User',
      id: 1,
      image: 'image-url',
      age: 30,
      email: 'user@example.com',
      active: true,
      hobbies: ['Reading', 'Gaming']
    };

    const page = await newSpecPage({
      components: [CardBodyComponent],
      html: `<card-body-component></card-body-component>`
    });

    page.rootInstance.data = testData;

    await page.waitForChanges();

    const renderedComponent = page.root.shadowRoot.querySelector('.card-body');

    expect(renderedComponent).toBeTruthy();

    expect(renderedComponent.innerHTML).toContain('<div class="card-item"><strong class="visible">Age: </strong><span>30</span></div>');
    expect(renderedComponent.innerHTML).toContain('<div class="card-item"><strong class="visible">Email: </strong><span>user@example.com</span></div>');
    expect(renderedComponent.innerHTML).toContain('<div class="card-item"><strong class="visible">Active: </strong><span>Sim</span></div>');
    expect(renderedComponent.innerHTML).toContain('<div class="card-item"><strong class="visible">Hobbies: </strong><ul><li>Reading</li><li>Gaming</li></ul></div>');
  });

  it('should not render excluded keys', async () => {
    const testData = {
      name: 'User',
      id: 1,
      image: 'image-url',
      age: 30,
      email: 'user@example.com',
      active: true,
      hobbies: ['Reading', 'Gaming']
    };

    const page = await newSpecPage({
      components: [CardBodyComponent],
      html: `<card-body-component></card-body-component>`
    });

    page.rootInstance.data = testData;

    await page.waitForChanges();

    const renderedComponent = page.root.shadowRoot.querySelector('.card-body');

    expect(renderedComponent.innerHTML).not.toContain('<strong class="visible">Name: </strong>');
    expect(renderedComponent.innerHTML).not.toContain('<strong class="visible">Id: </strong>');
    expect(renderedComponent.innerHTML).not.toContain('<strong class="visible">Image: </strong>');
  });
});
