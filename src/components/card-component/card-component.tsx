import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'card-component',
  styleUrl: './card-component.css',
  shadow: true,
})
export class CardComponent {
  @Prop() data: Record<string, any>[];

  render() {
    return (
      <Host>
        {this.data.map((item) => (
          <div class="card">
            <card-header-component data={item}></card-header-component>
            <card-body-component class="card-body" data={item}></card-body-component>
          </div>
        ))}
      </Host>
    );
  }
}
