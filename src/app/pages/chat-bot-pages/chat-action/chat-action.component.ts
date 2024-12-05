import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-action',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './chat-action.component.html',
  styleUrls: ['./chat-action.component.css']
})
export class ChatActionComponent {
  @Input() userInput: string = '';
  @Output() userInputChange = new EventEmitter<string>();
  @Output() sendMessage = new EventEmitter<void>();
  @Output() fileSelected = new EventEmitter<File>();


  onEnter(event: Event): void {
    const keyboardEvent = event as KeyboardEvent;
    event.preventDefault();
    this.sendMessage.emit();
  }

  onUserInputChange(value: string): void {
    this.userInput = value;
    this.userInputChange.emit(this.userInput);
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.fileSelected.emit(file);
    }
  }
}
