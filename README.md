# WeatherApp

This Angular application, named Weather App, is designed to provide users with real-time weather information based on the user input (location). The application utilizes the Angular framework for its development and relies on the OpenWeatherMap API to fetch weather details

## Introduction

The Weather App enables users to retrieve weather details for specific locations. It offers the following features:

- Displaying current temperature and weather conditions.
- Automatic detection of the current day.
- Responsive design for seamless usage across different devices.

## Setup

To set up the Weather App locally, follow these steps:

1. Clone the repository: git clone <repository-url>
2. Navigate to the project directory: cd weather-app
3. Install dependencies: npm install

Make sure that you have Node.js and npm installed on your system before the setup.

## Usage

- After setting up the Weather App, you can run it using the Angular CLI: ng serve
- Once the application is running, you can access it through your web browser at http://localhost:4200.

## Code Structure

The main component of the Weather App is the WeatherComponent. Here's a brief overview of its functionality:

1. ngOnInit(): This method initializes the component and fetches weather details for the default location ('Nagercoil') using the GetWeatherDeatailsService.

2. getDateAndDay(): This method retrieves the current date and day of the week.

3. getUserInputs(input: any): This method is triggered when a user inputs a location. It fetches weather details for the specified location and updates the UI accordingly.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.6.

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
