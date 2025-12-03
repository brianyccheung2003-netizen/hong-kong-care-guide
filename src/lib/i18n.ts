export type Language = 'en' | 'zh-TW' | 'zh-CN';

export const languages: { code: Language; name: string; nativeName: string }[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'zh-TW', name: 'Traditional Chinese', nativeName: '繁體中文' },
  { code: 'zh-CN', name: 'Simplified Chinese', nativeName: '简体中文' },
];

export const translations = {
  en: {
    // Common
    appName: 'CareNav HK',
    tagline: 'Find the right care, right now',
    disclaimer: 'This tool provides general guidance only and is not medical advice. If you are experiencing a medical emergency, call 999 immediately.',
    lastUpdated: 'Last updated',
    loading: 'Loading...',
    callNow: 'Call Now',
    getDirections: 'Get Directions',
    viewDetails: 'View Details',
    back: 'Back',
    next: 'Next',
    submit: 'Submit',
    close: 'Close',
    
    // Navigation
    nav: {
      home: 'Home',
      symptomChecker: 'Symptom Check',
      aeWaitTimes: 'A&E Wait Times',
      findClinic: 'Find a Clinic',
      about: 'About',
    },
    
    // Home
    home: {
      hero: {
        title: 'Healthcare guidance you can trust',
        subtitle: 'Get help deciding where to seek care in Hong Kong. Check A&E wait times, find nearby clinics, or assess your symptoms.',
      },
      quickActions: {
        emergency: 'Emergency?',
        emergencyDesc: 'Call 999 for life-threatening situations',
        symptomCheck: 'Check Symptoms',
        symptomCheckDesc: 'Get guidance on where to seek care',
        aeWait: 'A&E Wait Times',
        aeWaitDesc: 'View current hospital wait times',
        findClinic: 'Find Clinics',
        findClinicDesc: 'Locate nearby clinics and hospitals',
      },
    },
    
    // Symptom Checker
    symptoms: {
      title: 'Symptom Assessment',
      subtitle: 'Answer a few questions to help us guide you to the right care',
      step: 'Step',
      of: 'of',
      basicInfo: 'Basic Information',
      mainSymptom: 'Main Symptom',
      details: 'Symptom Details',
      additionalInfo: 'Additional Information',
      result: 'Recommendation',
      
      age: 'Age',
      ageGroups: {
        infant: 'Under 1 year',
        child: '1-12 years',
        teen: '13-17 years',
        adult: '18-64 years',
        senior: '65+ years',
      },
      gender: 'Gender',
      genderOptions: {
        male: 'Male',
        female: 'Female',
        other: 'Other/Prefer not to say',
      },
      pregnant: 'Are you currently pregnant?',
      pregnantOptions: {
        yes: 'Yes',
        no: 'No',
        notSure: 'Not sure',
        notApplicable: 'Not applicable',
      },
      
      bodyRegion: 'Where is the problem?',
      regions: {
        head: 'Head / Face',
        chest: 'Chest',
        abdomen: 'Abdomen / Stomach',
        back: 'Back',
        limbs: 'Arms / Legs',
        skin: 'Skin',
        general: 'General / Whole body',
      },
      
      onset: 'When did it start?',
      onsetOptions: {
        justNow: 'Just now (minutes)',
        today: 'Today',
        days: 'Past few days',
        week: 'About a week',
        longer: 'More than a week',
      },
      
      severity: 'How severe is it?',
      severityLevels: {
        mild: 'Mild - Noticeable but manageable',
        moderate: 'Moderate - Affecting daily activities',
        severe: 'Severe - Very difficult to bear',
        extreme: 'Extreme - Worst ever experienced',
      },
      
      redFlags: 'Are you experiencing any of the following?',
      redFlagsList: {
        chestPain: 'Chest pain or pressure',
        breathing: 'Difficulty breathing at rest',
        consciousness: 'Confusion or altered consciousness',
        weakness: 'Sudden weakness or numbness',
        speech: 'Difficulty speaking',
        bleeding: 'Uncontrolled bleeding',
        severeHeadache: 'Sudden severe headache',
        vision: 'Sudden vision changes',
        none: 'None of the above',
      },
      
      conditions: 'Do you have any of these conditions?',
      conditionsList: {
        diabetes: 'Diabetes',
        heartDisease: 'Heart disease',
        hypertension: 'High blood pressure',
        asthma: 'Asthma / Lung disease',
        cancer: 'Cancer (current treatment)',
        immunocompromised: 'Weakened immune system',
        none: 'None of the above',
      },
    },
    
    // Results
    results: {
      aeNow: {
        title: 'Go to A&E Now',
        description: 'Based on your symptoms, we recommend you go to the nearest Accident & Emergency department immediately.',
        action: 'View Nearest A&E',
      },
      clinicToday: {
        title: 'See a Doctor Today',
        description: 'Your symptoms suggest you should see a doctor today. A clinic visit is recommended.',
        action: 'Find Open Clinics',
      },
      clinicSoon: {
        title: 'Schedule a Clinic Visit',
        description: 'Your symptoms are not urgent, but you should see a doctor within the next few days.',
        action: 'Find Clinics',
      },
      safetyNote: "If your condition worsens or you're unsure, it's always safest to go to A&E.",
    },
    
    // A&E
    ae: {
      title: 'A&E Wait Times',
      subtitle: 'Current waiting times at Hong Kong public hospitals',
      waitTime: 'Wait Time',
      hours: 'hours',
      hour: 'hour',
      over: 'Over',
      statusLow: 'Short wait',
      statusModerate: 'Moderate wait',
      statusHigh: 'Long wait',
      statusCritical: 'Very long wait',
      source: 'Data from Hospital Authority',
      refreshing: 'Refreshing...',
      publicHospitals: 'Public Hospitals',
      privateHospitals: 'Private Hospitals',
    },
    
    // Clinics
    clinics: {
      title: 'Find a Clinic',
      subtitle: 'Locate clinics and hospitals near you',
      searchPlaceholder: 'Search by name or specialty...',
      filters: {
        all: 'All',
        public: 'Public',
        private: 'Private',
        gp: 'General Practice',
        specialist: 'Specialist',
      },
      specialty: 'Specialty',
      openNow: 'Open Now',
      closed: 'Closed',
      callToConfirm: 'Call to confirm availability',
      distance: 'Distance',
      languages: 'Languages',
    },
    
    // Safety
    safety: {
      banner: '⚠️ This tool is for guidance only. It does not replace professional medical advice. When in doubt, seek immediate medical attention.',
      emergency: 'For emergencies, call 999',
    },
  },
  
  'zh-TW': {
    // Common
    appName: '醫護導航 HK',
    tagline: '即時找到合適的醫療服務',
    disclaimer: '本工具僅提供一般指引，並非醫療建議。如遇醫療緊急情況，請立即致電 999。',
    lastUpdated: '最後更新',
    loading: '載入中...',
    callNow: '立即致電',
    getDirections: '獲取路線',
    viewDetails: '查看詳情',
    back: '返回',
    next: '下一步',
    submit: '提交',
    close: '關閉',
    
    // Navigation
    nav: {
      home: '首頁',
      symptomChecker: '症狀檢查',
      aeWaitTimes: '急症室輪候',
      findClinic: '尋找診所',
      about: '關於',
    },
    
    // Home
    home: {
      hero: {
        title: '值得信賴的醫療指引',
        subtitle: '協助您決定在香港何處求醫。查看急症室輪候時間、尋找附近診所，或評估您的症狀。',
      },
      quickActions: {
        emergency: '緊急情況？',
        emergencyDesc: '危及生命請致電 999',
        symptomCheck: '檢查症狀',
        symptomCheckDesc: '獲取求醫指引',
        aeWait: '急症室輪候',
        aeWaitDesc: '查看醫院輪候時間',
        findClinic: '尋找診所',
        findClinicDesc: '找到附近診所及醫院',
      },
    },
    
    // Symptom Checker
    symptoms: {
      title: '症狀評估',
      subtitle: '回答幾個問題，協助我們為您指引合適的醫療服務',
      step: '第',
      of: '步，共',
      basicInfo: '基本資料',
      mainSymptom: '主要症狀',
      details: '症狀詳情',
      additionalInfo: '其他資料',
      result: '建議',
      
      age: '年齡',
      ageGroups: {
        infant: '1歲以下',
        child: '1-12歲',
        teen: '13-17歲',
        adult: '18-64歲',
        senior: '65歲或以上',
      },
      gender: '性別',
      genderOptions: {
        male: '男',
        female: '女',
        other: '其他/不願透露',
      },
      pregnant: '您目前是否懷孕？',
      pregnantOptions: {
        yes: '是',
        no: '否',
        notSure: '不確定',
        notApplicable: '不適用',
      },
      
      bodyRegion: '問題出現在哪裡？',
      regions: {
        head: '頭部/面部',
        chest: '胸部',
        abdomen: '腹部/胃部',
        back: '背部',
        limbs: '手臂/腿部',
        skin: '皮膚',
        general: '全身/整體',
      },
      
      onset: '何時開始？',
      onsetOptions: {
        justNow: '剛剛（數分鐘內）',
        today: '今天',
        days: '過去幾天',
        week: '約一星期',
        longer: '超過一星期',
      },
      
      severity: '嚴重程度如何？',
      severityLevels: {
        mild: '輕微 - 可察覺但可以忍受',
        moderate: '中等 - 影響日常活動',
        severe: '嚴重 - 非常難以忍受',
        extreme: '極度嚴重 - 前所未有的痛苦',
      },
      
      redFlags: '您是否有以下任何症狀？',
      redFlagsList: {
        chestPain: '胸痛或胸悶',
        breathing: '靜止時呼吸困難',
        consciousness: '意識混亂或改變',
        weakness: '突然虛弱或麻木',
        speech: '說話困難',
        bleeding: '無法控制的出血',
        severeHeadache: '突然劇烈頭痛',
        vision: '視力突然改變',
        none: '以上皆無',
      },
      
      conditions: '您是否有以下任何疾病？',
      conditionsList: {
        diabetes: '糖尿病',
        heartDisease: '心臟病',
        hypertension: '高血壓',
        asthma: '哮喘/肺病',
        cancer: '癌症（正在接受治療）',
        immunocompromised: '免疫系統較弱',
        none: '以上皆無',
      },
    },
    
    // Results
    results: {
      aeNow: {
        title: '請立即前往急症室',
        description: '根據您的症狀，我們建議您立即前往最近的急症室。',
        action: '查看最近急症室',
      },
      clinicToday: {
        title: '今天應該看醫生',
        description: '您的症狀顯示您今天應該看醫生。建議前往診所。',
        action: '尋找營業中診所',
      },
      clinicSoon: {
        title: '安排診所預約',
        description: '您的症狀並非緊急，但應在未來幾天內看醫生。',
        action: '尋找診所',
      },
      safetyNote: '如果情況惡化或您不確定，最安全的做法是前往急症室。',
    },
    
    // A&E
    ae: {
      title: '急症室輪候時間',
      subtitle: '香港公立醫院目前的輪候時間',
      waitTime: '輪候時間',
      hours: '小時',
      hour: '小時',
      over: '超過',
      statusLow: '輪候時間短',
      statusModerate: '輪候時間中等',
      statusHigh: '輪候時間長',
      statusCritical: '輪候時間非常長',
      source: '資料來自醫院管理局',
      refreshing: '更新中...',
      publicHospitals: '公立醫院',
      privateHospitals: '私家醫院',
    },
    
    // Clinics
    clinics: {
      title: '尋找診所',
      subtitle: '找到您附近的診所和醫院',
      searchPlaceholder: '按名稱或專科搜尋...',
      filters: {
        all: '全部',
        public: '公立',
        private: '私家',
        gp: '普通科',
        specialist: '專科',
      },
      specialty: '專科',
      openNow: '現正營業',
      closed: '已關閉',
      callToConfirm: '請致電確認',
      distance: '距離',
      languages: '語言',
    },
    
    // Safety
    safety: {
      banner: '⚠️ 本工具僅供指引，不能替代專業醫療建議。如有疑問，請立即尋求醫療協助。',
      emergency: '緊急情況請致電 999',
    },
  },
  
  'zh-CN': {
    // Common
    appName: '医护导航 HK',
    tagline: '即时找到合适的医疗服务',
    disclaimer: '本工具仅提供一般指引，并非医疗建议。如遇医疗紧急情况，请立即拨打 999。',
    lastUpdated: '最后更新',
    loading: '加载中...',
    callNow: '立即拨打',
    getDirections: '获取路线',
    viewDetails: '查看详情',
    back: '返回',
    next: '下一步',
    submit: '提交',
    close: '关闭',
    
    // Navigation
    nav: {
      home: '首页',
      symptomChecker: '症状检查',
      aeWaitTimes: '急诊室等候',
      findClinic: '寻找诊所',
      about: '关于',
    },
    
    // Home
    home: {
      hero: {
        title: '值得信赖的医疗指引',
        subtitle: '协助您决定在香港何处就医。查看急诊室等候时间、寻找附近诊所，或评估您的症状。',
      },
      quickActions: {
        emergency: '紧急情况？',
        emergencyDesc: '危及生命请拨打 999',
        symptomCheck: '检查症状',
        symptomCheckDesc: '获取就医指引',
        aeWait: '急诊室等候',
        aeWaitDesc: '查看医院等候时间',
        findClinic: '寻找诊所',
        findClinicDesc: '找到附近诊所及医院',
      },
    },
    
    // Symptom Checker
    symptoms: {
      title: '症状评估',
      subtitle: '回答几个问题，协助我们为您指引合适的医疗服务',
      step: '第',
      of: '步，共',
      basicInfo: '基本资料',
      mainSymptom: '主要症状',
      details: '症状详情',
      additionalInfo: '其他资料',
      result: '建议',
      
      age: '年龄',
      ageGroups: {
        infant: '1岁以下',
        child: '1-12岁',
        teen: '13-17岁',
        adult: '18-64岁',
        senior: '65岁或以上',
      },
      gender: '性别',
      genderOptions: {
        male: '男',
        female: '女',
        other: '其他/不愿透露',
      },
      pregnant: '您目前是否怀孕？',
      pregnantOptions: {
        yes: '是',
        no: '否',
        notSure: '不确定',
        notApplicable: '不适用',
      },
      
      bodyRegion: '问题出现在哪里？',
      regions: {
        head: '头部/面部',
        chest: '胸部',
        abdomen: '腹部/胃部',
        back: '背部',
        limbs: '手臂/腿部',
        skin: '皮肤',
        general: '全身/整体',
      },
      
      onset: '何时开始？',
      onsetOptions: {
        justNow: '刚刚（几分钟内）',
        today: '今天',
        days: '过去几天',
        week: '约一星期',
        longer: '超过一星期',
      },
      
      severity: '严重程度如何？',
      severityLevels: {
        mild: '轻微 - 可察觉但可以忍受',
        moderate: '中等 - 影响日常活动',
        severe: '严重 - 非常难以忍受',
        extreme: '极度严重 - 前所未有的痛苦',
      },
      
      redFlags: '您是否有以下任何症状？',
      redFlagsList: {
        chestPain: '胸痛或胸闷',
        breathing: '静止时呼吸困难',
        consciousness: '意识混乱或改变',
        weakness: '突然虚弱或麻木',
        speech: '说话困难',
        bleeding: '无法控制的出血',
        severeHeadache: '突然剧烈头痛',
        vision: '视力突然改变',
        none: '以上皆无',
      },
      
      conditions: '您是否有以下任何疾病？',
      conditionsList: {
        diabetes: '糖尿病',
        heartDisease: '心脏病',
        hypertension: '高血压',
        asthma: '哮喘/肺病',
        cancer: '癌症（正在接受治疗）',
        immunocompromised: '免疫系统较弱',
        none: '以上皆无',
      },
    },
    
    // Results
    results: {
      aeNow: {
        title: '请立即前往急诊室',
        description: '根据您的症状，我们建议您立即前往最近的急诊室。',
        action: '查看最近急诊室',
      },
      clinicToday: {
        title: '今天应该看医生',
        description: '您的症状显示您今天应该看医生。建议前往诊所。',
        action: '寻找营业中诊所',
      },
      clinicSoon: {
        title: '安排诊所预约',
        description: '您的症状并非紧急，但应在未来几天内看医生。',
        action: '寻找诊所',
      },
      safetyNote: '如果情况恶化或您不确定，最安全的做法是前往急诊室。',
    },
    
    // A&E
    ae: {
      title: '急诊室等候时间',
      subtitle: '香港公立医院目前的等候时间',
      waitTime: '等候时间',
      hours: '小时',
      hour: '小时',
      over: '超过',
      statusLow: '等候时间短',
      statusModerate: '等候时间中等',
      statusHigh: '等候时间长',
      statusCritical: '等候时间非常长',
      source: '资料来自医院管理局',
      refreshing: '更新中...',
      publicHospitals: '公立医院',
      privateHospitals: '私家医院',
    },
    
    // Clinics
    clinics: {
      title: '寻找诊所',
      subtitle: '找到您附近的诊所和医院',
      searchPlaceholder: '按名称或专科搜索...',
      filters: {
        all: '全部',
        public: '公立',
        private: '私家',
        gp: '普通科',
        specialist: '专科',
      },
      specialty: '专科',
      openNow: '现正营业',
      closed: '已关闭',
      callToConfirm: '请致电确认',
      distance: '距离',
      languages: '语言',
    },
    
    // Safety
    safety: {
      banner: '⚠️ 本工具仅供指引，不能替代专业医疗建议。如有疑问，请立即寻求医疗协助。',
      emergency: '紧急情况请拨打 999',
    },
  },
};

export type TranslationKeys = typeof translations.en;
