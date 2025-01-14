import { Component, ContentChild, OnInit } from '@angular/core';
import { MatDivider } from "@angular/material/divider";
import { MatButton } from "@angular/material/button";

import { WeatherComponent } from '../widgets/weather/weather.component';
import { VelocityComponent } from '../widgets/velocity/velocity.component';
import { WIDGET } from '../widgets/widget.token';
import { Widget } from '../widgets/widget.interface';

@Component({
  selector: 'app-widget-wrapper',
  standalone: true,
  imports: [MatDivider, MatButton],
  templateUrl: './widget-wrapper.component.html',
  styleUrl: './widget-wrapper.component.scss'
})
export class WidgetWrapperComponent implements OnInit {

  // Without Bridge Pattern

  // @ContentChild(WeatherComponent, { static: true }) // { static: true } : can access content child ref in oninit hook
  // weatherWidget!: WeatherComponent;

  // @ContentChild(VelocityComponent, { static: true })
  // velocityWidget!: VelocityComponent;

  // With Bridge Pattern

  @ContentChild(WIDGET, {static: true}) widget: Widget | undefined;


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    // Without Bridge Pattern

    // if (this.velocityWidget) {
    //   this.velocityWidget.load()
    // }

    // if (this.weatherWidget) {
    //   this.weatherWidget.load()
    // }

    // With Bridge Pattern

    if(this.widget){
      this.widget.load();
    }


  }


  onRefresh() {
    // if (this.velocityWidget) {
    //   this.velocityWidget.refresh()
    // }

    // if (this.weatherWidget) {
    //   this.weatherWidget.refresh()
    // }

     // With Bridge Pattern
    if(this.widget){
      this.widget.refresh();
    }
  }

}
