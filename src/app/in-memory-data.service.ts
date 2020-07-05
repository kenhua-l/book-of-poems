import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Poem } from './poem';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const poems = [
      { id: 1, name: 'Sunshine', content: 'The weather must be good in your city these days Because you are such a sunshine' },
      { id: 2, name: 'Good Night', content: 'If you are free, greet me a good night So that my dreams can be a bliss'},
      { id: 3, name: 'Best Romance', content: 'Don’t worry about me, don’t spoil me so much As long as you are safe, that’s the best romance'},
      { id: 4, name: 'Loneliness', content: 'I do feel lonely without you these days But I am grateful for the loneliness'},
      { id: 5, name: 'Half', content: 'For it\'s clearer to me that you are the hald which would complete my half' },
      { id: 6, name: 'Smile', content: 'I\'m not afraid of what may happen tomorrow As long as I see you smile, my heart is full'},
      { id: 7, name: 'Safe Haven', content: 'I don\'t care what may happen to the world As long as we find safe haven in each other'},
      { id: 8, name: 'Brave', content: 'When I put you in my heart, my life is full And I\'m brave to face the world'}
    ];
    return {poems};
  }

  genId(poems: Poem[]): number {
    return poems.length > 0 ? Math.max(...poems.map(poem => poem.id)) + 1 : 1;
  }

  constructor() { }
}
