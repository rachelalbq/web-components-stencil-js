    import { Component, Prop, h } from '@stencil/core';

    @Component({
        tag: 'card-component',
        styleUrl: './card-component.css',
        shadow: true,
    })
    export class CardComponent {
        @Prop() data: Record<string, any>;

        render() {
            return (
                <div class="card">
                  <card-header-component data={this.data}></card-header-component>
                  <card-body-component data={this.data}></card-body-component>
                </div>
              );
        }
    }
