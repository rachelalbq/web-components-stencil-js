import { Component, h } from '@stencil/core'

@Component({
    tag: 'input-component',
    styleUrl: './input.css',
    shadow: true
})

export class InputComponent {

    render() {
        return <h1>Input</h1>
    }
}
