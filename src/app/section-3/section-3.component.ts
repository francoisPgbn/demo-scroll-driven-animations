import { Component } from '@angular/core';
import { Faker } from '../../shared/faker';

@Component({
  selector: 'app-section-3',
  standalone: true,
  imports: [],
  templateUrl: './section-3.component.html',
  styleUrl: './section-3.component.scss'
})
export class Section3Component {
  fakers = Faker.slice(0,5);

}
