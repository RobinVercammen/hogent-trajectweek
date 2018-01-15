# Representational components

`ng g c components/pokemon-description`

## app-pokemon-description
Gebruik de aangemaakte component door zijn selector te gebruiken `<app-pokemon-description></app-pokemon-description>`. Dit doen we in de pokedex container component.

## Input 
Data wordt aan represantational components doorgegeven op basis van een @Input() decorator. Zo kunnen we eenvoudig complexe objecten doorgeven. Zo zie je dat er een object met property title en description wordt doorgegeven. Deze kan de component dan gebruiken om in de view te tonen.