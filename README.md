# AlainsBlog

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# Iteration 0

## 1. Create a new Angular Project

- create new project with ng

```bash
ng new alains-blog
```

- chose the following settings
  - _Sass SCSS_
  - _No Serverside Rendering_

---

## 2. Configure Safari as Test-Browser

- Generate karma-config.js

```bash
ng generate config karma
```

- open the karma-config.js file and alter the following lines

```bash
require('karma-safari-launcher'), // Safari-Launcher-Plugin hinzufügen

browsers: ['Safari'], // Safari hinzufügen
```

- verify if safari-launcher installed

```bash
npm install karma-safari-launcher --save-dev
```

- run the test (should open in safari now)

```bash
ng test
```

- [i] General [Infos](https://angular.dev/guide/testing#test-file-name-and-location) about testing

---

## 3. Setup a Git-Repository

- ng creates directly a local git repository, therefore you just have to [[Management#GitHub Repository erstellen|create and connect]] it with github

---

## 4. Einrichtung von Code-Qualitätstools für eine Angular-Anwendung

Install the following dependencies in VS Code

- _ESLint_ zur statischen Codeanalyse
- _Prettier_ zur automatischen Code Formatierung
- _CommitLint_ zur Prüfung von Commit Regeln

---

## 5. Automatic Deployment on Azure

- [!] If the process won't work, set your GitHub Repo to public

### Setup

1.  Login into [Azure]()
2.  **Add Static Web App**: In Azure, go to “Static Web Apps” and click “+ Create.”
3.  **Select Resource Group**: Choose your existing resource group or create a new one.
4.  **Enter App Name**: Provide a unique name for your static web app.
5.  **Select Service Plan**: Choose “Free” or “Standard” depending on your needs.
6.  **Source**: Chose Github and log in with your Account

- [*] The following steps should be automatically filled out, but check to make sure

9. **Select Framework**: Set it to “Angular.”
10. **Enter Source Directory**: Enter _/_ as the source directory.
11. **Build Output Directory**: Set this to _dist/your-app-name/browser_.

- After filling out these fields, click “Review + Create” and then “Create.” Azure will deploy your Angular app.

  ![[Screenshot 2024-10-25 at 11.45.02.png]]

### View

1. Open the WebApp-Ressource you just created
2. Press on _View app in browser_

- [*] Now a new tab should open and show your webapp, perhaps you will have to wait a few minutes

---

## 6. CI/CD-Pipeline einrichten

- [*] Implement a Pipeline to automatically run the following Steps for each commit:

  - **Build**: Das Projekt soll gebaut werden.
  - **Testen**: Führen Sie alle Unit-Tests und Integrations-Tests durch.
  - **Automatisiertes `ng update`**: Die Pipeline soll automatisch prüfen, ob Angular oder andere Abhängigkeiten aktualisiert werden können, und diese Updates anwenden.

Follow the steps in this [Video](https://www.youtube.com/watch?v=1vqJ1_AAcUg) to setup the Pipeline
