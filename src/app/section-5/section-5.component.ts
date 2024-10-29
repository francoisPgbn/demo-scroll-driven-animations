import { Component } from '@angular/core';
import { Faker } from '../../shared/faker';

@Component({
  selector: 'app-section-5',
  standalone: true,
  imports: [],
  templateUrl: './section-5.component.html',
  styleUrl: './section-5.component.scss'
})
export class Section5Component {

  fakers = Faker.slice(0,36);
}
