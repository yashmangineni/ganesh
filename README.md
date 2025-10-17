# Vinayaka Chavitihi Festival Website

This project is a website for the Bala Ganesh Youth Community celebrating the Vinayaka Chavitihi (Ganesh Chaturthi) festival at Housing Board Guntur (APHB Guntur).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Deployment to Netlify

This project is configured for deployment to Netlify with the following settings:

1. Build command: `npm run build`
2. Publish directory: `dist/website`
3. The `_redirects` file handles client-side routing for Angular
4. The `netlify.toml` file contains additional configuration

To deploy:
1. Connect your GitHub repository to Netlify
2. Select this repository
3. Netlify will automatically use the settings from `netlify.toml`

## Custom Domain Configuration

The site is configured to work with the custom domain: `http://balaganeshyouthguntur.duckdns.org/`

To configure this domain:
1. Go to your Netlify dashboard
2. Select your site
3. Navigate to "Domain settings"
4. Click "Add custom domain"
5. Enter your domain: `balaganeshyouthguntur.duckdns.org`
6. Follow Netlify's instructions for DNS configuration

Since this uses DuckDNS (dynamic DNS), you'll need to ensure your DuckDNS client points to your Netlify site.

## Google Search Console Verification

The site includes a Google verification file (`googlee5531cdc5aaa54ab.html`) for Google Search Console. This file is automatically copied to the root of the build output directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
