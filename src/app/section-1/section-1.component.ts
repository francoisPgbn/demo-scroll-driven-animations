import { Component, ElementRef, QueryList, ViewChildren, viewChildren } from '@angular/core';

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

  @ViewChildren(Faker.map(i => i.id).join(', ')) children! : QueryList<ElementRef>;

  ngAfterViewInit() {
    console.log(this.children); // QueryList containing the two div elements
  }

}
