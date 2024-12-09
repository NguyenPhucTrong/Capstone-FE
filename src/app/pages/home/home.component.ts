import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { SidebarComponent } from '../silderbar/silderbar.component';
import { ChatBotPagesComponent } from '../chat-bot-pages/chat-bot-pages.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ChatBotPagesComponent, SidebarComponent, FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  @ViewChild(SidebarComponent) sidebarComponent!: SidebarComponent;
  isSidebarOpen: boolean = true;
  selectedChat: any[] = [];

  ngAfterViewInit(): void {
    this.sidebarComponent.addChatToHistory({
      summary: "New Chat", fullChat: [
        { text: "Hello! How can I help you?", type: "bot" },
      ]
    }); // Add a new chat to the sidebar
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  onChatSelected(chat: any[]) {
    console.log(chat); // Verify the emitted event
    this.selectedChat = chat;
  }

  onNewChatAdded(chat: any) {
    this.sidebarComponent.addChatToHistory(chat);
  }
}
