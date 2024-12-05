import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { SidebarSearchComponent } from "./siderbar-search/siderbar-search.component";
import { SidebarHistoryChatComponent } from './silderbar-history-chat/silderbar-history-chat.component';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarSearchComponent, SidebarHistoryChatComponent],
  templateUrl: './silderbar.component.html',
  styleUrl: './silderbar.component.css'
})
export class SidebarComponent {
  @Output() chatSelected = new EventEmitter<any[]>();
  @ViewChild(SidebarHistoryChatComponent) sidebarHistoryChatComponent!: SidebarHistoryChatComponent;

  onChatSelected(chat: any[]) {
    this.chatSelected.emit(chat);
  }
  addChatToHistory(chat: any) {
    this.sidebarHistoryChatComponent.addChatToHistory(chat);
  }
}
