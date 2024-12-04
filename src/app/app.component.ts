import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatBotPagesComponent } from "./pages/chat-bot-pages/chat-bot-pages.component";
import { DisplayType } from './shared/enums/display-type.enum';
import { SidebarComponent } from "./pages/silderbar/silderbar.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChatBotPagesComponent, SidebarComponent, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isSidebarOpen: boolean = true;

  toggleSidebar() {

    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
