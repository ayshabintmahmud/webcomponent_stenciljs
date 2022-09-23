/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyButton {
        "appearance": string;
        "text": string;
        "type": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface MyModal {
        "appearance": string;
        "buttons": string;
        "closeIcon": string;
        "header": string;
        "isopen": boolean;
    }
}
export interface MyModalCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMyModalElement;
}
declare global {
    interface HTMLMyButtonElement extends Components.MyButton, HTMLStencilElement {
    }
    var HTMLMyButtonElement: {
        prototype: HTMLMyButtonElement;
        new (): HTMLMyButtonElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLMyModalElement extends Components.MyModal, HTMLStencilElement {
    }
    var HTMLMyModalElement: {
        prototype: HTMLMyModalElement;
        new (): HTMLMyModalElement;
    };
    interface HTMLElementTagNameMap {
        "my-button": HTMLMyButtonElement;
        "my-component": HTMLMyComponentElement;
        "my-modal": HTMLMyModalElement;
    }
}
declare namespace LocalJSX {
    interface MyButton {
        "appearance"?: string;
        "text"?: string;
        "type"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface MyModal {
        "appearance"?: string;
        "buttons"?: string;
        "closeIcon"?: string;
        "header"?: string;
        "isopen"?: boolean;
        "onAction"?: (event: MyModalCustomEvent<any>) => void;
    }
    interface IntrinsicElements {
        "my-button": MyButton;
        "my-component": MyComponent;
        "my-modal": MyModal;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-button": LocalJSX.MyButton & JSXBase.HTMLAttributes<HTMLMyButtonElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "my-modal": LocalJSX.MyModal & JSXBase.HTMLAttributes<HTMLMyModalElement>;
        }
    }
}
