import { Component } from '@angular/core';
import { WidgetWrapperComponent } from "../widget-wrapper/widget-wrapper.component";
import { WeatherComponent } from "../widgets/weather/weather.component";
import { VelocityComponent } from "../widgets/velocity/velocity.component";

@Component({
  selector: 'app-bridge-pattern-demo',
  standalone: true,
  imports: [WidgetWrapperComponent, WeatherComponent, VelocityComponent],
  templateUrl: './bridge-pattern-demo.component.html',
  styleUrl: './bridge-pattern-demo.component.scss'
})
export class BridgePatternDemoComponent {

}
