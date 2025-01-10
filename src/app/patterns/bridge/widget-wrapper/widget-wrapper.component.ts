import { Component, ContentChild, OnInit } from '@angular/core';
import { MatDivider } from "@angular/material/divider";
import { MatButton } from "@angular/material/button";

import { WeatherComponent } from '../widgets/weather/weather.component';
import { VelocityComponent } from '../widgets/velocity/velocity.component';

@Component({
  selector: 'app-widget-wrapper',
  standalone: true,
  imports: [MatDivider, MatButton],
  templateUrl: './widget-wrapper.component.html',
  styleUrl: './widget-wrapper.component.scss'
})
export class WidgetWrapperComponent implements OnInit{
  
  @ContentChild(WeatherComponent) 
  weatherWidget!: WeatherComponent;

  @ContentChild(VelocityComponent) 
  velocityWidget!: VelocityComponent;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

     
    
  }


  onRefresh() {
    if(this.velocityWidget) {
      this.velocityWidget.refresh()
    }

    if(this.weatherWidget) {
      this.weatherWidget.refresh()
    }
  }

}
