import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/hero';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';
import { Color, ColorMap, Hero } from '../../interfaces/hero';
import { HeroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { CreatorPipe } from '../../pipes/creator.pipe';
import { HeroSortByPipe } from '../../pipes/hero-sort-by.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe,
    CanFlyPipe,
    HeroColorPipe,
    HeroTextColorPipe,
    CreatorPipe,
    HeroSortByPipe
  ],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
  name = signal("Jhosue Rui");

  toggle = signal(true);

  heroes =signal(heroes);

  sortBy =  signal<keyof Hero | null>(null);


  changeCase(){
    this.toggle.set(!this.toggle());
  }

  colorValue(color:Color){
    return ColorMap[color];
  }
}
