import { Component } from '@angular/core';
import { TitleComponent } from '../../title/title.component';
import { SkillSectionComponent } from './skill-section/skill-section.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TitleComponent, SkillSectionComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

}
