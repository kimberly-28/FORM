import { Component } from '@angular/core';
import { DialogFormComponent } from '../dialog-form/dialog-form.component';
import { MatDialog } from '@angular/material/dialog';

export interface PeriodicElement {
  status: number;
  ticket: number;
  driver: string;
  vehicle: number;
  location: string;
  type: string;
  date: number;}

const ELEMENT_DATA: PeriodicElement[] = [
  {status: 1, ticket: 12, driver: 'simon', vehicle: 1.058, location: 'queretaro', type: 'panico', date: 4},
  {status: 2, ticket: 45, driver: 'simon', vehicle:  1.058, location: 'queretaro', type: 'panico', date: 4},
  {status: 3, ticket: 21, driver: 'simon', vehicle:  1.058, location: 'queretaro', type: 'panico', date: 4},
  {status: 4, ticket: 47, driver: 'simon', vehicle:  1.058, location: 'queretaro', type: 'panico', date: 4},
  {status: 5, ticket: 78, driver: 'simon', vehicle: 1.058, location: 'queretaro', type: 'panico', date: 4},
  {status: 6, ticket: 63, driver: 'jazmin', vehicle: 1.058, location: 'queretaro', type: 'emergency', date: 4},
  {status: 7, ticket: 58, driver: 'jazmin', vehicle: 1.058, location: 'queretaro', type: 'emergency', date: 4},
  {status: 8, ticket: 65, driver: 'jazmin', vehicle: 1.058, location: 'queretaro', type: 'emergency', date: 4},
  {status: 9, ticket: 58, driver: 'jazmin', vehicle: 1.058, location: 'queretaro', type: 'emergency', date: 4},
  {status: 10, ticket: 20, driver: 'jazmin', vehicle:  1.058, location: 'queretaro', type: 'emergency', date: 4},
];

/**
 * @title Table dynamically changing the columns displayed
 */
@Component({
  selector: 'app-emergency-call',
  templateUrl: './emergency-call.component.html',
  styleUrls: ['./emergency-call.component.css']
})

export class EmergencyCallComponent  {
  displayedColumns: string[] = ['status', 'ticket', 'driver', 'vehicle', 'location', 'type', 'date' ];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) {}
 
  openDialog() {
    this.dialog.open(DialogFormComponent);
  }
}

