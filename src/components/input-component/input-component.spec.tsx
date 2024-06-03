import { newSpecPage } from '@stencil/core/testing';
import { InputComponent } from './input-component';

describe('input-component', () => {
  it('should emit input event on input', async () => {
    const page = await newSpecPage({
      components: [InputComponent],
      html: `<input-component 
                label="Nome do personagem" 
                placeholder="Search" 
                icon="search-icon" 
                onInputEvent={(event) => this.handleSearch(event)}>
              </input-component>`,
    });

    expect(page.root).toBeTruthy();

    const inputComponent = page.rootInstance as InputComponent;

    const inputEventSpy = jest.spyOn(inputComponent.inputEvent, 'emit');

    const input = page.root.shadowRoot.querySelector('input');

    if (input) {
      input.value = 'Test Input';
      input.dispatchEvent(new Event('input'));
    }

    expect(inputEventSpy).toHaveBeenCalledTimes(1);
    expect(inputEventSpy).toHaveBeenCalledWith('Test Input');
  });
});
