import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asia',
  templateUrl: './asia.component.html',
  styleUrls: ['./asia.component.scss']
})
export class AsiaComponent {
  public sound = new Audio();
  ngAfterViewInit() {
    this.sound = new Audio();
    this.sound.src = 'assets/asia/flora.mp3';
    this.sound.load();
    setTimeout(() => {
      this.sound.play();
    }, 500);
  }

  ngOnDestroy() {
    this.sound.pause();
  }

}
