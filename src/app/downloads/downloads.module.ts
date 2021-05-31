import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DownloadsRoutingModule } from './downloads-routing.module';
import {DownloadsComponent} from "./downloads.component";
import { Dr460nizedComponent } from './dr460nized/dr460nized.component';
import { XfceComponent } from './xfce/xfce.component';
import { GnomeComponent } from './gnome/gnome.component';
import { HomeComponent } from './home/home.component';
import { LxqtKwinComponent } from './lxqt-kwin/lxqt-kwin.component';
import { WayfireComponent } from './wayfire/wayfire.component';
import { QtileComponent } from './qtile/qtile.component';
import { BspwmComponent } from './bspwm/bspwm.component';
import { I3Component } from './i3/i3.component';
import { SwayComponent } from './sway/sway.component';
import { BarebonesComponent } from './barebones/barebones.component';

@NgModule({
  declarations: [
    DownloadsComponent,
    Dr460nizedComponent,
    XfceComponent,
    GnomeComponent,
    HomeComponent,
    LxqtKwinComponent,
    WayfireComponent,
    QtileComponent,
    BspwmComponent,
    I3Component,
    SwayComponent,
    BarebonesComponent,
  ],
  imports: [
    CommonModule,
    DownloadsRoutingModule
  ],
  exports: [DownloadsComponent]
})
export class DownloadsModule { }
