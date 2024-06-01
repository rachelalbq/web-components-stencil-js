import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'card-header-component',
    styleUrl: './card-header-component.css',
    shadow: true,
})
export class CardHeaderComponent {
    @Prop() data: Record<string, any>;

    render() {
        return (
            <div class="card-header">
                {this.data && <h3>{this.data['name']}</h3>}
            </div>
        );
    }
}
