
export interface FlightBookingSelector {
  airports: Airport[];
  countries: Countries[];
  routes: Routes;
}

export interface Airport {
  base: boolean;
  country: {
    code: string;
    currency: string;
    englishSeoName: string;
    name: string;
    seoName: string;
    url: string;
  };
  iataCode: string;
  latitude: number;
  longitude: number;
  name: string;
}

export interface Countries {
  code: string;
  currency: string;
  englishSeoName: string;
  name: string;
  seoName: string;
  url: string;
}

export interface Routes {
  [iata: string]: string[];
}
