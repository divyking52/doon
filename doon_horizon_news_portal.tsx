import React, { useState, useEffect, useMemo } from 'react';
import {
  Sun, Search, Globe, Play, Flame, MapPin, Calendar, CloudSun,
  ChevronRight, ChevronLeft, Bookmark, Share2, Volume2, Pause, X,
  Sparkles, Compass, TrendingUp, Award, Cpu, Briefcase,
  Tv, Newspaper, Clock, Eye, Check, ArrowUpRight, Radio,
  MessageSquare, Smartphone, Building2, Heart, BookOpen, Filter
} from 'lucide-react';

// ==========================================
// DATA: CATEGORIES & NAVIGATION
// ==========================================

const CATEGORIES = [
  { id: 'all', hi: 'ताज़ा समाचार', en: 'Top News', icon: Flame },
  { id: 'uttarakhand', hi: 'उत्तराखंड', en: 'Uttarakhand', icon: MapPin },
  { id: 'national', hi: 'देश-विदेश', en: 'National', icon: Globe },
  { id: 'dharma', hi: 'राशिफल & धर्म', en: 'Horoscope', icon: Sparkles },
  { id: 'business', hi: 'व्यापार', en: 'Business', icon: Briefcase },
  { id: 'tech', hi: 'टेक्नोलॉजी', en: 'Tech', icon: Cpu },
  { id: 'lifestyle', hi: 'लाइफस्टाइल', en: 'Lifestyle', icon: Heart },
  { id: 'webstories', hi: 'वेब स्टोरीज', en: 'Web Stories', icon: Play },
];

const STATE_TABS = [
  { id: 'uk', hi: 'उत्तराखंड', en: 'Uttarakhand' },
  { id: 'up', hi: 'उत्तर प्रदेश', en: 'Uttar Pradesh' },
  { id: 'delhi', hi: 'दिल्ली NCR', en: 'Delhi NCR' },
  { id: 'himachal', hi: 'हिमाचल & कश्मीर', en: 'Himachal & J&K' },
];

const BREAKING_TICKER = [
  {
    id: 1,
    hi: 'उत्तराखंड कैबिनेट का बड़ा फैसला: पर्वतीय जिलों के जर्जर सरकारी स्कूलों के पुनर्निर्माण हेतु ₹30 करोड़ का विशेष अनुदान स्वीकृत',
    en: 'Uttarakhand Govt approves ₹30 Crore special grant to rebuild dilapidated government schools across hill districts'
  },
  {
    id: 2,
    hi: 'देहरादून नगर निगम की स्मार्ट ऑडिट पहल: एलईडी स्ट्रीट लाइट और कचरा प्रबंधन में पारदर्शिता से बचाए ₹1.5 करोड़ रुपये',
    en: 'Dehradun Municipal Corporation saves ₹1.5 Crore through smart waste management & LED street light audit'
  },
  {
    id: 3,
    hi: 'छोटे व्यापारियों को बड़ी राहत: नए UPI मर्चेंट राहत दिशानिर्देश जारी, जीरो सरचार्ज और इंस्टेंट क्रेडिट लाइन की सुविधा',
    en: 'New UPI Merchant Relief guidelines announced: Zero surcharge assurance and instant micro-credit access for small traders'
  },
  {
    id: 4,
    hi: 'टेक लॉन्च: भारत में लॉन्च हुआ Infinix GT 50 Pro, 144Hz AMOLED डिस्प्ले और AI कूलिंग से लैस',
    en: 'Tech Launch: Infinix GT 50 Pro launched in India with 144Hz AMOLED display & Cyber-Mecha cooling architecture'
  },
  {
    id: 5,
    hi: 'केदारनाथ और बद्रीनाथ धाम यात्रा अपडेट: श्रद्धालुओं के लिए स्मार्ट दर्शन टोकन और नया वेदर डैशबोर्ड लाइव',
    en: 'Kedarnath & Badrinath Yatra Update: Smart Darshan token system and real-time weather advisory dashboard live'
  }
];

// ==========================================
// DATA: ARTICLES
// ==========================================

