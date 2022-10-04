import { Component, getAssetPath, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-toast',
  styleUrl: 'my-toast.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class MyToast {
  // Prop

  @Prop ({
    mutable: true,
    reflect: true,

  })

  @Prop() isopen: boolean;

  @Prop() closeIcon = 'x.svg';
  @Prop() checkIcon = 'bell.svg';


  // ƒunctions
  private cancle = () => {
    this.isopen = false;
  }

  

  render() {
    return (
     
        <div class={"toast-style show toast"} id='toast'>
          {/* <img src={getAssetPath(`./assets/${this.checkIcon}`)} alt="Success Icon" /> */}
          <p class="toast-body">This is a toast. And it is amzing</p>
          <div class="close" onClick={this.cancle}>
            <img src={getAssetPath(`./assets/${this.closeIcon}`)} alt="close" />
          </div>
        </div>



    );
  }

}
