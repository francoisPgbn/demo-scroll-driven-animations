import { Component } from '@angular/core';
import { Faker } from '../../shared/faker';

@Component({
  selector: 'app-section-4',
  standalone: true,
  imports: [],
  templateUrl: './section-4.component.html',
  styleUrl: './section-4.component.scss'
})
export class Section4Component {

  fakers = Faker.slice(0,36);
}
