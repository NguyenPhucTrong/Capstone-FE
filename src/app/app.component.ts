import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { ChatBotPagesComponent } from "./pages/chat-bot-pages/chat-bot-pages.component";
import { SidebarComponent } from "./pages/silderbar/silderbar.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./pages/home/home.component";
import { ProfileComponent } from "./pages/profile/profile.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChatBotPagesComponent, SidebarComponent, FormsModule, CommonModule, HomeComponent, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        console.log('Navigating to:', event.url);
      } else if (event instanceof NavigationEnd) {
        console.log('Navigation ended at:', event.url);
      }
    });
  }
}
