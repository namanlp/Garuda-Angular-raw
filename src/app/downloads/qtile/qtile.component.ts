import { Component, OnInit } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-qtile',
  templateUrl: '../common/common.component.html',
  styleUrls: ['../home/home.component.css']
})
export class QtileComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) { };

  distro = {
    nic: 'qtile',
    name : 'Qtile',
    desc: 'Qtile is a dynamic extensible window manager which is easy to customize. Garuda Qtile uses jgmenu which makes it very easy and convenient to launch applications without remembering key bindings.',
    metadesc: 'Qtile is a dynamic extensible window manager which is easy to customize. Garuda Qtile uses jgmenu which makes it very easy and convenient to launch applications without remembering key bindings.',
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
