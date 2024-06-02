import { Component, Host, Prop, h } from '@stencil/core';

@Component({
    tag: 'card-header-component',
    styleUrl: './card-header-component.css',
    shadow: true,
})
export class CardHeaderComponent {
    @Prop() data: Record<string, any>;

    render() {
        return (
            <Host>
                {this.data &&
                    <div class="card-header">
                        <img src={this.data.image} alt={this.data.name}/>
                        <strong>{this.data.name}</strong>
                    </div>
                }
            </Host>
        );
    }
}
