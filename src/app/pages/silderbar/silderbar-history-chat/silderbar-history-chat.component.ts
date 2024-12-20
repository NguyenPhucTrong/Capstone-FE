import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar-history-chat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './silderbar-history-chat.component.html',
  styleUrls: ['./silderbar-history-chat.component.css']
})
export class SidebarHistoryChatComponent {
  @Output() chatSelected = new EventEmitter<any[]>(); // Emits only arrays

  chatHistory: any[] = [
    {
      id: 1, summary: 'Chat with User1', fullChat: [
        { type: 'user', text: 'Hello!', timestamp: '10:00 AM' },
        { type: 'bot', text: 'Hi there!', timestamp: '10:01 AM' },
        { type: 'user', text: 'How are you?', timestamp: '10:02 AM' },
        { type: 'bot', text: 'I am good, thanks!', timestamp: '10:03 AM' }
      ],
      showOptions: false,
    },
    {
      id: 2, summary: 'Chat with User2', fullChat: [
        { type: 'user', text: 'Hey!', timestamp: '11:00 AM' },
        { type: 'bot', text: 'Hello!', timestamp: '11:01 AM' },
        { type: 'user', text: 'What\'s up?', timestamp: '11:02 AM' },
        { type: 'bot', text: 'Not much, you?', timestamp: '11:03 AM' }
      ],
      showOptions: false,
    }
  ];

  selectChat(chat: any) {
    const fullChat = Array.isArray(chat.fullChat) ? chat.fullChat : [];
    this.chatSelected.emit(fullChat);
  }

  addChatToHistory(chat: any) {
    this.chatHistory.push(chat);
  }

  showOptions(chat: any) {
    chat.showOptions = true;
  }

  hideOptions(chat: any) {
    chat.showOptions = false;
  }

  deleteChat(chat: any) {
    const index = this.chatHistory.indexOf(chat);
    if (index > -1) {
      this.chatHistory.splice(index, 1);
    }
  }

  renameChat(chat: any) {
    const newName = prompt('Enter new name', chat.summary);
    if (newName) {
      chat.summary = newName;
    }
    chat.showOptions = false;
  }


}
