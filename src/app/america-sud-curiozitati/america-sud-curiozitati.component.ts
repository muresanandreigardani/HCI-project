import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-america-sud-curiozitati',
  templateUrl: './america-sud-curiozitati.component.html',
  styleUrls: ['./america-sud-curiozitati.component.scss']
})
export class AmericaSudCuriozitatiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public sound = new Audio();

  ngAfterViewInit() {
    this.sound.src = '../../assets/americaSud/curiozitati.mp3';
    this.sound.load();
    this.sound.play();
  }

  ngOnDestroy() {
    this.sound.pause();
  }
}
