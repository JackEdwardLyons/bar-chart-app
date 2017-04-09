import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

export const router: Routes = [
    { path: '', redirectTo: 'demos', pathMatch: 'full' }
    // { path: 'demos', component: DemosComponent },
    // { path: 'charts', component: BarChartComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);