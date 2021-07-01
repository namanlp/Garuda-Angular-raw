import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path : '', component: HomeComponent },
  {path : 'index.html', redirectTo: ''},
  {path : 'downloads' , loadChildren: () => import('./downloads/downloads.module').then(m => m.DownloadsModule) },
  {path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  {path: 'about.html', redirectTo: 'about'},
  {path: 'downloads.html', redirectTo: 'downloads' },
  {path: 'download.html', redirectTo: 'downloads'},
  {path: 'download', redirectTo: 'downloads'},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
