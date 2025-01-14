// Adapter class that will transform your external product data into your desired product type:

import { Injectable } from "@angular/core";
import { ExternalProduct } from "../interfaces/externnal-product";
import { Product } from "../interfaces/product";

@Injectable({
  providedIn: 'root'
})
export class  ProductAdapter {

    adapt(externalProd : ExternalProduct) : Product {

        return {
            id: externalProd.product_id,
            name: externalProd.product_name,
            price: externalProd.product_price
        }
    }
}