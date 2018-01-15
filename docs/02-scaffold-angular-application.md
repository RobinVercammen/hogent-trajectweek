# Scaffold angular application

`ng new pokedex`

Dit commando zal een nieuwe map maken die alle bestanden bevat om een angular applicatie te starten. Wanneer dit klaar is kunnen we de applicatie voor het eerst opstarten. Hiervoor navigeren we in de map die gemaakt is namelijk `pokedex`. 

## npm scripts  

Wanneer we aan een node applicatie werken, werken we meestal met npm script. Dit zijn commando's die gedefineerd zijn in de package.json die het builden en serven van de applicatie voor zich nemen. Een voorbeeld hiervan is `npm start`. Door `npm start` uit te voeren vanuit de folder waar de package.json file staat zal npm zien dat je `ng serve` wil draaien.

```json
{
  "name": "pokedex",
  "version": "0.0.0",
  "license": "MIT",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build --prod",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "^5.1.0",
    "@angular/common": "^5.1.0",
    "@angular/compiler": "^5.1.0",
    "@angular/core": "^5.1.0",
    "@angular/forms": "^5.1.0",
    "@angular/http": "^5.1.0",
    "@angular/platform-browser": "^5.1.0",
    "@angular/platform-browser-dynamic": "^5.1.0",
    "@angular/router": "^5.1.0",
    "core-js": "^2.4.1",
    "rxjs": "^5.5.6",
    "zone.js": "^0.8.19"
  },
  "devDependencies": {
    "@angular/cli": "1.6.4",
    "@angular/compiler-cli": "^5.1.0",
    "@angular/language-service": "^5.1.0",
    "@types/jasmine": "~2.8.3",
    "@types/jasminewd2": "~2.0.2",
    "@types/node": "~6.0.60",
    "codelyzer": "^4.0.1",
    "jasmine-core": "~2.8.0",
    "jasmine-spec-reporter": "~4.2.1",
    "karma": "~2.0.0",
    "karma-chrome-launcher": "~2.2.0",
    "karma-cli": "~1.0.1",
    "karma-coverage-istanbul-reporter": "^1.2.1",
    "karma-jasmine": "~1.1.0",
    "karma-jasmine-html-reporter": "^0.2.2",
    "protractor": "~5.1.2",
    "ts-node": "~3.2.0",
    "tslint": "~5.9.1",
    "typescript": "~2.5.3"
  }
}
```