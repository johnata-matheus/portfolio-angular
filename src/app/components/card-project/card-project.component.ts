import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-project.component.html',
  styleUrl: './card-project.component.scss'
})
export class CardProjectComponent {
  @Input()
  links: string[] = [];

  @Input()
  pathImage: string = '';

  @Input()
  title: string = '';

  @Input()
  items: { name: string, color: string }[] = [];

}
