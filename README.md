# TransporSimpleProject

This application is designed to visually represent a series of trips between different locations, with each trip represented as a straight line connecting the start point and the end point. The functionality focuses on determining whether the trips are part of a continuous journey or not, and adjusts the design accordingly.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.11.

## Features
##Input Fields:
   - Start Point: The starting location of the trip.
   - End Point: The destination of the trip.
   - The application will only display the first three characters of the start point and end point to make the interface cleaner and easier to understand.

##Trip Continuity:
  - If the trip is a continued trip (for example, from Bangalore to Chennai and from Chennai to Ooty), it will be represented by a straight line on Level 1. The trip is considered continued if the end point of 
    one trip is the start point of the next trip.
  - If the trip is not a continued trip (for example, from Bangalore to Chennai and from Ooty to Bangalore), it will be represented by a straight line with an arrow on Level 1. This indicates that the trips are 
    not in sequence and might represent a round trip or alternate routes.

##Consecutive Trip Location Matching:
  - If consecutive trips have the same pickup and drop location (for example, if the second trip picks up from the same location and drops off at the same location as the previous one), those trips will be 
    displayed on Level 2. This visually groups such trips together.

- 
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
