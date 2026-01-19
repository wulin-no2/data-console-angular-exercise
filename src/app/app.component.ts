import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { DashboardStatusComponent } from "./dashboard/dashboard-status/dashboard-status.component";
import { DashboardTrafficComponent } from "./dashboard/dashboard-traffic/dashboard-traffic.component";
import { DashboardTicketsComponent } from "./dashboard/dashboard-tickets/dashboard-tickets.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, DashboardStatusComponent, DashboardTrafficComponent, DashboardTicketsComponent],
})
export class AppComponent {

}
