import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asia-fauna',
  templateUrl: './asia-fauna.component.html',
  styleUrls: ['./asia-fauna.component.scss']
})
export class AsiaFaunaComponent {
  public sound = new Audio();
  ngAfterViewInit() {
    this.sound = new Audio();
    this.sound.src = 'assets/asia/fauna.mp3';
    this.sound.load();
    this.sound.play();
  }

  ngOnDestroy() {
    this.sound.pause();
  }

}
