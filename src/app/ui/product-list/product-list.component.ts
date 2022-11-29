import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../../model/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
  readonly list$: Observable<ProductModel[]> = this._productService.getAll();

  constructor(private _productService: ProductService) {
  }
}
