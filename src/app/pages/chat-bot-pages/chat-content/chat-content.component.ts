import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';

enum MessageType {
  Bot = 'bot',
  User = 'user',
  Loading = 'loading'
}

interface Message {
  text?: string;
  type: MessageType;
}
@Component({
  selector: 'app-chat-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-content.component.html',
  styleUrl: './chat-content.component.css'
})
export class ChatContentComponent {
  @Input() messages: Message[] = [];
}
