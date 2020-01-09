import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amerca-de-nord',
  templateUrl: './amerca-de-nord.component.html',
  styleUrls: ['./amerca-de-nord.component.scss']
})
export class AmercaDeNordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public sound = new Audio();
  ngAfterViewInit() {
    this.sound = new Audio();
    this.sound.src = 'assets/americaNord/intro.mp3';
    this.sound.load();
    setTimeout(() => {
      this.sound.play();
    }, 500);
  }

  ngOnDestroy() {
    this.sound.pause();
  }
}
