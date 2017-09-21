import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

/*componentes*/

import { ShopComponent} from './components/shop/shop.component';
import { HomeComponent } from './components/home/home.component';
import { KeepersComponent } from './components/keepers/keepers.component';
import { ContactComponent} from './components/contact/contact.component';
import { AnimalsComponent} from './components/animals/animals.component';
import { LoginComponent} from './components/login/login.component';
import { RegisterComponent} from './components/register/register.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'animals', component: AnimalsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'keepers', component: KeepersComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sign-in', component: RegisterComponent},
  {path: '**', component: HomeComponent}
];

export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
