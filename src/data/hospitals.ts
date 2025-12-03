export interface Hospital {
  id: string;
  name: {
    en: string;
    'zh-TW': string;
    'zh-CN': string;
  };
  cluster: string;
  address: {
    en: string;
    'zh-TW': string;
    'zh-CN': string;
  };
  phone: string;
  lat: number;
  lng: number;
  type: 'public' | 'private';
  hasAE: boolean;
}

export const hospitals: Hospital[] = [
  {
    id: 'qeh',
    name: {
      en: 'Queen Elizabeth Hospital',
      'zh-TW': '伊利沙伯醫院',
      'zh-CN': '伊利沙伯医院',
    },
    cluster: 'Kowloon Central',
    address: {
      en: '30 Gascoigne Road, Kowloon',
      'zh-TW': '九龍加士居道30號',
      'zh-CN': '九龙加士居道30号',
    },
    phone: '3506 8888',
    lat: 22.3084,
    lng: 114.1739,
    type: 'public',
    hasAE: true,
  },
  {
    id: 'pwh',
    name: {
      en: 'Prince of Wales Hospital',
      'zh-TW': '威爾斯親王醫院',
      'zh-CN': '威尔斯亲王医院',
    },
    cluster: 'New Territories East',
    address: {
      en: '30-32 Ngan Shing Street, Sha Tin',
      'zh-TW': '沙田銀城街30-32號',
      'zh-CN': '沙田银城街30-32号',
    },
    phone: '3505 2211',
    lat: 22.3807,
    lng: 114.2008,
    type: 'public',
    hasAE: true,
  },
  {
    id: 'qmh',
    name: {
      en: 'Queen Mary Hospital',
      'zh-TW': '瑪麗醫院',
      'zh-CN': '玛丽医院',
    },
    cluster: 'Hong Kong West',
    address: {
      en: '102 Pok Fu Lam Road, Hong Kong',
      'zh-TW': '香港薄扶林道102號',
      'zh-CN': '香港薄扶林道102号',
    },
    phone: '2255 3838',
    lat: 22.2701,
    lng: 114.1313,
    type: 'public',
    hasAE: true,
  },
  {
    id: 'pyneh',
    name: {
      en: 'Pamela Youde Nethersole Eastern Hospital',
      'zh-TW': '東區尤德夫人那打素醫院',
      'zh-CN': '东区尤德夫人那打素医院',
    },
    cluster: 'Hong Kong East',
    address: {
      en: '3 Lok Man Road, Chai Wan',
      'zh-TW': '柴灣樂民道3號',
      'zh-CN': '柴湾乐民道3号',
    },
    phone: '2595 6111',
    lat: 22.2645,
    lng: 114.2371,
    type: 'public',
    hasAE: true,
  },
  {
    id: 'tkoh',
    name: {
      en: 'Tseung Kwan O Hospital',
      'zh-TW': '將軍澳醫院',
      'zh-CN': '将军澳医院',
    },
    cluster: 'Kowloon East',
    address: {
      en: '2 Po Ning Lane, Hang Hau',
      'zh-TW': '坑口寶寧里2號',
      'zh-CN': '坑口宝宁里2号',
    },
    phone: '2208 0111',
    lat: 22.3165,
    lng: 114.2644,
    type: 'public',
    hasAE: true,
  },
  {
    id: 'ucph',
    name: {
      en: 'United Christian Hospital',
      'zh-TW': '基督教聯合醫院',
      'zh-CN': '基督教联合医院',
    },
    cluster: 'Kowloon East',
    address: {
      en: '130 Hip Wo Street, Kwun Tong',
      'zh-TW': '觀塘協和街130號',
      'zh-CN': '观塘协和街130号',
    },
    phone: '3513 4000',
    lat: 22.3163,
    lng: 114.2276,
    type: 'public',
    hasAE: true,
  },
  {
    id: 'tmh',
    name: {
      en: 'Tuen Mun Hospital',
      'zh-TW': '屯門醫院',
      'zh-CN': '屯门医院',
    },
    cluster: 'New Territories West',
    address: {
      en: '23 Tsing Chung Koon Road, Tuen Mun',
      'zh-TW': '屯門青松觀路23號',
      'zh-CN': '屯门青松观路23号',
    },
    phone: '2468 5111',
    lat: 22.4057,
    lng: 113.9769,
    type: 'public',
    hasAE: true,
  },
  {
    id: 'poh',
    name: {
      en: 'Pok Oi Hospital',
      'zh-TW': '博愛醫院',
      'zh-CN': '博爱医院',
    },
    cluster: 'New Territories West',
    address: {
      en: 'Au Tau, Yuen Long',
      'zh-TW': '元朗坳頭',
      'zh-CN': '元朗坳头',
    },
    phone: '2486 8000',
    lat: 22.4403,
    lng: 114.0264,
    type: 'public',
    hasAE: true,
  },
  {
    id: 'ndh',
    name: {
      en: 'North District Hospital',
      'zh-TW': '北區醫院',
      'zh-CN': '北区医院',
    },
    cluster: 'New Territories East',
    address: {
      en: '9 Po Kin Road, Sheung Shui',
      'zh-TW': '上水保健路9號',
      'zh-CN': '上水保健路9号',
    },
    phone: '2683 8888',
    lat: 22.5016,
    lng: 114.1267,
    type: 'public',
    hasAE: true,
  },
  {
    id: 'ahnh',
    name: {
      en: 'Alice Ho Miu Ling Nethersole Hospital',
      'zh-TW': '雅麗氏何妙齡那打素醫院',
      'zh-CN': '雅丽氏何妙龄那打素医院',
    },
    cluster: 'New Territories East',
    address: {
      en: '11 Chuen On Road, Tai Po',
      'zh-TW': '大埔全安路11號',
      'zh-CN': '大埔全安路11号',
    },
    phone: '2689 2000',
    lat: 22.4513,
    lng: 114.1689,
    type: 'public',
    hasAE: true,
  },
  {
    id: 'ych',
    name: {
      en: 'Yan Chai Hospital',
      'zh-TW': '仁濟醫院',
      'zh-CN': '仁济医院',
    },
    cluster: 'Kowloon West',
    address: {
      en: '7-11 Yan Chai Street, Tsuen Wan',
      'zh-TW': '荃灣仁濟街7-11號',
      'zh-CN': '荃湾仁济街7-11号',
    },
    phone: '2417 8383',
    lat: 22.3705,
    lng: 114.1145,
    type: 'public',
    hasAE: true,
  },
  {
    id: 'cmcph',
    name: {
      en: 'Caritas Medical Centre',
      'zh-TW': '明愛醫院',
      'zh-CN': '明爱医院',
    },
    cluster: 'Kowloon West',
    address: {
      en: '111 Wing Hong Street, Sham Shui Po',
      'zh-TW': '深水埗永康街111號',
      'zh-CN': '深水埗永康街111号',
    },
    phone: '3408 7911',
    lat: 22.3419,
    lng: 114.1536,
    type: 'public',
    hasAE: true,
  },
  {
    id: 'kwh',
    name: {
      en: 'Kwong Wah Hospital',
      'zh-TW': '廣華醫院',
      'zh-CN': '广华医院',
    },
    cluster: 'Kowloon Central',
    address: {
      en: '25 Waterloo Road, Kowloon',
      'zh-TW': '九龍窩打老道25號',
      'zh-CN': '九龙�的打老道25号',
    },
    phone: '3517 2000',
    lat: 22.3185,
    lng: 114.1724,
    type: 'public',
    hasAE: true,
  },
  {
    id: 'rhtskh',
    name: {
      en: 'Ruttonjee & Tang Shiu Kin Hospitals',
      'zh-TW': '律敦治及鄧肇堅醫院',
      'zh-CN': '律敦治及邓肇坚医院',
    },
    cluster: 'Hong Kong East',
    address: {
      en: '266 Queens Road East, Wan Chai',
      'zh-TW': '灣仔皇后大道東266號',
      'zh-CN': '湾仔皇后大道东266号',
    },
    phone: '2291 2000',
    lat: 22.2732,
    lng: 114.1747,
    type: 'public',
    hasAE: true,
  },
  {
    id: 'nlth',
    name: {
      en: 'North Lantau Hospital',
      'zh-TW': '北大嶼山醫院',
      'zh-CN': '北大屿山医院',
    },
    cluster: 'Kowloon West',
    address: {
      en: '8 Chung Yan Road, Tung Chung',
      'zh-TW': '東涌松仁路8號',
      'zh-CN': '东涌松仁路8号',
    },
    phone: '3467 7000',
    lat: 22.2911,
    lng: 113.9437,
    type: 'public',
    hasAE: true,
  },
  {
    id: 'tweh',
    name: {
      en: 'Tin Shui Wai Hospital',
      'zh-TW': '天水圍醫院',
      'zh-CN': '天水围医院',
    },
    cluster: 'New Territories West',
    address: {
      en: '11 Tin Tan Street, Tin Shui Wai',
      'zh-TW': '天水圍天壇街11號',
      'zh-CN': '天水围天坛街11号',
    },
    phone: '3513 5000',
    lat: 22.4649,
    lng: 114.0013,
    type: 'public',
    hasAE: true,
  },
];

// Simulated wait times (in real app, this would come from HA API)
export function getSimulatedWaitTimes(): Record<string, { waitTime: string; topWait: string; timestamp: Date }> {
  const waitTimes: Record<string, { waitTime: string; topWait: string; timestamp: Date }> = {};
  
  hospitals.filter(h => h.hasAE && h.type === 'public').forEach(hospital => {
    // Generate realistic wait times
    const baseWait = Math.random() * 6 + 1; // 1-7 hours
    const topWait = baseWait + Math.random() * 2; // Additional 0-2 hours for top wait
    
    waitTimes[hospital.id] = {
      waitTime: baseWait < 1 ? 'Under 1 hour' : `${Math.round(baseWait)} hours`,
      topWait: `Over ${Math.round(topWait)} hours`,
      timestamp: new Date(),
    };
  });
  
  return waitTimes;
}
