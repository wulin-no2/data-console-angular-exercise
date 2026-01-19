import { Component } from '@angular/core';
import { DashboardStatusComponent } from "./dashboard-status/dashboard-status.component";
import { DashboardTrafficComponent } from "./dashboard-traffic/dashboard-traffic.component";
import { DashboardTicketsComponent } from "./dashboard-tickets/dashboard-tickets.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DashboardTrafficComponent, DashboardTicketsComponent, DashboardStatusComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
