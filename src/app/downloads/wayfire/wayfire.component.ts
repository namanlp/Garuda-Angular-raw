import { Component, OnInit } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-wayfire',
  templateUrl: '../common/common.component.html',
  styleUrls: ['../home/home.component.css']
})
export class WayfireComponent implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) { };

  distro = {
    nic: 'wayfire',
    name : 'Wayfire',
    desc: 'Wayfire is a 3D Wayland compositor inspired by Compiz and based on wlroots. It aims to create a customizable, extendable and lightweight environment without sacrificing its appearance.',
    metadesc: 'Wayfire is a 3D Wayland compositor inspired by Compiz and based on wlroots. It aims to create a customizable, extendable and lightweight environment without sacrificing its appearance.',
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
