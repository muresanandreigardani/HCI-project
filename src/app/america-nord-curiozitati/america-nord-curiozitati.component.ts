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
    this.sound.src = '../../assets/americaNord/curiozitati.mp3';
    this.sound.load();
    this.sound.play();
  }

  ngOnDestroy() {
    this.sound.pause();
  }
}
