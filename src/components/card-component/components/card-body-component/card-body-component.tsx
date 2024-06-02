import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'card-body-component',
  styleUrl: './card-body-component.css',
  shadow: true
})
export class CardBodyComponent {
  @Prop() data: { [key: string]: any };

  render() {
    const excludeKeys = ['name', 'id', 'image'];

    return (
      <div class="card-body">
        {Object.keys(this.data).map(key => (
          !excludeKeys.includes(key) && (
            <div class="card-item">
              <strong class="visible">{key.charAt(0).toUpperCase() + key.slice(1)}: </strong>
              {Array.isArray(this.data[key]) ? (
                <ul>
                  {this.data[key].map(item => (
                    <li>{item}</li>
                  ))}
                </ul>
              ) : typeof this.data[key] === 'boolean' ? (
                <span>{this.data[key] ? 'Sim' : 'Não'}</span>
              ) : (
                <span>{this.data[key]}</span>
              )}
            </div>
          )
        ))}
      </div>
    );
  }
}