const ARTICLES = [
  {
    id: 'art-1',
    featured: 'hero-main',
    category: 'uttarakhand',
    state: 'uk',
    categoryHi: 'उत्तराखंड एक्सक्लूसिव',
    categoryEn: 'Uttarakhand Exclusive',
    titleHi: 'पहाड़ के स्कूलों की बदलेगी तस्वीर: उत्तराखंड सरकार ने जर्जर विद्यालयों के पुनर्निर्माण के लिए मंजूर किए ₹30 करोड़',
    titleEn: 'Transforming Hill Education: Uttarakhand Govt Approves ₹30 Crore Grant to Rebuild Dilapidated Schools',
    summaryHi: 'प्रदेश के 13 जिलों में चिन्हित सरकारी विद्यालयों को भूकंप-रोधी पहाड़ी स्थापत्य कला, सोलर रूफटॉप और स्मार्ट क्लासरूम के साथ नया रूप दिया जाएगा।',
    summaryEn: 'Over 140 government schools across hill districts will be reconstructed with earthquake-resilient Pahadi architecture, solar power, and digital smart classrooms.',
    contentHi: [
      'देहरादून। उत्तराखंड के पर्वतीय और दूरस्थ अंचलों में प्राथमिक व माध्यमिक शिक्षा के बुनियादी ढांचे को सुदृढ़ करने के लिए राज्य सरकार ने ₹30 करोड़ का विशेष कॉर्पस फंड जारी किया है। इस निर्णय से उन सैकड़ों विद्यालयों को सीधा लाभ मिलेगा जो पिछले मानसून के दौरान क्षतिग्रस्त या जर्जर की श्रेणी में आ गए थे।',
      'शिक्षा निदेशालय देहरादून के अनुसार, चमोली, रुद्रप्रयाग, पौड़ी, टिहरी, अल्मोड़ा और पिथौरागढ़ समेत सभी 13 जनपदों में प्राथमिकता के आधार पर निर्माण कार्य शुरू किए जा रहे हैं।',
      'नए बनने वाले विद्यालय परिसरों को आधुनिक भूकंप-रोधी तकनीक (Disaster-Resilient Design), स्वच्छ पेयजल, बालिका शौचालय, हाई-स्पीड इंटरनेट और इंटरएक्टिव डिजिटल बोर्ड से सुसज्जित किया जाएगा।',
      'दून होराइजन से बातचीत में वरिष्ठ अधिकारियों ने स्पष्ट किया कि प्रत्येक प्रोजेक्ट की जियो-टैगिंग और चरणबद्ध फोटोग्राफिक मॉनिटरिंग अनिवार्य की गई है ताकि आगामी शैक्षणिक सत्र से पहले कार्य पूर्ण हो सके।'
    ],
    contentEn: [
      'DEHRADUN: In a decisive move to modernize educational infrastructure across the Himalayan belt, the Uttarakhand Government has sanctioned a dedicated ₹30 Crore grant to reconstruct dilapidated government school buildings across the state.',
      'According to senior officials at the Directorate of Education in Dehradun, priority has been accorded to over 140 identified schools across Chamoli, Pauri, Tehri, Rudraprayag, Almora, and Pithoragarh that required urgent structural renewal.',
      'The new campus blueprints blend seismic-resistant Pahadi architectural aesthetics with rooftop solar grids, clean drinking water stations, modern sanitation, and digital smart-boards.',
      'Speaking with Doon Horizon, officials noted that real-time geo-tagged progress dashboards and independent quality audits have been mandated to ensure transparent, time-bound execution.'
    ],
    authorHi: 'हरप्रीत सिंह • मुख्य संपादक',
    authorEn: 'Harpreet Singh • Editor-in-Chief',
    timeHi: '22 मिनट पहले',
    timeEn: '22 mins ago',
    readTimeHi: '4 मिनट पढ़ें',
    readTimeEn: '4 min read',
    views: '46.2K',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1400&q=85',
    tagsHi: ['#उत्तराखंड', '#देहरादून', '#शिक्षा_विभाग', '#स्मार्ट_स्कूल'],
    tagsEn: ['#Uttarakhand', '#Dehradun', '#EducationReform', '#HillSchools']
  },
  {
    id: 'art-2',
    featured: 'hero-sub',
    category: 'uttarakhand',
    state: 'uk',
    categoryHi: 'देहरादून सिटी',
    categoryEn: 'Dehradun Civic',
    titleHi: 'देहरादून नगर निगम की स्मार्ट पहल: कचरा प्रबंधन और LED ऑडिट से बचाए ₹1.5 करोड़ रुपये',
    titleEn: 'Dehradun Municipal Corporation Saves ₹1.5 Crore Through Smart Waste & LED Streetlight Audit',
    summaryHi: 'जीपीएस रूट ट्रैकिंग, ई-टेंडर स्क्रूटनी और स्मार्ट एलईडी मीटरिंग के जरिए नगर निगम ने सरकारी खजाने की बड़ी बचत की है।',
    summaryEn: 'By deploying GPS fleet tracking and automated LED energy audits across 100 wards, DMC plugged leakages and saved ₹1.5 Crore.',
    contentHi: [
      'देहरादून। राजधानी देहरादून में नगर निगम प्रशासन ने डिजिटल पारदर्शिता की मिसाल पेश करते हुए स्मार्ट कचरा प्रबंधन और एलईडी स्ट्रीट लाइट ऑडिट के माध्यम से ₹1.5 करोड़ रुपये की सीधी बचत दर्ज की है।',
      'निगम के सभी डोर-टू-डोर कूड़ा वाहनों को कमांड सेंटर से जोड़कर ईंधन की चोरी और फर्जी ट्रिप बिलिंग पर पूरी तरह रोक लगाई गई है। बचाई गई राशि अब शहर के पार्कों और ड्रेनेज सुधार पर खर्च होगी।'
    ],
    contentEn: [
      'DEHRADUN: Setting a new benchmark in civic fiscal discipline, the Dehradun Municipal Corporation (DMC) has saved ₹1.5 Crore in public funds through rigorous smart waste and LED streetlight auditing.',
      'Real-time GPS tracking of sanitation vehicles and automated smart-metering across city wards eliminated duplicate billing. The saved funds will now finance neighborhood parks and monsoon drainage upgrades.'
    ],
    authorHi: 'दून होराइजन सिटी डेस्क',
    authorEn: 'Doon Horizon City Desk',
    timeHi: '50 मिनट पहले',
    timeEn: '50 mins ago',
    readTimeHi: '3 मिनट पढ़ें',
    readTimeEn: '3 min read',
    views: '31.8K',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=80',
    tagsHi: ['#देहरादून_नगर_निगम', '#स्मार्ट_सिटी', '#पारदर्शिता'],
    tagsEn: ['#Dehradun', '#SmartCity', '#CivicGovernance']
  },
  {
    id: 'art-3',
    featured: 'hero-sub',
    category: 'business',
    state: 'delhi',
    categoryHi: 'व्यापार & फिनटेक',
    categoryEn: 'Business & FinTech',
    titleHi: 'नए UPI मर्चेंट राहत दिशानिर्देश जारी: छोटे दुकानदारों को जीरो शुल्क और 5 मिनट में व्यापार लोन',
    titleEn: 'New UPI Merchant Relief Guidelines Announced: Zero MDR Assurance & Instant Micro-Credit for Small Shops',
    summaryHi: 'खुदरा व्यापारियों और पहाड़ के होम-स्टे संचालकों को डिजिटल पेमेंट पर बिना किसी अतिरिक्त कटौती के तत्काल ओवरड्राफ्ट सुविधा मिलेगी।',
    summaryEn: 'Retail shopkeepers and Uttarakhand homestay owners gain zero-charge UPI settlement assurances alongside instant digital credit lines.',
    contentHi: [
      'नई दिल्ली/देहरादून। डिजिटल अर्थव्यवस्था की रीढ़ माने जाने वाले करोड़ों छोटे दुकानदारों के लिए नए UPI मर्चेंट राहत दिशानिर्देश जारी किए गए हैं।',
      'इसके तहत क्यूआर कोड से भुगतान स्वीकार करने वाले छोटे व्यापारियों पर कोई भी अतिरिक्त शुल्क नहीं लगेगा और उनके डिजिटल लेन-देन के आधार पर बैंकों द्वारा कम ब्याज पर त्वरित वर्किंग कैपिटल उपलब्ध कराया जाएगा।'
    ],
    contentEn: [
      'NEW DELHI / DEHRADUN: Empowering millions of neighborhood stores, kirana merchants, and tourism operators, the newly announced UPI Merchant Relief framework guarantees zero merchant surcharge on retail QR transactions.',
      'Furthermore, partner banks have rolled out automated cashflow-based micro-credit approvals within 5 minutes.'
    ],
    authorHi: 'व्यापार ब्यूरो',
    authorEn: 'Business Bureau',
    timeHi: '1 घंटा पहले',
    timeEn: '1 hour ago',
    readTimeHi: '3 मिनट पढ़ें',
    readTimeEn: '3 min read',
    views: '38.4K',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80',
    tagsHi: ['#UPI', '#व्यापार', '#डिजिटल_इंडिया'],
    tagsEn: ['#UPI', '#FinTech', '#SmallBusiness']
  },
  {
    id: 'art-4',
    featured: 'hero-sub',
    category: 'tech',
    state: 'delhi',
    categoryHi: 'टेक्नोलॉजी लॉन्च',
    categoryEn: 'Tech Launch',
    titleHi: 'भारत में लॉन्च हुआ Infinix GT 50 Pro: 144Hz AMOLED डिस्प्ले और साइबर-मेका डिज़ाइन ने जीता दिल',
    titleEn: 'Infinix GT 50 Pro Launched in India: 144Hz AMOLED Display, Bypass Charging & Cyber-Mecha Aesthetics',
    summaryHi: 'मिड-रेंज सेगमेंट में डेडिकेटेड गेमिंग चिप, लिक्विड कूलिंग और 108MP OIS कैमरे के साथ भारतीय बाजार में उतरा नया स्मार्टफोन।',
    summaryEn: 'Equipped with a dedicated e-sports display chip, vapor chamber cooling, and 108MP OIS camera, Infinix GT 50 Pro redefines value flagships.',
    contentHi: [
      'टेक डेस्क। भारतीय युवाओं और मोबाइल गेमिंग के शौकीनों के लिए Infinix GT 50 Pro आधिकारिक तौर पर लॉन्च कर दिया गया है।',
      'इस स्मार्टफोन में 144Hz रिफ्रेश रेट वाला बेहद चमकदार AMOLED डिस्प्ले, बायपास चार्जिंग तकनीक और क्लीन यूजर इंटरफेस दिया गया है, जो लंबी गेमिंग के दौरान भी फोन को ठंडा रखता है।'
    ],
    contentEn: [
      'TECH DESK: Catering to performance enthusiasts and mobile gamers across India, the Infinix GT 50 Pro has officially debuted with a stunning Cyber-Mecha LED rear matrix and a 144Hz bezel-less AMOLED screen.',
      'Smart bypass charging routes power directly to the motherboard during intense gaming sessions, preserving battery longevity and thermal efficiency.'
    ],
    authorHi: 'टेक होराइजन डेस्क',
    authorEn: 'Tech Horizon Desk',
    timeHi: '2 घंटे पहले',
    timeEn: '2 hours ago',
    readTimeHi: '4 मिनट पढ़ें',
    readTimeEn: '4 min read',
    views: '54.9K',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
    tagsHi: ['#InfinixGT50Pro', '#स्मार्टफोन', '#टेक्नोलॉजी'],
    tagsEn: ['#InfinixGT50Pro', '#TechLaunch', '#Smartphones']
  },
  {
    id: 'art-5',
    featured: 'standard',
    category: 'lifestyle',
    state: 'uk',
    categoryHi: 'लाइफस्टाइल & संस्कृति',
    categoryEn: 'Lifestyle & Culture',
    titleHi: 'उत्तराखंडी पारंपरिक व्यंजनों की ग्लोबल पहचान: मंडुवे की रोटी, झंगोरे की खीर और पहाड़ी ऑर्गेनिक थाली की बढ़ी मांग',
    titleEn: 'Global Rise of Uttarakhand Superfoods: Mandua, Jhangora Kheer & Pahadi Organic Platter Take Center Stage',
    summaryHi: 'देहरादून से लेकर मसूरी और ऋषिकेश के फाइव-स्टार कैफे में मिलेट्स और पहाड़ी जड़ी-बूटियों से बने व्यंजन पर्यटकों की पहली पसंद बने।',
    summaryEn: 'Rich in nutrition and authentic Himalayan heritage, traditional Garhwali and Kumaoni millet dishes are witnessing surging demand across wellness retreats.',
    contentHi: [
      'देहरादून/मसूरी। देवभूमि उत्तराखंड के पारंपरिक मोटे अनाज (Millets) और पहाड़ी व्यंजन अब केवल घरों तक सीमित नहीं रहे, बल्कि देश-विदेश के पर्यटकों की पहली पसंद बन चुके हैं।',
      'कोदा (मंडुआ), झंगोरा, गहत की दाल, भट की चुड़कानी और बुरांश के शरबत को स्वास्थ्य और इम्यूनिटी के लिहाज से सुपरफूड माना जा रहा है। स्थानीय महिला स्वयं सहायता समूहों को इससे सीधा रोजगार मिल रहा है।'
    ],
    contentEn: [
      'DEHRADUN / MUSSOORIE: Celebrated for their extraordinary nutritional profile, traditional Uttarakhandi superfoods—including Finger Millet (Mandua), Barnyard Millet (Jhangora), Gahat Dal, and Rhododendron (Buransh) nectar—are headlining menus across luxury wellness resorts.',
      'The farm-to-table movement is directly empowering thousands of women-led self-help groups across Garhwal and Kumaon.'
    ],
    authorHi: 'संस्कृति एवं लाइफस्टाइल डेस्क',
    authorEn: 'Culture & Lifestyle Desk',
    timeHi: '3 घंटे पहले',
    timeEn: '3 hours ago',
    readTimeHi: '4 मिनट पढ़ें',
    readTimeEn: '4 min read',
    views: '27.6K',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80',
    tagsHi: ['#उत्तराखंडी_व्यंजन', '#पहाड़ी_संस्कृति', '#लाइफस्टाइल'],
    tagsEn: ['#UttarakhandCuisine', '#Superfoods', '#Lifestyle']
  },
  {
    id: 'art-6',
    featured: 'standard',
    category: 'national',
    state: 'up',
    categoryHi: 'देश-विदेश',
    categoryEn: 'National Infrastructure',
    titleHi: 'दिल्ली-देहरादून ग्रीनफील्ड एक्सप्रेसवे: राजाजी पार्क के ऊपर एशिया के सबसे लंबे वाइल्डलाइफ कॉरिडोर पर हाई-स्पीड ट्रायल',
    titleEn: 'Delhi-Dehradun Expressway: High-Speed Trials Begin Along Asia’s Longest Elevated Wildlife Corridor',
    summaryHi: 'मात्र 2.5 घंटे में दिल्ली से दून घाटी का सफर होगा पूरा, वन्यजीवों की सुरक्षा के लिए साउंड-बैरियर और विशेष लाइटिंग।',
    summaryEn: 'Cutting travel time between Delhi and Dehradun to just 2.5 hours, the 12-km elevated forest stretch features acoustic barriers to protect wildlife.',
    contentHi: [
      'देहरादून/सहारनपुर। दिल्ली और देहरादून के बीच बहुप्रतीक्षित एक्सप्रेसवे पर राजाजी नेशनल पार्क से सटे 12 किलोमीटर लंबे एलिवेटेड कॉरिडोर का कार्य पूर्णता की ओर है।',
      'यह इंजीनियरिंग का अद्भुत नमूना है जहां नीचे हाथी और बाघ जैसे वन्यजीव निर्बाध विचरण कर सकेंगे और ऊपर रफ्तार से वाहन दौड़ेंगे।'
    ],
    contentEn: [
      'DEHRADUN / SAHARANPUR: Blending high-speed connectivity with ecological conservation, the 12-km elevated wildlife corridor of the Delhi-Dehradun Expressway features specialized sound barriers and downward-shielded LED lighting.',
      'Once fully operational, travel time between the national capital and Uttarakhand’s capital will drop to 2.5 hours.'
    ],
    authorHi: 'नेशनल ब्यूरो',
    authorEn: 'National Bureau',
    timeHi: '4 घंटे पहले',
    timeEn: '4 hours ago',
    readTimeHi: '3 मिनट पढ़ें',
    readTimeEn: '3 min read',
    views: '41.3K',
    image: 'https://images.unsplash.com/photo-1545147986-a9d6f2ab03b5?auto=format&fit=crop&w=900&q=80',
    tagsHi: ['#दिल्ली_देहरादून_एक्सप्रेसवे', '#राजाजी_पार्क', '#हाईवे'],
    tagsEn: ['#Expressway', '#Dehradun', '#NationalNews']
  },
  {
    id: 'art-7',
    featured: 'standard',
    category: 'dharma',
    state: 'uk',
    categoryHi: 'राशिफल & धर्म',
    categoryEn: 'Dharma & Spiritual',
    titleHi: 'केदारनाथ और बद्रीनाथ धाम में श्रद्धालुओं के लिए सुगम दर्शन व्यवस्था: वेद-पाठ और डिजिटल स्लॉट पास लागू',
    titleEn: 'Kedarnath & Badrinath Dham Implement Smart Time-Slotted Darshan & Vedic Recitation Evenings',
    summaryHi: 'मंदिर समिति ने बुजुर्ग तीर्थयात्रियों के लिए विशेष सहायता केंद्र, गर्म प्रतीक्षालय और समय-आधारित टोकन प्रणाली को और बेहतर बनाया।',
    summaryEn: 'Pilgrims visiting the sacred Himalayan shrines now benefit from heated waiting lounges, medical kiosks, and zero-wait slotted tokens.',
    contentHi: [
      'रुद्रप्रयाग/चमोली। देवभूमि उत्तराखंड के पवित्र चारधाम में दर्शन को अत्यंत सुगम और आध्यात्मिक बनाने के लिए बद्री-केदार मंदिर समिति ने समय-आधारित डिजिटल टोकन व्यवस्था को और सशक्त किया है।',
      'इससे यात्रियों को कड़ाके की ठंड में लंबी कतारों में खड़ा नहीं होना पड़ता और वे शांतिपूर्वक मंदिर परिसर में वैदिक मंत्रोच्चार का लाभ ले सकते हैं।'
    ],
    contentEn: [
      'RUDRAPRAYAG / CHAMOLI: Ensuring a serene spiritual journey across Devbhoomi Uttarakhand, the Badri-Kedar Temple Committee has upgraded its time-slotted token system alongside dedicated senior-citizen assistance corridors.'
    ],
    authorHi: 'धर्म एवं आध्यात्म डेस्क',
    authorEn: 'Spiritual Desk',
    timeHi: '5 घंटे पहले',
    timeEn: '5 hours ago',
    readTimeHi: '4 मिनट पढ़ें',
    readTimeEn: '4 min read',
    views: '52.0K',
    image: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=900&q=80',
    tagsHi: ['#केदारनाथ', '#बद्रीनाथ', '#चारधाम'],
    tagsEn: ['#Kedarnath', '#Badrinath', '#CharDham']
  },
  {
    id: 'art-8',
    featured: 'standard',
    category: 'national',
    state: 'himachal',
    categoryHi: 'हिमालयी राज्य',
    categoryEn: 'Himalayan States',
    titleHi: 'हिमालयी राज्यों में इको-टूरिज्म और रोपवे नेटवर्क का विस्तार: पर्यावरण संरक्षण के साथ रोजगार के नए अवसर',
    titleEn: 'Eco-Tourism & Ropeway Expansion Across Himalayan States: Balancing Green Mobility with Local Livelihoods',
    summaryHi: 'उत्तराखंड, हिमाचल और जम्मू-कश्मीर में प्रदूषण-मुक्त इलेक्ट्रिक रोपवे और होम-स्टे क्लस्टर को केंद्र से मिली नई मदद।',
    summaryEn: 'Sustainable ropeway corridors and solar-powered homestay clusters are transforming high-altitude connectivity across North India.',
    contentHi: [
      'शिमला/देहरादून। हिमालयी राज्यों की संवेदनशील पारिस्थितिकी को सुरक्षित रखते हुए पर्यटन को बढ़ावा देने के लिए आधुनिक रोपवे परियोजनाओं पर तेजी से काम हो रहा है।',
      'इससे न केवल सड़कों पर वाहनों का दबाव कम होगा, बल्कि स्थानीय युवाओं को अपने ही गांव में पर्यटन से जुड़ा स्थायी रोजगार मिलेगा।'
    ],
    contentEn: [
      'SHIMLA / DEHRADUN: Prioritizing zero-emission mountain transit, new aerial ropeway corridors across Uttarakhand, Himachal Pradesh, and Jammu & Kashmir are reducing carbon footprints while boosting rural homestay economies.'
    ],
    authorHi: 'हिमालयन ब्यूरो',
    authorEn: 'Himalayan Bureau',
    timeHi: '6 घंटे पहले',
    timeEn: '6 hours ago',
    readTimeHi: '3 मिनट पढ़ें',
    readTimeEn: '3 min read',
    views: '21.4K',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=900&q=80',
    tagsHi: ['#इको_टूरिज्म', '#हिमालय', '#रोपवे'],
    tagsEn: ['#EcoTourism', '#Himalayas', '#GreenTransit']
  }
];

// ==========================================
// DATA: 9:16 WEB STORIES
// ==========================================

