import { Component } from '@angular/core';
import { SidebarSearchComponent } from "./siderbar-search/siderbar-search.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarSearchComponent],
  templateUrl: './silderbar.component.html',
  styleUrl: './silderbar.component.css'
})
export class SidebarComponent {

}
