import { Component, Host, h } from '@stencil/core'

@Component({
    tag: 'app-home',
    styleUrl: './home.css',
    shadow: true
})

export class Home {
    render() {
        return (
            <Host>
                <input-component></input-component>
                <card-component></card-component>
                <pagination-component></pagination-component>
            </Host>
        )
    }
}