import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-africa-joc',
  templateUrl: './africa-joc.component.html',
  styleUrls: ['./africa-joc.component.scss']
})
export class AfricaJocComponent {
  public sound = new Audio();
  public sound2 = new Audio();

  constructor(private navCtrl: Router) { }

  ngAfterViewInit() {
    this.sound2.src = '../../assets/africa/joc.mp3';
    this.sound2.load();
    this.sound2.play();
  }


  public choose(val) {
    if (val === 1) {
      this.sound.src = '../../assets/africa/felicitari.mp3';
      this.sound.load();
      this.sound.play();
      this.sound2.pause();
      setTimeout(() => {
        this.sound.pause();
        this.navCtrl.navigate(['/']);
      }, 1000);
    }
    else {
      this.sound.src = '../../assets/asia/gresit.mp3';
      this.sound.load();
      this.sound.play();
    }
  }

  ngOnDestroy() {
    this.sound.pause();
  }

}
