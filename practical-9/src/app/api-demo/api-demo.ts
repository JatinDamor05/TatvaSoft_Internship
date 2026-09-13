import {
  Component,
  OnInit
} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api-demo',
  imports: [],
  templateUrl: './api-demo.html',
  styleUrl: './api-demo.css'
})
export class ApiDemo implements OnInit {

  constructor(private http: HttpClient) {
    console.log('Constructor started');
    console.log('Constructor finished');
  }

  ngOnInit(): void {
    console.log('ngOnInit started');

    this.http.get('https://jsonplaceholder.typicode.com/users')
      .subscribe(data => {
        console.log('HTTP response:', data);
      });
  }

}