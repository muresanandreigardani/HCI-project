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
    this.sound.src = '../../assets/asia/flora.mp3';
    this.sound.load();
    this.sound.play();
  }

  ngOnDestroy() {
    this.sound.pause();
  }

}
