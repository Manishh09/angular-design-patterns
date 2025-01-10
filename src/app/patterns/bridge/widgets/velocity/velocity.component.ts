import { Component } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { MatProgressSpinner } from "@angular/material/progress-spinner";

@Component({
  selector: 'app-velocity',
  standalone: true,
  imports: [MatIcon, MatProgressSpinner],
  templateUrl: './velocity.component.html',
  styleUrl: './velocity.component.scss'
})
export class VelocityComponent {
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
