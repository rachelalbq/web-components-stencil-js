import { Component, h } from '@stencil/core'

@Component({
    tag: 'pagination-component',
    styleUrl: './pagination.css',
    shadow: true
})

export class PaginationComponent {
    render() {
        return <h1>Pagination</h1>
    }
}