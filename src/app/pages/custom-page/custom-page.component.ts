import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/hero';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe,CanFlyPipe],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
  name = signal("Jhosue Rui");

  toggle = signal(true);

  heroes =signal(heroes);

  changeCase(){
    this.toggle.set(!this.toggle());
  }
}
