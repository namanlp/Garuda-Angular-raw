import { Component, OnInit } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-bspwm',
  templateUrl: '../common/common.component.html',
  styleUrls: ['../home/home.component.css']
})
export class BspwmComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) { };

  distro = {
    nic: 'bspwm',
    name : 'BSPWM',
    desc: 'BSPWM is a tiling window manager that represents windows as the leaves of a full binary tree. It only responds to X events and the messages it receives on a dedicated socket.',
    metadesc: 'BSPWM is a tiling window manager that represents windows as the leaves of a full binary tree. It only responds to X events and the messages it receives on a dedicated socket.',
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
