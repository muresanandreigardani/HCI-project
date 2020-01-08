import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-australia-flora',
  templateUrl: './australia-flora.component.html',
  styleUrls: ['./australia-flora.component.scss']
})
export class AustraliaFloraComponent {
  public sound = new Audio();

  ngAfterViewInit() {
    this.sound.src = '../../assets/australia/flora.mp3';
    this.sound.load();
    this.sound.play();
  }

  ngOnDestroy() {
    this.sound.pause();
  }

  public playSound($event) {
    const sound = new Audio();
    switch ($event) {
      case 'ficus': {
        sound.src = '../../assets/australia/ficus.mp3';
        sound.load();
        sound.play();
        break;
      }
      case 'eucalipt': {
        sound.src = '../../assets/australia/eucalipt.mp3';
        sound.load();
        sound.play();
        break;
      }
      case 'salcam': {
        sound.src = '../../assets/australia/salcam.mp3';
        sound.load();
        sound.play();
        break;
      }
      default:
        break;
    }
  }
}
