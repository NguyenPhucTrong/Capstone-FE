import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChatHeaderComponent } from "./chat-header/chat-header.component";
import { ChatContentComponent } from "./chat-content/chat-content.component";
import { ChatActionComponent } from './chat-action/chat-action.component';

enum MessageType {
  Bot = 'bot',
  User = 'user',
  Loading = 'loading'
}

interface Message {
  text?: string;
  type: MessageType;
  file?: File;

}

@Component({
  selector: 'app-chat-bot-pages',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ChatHeaderComponent,
    ChatContentComponent,
    ChatActionComponent
  ],
  templateUrl: './chat-bot-pages.component.html',
  styleUrls: ['./chat-bot-pages.component.css']
})
export class ChatBotPagesComponent implements OnInit, AfterViewInit {
  @ViewChild('messageContainer') private messageContainer!: ElementRef;
  @Input() display!: string;
  @Input() messages: Message[] = [];
  @Output() newChatAdded = new EventEmitter<any>();


  public form!: FormGroup;
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
      const waitMessage: Message = { type: MessageType.Loading, text: "..." };
      this.messages.push(waitMessage);

      // Simulate bot response
      setTimeout(() => {
        this.messages.pop();
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

  ngAfterViewInit(): void {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    if (this.messageContainer && this.messageContainer.nativeElement) {
      this.messageContainer.nativeElement.scrollTop = this.messageContainer.nativeElement.scrollHeight;
    }
  }

  addNewChat() {
    this.messages = [{ text: " Hello! How can I help you? ", type: MessageType.Bot }];
    this.scrollToBottom();
    this.newChatAdded.emit({ summary: "New Chat", fullChat: this.messages });
  }

  onFileSelected(file: File): void {
    this.messages.push({ text: `File selected: ${file.name}`, file, type: MessageType.User });
    this.scrollToBottom();
  }

}
