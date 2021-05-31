import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {Distro} from "./distro.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  public constructor(private titleService: Title) { }
  ngOnInit(){
    this.titleService.setTitle("Garuda Linux | Downloads")
  }

  distros : Distro[] =[
    new Distro( 'KDE Dr460nized', 'dr460nized',
      'The dr460nized editions of Garuda Linux offer a dark, blurry and fully immersive Plasma experience. The workflow is mac-alike with the appmenu baked right into the top bar. &#128009' ,),
    new Distro( 'Xfce', 'xfce',
      'Xfce is a lightweight desktop environment well known for being a rock-solid & stable. It aims to be fast and low on system resources, while still being visually appealing and user friendly.' ,),
    new Distro( 'Gnome', 'gnome',
      'GNOME is a modern desktop environment which is both clean and beautiful. It is focused on ease of use. GNOME edition uses Prime render offloading for Optimus laptops.',),
    new Distro( 'LXQT-Kwin', 'lxqt-kwin',
      'LXQt is a lightweight Qt desktop environment that does not get in your way. Its focus lays on being a lightweight, lag free desktop with modern look and feel.',),
    new Distro( 'Wayfire', 'wayfire',
      'Wayfire is a 3D Wayland compositor inspired by Compiz and based on wlroots. It aims to create a customizable, extendable and lightweight environment without sacrificing its appearance.',),
    new Distro( 'Qtile', 'qtile',
      'Qtile is a dynamic extensible window manager which is easy to customize. Garuda Qtile uses jgmenu which makes it very easy and convenient to launch applications without remembering key bindings.',),
    new Distro( 'BSPWM', 'bspwm',
      'BSPWM is a tiling window manager that represents windows as the leaves of a full binary tree. It only responds to X events and the messages it receives on a dedicated socket.',),
    new Distro( 'i3WM', 'i3',
      'i3-wm is a lightweight window manager that is operated exclusively with the keyboard. Our version has a simple and easy configuration with LXappearance to handle GTK themes. We do ship the configuration with an easy cheat sheet to get you started. Due to its light resources, it has a really small memory footprint.',),
    new Distro( 'Sway', 'sway',
'Garuda Sway edition ships with a completed configuration with easy to use keybindings and a cheat-sheet to help you get started. Following the Nord color scheme it is both good to look at and just as fast utilising the best of Wayland native alternatives to offer a seamless transition to the Wayland Compositor.',    ),
    new Distro( 'Barebones', 'barebones',
      'Garuda Linux Barebones is made for users who do not want extra software and functionalities and complain about bloat. It contains only the bare minimum of packages needed to get started. (You are on your own, we dont provide any support for Barebones editions!)',),
  ];
}
