import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-antarctida',
  templateUrl: './antarctida.component.html',
  styleUrls: ['./antarctida.component.scss']
})
export class AntarctidaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public sound = new Audio();
  ngAfterViewInit() {
    this.sound = new Audio();
    this.sound.src = '../../assets/antartica/introducere.mp3';
    this.sound.load();
    this.sound.play();
  }

  ngOnDestroy() {
    this.sound.pause();
  }

}
