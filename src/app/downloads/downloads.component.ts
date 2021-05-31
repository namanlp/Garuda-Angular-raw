import { Component, OnInit } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.css']
})
export class DownloadsComponent implements OnInit {
  public constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(){
    this.titleService.setTitle("Garuda Linux | Downloads")
    this.metaService.addTags([
    { name:'description',content:"Garuda Linux comes with a variety of desktop environments like KDE, Xfce, GNOME, LXQt-kwin, Wayfire, Qtile, BSPWM, i3wm and Sway  to choose from."},
    { property:'og:description',content:"Garuda Linux comes with a variety of desktop environments like KDE, Xfce, GNOME, LXQt-kwin, Wayfire, Qtile, BSPWM, i3wm and Sway  to choose from."},
    { name:'twitter:description',content:"Garuda Linux comes with a variety of desktop environments like KDE, Xfce, GNOME, LXQt-kwin, Wayfire, Qtile, BSPWM, i3wm and Sway  to choose from."},
    {property: 'og:title', content: 'Garuda Linux | Downloads'},
    {name: 'twitter:title', content: 'Garuda Linux | Downloads'},
    {property: 'og:url', content: 'https://garudalinux.org/downloads'},
    {name: 'twitter:url', content: 'https://garudalinux.org/downloads'},
    ]);
  }
}
