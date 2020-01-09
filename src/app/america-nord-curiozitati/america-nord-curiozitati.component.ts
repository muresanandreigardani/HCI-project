import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-america-nord-curiozitati',
  templateUrl: './america-nord-curiozitati.component.html',
  styleUrls: ['./america-nord-curiozitati.component.scss']
})
export class AmericaNordCuriozitatiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public sound = new Audio();

  ngAfterViewInit() {
    this.sound.src = 'assets/americaNord/curiozitati.mp3';
    this.sound.load();
    setTimeout(() => {
      this.sound.play();
    }, 500);
  }

  ngOnDestroy() {
    this.sound.pause();
  }
}
