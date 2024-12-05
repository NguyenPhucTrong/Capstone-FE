import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chat-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-header.component.html',
  styleUrl: './chat-header.component.css'
})
export class ChatHeaderComponent {
  @Output() newChat = new EventEmitter<void>()
  showOptions: boolean = false;

  showProfileOptions() {
    this.showOptions = true;
  }

  hideProfileOptions() {
    this.showOptions = false;
  }

  profile() {
    alert('Profile clicked!');
  }

  logout() {
    alert('Logout clicked!');
  }

  addNewChat() {
    this.newChat.emit()
  }
}
