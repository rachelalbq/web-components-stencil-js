import { Component, Prop, State, h, Event, EventEmitter, Watch } from '@stencil/core';

@Component({
    tag: 'pagination-component',
    styleUrl: './pagination-component.css',
    shadow: true
})

export class PaginationComponent {
    @Prop() totalPages: number;
    @Prop() activePage: number;
    @Event() pageChange: EventEmitter<number>;
    @State() pages: number[] = [];

    componentWillLoad() {
        this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    }

    @Watch('totalPages')
    totalPagesChanged(newValue: number, oldValue: number) {
        if (newValue !== oldValue) {
            this.pages = Array.from({ length: newValue }, (_, i) => i + 1);
        }
    }

    handlePageChange(page: number) {
        this.pageChange.emit(page);
    }

    render() {
        return (
            <div class="pagination">
                <button onClick={() => this.handlePageChange(this.activePage - 1)} disabled={this.activePage === 1}>&lt;</button>
                {this.pages.map(page =>
                    <button onClick={() => this.handlePageChange(page)} class={{ 'active': page === this.activePage }}>{page}</button>
                )}
                <button onClick={() => this.handlePageChange(this.activePage + 1)} disabled={this.activePage === this.totalPages}>&gt;</button>
            </div>
        );
    }
}