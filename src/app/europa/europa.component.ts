import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-europa',
  templateUrl: './europa.component.html',
  styleUrls: ['./europa.component.scss']
})
export class EuropaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public sound = new Audio();
  ngAfterViewInit() {
    this.sound = new Audio();
    this.sound.src = '../../assets/europa/introducere.mp3';
    this.sound.load();
    this.sound.play();
  }

  ngOnDestroy() {
    this.sound.pause();
  }
}
