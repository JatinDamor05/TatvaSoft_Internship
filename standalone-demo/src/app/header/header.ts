import { Component } from '@angular/core';
import { Button } from '../shared/button/button';
import { Loader } from '../shared/loader/loader';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    Button,
    Loader
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
}