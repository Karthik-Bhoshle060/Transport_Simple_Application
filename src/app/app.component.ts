import { Component } from '@angular/core';
interface Trip {
  start: string;
  end: string;
  level: number;
  continued: boolean;
  consecutive: boolean;
  label: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Transport Project';
  cssColors = [
    'red',
    'green',
    'blue',
    'yellow',
    'orange',
    'purple',
    'olive',
    'brown',
    'cyan',
    'magenta',
  ];

  trip: Trip = {
    start: '',
    end: '',
    level: 0,
    continued: false,
    consecutive: false,
    label: '',
  }; // This is bound to the form fields
  trips: Trip[] = []; // This stores the list of all added trips
  finalTrips: Trip[] = [];
  showVisualization: boolean = false;

  // Called when the form is submitted
  addTrip(): void {
    this.trip.start = this.trip.start.toUpperCase();
    this.trip.end = this.trip.end.toUpperCase();
    if (this.trip.start.trim() && this.trip.end.trim()) {
      this.trips.push({ ...this.trip }); // Add a copy of the trip
      this.trip = {
        start: '',
        end: '',
        level: 0,
        continued: false,
        consecutive: false,
        label: '',
      }; // Reset the form fields
    }
  }

  // Called when "Visualize Route" button is clicked
  visualizeRoute(): void {
    console.log('Trips:', this.trips);
    // let finalTrip: Trip[] = [];
    for (let i = 0; i < this.trips.length; i++) {
      if (i == 0) {
        this.finalTrips = [
          {
            start: this.trips[i].start,
            end: this.trips[i].end,
            label:
              this.trips[i].start.toUpperCase().slice(0, 3) +
              '-' +
              this.trips[i].end.toUpperCase().slice(0, 3),
            level: 1,
            continued: false,
            consecutive: false,
          },
        ];
      } else {
        let lastTrip: Trip = this.finalTrips[i - 1];
        let currentTrip: Trip = this.trips[i];
        let isContinued = false;
        let isConsecutive = false;
        let label =
          currentTrip.start.toUpperCase().slice(0, 3) +
          '-' +
          currentTrip.end.toUpperCase().slice(0, 3);
        let level = 1;
        if (lastTrip.end == currentTrip.start) isContinued = true;
        if (
          lastTrip.start == currentTrip.start &&
          lastTrip.end == currentTrip.end
        ) {
          isConsecutive = true;
          this.finalTrips[i - 1].level = 2;
          level = 2;
        }
        let obj: Trip = {
          start: currentTrip.start,
          end: currentTrip.end,
          label: label,
          level: level,
          continued: isContinued,
          consecutive: isConsecutive,
        };
        this.finalTrips.push(obj);
        console.log(this.finalTrips);
        this.showVisualization = true;
      }
    }
  }
  isBelowLevel(i: any) {
    return this.finalTrips[i].level < this.finalTrips[i - 1].level;
  }
  isAboveLevel(i: any) {
    return this.finalTrips[i].level > this.finalTrips[i - 1].level;
  }
}
