import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-educativ-card',
  templateUrl: './educativ-card.component.html',
  styleUrls: ['./educativ-card.component.scss']
})
export class EducativCardComponent {

  @Input()
  public image: string;
  @Input()
  public descriere: string;
}
