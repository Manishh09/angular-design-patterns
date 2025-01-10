import { Component } from '@angular/core';
import { MatProgressBar} from "@angular/material/progress-bar";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [MatProgressBar, MatIcon],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent {
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
