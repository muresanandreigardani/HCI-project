import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-joc-numarare-australia',
  templateUrl: './joc-numarare-australia.component.html',
  styleUrls: ['./joc-numarare-australia.component.scss']
})
export class JocNumarareAustraliaComponent {
  public sound = new Audio();
  public sound2 = new Audio();
  constructor(private navCtrl: Router) { }

  ngAfterViewInit() {
    this.sound2.src = 'assets/jocNumarare/introducere.mp3';
    this.sound2.load();

    setTimeout(() => {
      this.sound2.play();
    }, 500);
  }


  public choose(val) {
    this.sound2.pause();

    if (val === 3) {
      this.sound.src = 'assets/jocNumarare/felicitari.mp3';
      this.sound.load();

      setTimeout(() => {
        this.sound.play();
      }, 500);
      setTimeout(() => {
        this.sound.pause();
        this.navCtrl.navigate(['/']);
      }, 4000);
    } else {
      this.sound.src = 'assets/jocNumarare/gresit.mp3';
      this.sound.load();
      setTimeout(() => {
        this.sound.play();
      }, 200);
    }
  }

  ngOnDestroy() {
    this.sound.pause();
  }

}
