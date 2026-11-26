# Road to Sub 40 – training result patch

Ik kon de broncode van de GitHub-repository niet betrouwbaar uitlezen, dus dit pakket vervangt je bestaande `index.html` bewust **niet**. Daarmee voorkom je dat je huidige schema en lokale opslag kapotgaan.

Bestanden:
- `training-log-core.js`: opslag en berekening
- `training-log-ui.js`: gedrag van de registratie
- `training-log.css`: styling
- `training-log-snippet.html`: UI die in een bestaande trainingskaart moet worden opgenomen

Voorbeeld 3×8 min: `6:30, 8:00, 2:00` geeft 16:30 / 24:00 = 69%.

Bestaande gegevens blijven intact omdat deze uitbreiding een eigen localStorage-key gebruikt: `roadToSub40.trainingLog.v1`.
