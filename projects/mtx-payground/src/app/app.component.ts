import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {MtxButtonColor} from '../../../buttons/src/lib/components/mtx-button/mtx-button-color';
import {MtxButtonSize} from '../../../buttons/src/lib/components/mtx-button/mtx-button-size';
import {MtxButtonStyle} from '../../../buttons/src/lib/components/mtx-button/mtx-button-style';
import {MtxButtonShape} from '../../../buttons/src/lib/components/mtx-button/mtx-button-shape';

class ThemeEmitterComponent {
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  public ButtonColor = MtxButtonColor;
  public ButtonSize = MtxButtonSize;
  public ButtonStyle = MtxButtonStyle;
  public ButtonShape = MtxButtonShape;

  ngAfterViewInit() {

  }

}
