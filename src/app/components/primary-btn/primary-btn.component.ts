import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primary-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './primary-btn.component.html',
  styleUrl: './primary-btn.component.scss'
})
export class PrimaryBtnComponent {
  @Input()
  text: string = '';

  @Input()
  links: string = '';

  @Input() download: boolean = false;
}
