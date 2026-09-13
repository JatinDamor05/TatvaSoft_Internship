import { Component, Input } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.html',
  styleUrl: './modal.css'
})
export class ModalComponent {

  @Input() title: string = '';

  @Input() body: string = '';

  constructor(private modalService: ModalService) {}

  close(): void {
    this.modalService.close();
  }

}