import { Component, h, Prop, getAssetPath, State, Event,EventEmitter } from '@stencil/core';


@Component({
  tag: 'my-modal',
  styleUrl: 'my-modal.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class MyModal {
  @Prop ({
    mutable: true,
    reflect: true,

  })
  @Prop() isopen: boolean;
  @Prop() closeIcon = 'x.svg';

  @Prop() header : string;
   @Prop() appearance : string;
   @Prop() buttons : string;


//  State
@State() _buttons : Array<any>

// event
@Event() private action: EventEmitter;

// data watcher
  arrayDataWatcher(buttons){
    if(typeof buttons === 'string'){
      this._buttons = JSON.parse(buttons);
    } else{
      this._buttons = buttons;
    }
  }


componentWillLoad(){
this.arrayDataWatcher(this.buttons)
}

  // Functions
  private cancle = () => {
    this.isopen = false;
  }

  private handleaction = () => {
    this.action.emit();
  }


  render() {
    return (
      <div class={this.isopen ? "modal-wrapper is-open" : "modal-wrapper"}>
        <div class="modal-overlay" onClick={this.cancle}>
          <div class="modal">
            <div class="header">
              <h6>{this.header}</h6>
              <div class="close" onClick={this.cancle}>
                <img src={getAssetPath(`./assets/${this.closeIcon}`)} alt="Close Icon"  />
                {/* svg close  */}
              </div>
            </div>
            <div class="body">
              <slot />
            </div>
            <div class="footer">
              {this._buttons.map((button, index)=>(
              <my-button onClick={index === 0 ? this.handleaction : this.cancle} text={button.text} appearance={ index === 0 && this.appearance} type="btn"></my-button>
              ) )}
            </div>
          </div>
        </div>
      </div>
    );
  }

}