const WEB_STORIES = [
  {
    id: 'ws-1',
    titleHi: 'केदारनाथ धाम यात्रा अपडेट्स: भव्य आरती और हिमालय की चोटियों का अलौकिक सौंदर्य',
    titleEn: 'Kedarnath Yatra Updates: Divine Evening Aarti & Golden Himalayan Peaks',
    categoryHi: 'केदारनाथ यात्रा',
    categoryEn: 'Kedarnath Yatra',
    duration: '15s',
    views: '142K',
    image: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=700&q=80',
    captionHi: 'बाबा केदारनाथ के दरबार में संध्या आरती के दर्शन और श्रद्धालुओं के लिए नई स्मार्ट टोकन व्यवस्था।',
    captionEn: 'Witness the sacred evening vibrations at Kedarnath shrine with streamlined pilgrim facilities.'
  },
  {
    id: 'ws-2',
    titleHi: 'मसूरी विंटरलाइन और लाल टिब्बा का जादुई सूर्यास्त: पर्यटकों से गुलजार पहाड़ों की रानी',
    titleEn: 'Mussoorie Winterline & Lal Tibba Horizon: Magical Sunset in Queen of Hills',
    categoryHi: 'मसूरी टूरिज्म',
    categoryEn: 'Mussoorie Horizon',
    duration: '18s',
    views: '98K',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=700&q=80',
    captionHi: 'दुनिया में केवल स्विट्जरलैंड और मसूरी में दिखने वाली दुर्लभ क्षितिज रेखा (Winterline) का मनमोहक दृश्य।',
    captionEn: 'A rare atmospheric phenomenon visible only in Mussoorie and Switzerland paints the Doon sky in saffron and gold.'
  },
  {
    id: 'ws-3',
    titleHi: 'उत्तराखंड के पारंपरिक जायके: मंडुवे की रोटी, झंगोरे की खीर और बुरांश का स्वाद',
    titleEn: 'Authentic Uttarakhand Cuisine: Pahadi Organic Thali & Himalayan Superfoods',
    categoryHi: 'उत्तराखंडी व्यंजन',
    categoryEn: 'Pahadi Cuisine',
    duration: '16s',
    views: '84K',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80',
    captionHi: 'स्वाद और सेहत से भरपूर गढ़वाली और कुमाऊंनी व्यंजनों की देश-दुनिया में बढ़ती लोकप्रियता।',
    captionEn: 'Nutrient-dense mountain millets and traditional herbs are winning hearts across culinary destinations.'
  },
  {
    id: 'ws-4',
    titleHi: 'Infinix GT 50 Pro फर्स्ट लुक: 144Hz स्क्रीन और साइबर-मेका गेमिंग फीचर्स',
    titleEn: 'Infinix GT 50 Pro First Look: 144Hz AMOLED & Cyber-Mecha Gaming Tech',
    categoryHi: 'टेक लॉन्च',
    categoryEn: 'Tech Launch',
    duration: '20s',
    views: '119K',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=80',
    captionHi: 'बायपास चार्जिंग और लिक्विड कूलिंग के साथ भारतीय बाजार में लॉन्च हुआ नया गेमिंग स्मार्टफोन।',
    captionEn: 'Engineered for marathon frame rates with dedicated gaming triggers and bypass thermal control.'
  },
  {
    id: 'ws-5',
    titleHi: 'हरिद्वार हर की पौड़ी पर मां गंगा की भव्य महाआरती के दिव्य दर्शन',
    titleEn: 'Grand Evening Ganga Aarti at Har Ki Pauri, Haridwar',
    categoryHi: 'देवभूमि आस्था',
    categoryEn: 'Spiritual',
    duration: '15s',
    views: '165K',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=700&q=80',
    captionHi: 'हजारों दीपों की स्वर्णिम आभा और गंगा लहरी से आलोकित हरिद्वार का पावन तट।',
    captionEn: 'Golden reflections of sacred oil lamps shimmer across the waters of Maa Ganga in Haridwar.'
  }
];

// ==========================================
// DATA: 12 RASHIS (HOROSCOPE) & PANCHANG
// ==========================================

const ZODIAC_SIGNS = [
  {
    id: 'aries', symbol: '♈', hi: 'मेष', en: 'Aries',
    elementHi: 'अग्नि तत्व', elementEn: 'Fire Sign',
    luckyColorHi: 'केसरिया लाल', luckyColorEn: 'Saffron Red', luckyNumber: '9',
    moodHi: 'ऊर्जावान व निर्णायक', moodEn: 'Energetic & Decisive',
    predictionHi: 'आज कार्यक्षेत्र में आपके साहसिक निर्णयों की सराहना होगी। रुका हुआ धन या सरकारी अनुबंध आपके पक्ष में आ सकता है। परिवार में सुख-शांति और सायंकाल देव-दर्शन का योग है।',
    predictionEn: 'Your decisive leadership brings strong workplace recognition today. Pending official clearances or financial dues move in your favor. Evening brings domestic harmony.'
  },
  {
    id: 'taurus', symbol: '♉', hi: 'वृषभ', en: 'Taurus',
    elementHi: 'पृथ्वी तत्व', elementEn: 'Earth Sign',
    luckyColorHi: 'मोती सफेद', luckyColorEn: 'Pearl White', luckyNumber: '6',
    moodHi: 'स्थिर और समृद्ध', moodEn: 'Grounded & Prosperous',
    predictionHi: 'व्यापार और संपत्ति से जुड़े मामलों में उत्तम लाभ के संकेत हैं। मधुर वाणी से जटिल कार्य भी सहजता से पूर्ण होंगे। स्वास्थ्य उत्तम रहेगा।',
    predictionEn: 'Commercial ventures and property matters show promising gains. Your calm, diplomatic approach will resolve a lingering issue effortlessly.'
  },
  {
    id: 'gemini', symbol: '♊', hi: 'मिथुन', en: 'Gemini',
    elementHi: 'वायु तत्व', elementEn: 'Air Sign',
    luckyColorHi: 'पन्ना हरा', luckyColorEn: 'Emerald Green', luckyNumber: '5',
    moodHi: 'रचनात्मक', moodEn: 'Creative & Agile',
    predictionHi: 'मीडिया, शिक्षा और आईटी क्षेत्र के जातकों के लिए आज का दिन विशेष उपलब्धि वाला रहेगा। नए संपर्कों से भविष्य की बड़ी योजना आकार लेगी।',
    predictionEn: 'A standout day for professionals in media, education, and technology. Strategic networking opens doors to an exciting new collaboration.'
  },
  {
    id: 'cancer', symbol: '♋', hi: 'कर्क', en: 'Cancer',
    elementHi: 'जल तत्व', elementEn: 'Water Sign',
    luckyColorHi: 'चंदन क्रीम', luckyColorEn: 'Sandalwood Cream', luckyNumber: '2',
    moodHi: 'संवेदनशील व एकाग्र', moodEn: 'Intuitive & Focused',
    predictionHi: 'वरिष्ठजनों के आशीर्वाद से घर में मांगलिक कार्य की रूपरेखा बनेगी। नौकरीपेशा लोगों को पदोन्नति या महत्वपूर्ण जिम्मेदारी मिल सकती है।',
    predictionEn: 'Blessings from elders inspire auspicious family plans. Salaried professionals can expect positive news regarding career advancement.'
  },
  {
    id: 'leo', symbol: '♌', hi: 'सिंह', en: 'Leo',
    elementHi: 'अग्नि तत्व', elementEn: 'Fire Sign',
    luckyColorHi: 'सूर्योदय स्वर्ण', luckyColorEn: 'Sunrise Gold', luckyNumber: '1',
    moodHi: 'आत्मविश्वासी', moodEn: 'Radiant & Confident',
    predictionHi: 'सामाजिक और प्रशासनिक क्षेत्र में आपका मान-सम्मान बढ़ेगा। आत्मविश्वास से लिए गए आर्थिक फैसले दीर्घकालिक लाभ देंगे।',
    predictionEn: 'Public prestige and administrative authority rise today. Well-considered financial decisions taken now will yield lasting rewards.'
  },
  {
    id: 'virgo', symbol: '♍', hi: 'कन्या', en: 'Virgo',
    elementHi: 'पृथ्वी तत्व', elementEn: 'Earth Sign',
    luckyColorHi: 'धनिया हरा', luckyColorEn: 'Sage Green', luckyNumber: '3',
    moodHi: 'विश्लेषणात्मक', moodEn: 'Analytical & Calm',
    predictionHi: 'आर्थिक प्रबंधन मजबूत रहेगा। विद्यार्थियों और प्रतियोगी परीक्षाओं की तैयारी कर रहे युवाओं को सुखद परिणाम प्राप्त होंगे।',
    predictionEn: 'Financial discipline pays off. Students and competitive exam aspirants achieve clarity and breakthrough momentum.'
  },
  {
    id: 'libra', symbol: '♎', hi: 'तुला', en: 'Libra',
    elementHi: 'वायु तत्व', elementEn: 'Air Sign',
    luckyColorHi: 'गुलाबी केसर', luckyColorEn: 'Rose Saffron', luckyNumber: '7',
    moodHi: 'संतुलित और प्रसन्न', moodEn: 'Harmonious',
    predictionHi: 'साझेदारी के व्यवसाय में उम्मीद से बेहतर मुनाफा होगा। जीवनसाथी का सहयोग मिलेगा और कलात्मक कार्यों में ख्याति बढ़ेगी।',
    predictionEn: 'Business partnerships deliver above-target returns. Domestic warmth and creative pursuits bring genuine fulfillment today.'
  },
  {
    id: 'scorpio', symbol: '♏', hi: 'वृश्चिक', en: 'Scorpio',
    elementHi: 'जल तत्व', elementEn: 'Water Sign',
    luckyColorHi: 'सिंदूरी क्रिमसन', luckyColorEn: 'Deep Crimson', luckyNumber: '8',
    moodHi: 'दृढ़ निश्चयी', moodEn: 'Determined',
    predictionHi: 'कार्यस्थल पर आपकी रणनीतिक सूझबूझ की जीत होगी। रुके हुए प्रोजेक्ट्स को नई गति मिलेगी। यात्रा सुखद एवं लाभप्रद रहेगी।',
    predictionEn: 'Strategic preparation overcomes workplace hurdles. Stalled projects regain momentum, and short official travel proves fruitful.'
  },
  {
    id: 'sagittarius', symbol: '♐', hi: 'धनु', en: 'Sagittarius',
    elementHi: 'अग्नि तत्व', elementEn: 'Fire Sign',
    luckyColorHi: 'हल्दी पीला', luckyColorEn: 'Turmeric Amber', luckyNumber: '3',
    moodHi: 'आध्यात्मिक व उत्साही', moodEn: 'Optimistic & Spiritual',
    predictionHi: 'धर्म-अध्यात्म और तीर्थाटन में रुचि बढ़ेगी। उच्च शिक्षा व शोध से जुड़े जातकों को विशेष सफलता और गुरुजनों का मार्गदर्शन मिलेगा।',
    predictionEn: 'Spiritual clarity and higher-education pursuits flourish today. Mentors provide timely guidance for your next big milestone.'
  },
  {
    id: 'capricorn', symbol: '♑', hi: 'मकर', en: 'Capricorn',
    elementHi: 'पृथ्वी तत्व', elementEn: 'Earth Sign',
    luckyColorHi: 'स्लेट नीला', luckyColorEn: 'Royal Slate', luckyNumber: '4',
    moodHi: 'कर्मठ', moodEn: 'Disciplined',
    predictionHi: 'कठिन परिश्रम का पूर्ण प्रतिफल मिलने का समय है। निर्माण, रियल एस्टेट और उद्योग जगत से जुड़े लोगों को बड़ा अनुबंध मिल सकता है।',
    predictionEn: 'Dedicated effort translates into tangible milestones. Professionals in infrastructure, real estate, and industry secure major contracts.'
  },
  {
    id: 'aquarius', symbol: '♒', hi: 'कुंभ', en: 'Aquarius',
    elementHi: 'वायु तत्व', elementEn: 'Air Sign',
    luckyColorHi: 'आसमानी फिरोजी', luckyColorEn: 'Sky Cyan', luckyNumber: '8',
    moodHi: 'नवाचारी', moodEn: 'Innovative',
    predictionHi: 'तकनीकी और स्टार्टअप क्षेत्र में आपके नए विचारों को निवेशकों का साथ मिलेगा। सामाजिक कार्यों से आत्मिक संतोष प्राप्त होगा।',
    predictionEn: 'Innovative pitches in tech and startups attract strong backing. Community engagement brings deep personal satisfaction.'
  },
  {
    id: 'pisces', symbol: '♓', hi: 'मीन', en: 'Pisces',
    elementHi: 'जल तत्व', elementEn: 'Water Sign',
    luckyColorHi: 'स्वर्णिम पीतांबर', luckyColorEn: 'Warm Amber', luckyNumber: '7',
    moodHi: 'शांत व आनंदित', moodEn: 'Serene & Inspired',
    predictionHi: 'दीर्घकालिक निवेश और बचत योजनाओं के लिए दिन अत्यंत शुभ है। संतान पक्ष से गौरवपूर्ण समाचार मिलेगा और घर में उत्सव का माहौल रहेगा।',
    predictionEn: 'An auspicious day for wealth planning and family investments. Uplifting news from younger family members brings celebration.'
  }
];

