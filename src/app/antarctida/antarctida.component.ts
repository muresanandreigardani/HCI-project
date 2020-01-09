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
    this.sound.src = 'assets/antartica/introducere.mp3';
    this.sound.load();

    setTimeout(() => {
      this.sound.play();
    }, 500);
  }

  ngOnDestroy() {
    this.sound.pause();
  }

}
