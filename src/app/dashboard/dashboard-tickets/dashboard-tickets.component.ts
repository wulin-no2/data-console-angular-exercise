import { Component } from '@angular/core';
import { DashboardItemComponent } from "../dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-dashboard-tickets',
  standalone: true,
  imports: [DashboardItemComponent],
  templateUrl: './dashboard-tickets.component.html',
  styleUrl: './dashboard-tickets.component.css'
})
export class DashboardTicketsComponent {

}
