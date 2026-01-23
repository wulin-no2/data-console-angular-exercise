import { Component } from '@angular/core';
import { DashboardItemComponent } from "../dashboard-item/dashboard-item.component";
import { NewTicketComponent } from "../tickets/new-ticket/new-ticket.component";

@Component({
  selector: 'app-dashboard-tickets',
  standalone: true,
  templateUrl: './dashboard-tickets.component.html',
  styleUrl: './dashboard-tickets.component.css',
  imports: [NewTicketComponent]
})
export class DashboardTicketsComponent {

}
