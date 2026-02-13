import { Album, TourDate, MerchItem } from './types';

export const ALBUMS: Album[] = [
  { 
    id: '1', 
    title: '4DROAD', 
    year: '2022', 
    cover: 'https://zagaempire.com/wp-content/uploads/2021/08/RuffRasta-4DRoad-scaled.jpg',
    spotifyUrl: 'https://open.spotify.com/track/3bGLulhmWdmG0uS5ZDy3Vc'
  },
];

export const TOUR_DATES: TourDate[] = [
  { id: '1', date: 'SEP 12, 2026', city: 'Enugu, Nigeria', venue: 'National Stadium', link: '#', status: 'Available' },
  { id: '2', date: 'SEP 28, 2026', city: 'Accra, Ghana', venue: 'Bayfront Park', link: '#', status: 'Sold Out' },
  { id: '3', date: 'OCT 05, 2026', city: 'London, UK', venue: 'O2 Academy Brixton', link: '#', status: 'Available' },
  { id: '4', date: 'OCT 12, 2026', city: 'Paris, FR', venue: 'Le Bataclan', link: '#', status: 'Available' },
  { id: '5', date: 'OCT 20, 2026', city: 'New York, NY', venue: 'Madison Square Garden', link: '#', status: 'Sold Out' },
];

export const MERCH: MerchItem[] = [
  { id: '1', name: 'Lion of Judah Hoodie', price: '$65.00', image: 'https://picsum.photos/seed/merch1/500/600' },
  { id: '2', name: 'Zion Roots Tee', price: '$35.00', image: 'https://picsum.photos/seed/merch2/500/600' },
  { id: '3', name: 'Ruff Rasta Vinyl', price: '$40.00', image: 'https://picsum.photos/seed/merch3/500/600' },
  { id: '4', name: 'One Love Cap', price: '$25.00', image: 'https://picsum.photos/seed/merch4/500/600' },
];