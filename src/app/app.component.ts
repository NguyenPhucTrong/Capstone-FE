import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatBotPagesComponent } from "./pages/chat-bot-pages/chat-bot-pages.component";
import { SidebarComponent } from "./pages/silderbar/silderbar.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChatBotPagesComponent, SidebarComponent, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
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
