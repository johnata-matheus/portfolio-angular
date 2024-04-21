import { Component } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { CardProjectComponent } from '../card-project/card-project.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TitleComponent, CardProjectComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  pathFinance: string = 'assets/jpg/finance.jpg';
  pathPortfolio: string = 'assets/jpg/portfolio.jpg';
  pathBikcraft: string = 'assets/jpg/bikcraft.jpg';
  pathColab: string = 'assets/jpg/colab.jpg';

  link: string[][] = [
    ['https://github.com/johnata-matheus/portfolio'],
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
}
