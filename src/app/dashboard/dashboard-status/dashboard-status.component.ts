import { Component } from '@angular/core';
import { DashboardItemComponent } from "../dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-dashboard-status',
  standalone: true,
  templateUrl: './dashboard-status.component.html',
  styleUrl: './dashboard-status.component.css'
})
export class DashboardStatusComponent {
  currentStatus = 'online';

}
