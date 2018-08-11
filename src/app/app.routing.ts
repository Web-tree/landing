import {RouterModule, Routes} from '@angular/router';
import {MystuffModule} from "./mystuff/mystuff.module";
import {HomeComponent} from "./home/home.component";
import {MystuffComponent} from "./mystuff/mystuff.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'mystuff', component: MystuffComponent},
  {path: '**', redirectTo: '/'}
];

export const routing = RouterModule.forRoot(appRoutes);
