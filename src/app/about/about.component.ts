import { Component, OnInit } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public constructor(private titleService: Title, private metaService: Meta) {
  }

  ngOnInit() {
    this.titleService.setTitle("Garuda Linux | About Us")
    this.metaService.addTags([
      {
        name: 'description',
        content: "Garuda Linux has a diversified yet unified team that works hard to build a better open source Operating System for You"
      },
      {
        property: 'og:description',
        content: "Garuda Linux has a diversified yet unified team that works hard to build a better open source Operating System for You"
      },
      {
        name: 'twitter:description',
        content: "Garuda Linux has a diversified yet unified team that works hard to build a better open source Operating System for You"
      },
      {property: 'og:title', content: 'Garuda Linux | About Us'},
      {name: 'twitter:title', content: 'Garuda Linux | About Us'},
      {property: 'og:url', content: 'https://garudalinux.org/about'},
      {name: 'twitter:url', content: 'https://garudalinux.org/about'},
    ]);
  }
}
