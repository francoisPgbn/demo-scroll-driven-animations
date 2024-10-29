import { Component } from '@angular/core';
import { Faker } from '../../shared/faker';

@Component({
  selector: 'app-section-6',
  standalone: true,
  imports: [],
  templateUrl: './section-6.component.html',
  styleUrl: './section-6.component.scss'
})
export class Section6Component {
  fakers = Faker.slice(0,20);
}
