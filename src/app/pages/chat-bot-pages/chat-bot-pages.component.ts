import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

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
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule
  ],
  templateUrl: './chat-bot-pages.component.html',
  styleUrls: ['./chat-bot-pages.component.css']
})
export class ChatBotPagesComponent implements OnInit, AfterViewChecked {
  @ViewChild('messageContainer') private messageContainer!: ElementRef;
  @Input() public display!: string;

  public form!: FormGroup;
  public messages: Array<Message> = [];
  public canSendMessage = true;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      message: ['']
    });
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  onClickSendMessage(): void {
    if (this.form.valid && this.canSendMessage) {
      const message = this.form.get('message')?.value;
      this.messages.push({ text: message, type: MessageType.User });
      this.form.reset();
      this.canSendMessage = false;

      // Simulate bot response
      setTimeout(() => {
        this.messages.push({ text: 'Hello! How can I help you?', type: MessageType.Bot });
        this.canSendMessage = true;
        this.scrollToBottom();
      }, 2000);
    }
  }

  public onClickEnter(event: Event): void {
    const keyboardEvent = event as KeyboardEvent;
    keyboardEvent.preventDefault();
    this.onClickSendMessage();
  }


  private scrollToBottom(): void {
    this.messageContainer.nativeElement.scrollTop = this.messageContainer.nativeElement.scrollHeight;
  }
}
