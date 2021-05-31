import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DownloadsComponent} from "./downloads.component";
import {Dr460nizedComponent} from "./dr460nized/dr460nized.component";
import {XfceComponent} from "./xfce/xfce.component";
import {GnomeComponent} from "./gnome/gnome.component";
import {HomeComponent} from "./home/home.component";
import {LxqtKwinComponent} from "./lxqt-kwin/lxqt-kwin.component";
import {WayfireComponent} from "./wayfire/wayfire.component";
import {QtileComponent} from "./qtile/qtile.component";
import {BspwmComponent} from "./bspwm/bspwm.component";
import {I3Component} from "./i3/i3.component";
import {SwayComponent} from "./sway/sway.component";
import {BarebonesComponent} from "./barebones/barebones.component";

const routes: Routes = [
  {path: '', component: DownloadsComponent , children: [
      {path: '', component: HomeComponent},
      {path: 'dr460nized', component: Dr460nizedComponent},
      {path: 'xfce', component: XfceComponent},
      {path: 'gnome', component: GnomeComponent},
      {path: 'lxqt-kwin', component: LxqtKwinComponent},
      {path: 'wayfire', component: WayfireComponent},
      {path: 'qtile', component: QtileComponent},
      {path: 'bspwm', component: BspwmComponent},
      {path: 'i3', component: I3Component},
      {path: 'sway', component: SwayComponent},
      {path: 'barebones', component: BarebonesComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DownloadsRoutingModule { }
