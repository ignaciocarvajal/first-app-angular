import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders} from './app.routing';
/*modules*/
import { ModuleEmailModule} from './modules/module-email/module-email.module';
/*Componentes*/
import { AppComponent } from './app.component';
import { SimpleTinyComponent} from './components/simple-tiny/simple-timy.component';
import { ShopComponent } from './components/shop/shop.component';
import { ParqueComponent} from './components/parque/parque.component';
import { HomeComponent } from './components/home/home.component';
import { KeepersComponent } from './components/keepers/keepers.component';
import { ContactComponent} from './components/contact/contact.component';
import { AnimalsComponent} from './components/animals/animals.component';



@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    ParqueComponent,
    HomeComponent,
    KeepersComponent,
    ContactComponent,
    AnimalsComponent,
    SimpleTinyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ModuleEmailModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
