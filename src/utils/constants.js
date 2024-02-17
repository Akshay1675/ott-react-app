

export const BACKGROUND_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_small.jpg"

export const USER_AVATAR =
  "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";


export const API_OPTIONS = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY
    },
  };

  export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

  export const LANG_SELECT = [ {identifiler: 'en', name: 'English'}, {identifiler: 'marathi', name: 'Marathi'},{identifiler: 'hindi', name: 'Hindi'},]

  export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY