import { Component } from '@angular/core';

import { Faker } from '../../shared/faker';

@Component({
  selector: 'app-section-1',
  standalone: true,
  imports: [],
  templateUrl: './section-1.component.html',
  styleUrl: './section-1.component.scss',
})
export class Section1Component {
  fakers = Faker.slice(0,24);
}
