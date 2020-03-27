import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1', 
      'Manhattan Mansion', 
      'In the heart of New York City.', 
      'https://static.mansionglobal.com/production/media/article-images/8b6775fa0db27ccc4a5aa3fe8d13f8cc/large_053.jpg', 
      149.99
    ),
    new Place(
      'p2', 
      'L\'Amour Toujours', 
      'Romantic place in Paris.',
      'https://lh3.googleusercontent.com/proxy/F_bzxS8bf3bcTh3zhxG4szl_oZeHIhWshccqGTICe-8jUH_38BVmonkORnUdbFDlYYk712WC_4LmoA1QEmdO41G3pi5ZZ9ZP5ModjM-V2IuvpJdDdM5FaqiyPXZgiroC_8ojWAw5Lu8',
      189.99
    ),
    new Place(
      'p3', 
      'The Foggy Palace', 
      'Not your average city trip!',
      'https://data.whicdn.com/images/292751032/original.jpg',
      99.99
    )
  ];

  get places() {
    return [...this._places];
  }

  constructor() { }

  getPlace(id: string) {
    return {...this._places.find(p => p.id === id)};
  }
}
