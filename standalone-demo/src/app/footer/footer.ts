import { Component } from '@angular/core';
import { Button } from '../shared/button/button';
import { Loader } from '../shared/loader/loader';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    Button,
    Loader
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
}