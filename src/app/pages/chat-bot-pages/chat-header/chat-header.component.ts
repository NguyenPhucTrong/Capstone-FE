import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-chat-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './chat-header.component.html',
  styleUrl: './chat-header.component.css'
})
export class ChatHeaderComponent {
  @Output() newChat = new EventEmitter<void>()
  showOptions: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      console.log('Router Event:', event);
    });
  }


  goToProfile() {
    this.router.navigate(['/profile']);
  }


  showProfileOptions() {
    this.showOptions = true;
  }

  hideProfileOptions() {
    this.showOptions = false;
  }



  logout() {
    alert('Logout clicked!');
  }

  addNewChat() {
    this.newChat.emit()
  }
}
