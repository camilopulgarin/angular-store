import { Component } from '@angular/core';
import { ProductComponent } from './../../components/product/product.component';
import { from } from 'rxjs';

@Component({
  selector: 'app-list',
  imports: [ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  fromChild(event: string) {
    console.log('estamos en el padre');
    console.log(event);
  }

}
