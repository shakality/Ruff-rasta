export interface Album {
  id: string;
  title: string;
  year: string;
  cover: string;
  spotifyUrl?: string;
}

export interface TourDate {
  id: string;
  date: string;
  city: string;
  venue: string;
  link: string;
  status: 'Available' | 'Sold Out';
}

export interface MerchItem {
  id: string;
  name: string;
  price: string;
  image: string;
}