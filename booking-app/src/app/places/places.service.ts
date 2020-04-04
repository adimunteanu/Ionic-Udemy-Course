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
      149.99,
      new Date('2019-01-01'),
      new Date('2019-12-31')
    ),
    new Place(
      'p2', 
      'L\'Amour Toujours', 
      'Romantic place in Paris.',
      'https://i.pinimg.com/originals/a9/45/72/a945725c0dc12770bb831e8d9fbc2fe6.png',
      189.99,
      new Date('2019-01-01'),
      new Date('2019-12-31')
    ),
    new Place(
      'p3', 
      'The Foggy Palace', 
      'Not your average city trip!',
      'https://data.whicdn.com/images/292751032/original.jpg',
      99.99,
      new Date('2019-01-01'),
      new Date('2019-12-31')
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
