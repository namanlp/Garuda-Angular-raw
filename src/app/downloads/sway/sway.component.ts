import { Component, OnInit } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-sway',
  templateUrl: '../common/common.component.html',
  styleUrls: ['../home/home.component.css']
})
export class SwayComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) { };

  distro = {
    nic: 'sway',
    name : 'Sway',
    desc: 'Garuda Sway edition ships with a completed configuration with easy to use keybindings and a cheat-sheet to help you get started. Following the Nord color scheme it is both good to look at and just as fast utilising the best of Wayland native alternatives to offer a seamless transition to the Wayland Compositor.',
    metadesc: 'Garuda Sway edition ships with a completed configuration with easy to use keybindings and a cheat-sheet to help you get started. Following the Nord color scheme it is both good to look at and just as fast utilising the best of Wayland native alternatives to offer a seamless transition to the Wayland Compositor.',
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
