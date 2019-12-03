import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-continentele',
  templateUrl: './continentele.component.html',
  styleUrls: ['./continentele.component.scss']
})
export class ContinenteleComponent {

  constructor(private router: Router) { }

  public australiaHover($event) {
    if ($event === 'enter') {
      const africa = document.getElementsByClassName("image-continente")[0];
      africa.setAttribute("style", "background-image: url('../../assets/australia.jpg');");
    }
    else {
      const africa = document.getElementsByClassName("image-continente")[0];
      africa.setAttribute("style", "background-image: url('../../assets/lumea.png');");

    }
  }
  public africaHover($event) {
    if ($event === 'enter') {
      const africa = document.getElementsByClassName("image-continente")[0];
      africa.setAttribute("style", "background-image: url('../../assets/africa.jpg');");
    }
    else {
      const africa = document.getElementsByClassName("image-continente")[0];
      africa.setAttribute("style", "background-image: url('../../assets/lumea.png');");

    }
  }
  public americaSudHover($event) {
    if ($event === 'enter') {
      const africa = document.getElementsByClassName("image-continente")[0];
      africa.setAttribute("style", "background-image: url('../../assets/americaSud.jpg');");
    }
    else {
      const africa = document.getElementsByClassName("image-continente")[0];
      africa.setAttribute("style", "background-image: url('../../assets/lumea.png');");

    }
  }
  public americaNordHover($event) {
    if ($event === 'enter') {
      const africa = document.getElementsByClassName("image-continente")[0];
      africa.setAttribute("style", "background-image: url('../../assets/americaNord.jpg');");
    }
    else {
      const africa = document.getElementsByClassName("image-continente")[0];
      africa.setAttribute("style", "background-image: url('../../assets/lumea.png');");

    }
  }
  public europaHover($event) {
    if ($event === 'enter') {
      const africa = document.getElementsByClassName("image-continente")[0];
      africa.setAttribute("style", "background-image: url('../../assets/europa.jpg');");
    }
    else {
      const africa = document.getElementsByClassName("image-continente")[0];
      africa.setAttribute("style", "background-image: url('../../assets/lumea.png');");

    }
  }
  public asiaHover($event) {
    if ($event === 'enter') {
      const africa = document.getElementsByClassName("image-continente")[0];
      africa.setAttribute("style", "background-image: url('../../assets/asia.jpg');");
    }
    else {
      const africa = document.getElementsByClassName("image-continente")[0];
      africa.setAttribute("style", "background-image: url('../../assets/lumea.png');");

    }
  }
  public antarctidaHover($event) {
    if ($event === 'enter') {
      const africa = document.getElementsByClassName("image-continente")[0];
      africa.setAttribute("style", "background-image: url('../../assets/antartica.jpg');");
    }
    else {
      const africa = document.getElementsByClassName("image-continente")[0];
      africa.setAttribute("style", "background-image: url('../../assets/lumea.png');");

    }
  }

  public goToAmericaNord() {
    this.router.navigate(['/america-nord']);
  }
  public goToAmericaSud() {
    this.router.navigate(['/america-sud']);
  }
  public goToAfrica() {
    this.router.navigate(['/africa']);
  }
  public goToEuropa() {
    this.router.navigate(['/europa']);
  }
  public goToAustralia() {
    this.router.navigate(['/australia']);
  }
  public goToAsia() {
    this.router.navigate(['/asia']);
  }
  public goToAntarctida() {
    this.router.navigate(['/antarctida']);
  }
  public goToPolulNord() {
    this.router.navigate(['/polul-nord']);
  }




}
