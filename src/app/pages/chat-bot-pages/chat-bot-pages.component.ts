import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
  selector: 'app-chat-bot-pages',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './chat-bot-pages.component.html',
  styleUrls: ['./chat-bot-pages.component.css']
})
export class ChatBotPagesComponent implements OnInit, AfterViewChecked {
  @ViewChild('messageContainer') private messageContainer!: ElementRef;
  @Input() display!: string;

  public form!: FormGroup;
  public messages: Array<Message> = [];
  public userInput: string = '';
  private canSendMessage = true;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      message: ['']
    });
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  sendMessage(): void {
    if (this.userInput.trim() && this.canSendMessage) {
      this.messages.push({ text: this.userInput, type: MessageType.User });
      this.userInput = '';
      this.canSendMessage = false;

      // Simulate bot response
      setTimeout(() => {
        this.messages.push({ text: 'Hello! How can I help you?', type: MessageType.Bot });
        this.canSendMessage = true;
        this.scrollToBottom();
      }, 2000);
    }
  }

  onEnter(event: Event): void {
    const keyboardEvent = event as KeyboardEvent;
    event.preventDefault();
    this.sendMessage();

  }

  private scrollToBottom(): void {
    this.messageContainer.nativeElement.scrollTop = this.messageContainer.nativeElement.scrollHeight;
  }
}
