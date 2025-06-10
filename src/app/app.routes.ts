import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TermsPageComponent } from './pages/terms-page/terms-page.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'terms', component: TermsPageComponent },
    { path: '**', redirectTo: '' },

];
