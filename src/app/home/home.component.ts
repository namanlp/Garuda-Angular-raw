import { Component, OnInit } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public constructor(private titleService: Title, private metaService: Meta) {
  }

  ngOnInit() {
    this.titleService.setTitle("Garuda Linux | Home")
    this.metaService.addTags([
      {
        name: 'description',
        content: "Garuda Linux is an appealing Arch Linux based Distro  with BTRFS (modern filesystem), Linux-zen kernel, auto snapshots, gaming edition and a lot more bleeding-edge features."
      },
      {
        property: 'og:description',
        content: "Garuda Linux is an appealing Arch Linux based Distro  with BTRFS (modern filesystem), Linux-zen kernel, auto snapshots, gaming edition and a lot more bleeding-edge features."
      },
      {
        name: 'twitter:description',
        content: "Garuda Linux is an appealing Arch Linux based Distro  with BTRFS (modern filesystem), Linux-zen kernel, auto snapshots, gaming edition and a lot more bleeding-edge features."
      },
      {property: 'og:title', content: 'Garuda Linux | Home'},
      {name: 'twitter:title', content: 'Garuda Linux | Home'},
      {property: 'og:url', content: 'https://garudalinux.org/'},
      {name: 'twitter:url', content: 'https://garudalinux.org/'},
    ]);
  }
}
