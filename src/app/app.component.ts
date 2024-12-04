import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatBotPagesComponent } from "./pages/chat-bot-pages/chat-bot-pages.component";
import { DisplayType } from './shared/enums/display-type.enum';
import { SidebarComponent } from "./pages/silderbar/silderbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChatBotPagesComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Capstone-FE';
  public displayType = DisplayType;

}
