import { Component, inject } from '@angular/core';
import { ProductService } from '../services/product.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-adapter-pattern-demo',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './adapter-pattern-demo.component.html',
  styleUrl: './adapter-pattern-demo.component.scss'
})
export class AdapterPatternDemoComponent {

  private productServ = inject(ProductService);

  data$  = this.productServ.getProducts();

}
