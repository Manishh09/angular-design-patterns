import { Component } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { MatProgressSpinner } from "@angular/material/progress-spinner";
import { Widget } from '../widget.interface';
import { WIDGET } from '../widget.token';

@Component({
  selector: 'app-velocity',
  standalone: true,
  imports: [MatIcon, MatProgressSpinner],
  templateUrl: './velocity.component.html',
  styleUrl: './velocity.component.scss',
  providers: [
    {
      provide: WIDGET,
      useExisting: VelocityComponent
    }
  ]
})
export class VelocityComponent implements Widget {
  showLoader = false;
  load() {
    console.log('Load data from WEATHER API... ');
  }
  refresh() {
    this.showLoader = true;
    setTimeout(() => {
      this.showLoader = false;
    }, 1000);
  }
}
