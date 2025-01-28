import {NgModule} from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from '../home/home.component';
import { MyOrdersComponent } from '../my-orders/my-orders.component';

const routes : Routes = [
    {
        path: '' , 
        component:MyOrdersComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CheckoutRoutingModule { }