const PANCHANG_DATA = {
  tithiHi: 'शुक्ल पक्ष, पंचमी • विक्रम संवत 2083',
  tithiEn: 'Shukla Paksha, Panchami • Vikram Samvat 2083',
  nakshatraHi: 'रोहिणी नक्षत्र • सौभाग्य योग',
  nakshatraEn: 'Rohini Nakshatra • Saubhagya Yoga',
  abhijitHi: '11:44 AM – 12:31 PM (सर्वश्रेष्ठ शुभ मुहूर्त)',
  abhijitEn: '11:44 AM – 12:31 PM (Abhijit Shubh Muhurat)',
  rahukaalHi: '01:30 PM – 03:00 PM (शुभ कार्य वर्जित)',
  rahukaalEn: '01:30 PM – 03:00 PM (Rahukaal - Avoid New Starts)',
  sunrise: '06:18 AM',
  sunset: '05:49 PM'
};

// ==========================================
// BRAND LOGO: HIMALAYAN SUNRISE EMBLEM (LIGHT THEME)
// ==========================================

const DoonHorizonLogo = () => (
  <div className="flex items-center gap-3.5 group cursor-pointer select-none">
    <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#EA580C] via-[#E11D48] to-[#D97706] p-[2px] shadow-md shadow-orange-500/20 group-hover:shadow-lg group-hover:shadow-orange-500/35 transition-all duration-300 group-hover:-translate-y-0.5">
      <div className="w-full h-full rounded-[14px] bg-[#FFFDF9] flex items-center justify-center relative overflow-hidden">
        {/* Soft Sunrise Radial Aura */}
        <div className="absolute -top-2 w-8 h-8 rounded-full bg-gradient-to-b from-amber-300/60 to-orange-500/30 blur-sm group-hover:scale-125 transition-transform duration-500" />
        <svg viewBox="0 0 48 48" className="w-8 h-8 relative z-10" fill="none">
          {/* Rising Sun */}
          <circle cx="24" cy="18" r="6.5" fill="url(#lightSunGrad)" />
          {/* Sun Rays */}
          <path d="M24 7.5V9.5M13.5 18H15.5M32.5 18H34.5M16.5 10.5L17.9 11.9M31.5 10.5L30.1 11.9" stroke="#EA580C" strokeWidth="2.2" strokeLinecap="round" />
          {/* Himalayan Peaks */}
          <path d="M4 36L15 21L23 30.5L31 19L44 36H4Z" fill="url(#lightPeakGrad)" />
          <path d="M15 21L23 30.5L31 19L44 36" stroke="#FFFDF9" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          {/* Horizon Wave */}
          <path d="M5 39C15 36.8 33 36.8 43 39" stroke="url(#lightHorizonLine)" strokeWidth="2.5" strokeLinecap="round" />
          <defs>
            <linearGradient id="lightSunGrad" x1="17" y1="11" x2="31" y2="25" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F59E0B" />
              <stop offset="1" stopColor="#EA580C" />
            </linearGradient>
            <linearGradient id="lightPeakGrad" x1="24" y1="19" x2="24" y2="36" gradientUnits="userSpaceOnUse">
              <stop stopColor="#EA580C" />
              <stop offset="1" stopColor="#9F1239" />
            </linearGradient>
            <linearGradient id="lightHorizonLine" x1="5" y1="38" x2="43" y2="38" gradientUnits="userSpaceOnUse">
              <stop stopColor="#D97706" />
              <stop offset="0.5" stopColor="#EA580C" />
              <stop offset="1" stopColor="#E11D48" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>

    <div className="flex flex-col">
      <div className="flex items-center gap-2">
        <span className="text-xl sm:text-2xl font-black tracking-tight bg-gradient-to-r from-[#0F172A] via-[#EA580C] to-[#E11D48] bg-clip-text text-transparent">
          DOON HORIZON
        </span>
        <span className="hidden sm:inline-flex items-center px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider rounded-full bg-orange-50 text-[#EA580C] border border-orange-200/80">
          24×7 LIVE
        </span>
      </div>
      <div className="text-[11px] sm:text-xs font-medium text-[#334155] flex items-center gap-1.5">
        <span className="font-bold text-[#EA580C]">दून होराइजन</span>
        <span className="text-slate-300">•</span>
        <span className="truncate text-slate-500">उत्तराखंड और देश की निष्पक्ष आवाज़</span>
      </div>
    </div>
  </div>
);

// ==========================================
// MAIN LIGHT-THEME PORTAL COMPONENT
// ==========================================

