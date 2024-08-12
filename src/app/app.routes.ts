import { Routes } from '@angular/router';
//import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PropertyListingComponent } from './property-listing/property-listing.component';
import { FooterComponent } from './footer/footer.component';
import { PropertyUploadComponent } from './property-upload/property-upload.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './pages/home/home.component'; 

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'property-listing', component: PropertyListingComponent},
    {path: 'property-upload', component: PropertyUploadComponent},
    {path: 'sign-up', component: SignUpComponent},
    {path: 'sign-in', component:  SignInComponent}

];
