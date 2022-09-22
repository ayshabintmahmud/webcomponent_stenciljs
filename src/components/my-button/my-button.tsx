import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true,
})
export class MyButton {
  @Prop() text: string;
  @Prop() type: string;
  @Prop() appearance: string;


  render() {
    return (
      <button class={`${this.type} ${this.appearance}`} type="button">
        {/* slot */}
        {this.text}
      </button>
      
    );
  }

}
