
import { Component, OnInit } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-lxqt',
  templateUrl: '../common/common.component.html',
  styleUrls: ['../home/home.component.css']
})
export class LxqtKwinComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) { };

  distro = {
    nic: 'lxqt-kwin',
    name : 'LXQT-Kwin',
    desc: 'LXQt is a lightweight Qt desktop environment that does not get in your way. Its focus lays on being a lightweight, lag free desktop with modern look and feel.',
    metadesc: 'LXQt is a lightweight Qt desktop environment that does not get in your way. Its focus lays on being a lightweight, lag free desktop with modern look and feel.',
    edition: 210506,
    kernel: 'zen',
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
