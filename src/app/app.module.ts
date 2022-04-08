import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SalesComponent } from './sales/sales.component';
import { LoginComponent } from './login/login.component';

import { RouterModule,Routes } from '@angular/router';
import { BikesComponent } from './bikes/bikes.component';
import { ProductComponent } from './product/product.component';
import { GoupComponent } from './goup/goup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { ShowBikeInfoComponent } from './show-bike-info/show-bike-info.component';
import { CategoryidComponent } from './categoryid/categoryid.component';
import { CartComponent } from './cart/cart.component';
import { PreSaleComponent } from './pre-sale/pre-sale.component';



const routes:Routes = [
  {path:'login',component:LoginComponent},
  {path:'bikes',component:BikesComponent},
  {path:'cart',component:PreSaleComponent},
  {path: 'bikes/:id', component: ShowBikeInfoComponent },
  {path:'my-account',component:MyAccountComponent},
  {path:'',component:SalesComponent},
  {path:'**',component:NotFoundComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SalesComponent,
    LoginComponent,
    BikesComponent,
    ProductComponent,
    GoupComponent,
    MyAccountComponent,
    ShowBikeInfoComponent,
    CategoryidComponent,
    PreSaleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
