import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-africa',
  templateUrl: './africa.component.html',
  styleUrls: ['./africa.component.scss']
})
export class AfricaComponent {

  public sound = new Audio();
  ngAfterViewInit() {
    this.sound = new Audio();
    this.sound.src = 'assets/africa/introducere.mp3';
    this.sound.load();
    setTimeout(() => {
      this.sound.play();
    }, 500);
  }

  ngOnDestroy() {
    this.sound.pause();
  }

}
