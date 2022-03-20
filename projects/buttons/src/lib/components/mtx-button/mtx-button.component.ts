import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {MtxButtonStyle} from './mtx-button-style';
import {MtxButtonSize} from './mtx-button-size';
import {MtxButtonShape} from './mtx-button-shape';
import {MtxButtonColor} from './mtx-button-color';

@Component({
  selector: 'button[mtxButton]',
  templateUrl: './mtx-button.component.html',
  styleUrls: ['./mtx-button.component.scss']
})
export class MtxButtonComponent implements OnInit {
  @Input()
  public style: MtxButtonStyle = MtxButtonStyle.SOLID;

  @Input()
  public size: MtxButtonSize = MtxButtonSize.MEDIUM;

  @Input()
  public shape: MtxButtonShape = MtxButtonShape.ROUNDED;

  @Input()
  public color!: MtxButtonColor;

  constructor() {
  }

  ngOnInit(): void {
    this.style = MtxButtonStyle.SOLID;
    this.size = MtxButtonSize.MEDIUM;
    this.shape = MtxButtonShape.ROUNDED;
    this.color = MtxButtonColor.PRIMARY;

  }

  @HostBinding('class')
  get classes() {
    return `${this.style} ${this.size} ${this.shape} ${this.color}`
  }

}
