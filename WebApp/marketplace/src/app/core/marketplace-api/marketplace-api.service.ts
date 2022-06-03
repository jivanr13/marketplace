import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {OfferModel} from './models/offer.model';
import {HttpClient} from '@angular/common/http';
import {Category} from '../../business-modules/offers/offers.models';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarketplaceApiService {
  private lista: OfferModel[] = [
    {
      id: '1',
      category: 'cat 1',
      description: 'descripcio 1',
      publishedOn: new Date(),
      title: 'Product 1',
      user: 'ivan',
      pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/800px-Angular_full_color_logo.svg.png'
    },
    {
      id: '2',
      category: 'cat 2',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      publishedOn: new Date(),
      title: 'Lorem Ipsum is simply dummy text of the printing',
      user: 'ivan',
      pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/800px-Angular_full_color_logo.svg.png'
    },
    {
      id: '1',
      category: 'cat 1',
      description: 'descripcio 1',
      publishedOn: new Date(),
      title: 'Product 1',
      user: 'ivan',
      pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/800px-Angular_full_color_logo.svg.png'
    },
    {
      id: '2',
      category: 'esta categoria es larga',
      description: 'descripcio 2',
      publishedOn: new Date(),
      title: 'Product 2',
      user: 'ivan',
      pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/800px-Angular_full_color_logo.svg.png'
    },
    {
      id: '1',
      category: 'cat 1',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      publishedOn: new Date(),
      title: 'Product 1',
      user: 'ivan',
      pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/800px-Angular_full_color_logo.svg.png'
    },
    {
      id: '2',
      category: 'cat 2',
      description: 'descripcio 2',
      publishedOn: new Date(),
      title: 'Product 2',
      user: 'ivan',
      pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/800px-Angular_full_color_logo.svg.png'
    },
    {
      id: '1',
      category: 'cat 1',
      description: 'descripcio 1',
      publishedOn: new Date(),
      title: 'Product 1',
      user: 'ivan',
      pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/800px-Angular_full_color_logo.svg.png'
    },
    {
      id: '2',
      category: 'cat 2',
      description: 'Lorem Ipsum is simply dummy text of',
      publishedOn: new Date(),
      title: 'Product 2',
      user: 'ivan',
      pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/800px-Angular_full_color_logo.svg.png'
    }
  ];

  constructor(private http: HttpClient) { }

  getOffers(): Observable<OfferModel[]> {
    return this.http.get<OfferModel[]>(`${environment.marketplaceApUrl}Offer`);
  }

  postOffer(offerData: any): Observable<any> {
    return this.http.post(`${environment.marketplaceApUrl}Offer`, offerData);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.marketplaceApUrl}Category`);
  }
}
