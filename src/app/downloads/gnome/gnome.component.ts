import { Component, OnInit } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-gnome',
  templateUrl: '../common/common.component.html',
  styleUrls: ['../home/home.component.css']
})
export class GnomeComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) { };

  distro = {
    nic: 'gnome',
    name : 'Gnome',
    desc: 'GNOME is a modern desktop environment which is both clean and beautiful. It is focused on ease of use. GNOME edition uses Prime render offloading for Optimus laptops.',
    metadesc: 'GNOME is a modern desktop environment which is both clean and beautiful. It is focused on ease of use. GNOME edition uses Prime render offloading for Optimus laptops.',
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
