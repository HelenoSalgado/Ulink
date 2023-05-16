export interface ReqHeaderAnalytics{
  id_analytic: string,
  city: string; 
  region: string;
  country: string;   
  code_postal: string; 
  lat: string;
  lon: string;
  timezone: string;
  ip: string;
  referrer: string;
}

export const modelAnalytic: ReqHeaderAnalytics = {
  id_analytic: '',
  city: '', 
  region: '',
  country: '',   
  code_postal: '', 
  lat: '',
  lon: '',
  timezone: '',
  ip: '',
  referrer: '',
}

  