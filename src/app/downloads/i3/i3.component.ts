
import { Component, OnInit } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-i3',
  templateUrl: '../common/common.component.html',
  styleUrls: ['../home/home.component.css']
})
export class I3Component implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) { };
  distro = {
    nic: 'i3',
    name : 'i3WM',
    desc: 'i3-wm is a lightweight window manager that is operated exclusively with the keyboard. Our version has a simple and easy configuration with LXappearance to handle GTK themes. We do ship the configuration with an easy cheat sheet to get you started. Due to its light resources, it has a really small memory footprint.',
    metadesc: 'i3-wm is a lightweight window manager that is operated exclusively with the keyboard. Our version has a simple and easy configuration with LXappearance to handle GTK themes. We do ship the configuration with an easy cheat sheet to get you started. Due to its light resources, it has a really small memory footprint.',
    edition: 210506,
    kernel: 'zen'
  };

  ngOnInit(): void {
    this.titleService.setTitle("Download Garuda Linux "+ this.distro.name + " Edition")
    this.metaService.addTags([
      { name:'description',content:this.distro.metadesc},
      { property:'og:description',content:this.distro.metadesc},
      { name:'twitter:description',content:this.distro.metadesc},
      {property: 'og:title', content: "Download Garuda Linux "+ this.distro.name + " Edition"},
      {name: 'twitter:title', content: "Download Garuda Linux "+ this.distro.name + " Edition"},
      {property: 'og:url', content: 'https://garudalinux.org/downloads/'+ this.distro.nic},
      {name: 'twitter:url', content: 'https://garudalinux.org/downloads/'+ this.distro.nic},
    ]);
  }

}
