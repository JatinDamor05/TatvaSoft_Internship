import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-safe-iframe',
  imports: [],
  templateUrl: './safe-iframe.html',
  styleUrl: './safe-iframe.css'
})
export class SafeIframe {

  url = 'https://www.youtube.com/embed/t8xWfcVj7vg?si=XlqIKHZTlwHkZUIm';

  safeUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.safeUrl =
      this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}