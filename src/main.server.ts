import 'zone.js/node';
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { renderApplication } from '@angular/platform-server';

import { config } from './app/app.config.server';
import { AppComponent } from './app/app.component';
import { APP_BASE_HREF } from '@angular/common';

const BASE_URL = import.meta.env.BASE_URL;

if (import.meta.env.PROD) {
  enableProdMode();
}

export function bootstrap() {
  return bootstrapApplication(AppComponent, config);
}

export default async function render(url: string, document: string) {
  const html = await renderApplication(bootstrap, {
    document,
    url,
    platformProviders: [{ provide: APP_BASE_HREF, useValue: BASE_URL }],
  });

  return html;
}
