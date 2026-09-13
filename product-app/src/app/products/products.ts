import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {

  private route = inject(ActivatedRoute);

  title = this.route.snapshot.data['title'];

}