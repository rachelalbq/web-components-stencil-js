import { Component, Host, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'card-component',
  styleUrl: './card-component.css',
  shadow: true,
})
export class CardComponent {
  @Prop() data: { [key: string]: any }[] = [];
  @State() expandedItem: { [key: string]: any } | null = null;
  
  toggleExpand(item: { [key: string]: any }) {
    this.expandedItem = item;
  }

  render() {
    return (
      <Host>
        {this.data.map((item) => (
          <div class="card" onClick={() => this.toggleExpand(item)}>
            <card-header-component data={item}></card-header-component>
            <card-body-component class={this.expandedItem === item ? '' : 'card-body'} data={item}></card-body-component> 
          </div>
        ))}
      </Host>
    );
  }
}