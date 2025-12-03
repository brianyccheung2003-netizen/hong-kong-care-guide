export interface Clinic {
  id: string;
  name: {
    en: string;
    'zh-TW': string;
    'zh-CN': string;
  };
  type: 'public' | 'private';
  specialty: 'gp' | 'specialist';
  specialties?: string[];
  address: {
    en: string;
    'zh-TW': string;
    'zh-CN': string;
  };
  district: string;
  phone: string;
  lat: number;
  lng: number;
  languages?: string[];
  hours?: {
    weekday: string;
    saturday: string;
    sunday: string;
  };
}

export const clinics: Clinic[] = [
  {
    id: 'clinic-1',
    name: {
      en: 'Sai Ying Pun Jockey Club General Out-patient Clinic',
      'zh-TW': '西營盤賽馬會普通科門診診所',
      'zh-CN': '西营盘赛马会普通科门诊诊所',
    },
    type: 'public',
    specialty: 'gp',
    address: {
      en: '134 Queen\'s Road West, Sai Ying Pun',
      'zh-TW': '西營盤皇后大道西134號',
      'zh-CN': '西营盘皇后大道西134号',
    },
    district: 'Central & Western',
    phone: '2859 8111',
    lat: 22.2867,
    lng: 114.1423,
    languages: ['Cantonese', 'English', 'Mandarin'],
    hours: {
      weekday: '09:00 - 13:00, 14:00 - 17:00',
      saturday: '09:00 - 13:00',
      sunday: 'Closed',
    },
  },
  {
    id: 'clinic-2',
    name: {
      en: 'Aberdeen Jockey Club General Out-patient Clinic',
      'zh-TW': '香港仔賽馬會普通科門診診所',
      'zh-CN': '香港仔赛马会普通科门诊诊所',
    },
    type: 'public',
    specialty: 'gp',
    address: {
      en: '8 Nam Ning Street, Aberdeen',
      'zh-TW': '香港仔南寧街8號',
      'zh-CN': '香港仔南宁街8号',
    },
    district: 'Southern',
    phone: '2580 8841',
    lat: 22.2479,
    lng: 114.1553,
    languages: ['Cantonese', 'English'],
    hours: {
      weekday: '09:00 - 13:00, 14:00 - 17:00',
      saturday: '09:00 - 13:00',
      sunday: 'Closed',
    },
  },
  {
    id: 'clinic-3',
    name: {
      en: 'Yau Ma Tei Jockey Club General Out-patient Clinic',
      'zh-TW': '油麻地賽馬會普通科門診診所',
      'zh-CN': '油麻地赛马会普通科门诊诊所',
    },
    type: 'public',
    specialty: 'gp',
    address: {
      en: '145 Battery Street, Yau Ma Tei',
      'zh-TW': '油麻地炮台街145號',
      'zh-CN': '油麻地炮台街145号',
    },
    district: 'Yau Tsim Mong',
    phone: '2272 2400',
    lat: 22.3116,
    lng: 114.1695,
    languages: ['Cantonese', 'English', 'Mandarin'],
    hours: {
      weekday: '09:00 - 13:00, 14:00 - 17:00',
      saturday: '09:00 - 13:00',
      sunday: 'Closed',
    },
  },
  {
    id: 'clinic-4',
    name: {
      en: 'Lek Yuen Health Centre',
      'zh-TW': '瀝源健康中心',
      'zh-CN': '沥源健康中心',
    },
    type: 'public',
    specialty: 'gp',
    address: {
      en: '1 Lek Yuen Street, Sha Tin',
      'zh-TW': '沙田瀝源街1號',
      'zh-CN': '沙田沥源街1号',
    },
    district: 'Sha Tin',
    phone: '2692 4411',
    lat: 22.3838,
    lng: 114.1878,
    languages: ['Cantonese', 'English'],
    hours: {
      weekday: '09:00 - 13:00, 14:00 - 17:30',
      saturday: '09:00 - 13:00',
      sunday: 'Closed',
    },
  },
  {
    id: 'clinic-5',
    name: {
      en: 'Dr. Chan Medical Clinic',
      'zh-TW': '陳醫生診所',
      'zh-CN': '陈医生诊所',
    },
    type: 'private',
    specialty: 'gp',
    address: {
      en: '123 Nathan Road, Tsim Sha Tsui',
      'zh-TW': '尖沙咀彌敦道123號',
      'zh-CN': '尖沙咀弥敦道123号',
    },
    district: 'Yau Tsim Mong',
    phone: '2366 1234',
    lat: 22.2988,
    lng: 114.1722,
    languages: ['Cantonese', 'English', 'Mandarin'],
    hours: {
      weekday: '09:00 - 19:00',
      saturday: '09:00 - 14:00',
      sunday: '10:00 - 13:00',
    },
  },
  {
    id: 'clinic-6',
    name: {
      en: 'Hong Kong Sanatorium & Hospital - Central Clinic',
      'zh-TW': '養和醫院中環診所',
      'zh-CN': '养和医院中环诊所',
    },
    type: 'private',
    specialty: 'specialist',
    specialties: ['Cardiology', 'Orthopaedics', 'Paediatrics', 'Internal Medicine'],
    address: {
      en: 'Central Building, Pedder Street, Central',
      'zh-TW': '中環畢打街中建大廈',
      'zh-CN': '中环毕打街中建大厦',
    },
    district: 'Central & Western',
    phone: '2835 8600',
    lat: 22.2823,
    lng: 114.1577,
    languages: ['Cantonese', 'English', 'Mandarin'],
    hours: {
      weekday: '09:00 - 18:00',
      saturday: '09:00 - 13:00',
      sunday: 'Closed',
    },
  },
  {
    id: 'clinic-7',
    name: {
      en: 'Town Health Medical Centre - Mong Kok',
      'zh-TW': '康健醫務中心旺角店',
      'zh-CN': '康健医务中心旺角店',
    },
    type: 'private',
    specialty: 'gp',
    address: {
      en: '688 Nathan Road, Mong Kok',
      'zh-TW': '旺角彌敦道688號',
      'zh-CN': '旺角弥敦道688号',
    },
    district: 'Yau Tsim Mong',
    phone: '2390 3333',
    lat: 22.3194,
    lng: 114.1694,
    languages: ['Cantonese', 'English', 'Mandarin'],
    hours: {
      weekday: '08:00 - 21:00',
      saturday: '09:00 - 18:00',
      sunday: '10:00 - 14:00',
    },
  },
  {
    id: 'clinic-8',
    name: {
      en: 'Union Hospital Family Medicine Centre',
      'zh-TW': '仁安醫院家庭醫學中心',
      'zh-CN': '仁安医院家庭医学中心',
    },
    type: 'private',
    specialty: 'gp',
    address: {
      en: '18 Fu Kin Street, Tai Wai',
      'zh-TW': '大圍富健街18號',
      'zh-CN': '大围富健街18号',
    },
    district: 'Sha Tin',
    phone: '2608 3388',
    lat: 22.3736,
    lng: 114.1782,
    languages: ['Cantonese', 'English', 'Mandarin'],
    hours: {
      weekday: '09:00 - 18:00',
      saturday: '09:00 - 13:00',
      sunday: 'Closed',
    },
  },
];
