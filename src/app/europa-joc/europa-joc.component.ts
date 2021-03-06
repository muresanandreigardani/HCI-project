import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-europa-joc',
  templateUrl: './europa-joc.component.html',
  styleUrls: ['./europa-joc.component.scss']
})
export class EuropaJocComponent implements OnInit {


  ngOnInit() {
  }
  public sound = new Audio();
  public sound2 = new Audio();
  constructor(private navCtrl: Router) { }

  ngAfterViewInit() {
    this.sound2.src = 'assets/europa/joc.mp3';
    this.sound2.load();
    setTimeout(() => {
      this.sound2.play();
    }, 500);
  }


  public choose(val) {
    this.sound2.pause();
    if (val === 1) {
      this.sound.src = 'assets/europa/felicitari.mp3';
      this.sound.load();
      setTimeout(() => {
        this.sound.play();
      }, 500);
      setTimeout(() => {
        this.sound.pause();
        this.navCtrl.navigate(['/']);
      }, 4500);
    }
    else {
      this.sound.src = 'assets/asia/gresit.mp3';
      this.sound.load();
      setTimeout(() => {
        this.sound.play();
      }, 500);
    }
  }

  ngOnDestroy() {
    this.sound.pause();
  }
}
