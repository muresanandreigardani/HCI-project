import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amerca-de-sud',
  templateUrl: './amerca-de-sud.component.html',
  styleUrls: ['./amerca-de-sud.component.scss']
})
export class AmercaDeSudComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public sound = new Audio();
  ngAfterViewInit() {
    this.sound = new Audio();
    this.sound.src = 'assets/americaSud/intro.mp3';
    this.sound.load();
    setTimeout(() => {
      this.sound.play();
    }, 500);
  }

  ngOnDestroy() {
    this.sound.pause();
  }

}
