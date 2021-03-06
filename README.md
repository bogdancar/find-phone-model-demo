find-phone-model-demo
=====================

This is a demo app for [find-phone-model](https://github.com/bogdancar/find-phone-model) library. This is an Angular 4 app that exposes an input field and a button to search the phone models on the lib and displays a list with the search result.

Usage
-----

Clone/download the app, run `yarn` or `npm install` on app folder depending on your installed package manager, then `ng serve -o` (you need @angular/cli installed).

Notice!!!
---------

Given the fact that this app is generated with @angular/cli using yarn as default package manager, when I run `npm install`, npm will throw an error at the end of the install process. Although the app will work fine when `ng serve -o`, looks like npm is not playing well with yarn generated solutions. I also had problems with npm when developing the demo, so I reported the [bug here](https://github.com/npm/npm/issues/17644). Until it gets solved, I advice you to use yarn, although npm works.

# FindPhoneModelDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
