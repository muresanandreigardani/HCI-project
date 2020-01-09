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
    setTimeout(() => {
      this.sound.play();
    }, 500);
  }

  ngOnDestroy() {
    this.sound.pause();
  }

}
