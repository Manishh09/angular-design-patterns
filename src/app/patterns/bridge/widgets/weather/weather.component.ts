import { Component } from '@angular/core';
import { MatProgressBar} from "@angular/material/progress-bar";
import { MatIcon } from "@angular/material/icon";
import { Widget } from '../widget.interface';
import { WIDGET } from '../widget.token';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [MatProgressBar, MatIcon],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
  providers: [
    {
      provide: WIDGET,
      useExisting : WeatherComponent
    }
  ]
})

/**
 * providers: [
    {
      provide: WIDGET,
      useExisting : WeatherComponent
    }
  ]
  * Whenever the WIDGET is accessed, it will use the instance of the WeatherComponent
 */

export class WeatherComponent implements Widget {
  showLoader = false;

  load() {
    console.log('Load data from WEATHER API... ');
  }
  refresh() {
    this.showLoader = true;
    setTimeout(() => {
      this.showLoader = false;
    }, 2500);
  }
}
