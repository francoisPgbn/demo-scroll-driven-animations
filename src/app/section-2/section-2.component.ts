import { Component } from '@angular/core';
import { Faker } from '../../shared/faker';

@Component({
  selector: 'app-section-2',
  standalone: true,
  imports: [],
  templateUrl: './section-2.component.html',
  styleUrl: './section-2.component.scss'
})
export class Section2Component {

  fakers = Faker.slice(30,35);
}
