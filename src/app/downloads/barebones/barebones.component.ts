import { Component, OnInit } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-barebones',
  templateUrl: '../common/common.component.html',
  styleUrls: ['../home/home.component.css']
})
export class BarebonesComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) { };
  distro = {
  nic: 'barebones',
  name : 'Barebones',
  desc: 'Garuda Linux Barebones is made for users who do not want extra software and functionalities and complain about bloat. It contains only the bare minimum of packages needed to get started. (You are on your own, we dont provide any support for Barebones editions!)',
  metadesc: "Barebones edition contains only bare minimum packages and is made for users who do not want extra software and functionalities and complain about bloat.",
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
