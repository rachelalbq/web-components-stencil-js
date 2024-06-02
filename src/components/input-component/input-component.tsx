import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'input-component',
    styleUrl: './input-component.css',
    shadow: true
})

export class InputComponent {

    @Prop() title: string;
    @Prop() placeholder: string;
    @Prop() icon: string;
    @Event() inputEvent: EventEmitter;

    handleInput(event: Event) {
        this.inputEvent.emit((event.target as HTMLInputElement).value);
    }

    render() {
        return (
            <div class="input-container">
                <label>{this.title}</label>
                <div class="input-wrapper">
                    <input type="text" placeholder={this.placeholder} onInput={(event) => this.handleInput(event)} />
                    <i class={this.icon}></i>
                </div>
            </div>
        );
    }
}
