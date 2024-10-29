import { Component } from '@angular/core';
import { Faker } from '../../shared/faker';

@Component({
  selector: 'app-section-7',
  standalone: true,
  imports: [],
  templateUrl: './section-7.component.html',
  styleUrl: './section-7.component.scss'
})
export class Section7Component {
  fakers = Faker.slice(22,25);

}
