import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-australia',
  templateUrl: './australia.component.html',
  styleUrls: ['./australia.component.scss']
})
export class AustraliaComponent {
  public sound = new Audio();
  ngAfterViewInit() {
    this.sound = new Audio();
    this.sound.src = 'assets/australia/animale.mp3';
    this.sound.load();
    this.sound.play();
  }

  ngOnDestroy() {
    this.sound.pause();
  }

  public playSound($event) {
    const sound = new Audio();
    switch ($event) {
      case 'cangur': {
        sound.src = 'assets/australia/cangur.mp3';
        sound.load();
        sound.play();
        break;
      }
      case 'emu': {
        sound.src = 'assets/australia/emu.mp3';
        sound.load();
        sound.play();
        break;
      }
      case 'koala': {
        sound.src = 'assets/australia/koala.mp3';
        sound.load();
        sound.play();
        break;
      }
      case 'ornitorinc': {
        sound.src = 'assets/australia/ornitorinc.mp3';
        sound.load();
        sound.play();
        break;
      }
      case 'sarpe': {
        sound.src = 'assets/australia/sarpe.mp3';
        sound.load();
        sound.play();
        break;
      }
      case 'vulpe': {
        sound.src = 'assets/australia/vulpe.mp3';
        sound.load();
        sound.play();
        break;
      }
      default:
        break;

    }
  }

}
