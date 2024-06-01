import { Component, h } from '@stencil/core'

@Component({
    tag: 'card-component',
    styleUrl: './card.css',
    shadow: true
})


export class CardComponent {
    render() {
        return <h1>Card</h1>
    }
}