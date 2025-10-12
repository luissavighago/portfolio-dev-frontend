import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-skill-section',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './skill-section.component.html',
  styleUrl: './skill-section.component.css'
})
export class SkillSectionComponent {
  @Input() level!: string;
  @Input() description!: string;
  @Input() skills!: string[];
}
