import { Injectable, ViewContainerRef } from '@angular/core';
import { ModalComponent } from './modal/modal';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private container: ViewContainerRef | null = null;

  setContainer(container: ViewContainerRef): void {
    this.container = container;
  }

  open(title: string, body: string): void {

    if (!this.container) {
      console.error('Modal container has not been set.');
      return;
    }

    this.container.clear();

    const modal =
      this.container.createComponent(ModalComponent);

    modal.setInput('title', title);
    modal.setInput('body', body);

    console.log('Modal opened');
  }

  close(): void {

    if (this.container) {
      this.container.clear();
      console.log('Modal closed');
    }

  }

}