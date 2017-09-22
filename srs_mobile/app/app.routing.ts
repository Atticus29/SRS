import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { RegistrationComponent } from "./registration/registration.component";

const routes: Routes = [
    {
    path: "", redirectTo: "/registration", 
    pathMatch: "full"
  },
    {
       path: "items",
       component: ItemsComponent
     },
    {
      path: "item/:id",
      component: ItemDetailComponent
    },
    {
      path: "registration",
      component: RegistrationComponent
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
