import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/hero';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';
import { Color, ColorMap } from '../../interfaces/hero';
import { HeroTextColorPipe } from '../../pipes/hero-text-color.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe,
    CanFlyPipe,
    HeroColorPipe,
    HeroTextColorPipe
  ],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
  name = signal("Jhosue Rui");

  toggle = signal(true);

  heroes =signal(heroes);


  changeCase(){
    this.toggle.set(!this.toggle());
  }

  colorValue(color:Color){
    return ColorMap[color];
  }
}
