import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-skill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-skill.component.html',
  styleUrl: './card-skill.component.scss'
})
export class CardSkillComponent {
  @Input()
  title: string = '';

  @Input()
  items: string[] = [];

}
