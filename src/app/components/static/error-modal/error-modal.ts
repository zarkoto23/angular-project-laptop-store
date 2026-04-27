import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.html',
  styleUrls: ['./error-modal.css'],
})
export class ErrorModal {
  @Input() isVisible: boolean = false;
  @Input() message: string = '';
  @Input() type: 'error' | 'success' = 'error';
  @Output() closed = new EventEmitter<void>();

  getTitle(): string {
    return this.type === 'error' ? 'Грешка' : 'Готово';
  }

  onClose() {
    this.closed.emit();
  }
}
