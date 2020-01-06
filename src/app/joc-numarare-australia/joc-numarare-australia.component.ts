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
    this.sound2.src = '../../assets/jocNumarare/introducere.mp3';
    this.sound2.load();
    this.sound2.play();
  }


  public choose(val) {
    if (val === 3) {
      this.sound.src = '../../assets/jocNumarare/felicitari.mp3';
      this.sound.load();
      this.sound.play();
      this.sound2.pause();
      setTimeout(() => {
        this.sound.pause();
        this.navCtrl.navigate(['/']);
      }, 3000);
    }
    else {
      this.sound.src = '../../assets/jocNumarare/gresit.mp3';
      this.sound.load();
      this.sound.play();
    }
  }

  ngOnDestroy() {
    this.sound.pause();
  }

}
