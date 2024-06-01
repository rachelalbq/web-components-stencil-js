/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppRoot {
    }
    interface CardBodyComponent {
        "data": { [key: string]: any };
    }
    interface CardComponent {
        "data": Record<string, any>;
    }
    interface CardHeaderComponent {
        "data": Record<string, any>;
    }
    interface InputComponent {
        "icon": string;
        "placeholder": string;
        "title": string;
    }
    interface PaginationComponent {
        "activePage": number;
        "totalPages": number;
    }
}
export interface InputComponentCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLInputComponentElement;
}
export interface PaginationComponentCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPaginationComponentElement;
}
declare global {
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLCardBodyComponentElement extends Components.CardBodyComponent, HTMLStencilElement {
    }
    var HTMLCardBodyComponentElement: {
        prototype: HTMLCardBodyComponentElement;
        new (): HTMLCardBodyComponentElement;
    };
    interface HTMLCardComponentElement extends Components.CardComponent, HTMLStencilElement {
    }
    var HTMLCardComponentElement: {
        prototype: HTMLCardComponentElement;
        new (): HTMLCardComponentElement;
    };
    interface HTMLCardHeaderComponentElement extends Components.CardHeaderComponent, HTMLStencilElement {
    }
    var HTMLCardHeaderComponentElement: {
        prototype: HTMLCardHeaderComponentElement;
        new (): HTMLCardHeaderComponentElement;
    };
    interface HTMLInputComponentElementEventMap {
        "inputEvent": any;
    }
    interface HTMLInputComponentElement extends Components.InputComponent, HTMLStencilElement {
        addEventListener<K extends keyof HTMLInputComponentElementEventMap>(type: K, listener: (this: HTMLInputComponentElement, ev: InputComponentCustomEvent<HTMLInputComponentElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLInputComponentElementEventMap>(type: K, listener: (this: HTMLInputComponentElement, ev: InputComponentCustomEvent<HTMLInputComponentElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLInputComponentElement: {
        prototype: HTMLInputComponentElement;
        new (): HTMLInputComponentElement;
    };
    interface HTMLPaginationComponentElementEventMap {
        "pageChange": number;
    }
    interface HTMLPaginationComponentElement extends Components.PaginationComponent, HTMLStencilElement {
        addEventListener<K extends keyof HTMLPaginationComponentElementEventMap>(type: K, listener: (this: HTMLPaginationComponentElement, ev: PaginationComponentCustomEvent<HTMLPaginationComponentElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLPaginationComponentElementEventMap>(type: K, listener: (this: HTMLPaginationComponentElement, ev: PaginationComponentCustomEvent<HTMLPaginationComponentElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLPaginationComponentElement: {
        prototype: HTMLPaginationComponentElement;
        new (): HTMLPaginationComponentElement;
    };
    interface HTMLElementTagNameMap {
        "app-root": HTMLAppRootElement;
        "card-body-component": HTMLCardBodyComponentElement;
        "card-component": HTMLCardComponentElement;
        "card-header-component": HTMLCardHeaderComponentElement;
        "input-component": HTMLInputComponentElement;
        "pagination-component": HTMLPaginationComponentElement;
    }
}
declare namespace LocalJSX {
    interface AppRoot {
    }
    interface CardBodyComponent {
        "data"?: { [key: string]: any };
    }
    interface CardComponent {
        "data"?: Record<string, any>;
    }
    interface CardHeaderComponent {
        "data"?: Record<string, any>;
    }
    interface InputComponent {
        "icon"?: string;
        "onInputEvent"?: (event: InputComponentCustomEvent<any>) => void;
        "placeholder"?: string;
        "title"?: string;
    }
    interface PaginationComponent {
        "activePage"?: number;
        "onPageChange"?: (event: PaginationComponentCustomEvent<number>) => void;
        "totalPages"?: number;
    }
    interface IntrinsicElements {
        "app-root": AppRoot;
        "card-body-component": CardBodyComponent;
        "card-component": CardComponent;
        "card-header-component": CardHeaderComponent;
        "input-component": InputComponent;
        "pagination-component": PaginationComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "card-body-component": LocalJSX.CardBodyComponent & JSXBase.HTMLAttributes<HTMLCardBodyComponentElement>;
            "card-component": LocalJSX.CardComponent & JSXBase.HTMLAttributes<HTMLCardComponentElement>;
            "card-header-component": LocalJSX.CardHeaderComponent & JSXBase.HTMLAttributes<HTMLCardHeaderComponentElement>;
            "input-component": LocalJSX.InputComponent & JSXBase.HTMLAttributes<HTMLInputComponentElement>;
            "pagination-component": LocalJSX.PaginationComponent & JSXBase.HTMLAttributes<HTMLPaginationComponentElement>;
        }
    }
}
