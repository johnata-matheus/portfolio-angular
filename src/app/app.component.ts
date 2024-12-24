import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimaryBtnComponent } from './components/primary-btn/primary-btn.component';
import { TitleComponent } from './components/title/title.component';
import { SubtitleComponent } from './components/subtitle/subtitle.component';
import { CardSkillComponent } from './components/card-skill/card-skill.component';
import { FormsModule, NgForm } from '@angular/forms';
import { EmailService } from './services/email.service';
import { ToastrService } from 'ngx-toastr';
import { IEmail } from './interfaces/IEmail';
import { CardProjectComponent } from './components/card-project/card-project.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimaryBtnComponent, TitleComponent, SubtitleComponent, CardSkillComponent, CardProjectComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  linkContact: string = '#contact'
  linkCurriculum: string = "../../../assets/curriculo-att-2024.pdf"
  title: string[] = ['Backend', 'Frontend', 'Ferramentas'];
  skillBack: string[] = ['Java', 'Spring', 'PHP / Laravel', 'Node', 'Nest', 'MySQL', 'PostgreSQL', 'MongoDB', 'Testes Automatizados'];
  skillFront: string[] = ['Vue', 'React', 'Angular', 'JavaScript', 'Tailwind / Bootstrap' ,'Html', 'Css'];
  skillTools: string[] = ['Docker', 'CI/CD', 'Azure' ,'Git', 'Figma'];

  stateForm: boolean = false;

  @ViewChild('form') emailForm!: NgForm;

  constructor(private emailService: EmailService, private toastr: ToastrService){}

  pathFinance: string = 'assets/jpg/finance.jpg';
  pathPortfolio: string = 'assets/jpg/portfolio.jpg';
  pathBikcraft: string = 'assets/jpg/bikcraft.jpg';
  pathColab: string = 'assets/jpg/colab.jpg';

  link: string[][] = [
    ['https://github.com/johnata-matheus/portfolio-angular'],
    ['https://github.com/johnata-matheus/api-finance'],
    ['https://github.com/johnata-matheus/desafio-api-colab'],
    ['https://github.com/johnata-matheus/bikcraft']
  ]

  items = [
    [
      { name: 'Angular', color: '#DD0031' },
      { name: 'Html&Css', color: '#E34F26' },
      { name: 'Java', color: '#ED8B00' }
    ],
    [
      { name: 'java', color: '#ED8B00' },
      { name: 'Mysql', color: '#005c84' },
      { name: 'Angular', color: '#DD0031' },
      { name: '+2', color: '' }
    ],
    [
      { name: 'java', color: '#ED8B00' },
      { name: 'Mysql', color: '#005c84' },
      { name: 'Docker', color: '#0DB7ED' }
    ],
    [
      { name: 'Html&Css', color: '#E34F26' },
      { name: 'Javascript', color: '#F7DF1E' },
    ]
  ]

  description: string[] = [
    'Desenvolvido de maneira detalhada desde o figma, essa aplicação destaca minha experiência, habilidades e projetos desenvolvidos.',
    'Finance é uma aplicação de gerenciamento financeiro, projetado para facilitar o controle de despesas pessoais de maneira fácil e organizada.',
    'Este projeto se trata de uma API desenvolvida com base em um jogo, onde é possivel gerenciar um campeão e suas respectivas habilidades.',
    'Bikcraft é um site fictício revolucionário que oferece uma experiência completa para entusiastas de bicicletas elétricas. '
  ] 

  toggleMenu(){
    const menu = document.querySelector(".menu");
    menu!.classList.toggle('active');
  }

  sendEmail(form: IEmail){
    this.emailService.sendEmail(form).subscribe(
      {
        next: () => {
          this.stateForm = true;
          this.toastr.success("Mensagem enviada com sucesso!");
          this.emailForm.resetForm();
        },
        error: (e) => {
          this.toastr.error("Erro ao enviar a mensagem, tente novamente mais tarde.");
          this.stateForm = false;
        }
      }
    );
  }
}
