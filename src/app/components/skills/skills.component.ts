import { Component } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { CardSkillComponent } from '../card-skill/card-skill.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TitleComponent, CardSkillComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  title: string[] = ['Backend', 'Frontend', 'Ferramentas', 'Design'];

  skillBack: string[] = ['Java', 'Spring', 'Node', 'MySQL', 'PostgreSQL'];

  skillFront: string[] = ['Angular', 'JavaScript', 'Html', 'Css'];

  skillTools: string[] = ['Docker', 'Git', 'Figma'];

}