export default function App() {
  // Language & Navigation State
  const [lang, setLang] = useState('hi'); // 'hi' | 'en'
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeStateTab, setActiveStateTab] = useState('uk');
  const [activeZodiac, setActiveZodiac] = useState(ZODIAC_SIGNS[0]);

  // Modals & Interactive States
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [activeStoryIndex, setActiveStoryIndex] = useState(null);
  const [storyProgress, setStoryProgress] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [subscribeModalOpen, setSubscribeModalOpen] = useState(false);

  // Reader & Engagement States
  const [scrollProgress, setScrollProgress] = useState(0);
  const [bookmarks, setBookmarks] = useState(['art-1']);
  const [fontSize, setFontSize] = useState('base'); // 'sm' | 'base' | 'lg'
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const [toastMessage, setToastMessage] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [pollVote, setPollVote] = useState(null);

  // Toast helper
  const showToast = (msgHi, msgEn) => {
    setToastMessage(lang === 'hi' ? msgHi : msgEn);
    setTimeout(() => setToastMessage(null), 3200);
  };

  // Top Reading Scroll Progress Listener
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (totalScroll / windowHeight) * 100)));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcuts (Cmd/Ctrl + K for Search, Esc to close modals)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setSearchOpen(false);
        setSelectedArticle(null);
        setActiveStoryIndex(null);
        setSubscribeModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Simulated "Listen to Article" Audio Progress
  useEffect(() => {
    let interval;
    if (isSpeaking && selectedArticle) {
      interval = setInterval(() => {
        setAudioProgress((prev) => {
          if (prev >= 100) {
            setIsSpeaking(false);
            return 0;
          }
          return prev + 1.5;
        });
      }, 280);
    }
    return () => clearInterval(interval);
  }, [isSpeaking, selectedArticle]);

  // Reset audio when switching articles
  useEffect(() => {
    setIsSpeaking(false);
    setAudioProgress(0);
  }, [selectedArticle]);

  // Web Story Auto-Advance Timer
  useEffect(() => {
    let timer;
    if (activeStoryIndex !== null) {
      timer = setInterval(() => {
        setStoryProgress((prev) => {
          if (prev >= 100) {
            if (activeStoryIndex < WEB_STORIES.length - 1) {
              setActiveStoryIndex((idx) => idx + 1);
              return 0;
            } else {
              setActiveStoryIndex(null);
              return 0;
            }
          }
          return prev + 2;
        });
      }, 100);
    } else {
      setStoryProgress(0);
    }
    return () => clearInterval(timer);
  }, [activeStoryIndex]);

  // Bookmark Handler
  const toggleBookmark = (articleId, e) => {
    if (e) e.stopPropagation();
    setBookmarks((prev) => {
      const exists = prev.includes(articleId);
      if (exists) {
        showToast('बुकमार्क से हटाया गया', 'Removed from saved stories');
        return prev.filter((id) => id !== articleId);
      } else {
        showToast('खबर बुकमार्क में सुरक्षित की गई', 'Story saved to bookmarks');
        return [...prev, articleId];
      }
    });
  };

  // Category Navigation Handler (Scrolls to special sections or filters feed)
  const handleCategorySelect = (catId) => {
    setActiveCategory(catId);
    if (catId === 'dharma') {
      const el = document.getElementById('horoscope-studio');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (catId === 'webstories') {
      const el = document.getElementById('web-stories-strip');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filtered Articles for Main Stream
  const filteredArticles = useMemo(() => {
    if (activeCategory === 'all' || activeCategory === 'webstories') return ARTICLES;
    return ARTICLES.filter((art) => art.category === activeCategory);
  }, [activeCategory]);

  // Filtered Articles for Regional Explorer
  const stateArticles = useMemo(() => {
    return ARTICLES.filter((art) => art.state === activeStateTab);
  }, [activeStateTab]);

  // Search Modal Results
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return ARTICLES.slice(0, 5);
    const q = searchQuery.toLowerCase();
    return ARTICLES.filter(
      (art) =>
        art.titleHi.toLowerCase().includes(q) ||
        art.titleEn.toLowerCase().includes(q) ||
        art.summaryHi.toLowerCase().includes(q) ||
        art.summaryEn.toLowerCase().includes(q) ||
        art.categoryEn.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // Related Articles for Reader Modal
  const relatedArticles = useMemo(() => {
    if (!selectedArticle) return [];
    return ARTICLES.filter((a) => a.id !== selectedArticle.id).slice(0, 3);
  }, [selectedArticle]);

  const heroMain = ARTICLES[0];
  const heroSubs = ARTICLES.slice(1, 4);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans selection:bg-[#EA580C] selection:text-white relative overflow-x-hidden">
      {/* Subtle Ambient Himalayan Sunrise Radial Glows (Pure Light Theme) */}
      <div className="fixed -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-orange-200/35 via-amber-100/25 to-transparent blur-3xl pointer-events-none z-0" />
      <div className="fixed top-1/3 -right-40 w-[480px] h-[480px] rounded-full bg-gradient-to-bl from-rose-200/25 via-orange-100/20 to-transparent blur-3xl pointer-events-none z-0" />

      {/* Custom Animations & Micro-Interaction Styles */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        @keyframes fadeUpStagger {
          0% { opacity: 0; transform: translateY(16px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .stagger-card {
          animation: fadeUpStagger 0.55s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @keyframes audioWave {
          0%, 100% { height: 6px; }
          50% { height: 20px; }
        }
        .wave-bar {
          animation: audioWave 0.8s ease-in-out infinite;
        }
        .magnetic-btn {
          transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.25s ease;
        }
        .magnetic-btn:hover {
          transform: translateY(-2px);
        }
        .magnetic-btn:active {
          transform: translateY(0px) scale(0.98);
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* TOP READING PROGRESS BAR */}
      <div className="fixed top-0 left-0 right-0 h-1 z-[100] bg-slate-200/50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#EA580C] via-[#E11D48] to-[#D97706] transition-all duration-150 shadow-[0_1px_8px_rgba(234,88,12,0.45)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* FLOATING TOAST NOTIFICATION */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-[110] flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#0F172A] text-white font-semibold text-sm shadow-2xl shadow-slate-900/25 border border-slate-700 animate-bounce">
          <Sparkles className="w-4 h-4 text-[#F59E0B] shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* ==========================================
          1. TOP UTILITY BAR (WARM ALABASTER LIGHT BAR)
         ========================================== */}
      <div className="relative z-40 bg-[#FFFDF9] border-b border-[#E2E8F0] text-xs text-[#334155]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex flex-wrap items-center justify-between gap-3">
          {/* Left: Live Dehradun Weather (24°C Sunny, AQI 48 Good) & Date/Panchang */}
          <div className="flex items-center gap-3 sm:gap-5 flex-wrap">
            <div className="flex items-center gap-2 font-semibold text-[#0F172A] bg-amber-50/90 px-2.5 py-1 rounded-full border border-amber-200/80">
              <Sun className="w-3.5 h-3.5 text-[#D97706] fill-amber-400" />
              <span>
                {lang === 'hi' ? 'देहरादून: 24°C धूप' : 'Dehradun: 24°C Sunny'}
              </span>
              <span className="px-1.5 py-0.5 text-[10px] font-bold rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                AQI 48 • {lang === 'hi' ? 'अच्छा' : 'Good'}
              </span>
            </div>

            <div className="hidden md:flex items-center gap-1.5 text-[#334155] font-medium">
              <Calendar className="w-3.5 h-3.5 text-[#EA580C]" />
              <span>
                {lang === 'hi'
                  ? 'गुरुवार, 15 अक्टूबर 2026 • शुक्ल पंचमी, रोहिणी नक्षत्र'
                  : 'Thursday, Oct 15, 2026 • Shukla Panchami, Rohini Nakshatra'}
              </span>
            </div>

            <a
              href="#horoscope-studio"
              className="hidden lg:inline-flex items-center gap-1.5 font-semibold text-[#EA580C] hover:text-[#E11D48] transition"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
              <span>{lang === 'hi' ? 'शुभ मुहूर्त: 11:44 AM' : 'Shubh Muhurat: 11:44 AM'}</span>
            </a>
          </div>

          {/* Right: Search Trigger, Bilingual Toggle (हिंदी / EN) & RNI */}
          <div className="flex items-center gap-3 ml-auto">
            <span className="hidden xl:inline-block text-[11px] text-slate-500">
              RNI: <strong className="text-[#0F172A]">UTTBIL/2015/63414</strong>
            </span>

            <button
              onClick={() => setSearchOpen(true)}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-orange-50 text-[#334155] hover:text-[#EA580C] border border-[#E2E8F0] transition font-medium"
            >
              <Search className="w-3.5 h-3.5 text-[#EA580C]" />
              <span>{lang === 'hi' ? 'खोजें' : 'Search'}</span>
              <kbd className="hidden sm:inline-block px-1 py-0.2 text-[10px] bg-white rounded border border-slate-200 text-slate-400">
                ⌘K
              </kbd>
            </button>

            {/* Seamless Bilingual Toggle Pill */}
            <div className="flex items-center p-0.5 rounded-full bg-slate-100 border border-[#E2E8F0]">
              <button
                onClick={() => {
                  setLang('hi');
                  showToast('हिंदी संस्करण सक्रिय है', 'Switched to Hindi Edition');
                }}
                className={`px-2.5 py-0.5 rounded-full text-[11px] font-extrabold transition-all duration-200 ${
                  lang === 'hi'
                    ? 'bg-gradient-to-r from-[#EA580C] to-[#E11D48] text-white shadow-sm'
                    : 'text-[#334155] hover:text-[#0F172A]'
                }`}
              >
                हिंदी
              </button>
              <button
                onClick={() => {
                  setLang('en');
                  showToast('Switched to English Edition', 'Switched to English Edition');
                }}
                className={`px-2.5 py-0.5 rounded-full text-[11px] font-extrabold transition-all duration-200 ${
                  lang === 'en'
                    ? 'bg-gradient-to-r from-[#EA580C] to-[#E11D48] text-white shadow-sm'
                    : 'text-[#334155] hover:text-[#0F172A]'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================
          2. STICKY GLASSMORPHIC LIGHT HEADER
         ========================================== */}
      <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-[#E2E8F0] shadow-[0_4px_24px_-6px_rgba(15,23,42,0.05)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          {/* Brand Emblem */}
          <div
            onClick={() => {
              setActiveCategory('all');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <DoonHorizonLogo />
          </div>

          {/* Right Header Actions: Search Input Bar, E-Paper & Subscribe CTA */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Desktop Quick Search Bar */}
            <button
              onClick={() => setSearchOpen(true)}
              className="hidden lg:flex items-center gap-3 px-4 py-2 rounded-full bg-[#F8FAFC] hover:bg-white border border-[#E2E8F0] hover:border-orange-300 text-xs text-slate-500 transition-all shadow-inner w-64 justify-between"
            >
              <span className="flex items-center gap-2 truncate">
                <Search className="w-4 h-4 text-[#EA580C] shrink-0" />
                {lang === 'hi' ? 'उत्तराखंड, राशिफल, टेक खोजें...' : 'Search Dehradun, News, Tech...'}
              </span>
              <span className="px-1.5 py-0.5 text-[10px] font-mono bg-white rounded border border-slate-200 text-slate-400">
                ⌘K
              </span>
            </button>

            {/* E-Paper Button */}
            <button
              onClick={() =>
                showToast('देहरादून मॉर्निंग ई-पेपर संस्करण खुल रहा है...', 'Opening Dehradun Morning E-Paper Edition...')
              }
              className="magnetic-btn flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#FFFDF9] hover:bg-orange-50/70 text-[#0F172A] border border-[#E2E8F0] hover:border-orange-300 font-bold text-xs sm:text-sm shadow-sm"
            >
              <Newspaper className="w-4 h-4 text-[#EA580C]" />
              <span className="hidden sm:inline">{lang === 'hi' ? 'ई-पेपर' : 'e-Paper'}</span>
            </button>

            {/* Saved Bookmarks Counter */}
            <button
              onClick={() => {
                const firstSaved = ARTICLES.find((a) => bookmarks.includes(a.id)) || ARTICLES[0];
                setSelectedArticle(firstSaved);
              }}
              title={lang === 'hi' ? 'बुकमार्क की गई खबरें' : 'Saved Stories'}
              className="magnetic-btn relative p-2.5 rounded-full bg-[#FFFDF9] hover:bg-orange-50 text-[#334155] hover:text-[#EA580C] border border-[#E2E8F0] shadow-sm"
            >
              <Bookmark className="w-4 h-4" />
              {bookmarks.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#E11D48] text-white text-[10px] font-extrabold flex items-center justify-center">
                  {bookmarks.length}
                </span>
              )}
            </button>

            {/* Subscribe CTA Button */}
            <button
              onClick={() => setSubscribeModalOpen(true)}
              className="magnetic-btn flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#EA580C] via-[#E11D48] to-[#D97706] text-white font-extrabold text-xs sm:text-sm shadow-md shadow-orange-500/25 hover:shadow-lg hover:shadow-orange-500/35"
            >
              <Sparkles className="w-4 h-4 fill-white/20" />
              <span>{lang === 'hi' ? 'सब्सक्राइब करें' : 'Subscribe'}</span>
            </button>
          </div>
        </div>

        {/* Category Navigation Strip with Sliding Pill Indicators */}
        <div className="bg-[#FFFDF9]/90 border-t border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-1.5 overflow-x-auto no-scrollbar py-2">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategorySelect(cat.id)}
                  className={`relative flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#EA580C] to-[#E11D48] text-white shadow-md shadow-orange-500/20 scale-[1.02]'
                      : 'text-[#334155] hover:text-[#0F172A] hover:bg-orange-50/80'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-[#EA580C]'}`} />
                  <span>{lang === 'hi' ? cat.hi : cat.en}</span>
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* ==========================================
          3. ANIMATED BREAKING NEWS TICKER (WARM SAFFRON LIGHT BAR)
         ========================================== */}
      <div className="bg-gradient-to-r from-[#FFF7ED] via-[#FFFDF9] to-[#FFF1F2] border-b border-orange-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center gap-3">
          {/* Live Breaking Pill */}
          <div className="shrink-0 flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#E11D48] to-[#EA580C] text-white text-[11px] font-black uppercase tracking-wider shadow-sm">
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            <span>{lang === 'hi' ? 'ब्रेकिंग न्यूज़' : 'BREAKING'}</span>
          </div>

          {/* Smooth Marquee Flash */}
          <div className="overflow-hidden relative w-full">
            <div className="animate-marquee flex items-center gap-12">
              {[...BREAKING_TICKER, ...BREAKING_TICKER].map((item, idx) => (
                <button
                  key={`${item.id}-${idx}`}
                  onClick={() => setSelectedArticle(ARTICLES[idx % 4])}
                  className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#0F172A] hover:text-[#EA580C] whitespace-nowrap transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-[#EA580C] shrink-0" />
                  <span>{lang === 'hi' ? item.hi : item.en}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================
          MAIN EDITORIAL CONTAINER
         ========================================== */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-14">

        {/* ==========================================
            4. HERO BENTO GRID (LIGHT EDITORIAL CARDS)
           ========================================== */}
        <section className="space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              <div className="w-2 h-7 rounded-full bg-gradient-to-b from-[#EA580C] to-[#E11D48]" />
              <div>
                <h1 className="text-xl sm:text-2xl font-black tracking-tight text-[#0F172A]">
                  {lang === 'hi' ? 'दून होराइजन मुख्य समाचार' : 'Doon Horizon Top Stories'}
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#334155] bg-white px-3 py-1.5 rounded-full border border-[#E2E8F0] shadow-sm">
              <Radio className="w-3.5 h-3.5 text-[#E11D48] animate-pulse" />
              <span>
                {lang === 'hi' ? 'देहरादून न्यूज़ रूम से लाइव' : 'Live from Dehradun Newsroom'}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Main Featured Story Card (7 Columns - Crisp Light Editorial Card) */}
            <article
              onClick={() => setSelectedArticle(heroMain)}
              className="stagger-card lg:col-span-7 group bg-white rounded-3xl overflow-hidden cursor-pointer border border-[#E2E8F0] hover:border-orange-300 shadow-[0_12px_36px_-10px_rgba(15,23,42,0.07)] hover:shadow-[0_20px_45px_-12px_rgba(234,88,12,0.16)] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Featured Image Container */}
              <div className="relative h-64 sm:h-80 overflow-hidden bg-slate-100">
                <img
                  src={heroMain.image}
                  alt={lang === 'hi' ? heroMain.titleHi : heroMain.titleEn}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                {/* Floating Category & Bookmark */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-gradient-to-r from-[#EA580C] to-[#E11D48] text-white shadow-md">
                    {lang === 'hi' ? heroMain.categoryHi : heroMain.categoryEn}
                  </span>

                  <button
                    onClick={(e) => toggleBookmark(heroMain.id, e)}
                    className="p-2.5 rounded-full bg-white/90 backdrop-blur-md text-[#0F172A] hover:bg-[#EA580C] hover:text-white transition shadow-sm"
                  >
                    <Bookmark
                      className={`w-4 h-4 ${bookmarks.includes(heroMain.id) ? 'fill-current' : ''}`}
                    />
                  </button>
                </div>

                {/* Tags Pill Bar on Image Bottom */}
                <div className="absolute bottom-3 left-4 flex flex-wrap gap-1.5">
                  {(lang === 'hi' ? heroMain.tagsHi : heroMain.tagsEn).map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white/95 text-[#0F172A] shadow-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Crisp Alabaster Content Body */}
              <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between bg-gradient-to-b from-white to-[#FFFDF9]">
                <div className="space-y-3">
                  <h2 className="text-xl sm:text-2xl lg:text-[26px] font-black text-[#0F172A] leading-snug group-hover:text-[#EA580C] transition-colors">
                    {lang === 'hi' ? heroMain.titleHi : heroMain.titleEn}
                  </h2>

                  <p className="text-sm sm:text-base text-[#334155] leading-relaxed line-clamp-3">
                    {lang === 'hi' ? heroMain.summaryHi : heroMain.summaryEn}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
                  <div className="flex items-center gap-2.5">
                    <span className="font-bold text-[#0F172A]">
                      {lang === 'hi' ? heroMain.authorHi : heroMain.authorEn}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-medium text-[#EA580C]">
                      <Clock className="w-3.5 h-3.5" />
                      {lang === 'hi' ? heroMain.readTimeHi : heroMain.readTimeEn}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1 font-extrabold text-[#EA580C] group-hover:translate-x-1 transition-transform">
                    {lang === 'hi' ? 'पूरी खबर पढ़ें' : 'Read Full Story'}
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </article>

            {/* Secondary Highlights Column (5 Columns - 3 Stacked Bento Cards) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-4">
              {heroSubs.map((sub, idx) => (
                <article
                  key={sub.id}
                  style={{ animationDelay: `${(idx + 1) * 90}ms` }}
                  onClick={() => setSelectedArticle(sub)}
                  className="stagger-card group bg-white hover:bg-[#FFFDF9] rounded-2xl p-4 flex gap-4 cursor-pointer border border-[#E2E8F0] hover:border-orange-300 shadow-[0_6px_20px_-6px_rgba(15,23,42,0.05)] hover:shadow-[0_14px_30px_-8px_rgba(234,88,12,0.12)] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-28 sm:w-36 h-28 sm:h-32 rounded-xl overflow-hidden shrink-0 relative bg-slate-100">
                    <img
                      src={sub.image}
                      alt={lang === 'hi' ? sub.titleHi : sub.titleEn}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md text-[10px] font-extrabold bg-white/95 text-[#EA580C] shadow-sm">
                      {lang === 'hi' ? sub.categoryHi : sub.categoryEn}
                    </span>
                  </div>

                  <div className="flex flex-col justify-between flex-1 min-w-0">
                    <div className="space-y-1.5">
                      <h3 className="text-sm sm:text-base font-extrabold text-[#0F172A] leading-snug line-clamp-2 group-hover:text-[#EA580C] transition-colors">
                        {lang === 'hi' ? sub.titleHi : sub.titleEn}
                      </h3>
                      <p className="text-xs text-[#334155] line-clamp-2 leading-relaxed">
                        {lang === 'hi' ? sub.summaryHi : sub.summaryEn}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-[11px] pt-2 border-t border-slate-100 text-slate-500 font-medium">
                      <span className="flex items-center gap-1 text-[#EA580C]">
                        <Clock className="w-3 h-3" />
                        {lang === 'hi' ? sub.timeHi : sub.timeEn}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3 text-slate-400" />
                        {sub.views}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================
            5. INTERACTIVE VISUAL WEB STORIES STRIP (9:16)
           ========================================== */}
        <section
          id="web-stories-strip"
          className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-7 border border-[#E2E8F0] shadow-[0_10px_30px_-10px_rgba(15,23,42,0.04)] space-y-5"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#EA580C] to-[#E11D48] flex items-center justify-center text-white shadow-md shadow-orange-500/20">
                <Play className="w-4 h-4 fill-white ml-0.5" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-black text-[#0F172A]">
                  {lang === 'hi' ? 'विजुअल वेब स्टोरीज (Web Stories)' : 'Interactive Visual Web Stories'}
                </h2>
                <p className="text-xs text-[#334155]">
                  {lang === 'hi'
                    ? 'केदारनाथ यात्रा, मसूरी विंटरलाइन, उत्तराखंडी व्यंजन और टेक लॉन्च — फुल-स्क्रीन में देखने के लिए टैप करें'
                    : 'Kedarnath Yatra, Mussoorie Winterline, Uttarakhand Cuisine & Tech launches — Tap any 9:16 card'}
                </p>
              </div>
            </div>

            <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-orange-50 text-[#EA580C] border border-orange-200">
              9:16 HD STORIES
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {WEB_STORIES.map((story, idx) => (
              <div
                key={story.id}
                onClick={() => {
                  setActiveStoryIndex(idx);
                  setStoryProgress(0);
                }}
                className="group relative aspect-[9/15] rounded-2xl overflow-hidden cursor-pointer border-2 border-white shadow-md hover:shadow-xl hover:shadow-orange-500/15 ring-1 ring-[#E2E8F0] hover:ring-[#EA580C] hover:-translate-y-1.5 transition-all duration-300"
              >
                <img
                  src={story.image}
                  alt={lang === 'hi' ? story.titleHi : story.titleEn}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                {/* Segmented Story Ring Top */}
                <div className="absolute top-3 left-3 right-3 space-y-2">
                  <div className="flex gap-1">
                    <span className="h-1 flex-1 rounded-full bg-white/90" />
                    <span className="h-1 flex-1 rounded-full bg-white/40" />
                    <span className="h-1 flex-1 rounded-full bg-white/40" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-gradient-to-r from-[#EA580C] to-[#E11D48] text-white shadow-sm">
                      {lang === 'hi' ? story.categoryHi : story.categoryEn}
                    </span>
                    <span className="w-7 h-7 rounded-full bg-white/90 text-[#EA580C] flex items-center justify-center shadow-md group-hover:bg-[#EA580C] group-hover:text-white transition">
                      <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                    </span>
                  </div>
                </div>

                {/* Story Headline Bottom */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-[10px] text-amber-300 font-bold">
                    <Eye className="w-3 h-3" />
                    <span>{story.views}</span>
                    <span>•</span>
                    <span>{story.duration}</span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-extrabold text-white leading-snug line-clamp-3 group-hover:text-amber-200 transition">
                    {lang === 'hi' ? story.titleHi : story.titleEn}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==========================================
            6. LIGHT-THEMED HOROSCOPE (दैनिक राशिफल) & DEHRADUN PANCHANG STUDIO
           ========================================== */}
        <section
          id="horoscope-studio"
          className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#FFFDF9] via-white to-[#FFF7ED] border border-orange-200/80 shadow-[0_14px_40px_-12px_rgba(234,88,12,0.1)] relative overflow-hidden"
        >
          {/* Subtle Decorative Sunburst */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-gradient-to-br from-amber-200/40 via-orange-200/20 to-transparent blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-orange-200/70 pb-5">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#EA580C] via-[#E11D48] to-[#D97706] flex items-center justify-center text-white shadow-md shadow-orange-500/25">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl sm:text-2xl font-black text-[#0F172A]">
                      {lang === 'hi'
                        ? 'दैनिक राशिफल एवं देहरादून पंचांग स्टूडियो'
                        : 'Daily Horoscope (Rashifal) & Dehradun Panchang Studio'}
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-[#334155]">
                    {lang === 'hi'
                      ? 'अपनी राशि चुनें और जानें आज का भविष्यफल, शुभ रंग, शुभ अंक व शुभ मुहूर्त'
                      : 'Select your Rashi below for daily Vedic forecast, lucky color, lucky number & auspicious timings'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold px-3.5 py-2 rounded-full bg-amber-50 border border-amber-200 text-[#D97706]">
                <Sun className="w-4 h-4 text-[#EA580C]" />
                <span>
                  {lang === 'hi'
                    ? `सूर्योदय ${PANCHANG_DATA.sunrise} • सूर्यास्त ${PANCHANG_DATA.sunset}`
                    : `Sunrise ${PANCHANG_DATA.sunrise} • Sunset ${PANCHANG_DATA.sunset}`}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left 8 Cols: 12 Rashis Grid + Active Forecast Card */}
              <div className="lg:col-span-8 space-y-5">
                {/* 12 Zodiac Selector Pills */}
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2.5">
                  {ZODIAC_SIGNS.map((sign) => {
                    const isSelected = activeZodiac.id === sign.id;
                    return (
                      <button
                        key={sign.id}
                        onClick={() => setActiveZodiac(sign)}
                        className={`magnetic-btn flex flex-col items-center justify-center p-3 rounded-2xl border transition-all duration-200 ${
                          isSelected
                            ? 'bg-gradient-to-br from-[#EA580C] to-[#E11D48] text-white border-transparent shadow-md shadow-orange-500/25 scale-[1.03]'
                            : 'bg-white border-[#E2E8F0] text-[#0F172A] hover:border-orange-300 hover:bg-orange-50/50 shadow-sm'
                        }`}
                      >
                        <span className="text-2xl mb-1">{sign.symbol}</span>
                        <span className="text-xs font-extrabold">
                          {lang === 'hi' ? sign.hi : sign.en}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Selected Rashi Detailed Forecast Card */}
                <div className="p-6 rounded-2xl bg-white border border-orange-200/90 shadow-[0_8px_28px_-8px_rgba(234,88,12,0.1)] space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E2E8F0]">
                    <div className="flex items-center gap-3.5">
                      <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-3xl">
                        {activeZodiac.symbol}
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-black text-[#0F172A]">
                          {lang === 'hi'
                            ? `${activeZodiac.hi} दैनिक राशिफल (${activeZodiac.en})`
                            : `${activeZodiac.en} (${activeZodiac.hi}) Daily Forecast`}
                        </h3>
                        <span className="text-xs font-bold text-[#EA580C]">
                          {lang === 'hi' ? activeZodiac.elementHi : activeZodiac.elementEn} •{' '}
                          {lang === 'hi' ? activeZodiac.moodHi : activeZodiac.moodEn}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5 text-xs">
                      <div className="px-3.5 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-[#0F172A]">
                        <span className="text-slate-500">
                          {lang === 'hi' ? 'शुभ रंग: ' : 'Lucky Color: '}
                        </span>
                        <strong className="text-[#D97706]">
                          {lang === 'hi' ? activeZodiac.luckyColorHi : activeZodiac.luckyColorEn}
                        </strong>
                      </div>
                      <div className="px-3.5 py-1.5 rounded-xl bg-rose-50 border border-rose-200 text-[#0F172A]">
                        <span className="text-slate-500">
                          {lang === 'hi' ? 'शुभ अंक: ' : 'Lucky Number: '}
                        </span>
                        <strong className="text-[#E11D48]">{activeZodiac.luckyNumber}</strong>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-[#334155] leading-relaxed font-medium">
                    {lang === 'hi' ? activeZodiac.predictionHi : activeZodiac.predictionEn}
                  </p>
                </div>
              </div>

              {/* Right 4 Cols: Dehradun / Haridwar Auspicious Panchang Box */}
              <div className="lg:col-span-4 rounded-2xl p-5 sm:p-6 bg-white border border-orange-200/90 shadow-sm flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-gradient-to-r from-[#EA580C] to-[#D97706] text-white">
                      {lang === 'hi' ? 'आज का देहरादून पंचांग' : 'Dehradun Daily Panchang'}
                    </span>
                    <Compass className="w-4 h-4 text-[#EA580C]" />
                  </div>

                  <div className="space-y-2.5 pt-1 text-xs sm:text-sm">
                    <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                      <div className="text-slate-500 text-[11px] font-semibold">
                        {lang === 'hi' ? 'तिथि एवं संवत' : 'Tithi & Vikram Samvat'}
                      </div>
                      <div className="font-extrabold text-[#0F172A] mt-0.5">
                        {lang === 'hi' ? PANCHANG_DATA.tithiHi : PANCHANG_DATA.tithiEn}
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                      <div className="text-slate-500 text-[11px] font-semibold">
                        {lang === 'hi' ? 'नक्षत्र एवं योग' : 'Nakshatra & Yoga'}
                      </div>
                      <div className="font-extrabold text-[#EA580C] mt-0.5">
                        {lang === 'hi' ? PANCHANG_DATA.nakshatraHi : PANCHANG_DATA.nakshatraEn}
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-50/90 border border-emerald-200">
                      <div className="text-emerald-700 text-[11px] font-bold">
                        {lang === 'hi' ? 'अभिजीत शुभ मुहूर्त' : 'Shubh Muhurat (Auspicious)'}
                      </div>
                      <div className="font-extrabold text-emerald-900 mt-0.5">
                        {lang === 'hi' ? PANCHANG_DATA.abhijitHi : PANCHANG_DATA.abhijitEn}
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-rose-50/90 border border-rose-200">
                      <div className="text-rose-700 text-[11px] font-bold">
                        {lang === 'hi' ? 'राहुकाल (अशुभ समय)' : 'Rahukaal (Avoid New Starts)'}
                      </div>
                      <div className="font-extrabold text-rose-900 mt-0.5">
                        {lang === 'hi' ? PANCHANG_DATA.rahukaalHi : PANCHANG_DATA.rahukaalEn}
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedArticle(ARTICLES[6])}
                  className="magnetic-btn w-full py-2.5 rounded-xl bg-gradient-to-r from-[#EA580C] to-[#D97706] text-white font-extrabold text-xs sm:text-sm shadow-md shadow-orange-500/20 flex items-center justify-center gap-1.5"
                >
                  <span>
                    {lang === 'hi' ? 'केदारनाथ-बद्रीनाथ यात्रा अपडेट पढ़ें' : 'Read Char Dham Yatra Update'}
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            7. REGIONAL UTTARAKHAND & NORTH INDIA EXPLORER
           ========================================== */}
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-7 rounded-full bg-gradient-to-b from-[#D97706] to-[#EA580C]" />
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-[#0F172A]">
                  {lang === 'hi' ? 'प्रादेशिक समाचार एक्सप्लोरर' : 'Regional State News Desk'}
                </h2>
                <p className="text-xs text-[#334155]">
                  {lang === 'hi'
                    ? 'उत्तराखंड के 13 जिलों सहित उत्तर प्रदेश, दिल्ली NCR और हिमालयी राज्यों की ग्राउंड रिपोर्ट'
                    : 'Ground reports from across Uttarakhand’s 13 districts, UP, Delhi NCR & Himalayan states'}
                </p>
              </div>
            </div>

            {/* Sliding State Filter Tabs */}
            <div className="flex items-center gap-1.5 bg-white p-1.5 rounded-2xl border border-[#E2E8F0] shadow-sm overflow-x-auto no-scrollbar">
              {STATE_TABS.map((tab) => {
                const active = activeStateTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveStateTab(tab.id)}
                    className={`px-4 py-1.5 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all ${
                      active
                        ? 'bg-gradient-to-r from-[#EA580C] to-[#E11D48] text-white shadow-sm'
                        : 'text-[#334155] hover:text-[#0F172A] hover:bg-slate-100'
                    }`}
                  >
                    {lang === 'hi' ? tab.hi : tab.en}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stateArticles.map((art) => (
              <article
                key={art.id}
                onClick={() => setSelectedArticle(art)}
                className="group bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] hover:border-orange-300 cursor-pointer flex flex-col justify-between shadow-[0_8px_24px_-8px_rgba(15,23,42,0.05)] hover:shadow-[0_16px_36px_-10px_rgba(234,88,12,0.14)] transition-all duration-300 hover:-translate-y-1.5"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img
                      src={art.image}
                      alt={lang === 'hi' ? art.titleHi : art.titleEn}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-extrabold bg-white/95 text-[#EA580C] shadow-sm">
                      {lang === 'hi' ? art.categoryHi : art.categoryEn}
                    </span>
                    <button
                      onClick={(e) => toggleBookmark(art.id, e)}
                      className="absolute top-3 right-3 p-2 rounded-full bg-white/90 text-[#0F172A] hover:bg-[#EA580C] hover:text-white transition shadow-sm"
                    >
                      <Bookmark
                        className={`w-3.5 h-3.5 ${bookmarks.includes(art.id) ? 'fill-current' : ''}`}
                      />
                    </button>
                  </div>

                  <div className="p-5 space-y-2.5">
                    <h3 className="text-base sm:text-lg font-extrabold text-[#0F172A] leading-snug group-hover:text-[#EA580C] transition-colors line-clamp-2">
                      {lang === 'hi' ? art.titleHi : art.titleEn}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#334155] line-clamp-2 leading-relaxed">
                      {lang === 'hi' ? art.summaryHi : art.summaryEn}
                    </p>
                  </div>
                </div>

                <div className="px-5 py-3.5 bg-[#FFFDF9] border-t border-[#E2E8F0] flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>{lang === 'hi' ? art.timeHi : art.timeEn}</span>
                  <span className="font-extrabold text-[#EA580C] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    {lang === 'hi' ? 'पूरी खबर' : 'Read Story'}
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ==========================================
            8. MAIN CATEGORY FEED + CITIZEN POLL & TRENDING SIDEBAR
           ========================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2">
          {/* Left 8 Cols: Filtered News Stream */}
          <div className="lg:col-span-8 space-y-5">
            <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3.5">
              <div className="flex items-center gap-2.5">
                <Flame className="w-5 h-5 text-[#EA580C]" />
                <h2 className="text-xl font-black text-[#0F172A]">
                  {activeCategory === 'all'
                    ? lang === 'hi'
                      ? 'ताज़ा खबरें और विशेष रिपोर्ट्स'
                      : 'Latest News & Special Reports'
                    : lang === 'hi'
                    ? CATEGORIES.find((c) => c.id === activeCategory)?.hi
                    : CATEGORIES.find((c) => c.id === activeCategory)?.en}
                </h2>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-orange-50 text-[#EA580C] border border-orange-200">
                {filteredArticles.length} {lang === 'hi' ? 'रिपोर्ट्स' : 'Articles'}
              </span>
            </div>

            <div className="space-y-4">
              {filteredArticles.map((art) => (
                <article
                  key={art.id}
                  onClick={() => setSelectedArticle(art)}
                  className="group bg-white hover:bg-[#FFFDF9] rounded-2xl p-4 sm:p-5 border border-[#E2E8F0] hover:border-orange-300 flex flex-col sm:flex-row gap-5 cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-full sm:w-52 h-44 sm:h-36 rounded-xl overflow-hidden shrink-0 relative bg-slate-100">
                    <img
                      src={art.image}
                      alt={lang === 'hi' ? art.titleHi : art.titleEn}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md text-[10px] font-extrabold bg-white/95 text-[#EA580C] shadow-sm">
                      {lang === 'hi' ? art.categoryHi : art.categoryEn}
                    </span>
                  </div>

                  <div className="flex flex-col justify-between flex-1 space-y-3">
                    <div className="space-y-1.5">
                      <h3 className="text-base sm:text-lg font-extrabold text-[#0F172A] leading-snug group-hover:text-[#EA580C] transition-colors">
                        {lang === 'hi' ? art.titleHi : art.titleEn}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#334155] line-clamp-2 leading-relaxed">
                        {lang === 'hi' ? art.summaryHi : art.summaryEn}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 text-xs text-slate-500">
                      <div className="flex items-center gap-2.5">
                        <span className="font-bold text-[#0F172A]">
                          {lang === 'hi' ? art.authorHi : art.authorEn}
                        </span>
                        <span>•</span>
                        <span className="text-[#EA580C] font-semibold">
                          {lang === 'hi' ? art.readTimeHi : art.readTimeEn}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={(e) => toggleBookmark(art.id, e)}
                          className="p-1.5 rounded-lg hover:bg-orange-50 text-slate-500 hover:text-[#EA580C] transition"
                        >
                          <Bookmark
                            className={`w-4 h-4 ${
                              bookmarks.includes(art.id) ? 'fill-[#EA580C] text-[#EA580C]' : ''
                            }`}
                          />
                        </button>
                        <span className="text-[#EA580C] font-extrabold flex items-center gap-1">
                          {lang === 'hi' ? 'पढ़ें और सुनें' : 'Read & Listen'}
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Right 4 Cols: Trending Stories & Dehradun Citizen Poll */}
          <div className="lg:col-span-4 space-y-6">
            {/* Most Read on Doon Horizon */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E2E8F0] shadow-sm space-y-4">
              <div className="flex items-center gap-2 border-b border-[#E2E8F0] pb-3">
                <TrendingUp className="w-5 h-5 text-[#EA580C]" />
                <h3 className="font-black text-base text-[#0F172A]">
                  {lang === 'hi' ? 'सबसे ज्यादा पढ़ी गईं खबरें' : 'Trending on Doon Horizon'}
                </h3>
              </div>

              <div className="space-y-4">
                {ARTICLES.slice(0, 5).map((item, index) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedArticle(item)}
                    className="flex items-start gap-3.5 group cursor-pointer"
                  >
                    <span className="w-7 h-7 rounded-xl bg-orange-50 border border-orange-200 text-[#EA580C] font-black text-xs flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#EA580C] group-hover:text-white transition">
                      0{index + 1}
                    </span>
                    <div className="space-y-1">
                      <h4 className="text-xs sm:text-sm font-bold text-[#0F172A] leading-snug group-hover:text-[#EA580C] transition line-clamp-2">
                        {lang === 'hi' ? item.titleHi : item.titleEn}
                      </h4>
                      <span className="text-[11px] text-slate-500 flex items-center gap-1 font-medium">
                        <Eye className="w-3 h-3 text-[#EA580C]" />
                        {item.views} {lang === 'hi' ? 'पाठक' : 'views'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Dehradun Citizen Poll */}
            <div className="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-[#FFFDF9] to-orange-50/70 border border-orange-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-gradient-to-r from-[#EA580C] to-[#E11D48] text-white">
                  {lang === 'hi' ? 'दून जनमत पोल' : 'Doon Citizen Poll'}
                </span>
                <MessageSquare className="w-4 h-4 text-[#EA580C]" />
              </div>

              <h4 className="font-extrabold text-sm sm:text-base text-[#0F172A] leading-snug">
                {lang === 'hi'
                  ? 'उत्तराखंड के सरकारी स्कूलों के कायाकल्प के बाद क्या हर ब्लॉक में आवासीय मॉडल स्कूल भी खुलने चाहिए?'
                  : 'Alongside the ₹30 Cr school rebuild grant, should every hill block have a residential smart model school?'}
              </h4>

              <div className="space-y-2.5">
                {[
                  { id: 'yes', hi: 'हां, पलायन रोकने में मदद मिलेगी (82%)', en: 'Yes, it will curb hill migration (82%)', pct: 82 },
                  { id: 'no', hi: 'मौजूदा स्कूलों का अपग्रेड पर्याप्त है (12%)', en: 'Upgrading existing schools is enough (12%)', pct: 12 },
                  { id: 'maybe', hi: 'केवल दूरस्थ सीमांत क्षेत्रों में (6%)', en: 'Only in remote border blocks (6%)', pct: 6 }
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setPollVote(opt.id);
                      showToast('आपका वोट दर्ज कर लिया गया है!', 'Your vote has been recorded!');
                    }}
                    className={`w-full text-left p-3 rounded-xl border text-xs font-bold relative overflow-hidden transition ${
                      pollVote === opt.id
                        ? 'border-[#EA580C] bg-orange-100/60 text-[#0F172A]'
                        : 'border-[#E2E8F0] bg-white hover:border-orange-300 text-[#334155]'
                    }`}
                  >
                    {pollVote && (
                      <div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-orange-200/70 to-amber-200/70 transition-all duration-500"
                        style={{ width: `${opt.pct}%` }}
                      />
                    )}
                    <div className="relative z-10 flex items-center justify-between">
                      <span>{lang === 'hi' ? opt.hi : opt.en}</span>
                      {pollVote === opt.id && <Check className="w-4 h-4 text-[#EA580C] shrink-0" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ==========================================
          9. DISTRACTION-FREE LIGHT ARTICLE READER MODAL
             (WITH FONT CONTROLS, WAVEFORM AUDIO & RELATED NEWS)
         ========================================== */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-[90] bg-slate-900/50 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#FFFDF9] border border-[#E2E8F0] text-[#0F172A] shadow-2xl transition-all"
          >
            {/* Sticky Reader Header */}
            <div className="sticky top-0 z-20 px-5 py-3.5 bg-white/95 backdrop-blur-xl border-b border-[#E2E8F0] flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-gradient-to-r from-[#EA580C] to-[#E11D48] text-white">
                  {lang === 'hi' ? selectedArticle.categoryHi : selectedArticle.categoryEn}
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  {lang === 'hi' ? selectedArticle.readTimeHi : selectedArticle.readTimeEn}
                </span>
              </div>

              {/* Reader Controls: Listen Audio TTS, Font Size, Bookmark, Share, Close */}
              <div className="flex items-center gap-2">
                {/* Interactive "Listen to Article" Audio Player Button */}
                <button
                  onClick={() => setIsSpeaking(!isSpeaking)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold border transition ${
                    isSpeaking
                      ? 'bg-gradient-to-r from-[#EA580C] to-[#E11D48] text-white border-transparent shadow-md'
                      : 'bg-orange-50 border-orange-200 text-[#EA580C] hover:bg-orange-100'
                  }`}
                >
                  {isSpeaking ? <Pause className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                  <span>
                    {isSpeaking
                      ? `${lang === 'hi' ? 'सुनाया जा रहा है' : 'Playing'} ${Math.round(audioProgress)}%`
                      : lang === 'hi'
                      ? 'खबर सुनें (AI Audio)'
                      : 'Listen to Article'}
                  </span>
                </button>

                {/* Font Size Control */}
                <button
                  onClick={() =>
                    setFontSize((prev) => (prev === 'base' ? 'lg' : prev === 'lg' ? 'sm' : 'base'))
                  }
                  title="Adjust Font Size"
                  className="px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 border border-[#E2E8F0] text-xs font-extrabold text-[#0F172A]"
                >
                  Aa
                </button>

                <button
                  onClick={(e) => toggleBookmark(selectedArticle.id, e)}
                  className="p-2 rounded-full bg-slate-100 hover:bg-orange-50 border border-[#E2E8F0] text-[#0F172A]"
                >
                  <Bookmark
                    className={`w-4 h-4 ${
                      bookmarks.includes(selectedArticle.id) ? 'fill-[#EA580C] text-[#EA580C]' : ''
                    }`}
                  />
                </button>

                <button
                  onClick={() =>
                    showToast('खबर का लिंक क्लिपबोर्ड पर कॉपी हो गया!', 'Story link copied to clipboard!')
                  }
                  className="p-2 rounded-full bg-slate-100 hover:bg-orange-50 border border-[#E2E8F0] text-[#0F172A]"
                >
                  <Share2 className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-2 rounded-full bg-rose-50 text-[#E11D48] hover:bg-[#E11D48] hover:text-white transition"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Simulated Audio Waveform Bar when active */}
            {isSpeaking && (
              <div className="px-6 py-3 bg-gradient-to-r from-orange-50 via-amber-50 to-rose-50 border-b border-orange-200 flex items-center gap-4">
                <div className="flex items-center gap-1 h-5">
                  {[0, 150, 300, 100, 250].map((delay, idx) => (
                    <span
                      key={idx}
                      style={{ animationDelay: `${delay}ms` }}
                      className="wave-bar w-1 rounded-full bg-[#EA580C] inline-block"
                    />
                  ))}
                </div>
                <div className="flex-1 h-2 rounded-full bg-orange-200/70 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#EA580C] to-[#E11D48] transition-all"
                    style={{ width: `${audioProgress}%` }}
                  />
                </div>
                <span className="text-[11px] font-extrabold text-[#EA580C]">
                  {lang === 'hi' ? 'दून होराइजन ऑडियो' : 'Doon Horizon Audio'}
                </span>
              </div>
            )}

            {/* Article Content Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <h1 className="text-2xl sm:text-3xl font-black text-[#0F172A] leading-tight">
                {lang === 'hi' ? selectedArticle.titleHi : selectedArticle.titleEn}
              </h1>

              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 pb-4 border-b border-[#E2E8F0]">
                <div>
                  <strong className="text-[#EA580C]">
                    {lang === 'hi' ? selectedArticle.authorHi : selectedArticle.authorEn}
                  </strong>{' '}
                  • {lang === 'hi' ? selectedArticle.timeHi : selectedArticle.timeEn}
                </div>
                <div className="flex items-center gap-1.5 font-semibold text-[#0F172A]">
                  <Eye className="w-4 h-4 text-[#EA580C]" />
                  <span>{selectedArticle.views} Views</span>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden max-h-96 border border-[#E2E8F0]">
                <img
                  src={selectedArticle.image}
                  alt={lang === 'hi' ? selectedArticle.titleHi : selectedArticle.titleEn}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Article Paragraphs */}
              <div
                className={`space-y-4 leading-relaxed text-[#1E293B] ${
                  fontSize === 'lg'
                    ? 'text-lg sm:text-xl'
                    : fontSize === 'sm'
                    ? 'text-sm'
                    : 'text-base sm:text-lg'
                }`}
              >
                {(lang === 'hi' ? selectedArticle.contentHi : selectedArticle.contentEn).map(
                  (para, i) => (
                    <p key={i}>{para}</p>
                  )
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#E2E8F0]">
                {(lang === 'hi' ? selectedArticle.tagsHi : selectedArticle.tagsEn).map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-bold bg-orange-50 text-[#EA580C] border border-orange-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Related News inside Reader Modal */}
              <div className="pt-6 border-t border-[#E2E8F0] space-y-3">
                <h4 className="text-sm font-black uppercase tracking-wider text-[#0F172A]">
                  {lang === 'hi' ? 'संबंधित खबरें (Related Stories)' : 'Related Stories'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {relatedArticles.map((rel) => (
                    <div
                      key={rel.id}
                      onClick={() => setSelectedArticle(rel)}
                      className="p-3 rounded-2xl bg-white border border-[#E2E8F0] hover:border-orange-300 cursor-pointer transition space-y-2"
                    >
                      <img
                        src={rel.image}
                        alt=""
                        className="w-full h-24 object-cover rounded-xl"
                      />
                      <h5 className="text-xs font-extrabold text-[#0F172A] line-clamp-2 hover:text-[#EA580C]">
                        {lang === 'hi' ? rel.titleHi : rel.titleEn}
                      </h5>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          10. FULL-SCREEN WEB STORIES MODAL
         ========================================== */}
      {activeStoryIndex !== null && WEB_STORIES[activeStoryIndex] && (
        <div
          className="fixed inset-0 z-[95] bg-slate-950/85 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setActiveStoryIndex(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm aspect-[9/16] rounded-3xl overflow-hidden border-2 border-white/40 shadow-2xl flex flex-col justify-between"
          >
            <img
              src={WEB_STORIES[activeStoryIndex].image}
              alt="Web Story"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/50" />

            {/* Story Progress Bars */}
            <div className="relative z-10 p-4 space-y-3">
              <div className="grid grid-cols-5 gap-1.5">
                {WEB_STORIES.map((s, idx) => (
                  <div key={s.id} className="h-1 rounded-full bg-white/30 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#EA580C] to-[#F59E0B]"
                      style={{
                        width:
                          idx < activeStoryIndex
                            ? '100%'
                            : idx === activeStoryIndex
                            ? `${storyProgress}%`
                            : '0%'
                      }}
                    />
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between text-white">
                <span className="px-3 py-0.5 rounded-full text-xs font-extrabold bg-[#EA580C]">
                  {lang === 'hi'
                    ? WEB_STORIES[activeStoryIndex].categoryHi
                    : WEB_STORIES[activeStoryIndex].categoryEn}
                </span>
                <button
                  onClick={() => setActiveStoryIndex(null)}
                  className="p-1.5 rounded-full bg-white/20 text-white hover:bg-[#E11D48] transition"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Prev / Next Controls */}
            <div className="relative z-10 flex items-center justify-between px-2">
              <button
                onClick={() => {
                  if (activeStoryIndex > 0) {
                    setActiveStoryIndex(activeStoryIndex - 1);
                    setStoryProgress(0);
                  }
                }}
                className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-[#EA580C] transition"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => {
                  if (activeStoryIndex < WEB_STORIES.length - 1) {
                    setActiveStoryIndex(activeStoryIndex + 1);
                    setStoryProgress(0);
                  } else {
                    setActiveStoryIndex(null);
                  }
                }}
                className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-[#EA580C] transition"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Caption */}
            <div className="relative z-10 p-6 space-y-2.5 text-white">
              <h3 className="text-xl font-black leading-snug">
                {lang === 'hi'
                  ? WEB_STORIES[activeStoryIndex].titleHi
                  : WEB_STORIES[activeStoryIndex].titleEn}
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {lang === 'hi'
                  ? WEB_STORIES[activeStoryIndex].captionHi
                  : WEB_STORIES[activeStoryIndex].captionEn}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          11. LIGHT SEARCH MODAL (CMD/CTRL + K)
         ========================================== */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-[95] bg-slate-900/40 backdrop-blur-md flex items-start justify-center pt-20 p-4"
          onClick={() => setSearchOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl rounded-3xl bg-white border border-[#E2E8F0] text-[#0F172A] shadow-2xl overflow-hidden"
          >
            <div className="p-4 bg-[#FFFDF9] border-b border-[#E2E8F0] flex items-center gap-3">
              <Search className="w-5 h-5 text-[#EA580C]" />
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  lang === 'hi'
                    ? 'उत्तराखंड, देहरादून, राशिफल, UPI, Infinix खोजें...'
                    : 'Search Uttarakhand, Dehradun, Horoscope, UPI, Infinix...'
                }
                className="w-full bg-transparent outline-none text-sm sm:text-base text-[#0F172A] placeholder:text-slate-400"
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="px-2 py-1 rounded-lg bg-slate-100 text-xs font-bold text-slate-500"
              >
                ESC
              </button>
            </div>

            <div className="p-4 max-h-96 overflow-y-auto space-y-2">
              {searchResults.map((art) => (
                <div
                  key={art.id}
                  onClick={() => {
                    setSelectedArticle(art);
                    setSearchOpen(false);
                  }}
                  className="p-3 rounded-2xl flex items-center gap-3.5 cursor-pointer hover:bg-orange-50/70 transition"
                >
                  <img
                    src={art.image}
                    alt=""
                    className="w-14 h-14 rounded-xl object-cover shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-extrabold text-[#EA580C] uppercase">
                      {lang === 'hi' ? art.categoryHi : art.categoryEn}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-[#0F172A] truncate">
                      {lang === 'hi' ? art.titleHi : art.titleEn}
                    </h4>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#EA580C] shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          12. SUBSCRIBE / MORNING BRIEFING MODAL
         ========================================== */}
      {subscribeModalOpen && (
        <div
          className="fixed inset-0 z-[95] bg-slate-900/45 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSubscribeModalOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-3xl bg-[#FFFDF9] border border-orange-200 p-6 sm:p-8 shadow-2xl space-y-5 relative"
          >
            <button
              onClick={() => setSubscribeModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-rose-50 hover:text-[#E11D48]"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#EA580C] to-[#E11D48] text-white flex items-center justify-center shadow-md">
              <Newspaper className="w-6 h-6" />
            </div>

            <div className="space-y-1.5">
              <h3 className="text-xl font-black text-[#0F172A]">
                {lang === 'hi'
                  ? 'दून होराइजन मॉर्निंग ब्रीफिंग'
                  : 'Doon Horizon Morning Briefing'}
              </h3>
              <p className="text-xs sm:text-sm text-[#334155]">
                {lang === 'hi'
                  ? 'हर सुबह 7 बजे उत्तराखंड, देश-विदेश और दैनिक पंचांग की प्रमुख खबरें सीधे अपने इनबॉक्स में प्राप्त करें।'
                  : 'Receive top verified Uttarakhand, National & Daily Panchang updates every morning at 7 AM.'}
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setNewsletterSubscribed(true);
                setSubscribeModalOpen(false);
                showToast('दून होराइजन न्यूज़लेटर के लिए धन्यवाद!', 'Subscribed to Doon Horizon Briefing!');
              }}
              className="space-y-3"
            >
              <input
                type="email"
                required
                placeholder={lang === 'hi' ? 'अपना ईमेल दर्ज करें...' : 'Enter your email address...'}
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#E2E8F0] text-sm text-[#0F172A] outline-none focus:border-[#EA580C]"
              />
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#EA580C] to-[#E11D48] text-white font-extrabold text-sm shadow-md"
              >
                {lang === 'hi' ? 'निःशुल्क सब्सक्राइब करें' : 'Subscribe Free'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ==========================================
          13. CLEAN EDITORIAL LIGHT FOOTER (RNI, CIN, ADDRESS)
         ========================================== */}
      <footer className="mt-20 bg-[#FFFDF9] border-t border-[#E2E8F0] text-[#334155]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
            {/* Col 1: Brand & Official Registration Details (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              <DoonHorizonLogo />

              <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                {lang === 'hi'
                  ? 'दून होराइजन न्यूज़ नेटवर्क प्राइवेट लिमिटेड — देवभूमि उत्तराखंड, उत्तर प्रदेश, दिल्ली एनसीआर और देश-दुनिया की निष्पक्ष, निर्भीक और विश्वसनीय द्विभाषी (हिंदी/अंग्रेज़ी) डिजिटल समाचार सेवा।'
                  : "Doon Horizon News Network Private Limited — Uttarakhand's premier bilingual digital media house delivering verified journalism across Dehradun, Himalayan states, Business, Tech, and Dharma."}
              </p>

              {/* Official Corporate Credentials Card */}
              <div className="p-4 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm space-y-2 text-xs">
                <div className="flex items-center gap-2 text-[#EA580C] font-extrabold">
                  <Building2 className="w-4 h-4 shrink-0" />
                  <span>Doon Horizon News Network Private Limited</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[#334155] pt-1">
                  <div>
                    <span className="text-slate-400">RNI Reg. No.: </span>
                    <strong className="text-[#0F172A]">UTTBIL/2015/63414</strong>
                  </div>
                  <div>
                    <span className="text-slate-400">CIN Reg. No.: </span>
                    <strong className="text-[#0F172A]">U22220UR2022PTC014337</strong>
                  </div>
                </div>
                <div className="pt-1 text-[#334155] flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                  <span>
                    {lang === 'hi'
                      ? 'पंजीकृत कार्यालय: 98, मन्नू गंज, देहरादून, उत्तराखंड (भारत)'
                      : 'Registered Office: 98, Mannu Ganj, Dehradun, Uttarakhand, India'}
                  </span>
                </div>
                <div className="pt-1 text-[#334155] flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#EA580C] shrink-0" />
                  <span>
                    {lang === 'hi'
                      ? 'मुख्य संपादक (Editor-in-Chief): हरप्रीत सिंह (Harpreet Singh)'
                      : 'Editor-in-Chief: Harpreet Singh'}
                  </span>
                </div>
              </div>
            </div>

            {/* Col 2: Quick Categories (3 Cols) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-sm font-black uppercase tracking-wider text-[#0F172A]">
                {lang === 'hi' ? 'प्रमुख विभाग' : 'Editorial Sections'}
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm font-medium">
                {CATEGORIES.map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => handleCategorySelect(cat.id)}
                      className="hover:text-[#EA580C] transition flex items-center gap-1.5"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-[#EA580C]" />
                      <span>{lang === 'hi' ? cat.hi : cat.en}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Newsletter & Official App Card (4 Cols) */}
            <div className="lg:col-span-4 space-y-5">
              <div className="space-y-2">
                <h4 className="text-sm font-black uppercase tracking-wider text-[#0F172A]">
                  {lang === 'hi' ? 'दून होराइजन न्यूज़लेटर' : 'Morning Horizon Briefing'}
                </h4>
                <p className="text-xs text-[#334155]">
                  {lang === 'hi'
                    ? 'देहरादून और उत्तराखंड की सुबह की 10 बड़ी खबरें सीधे अपने ईमेल पर पाएं।'
                    : 'Get top 10 verified Uttarakhand & National stories delivered daily at 7 AM.'}
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (newsletterEmail.trim()) {
                      setNewsletterSubscribed(true);
                      setNewsletterEmail('');
                      showToast('न्यूज़लेटर के लिए सफलतापूर्वक सब्सक्राइब किया गया!', 'Subscribed to Doon Horizon Morning Briefing!');
                    }
                  }}
                  className="flex gap-2 pt-1"
                >
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder={lang === 'hi' ? 'आपका ईमेल पता...' : 'Enter your email...'}
                    className="flex-1 px-3.5 py-2.5 rounded-xl bg-white border border-[#E2E8F0] text-xs text-[#0F172A] outline-none focus:border-[#EA580C]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#EA580C] to-[#E11D48] text-white font-extrabold text-xs hover:opacity-95 transition shrink-0 shadow-sm"
                  >
                    {newsletterSubscribed
                      ? lang === 'hi'
                        ? 'जुड़ गए ✓'
                        : 'Joined ✓'
                      : lang === 'hi'
                      ? 'जुड़ें'
                      : 'Subscribe'}
                  </button>
                </form>
              </div>

              {/* Official App Download Card */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-50 via-amber-50 to-rose-50 border border-orange-200 flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-xs font-black text-[#0F172A]">
                    {lang === 'hi' ? 'दून होराइजन ऑफिशियल ऐप' : 'Doon Horizon Official App'}
                  </div>
                  <p className="text-[11px] text-[#334155]">
                    {lang === 'hi'
                      ? 'तेज़ ब्रेकिंग अलर्ट और ई-पेपर के लिए Google Play से डाउनलोड करें'
                      : 'Instant breaking alerts & e-Paper on Google Play Store'}
                  </p>
                </div>
                <button
                  onClick={() =>
                    showToast('Google Play Store पर रीडायरेक्ट किया जा रहा है...', 'Opening Doon Horizon on Google Play Store...')
                  }
                  className="magnetic-btn px-3.5 py-2 rounded-xl bg-[#0F172A] text-white font-extrabold text-xs shrink-0 hover:bg-[#EA580C] transition flex items-center gap-1.5 shadow-sm"
                >
                  <Smartphone className="w-4 h-4 text-amber-400" />
                  <span>Google Play</span>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Copyright Bar */}
          <div className="pt-8 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              © {new Date().getFullYear()} <strong className="text-[#0F172A]">Doon Horizon News Network Pvt. Ltd.</strong> (doonhorizon.in). All Rights Reserved.
            </div>
            <div className="flex flex-wrap items-center gap-5 font-semibold">
              <button onClick={() => showToast('निजता नीति (Privacy Policy)', 'Privacy Policy')} className="hover:text-[#EA580C]">
                {lang === 'hi' ? 'प्राइवेसी पॉलिसी' : 'Privacy Policy'}
              </button>
              <button onClick={() => showToast('संपादकीय आचार संहिता', 'Editorial Ethics & Code')} className="hover:text-[#EA580C]">
                {lang === 'hi' ? 'संपादकीय नीति' : 'Editorial Ethics'}
              </button>
              <button onClick={() => showToast('विज्ञापन संपर्क: ads@doonhorizon.in', 'Contact Ads: ads@doonhorizon.in')} className="hover:text-[#EA580C]">
                {lang === 'hi' ? 'विज्ञापन दें' : 'Advertise with Us'}
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}