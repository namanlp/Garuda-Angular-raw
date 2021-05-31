import { Component, OnInit } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-dr460nized',
  templateUrl: '../common/common.component.html',
  styleUrls: ['../home/home.component.css']
})
export class Dr460nizedComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) { };

  distro = {
    nic: 'dr460nized',
    name : 'KDE Dr460nized',
    desc: 'The dr460nized editions of Garuda Linux offer a dark, blurry and fully immersive Plasma experience. The workflow is mac-alike with the appmenu baked right into the top bar. &#128009' ,
    metadesc: 'The dr460nized editions of Garuda Linux offer a dark, blurry and fully immersive Plasma experience.' ,
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
