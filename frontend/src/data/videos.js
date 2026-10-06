// Complete Catalogue of Authentic Sai Krishna Photography Cinematic Films & Teasers
// Sourced from official Google Drive archive: https://drive.google.com/drive/folders/1JN6e1M9h44rTnQLuc3cBnbvCc0MlJQk1

export const getLocalVideoSrc = (id) => `/films/${id}.mp4`;
export const driveStreamUrl = (id) => `https://drive.usercontent.google.com/download?id=${id}&export=download&confirm=t`;
export const drivePreviewUrl = (id) => `https://drive.google.com/file/d/${id}/preview`;

export const videos = [
  // FEATURED MASTER REEL
  {
    id: 'master-01',
    driveId: '1Iw0VsXII98EahRxKtRs6llhOdJ2SlJoN',
    title: 'Sai Krishna Cinema — Master Wedding Showreel',
    subtitle: 'Signature 4K Cinematic Retelling',
    description: 'A breathtaking compilation of unscripted joy, sacred muhurtham promises, and grand visual grandeur captured across landmark Indian weddings.',
    categories: ['featured', 'wedding', 'videography', 'family'],
    badge: '4K MASTER SHOWREEL',
    duration: '02:45',
    cover: '/photos/optimized/photo_01.jpg',
    gear: 'Sony FX3 + Cine Primes • 4K 10-Bit S-Log3 • Color Mastered',
    featured: true
  },

  // WEDDINGS
  {
    id: 'wed-01',
    driveId: '1tM1gCHCN38aEP2vSejPq5YW2i-dh-5hA',
    title: 'Divya & Karthik — Royal Wedding Highlights',
    subtitle: 'Mandapam Opulence & Sacred Vows',
    description: 'Basking in golden chandeliers and sacred Vedic chants, Divya and Karthik begin their eternal union in breathtaking cinematic harmony.',
    categories: ['wedding', 'videography'],
    badge: 'ROYAL WEDDING',
    duration: '03:12',
    cover: '/photos/wedding/1.jpg',
    gear: 'Dual Alpha 4K Multi-Cam • Gimbal Flow • Signature Warm Grade'
  },
  {
    id: 'wed-02',
    driveId: '1yQazyR7PwMM4OlW_22L_JR0Bsff8WL0Y',
    title: 'Chithanya & Vyshali — The Sacred Union',
    subtitle: 'Celebration of Two Families',
    description: 'A heartfelt visual tale documenting every unscripted teardrop, garland exchange roar, and heartfelt blessing showered upon the newly married couple.',
    categories: ['wedding', 'videography', 'family'],
    badge: 'SACRED UNION',
    duration: '02:58',
    cover: '/photos/wedding/2.jpg',
    gear: 'Prime 85mm & 35mm Master Cine • High-Fidelity Audio'
  },
  {
    id: 'wed-03',
    driveId: '1LA_nnX_Vop3SyK82m4mWYoK8qTlyC_BP',
    title: 'Priyanka & Akhil — Grand Wedding Story',
    subtitle: 'Heritage Elegance & Joyful Revelry',
    description: 'From serene dawn preparations to the electric euphoria of the evening reception, captured with timeless documentary precision.',
    categories: ['wedding', 'videography'],
    badge: 'GRAND WEDDING',
    duration: '03:20',
    cover: '/photos/wedding/3.jpg',
    gear: 'Aerial Drone Perspective • Cinema RAW Master'
  },
  {
    id: 'wed-04',
    driveId: '1k51919mGo4YKCr6mhdTrSHSk0l1eJO1I',
    title: 'Prathyusha & Teja — Wedding Teaser',
    subtitle: 'Traditional Telugu Wedding Splendor',
    description: 'Rich silk textures, intricate temple jewelry, and sacred rituals framed with museum-grade cinematic lighting.',
    categories: ['wedding', 'videography'],
    badge: 'HERITAGE CEREMONY',
    duration: '02:40',
    cover: '/photos/wedding/4.jpg',
    gear: 'Low-Light 4K Sensor • Precision Steadicam Rig'
  },
  {
    id: 'wed-05',
    driveId: '1Vr1Kbljh2SPgB5HKzJHLMu5gDakBpVI9',
    title: 'Navya & Sai — Muhurtham Chronicle',
    subtitle: 'Sacred Jeelakarra Bellam & Saptapadi',
    description: 'Witness the auspicious muhurtham moment when destiny turned into a lifelong promise, immortalized in high definition.',
    categories: ['wedding', 'videography'],
    badge: 'MUHURTHAM MOMENTS',
    duration: '02:50',
    cover: '/photos/wedding/5.jpg',
    gear: 'Ultra-Sharp Macro Lens • 120fps Slow Motion'
  },
  {
    id: 'wed-06',
    driveId: '1lQJscvIzksI2x_MbLXsoCDeDL6HQAc-d',
    title: 'Grace & Splendor — Bridal Entry Teaser',
    subtitle: 'Intimate Bridal Preparation & Entry',
    description: 'Delicate touches, heritage ornaments, and the radiant smile of a bride walking towards her new beginning beneath a canopy of flowers.',
    categories: ['wedding', 'videography'],
    badge: 'BRIDAL CHRONICLE',
    duration: '01:30',
    cover: '/photos/optimized/photo_02.jpg',
    gear: 'Diffused Softbox Lighting • 85mm f/1.4 Portrait Prime'
  },
  {
    id: 'wed-07',
    driveId: '1Acajs4lghEDEVoVeV9by_yIyAVi1Qv29',
    title: 'Sai Sri — Regal Bridal Portrait Film',
    subtitle: 'The Royal Bridal Glow',
    description: 'An ethereal showcase honoring timeless bridal poise, exquisite lehenga craftsmanship, and serene introspection.',
    categories: ['wedding', 'videography'],
    badge: 'BRIDAL GLOW',
    duration: '01:45',
    cover: '/photos/studio/3.jpg',
    gear: 'Cine Studio Setup • 4K 60fps Fine Tone Artistry'
  },
  {
    id: 'wed-08',
    driveId: '1CYNEISx2_UrlJls19LTL1nvAmUiVKo78',
    title: 'The Royal Groom — Entry Teaser',
    subtitle: 'Charisma, Energy & Grand Baraat',
    description: 'Dynamic procession beats, dhol rhythms, and the poised confidence of the groom arriving with royal fanfare.',
    categories: ['wedding', 'videography'],
    badge: "GROOM'S SUITE",
    duration: '01:25',
    cover: '/photos/wedding/4.jpg',
    gear: 'Wide-Angle Dynamic Tracking • High-Energy Action Cut'
  },

  // PRE-WEDDING
  {
    id: 'pre-01',
    driveId: '1Yh_CZ4HZDCMW4VqXU-oMgzYcwuCeB-Zt',
    title: 'Whispering Waves — Pre-Wedding Film',
    subtitle: 'Coastal Romance & Sunlit Dunes',
    description: 'Gentle sea breezes, hand-in-hand seaside walks, and pure cinematic warmth celebrating young love before the wedding bells.',
    categories: ['pre-wedding', 'videography'],
    badge: 'COASTAL ROMANCE',
    duration: '03:45',
    cover: '/photos/pre-wedding/1.jpg',
    gear: 'Polarized Sunset Flares • Slow Cinema Movement'
  },
  {
    id: 'pre-02',
    driveId: '1pdQ4yMC-3BRmZZxadN9GzXxX9EixjGH4',
    title: 'Golden Hour Serenade — Pre-Shoot Film',
    subtitle: 'Romantic Outdoors & Scenic Horizons',
    description: 'Choreographed against sun-drenched landscapes with editorial flair and natural, authentic chemistry between two souls.',
    categories: ['pre-wedding', 'videography'],
    badge: 'ROMANTIC DUSK',
    duration: '02:15',
    cover: '/photos/pre-wedding/2.jpg',
    gear: 'Prime 50mm f/1.2 • Soft Bokeh Atmospheric Grade'
  },

  // POST-WEDDING & RECEPTION
  {
    id: 'post-01',
    driveId: '1X48uoSG0GXF_wvUn4oH-8R0Iny0pyYqX',
    title: 'Echoes of Forever — Post Wedding Song',
    subtitle: 'Intimate, Reflective & Heartfelt',
    description: 'A peaceful, artistic visual ballad honoring the tender first days of marriage away from the bustling wedding crowds.',
    categories: ['post-wedding', 'videography'],
    badge: 'POST-WEDDING HARMONY',
    duration: '03:30',
    cover: '/photos/post-wedding/1.jpg',
    gear: 'Vintage Anamorphic Rendering • Atmospheric Mist'
  },
  {
    id: 'post-02',
    driveId: '1djqz-x6a6Z1dJYWXb5Ae0I8NAlIvaEc1',
    title: 'Navya & Sai — Grand Reception Night',
    subtitle: 'Gala Lights, Cocktails & Heartfelt Toasts',
    description: 'Dressed in evening couture under sparkling chandeliers, surrounded by hundreds of rejoicing friends and dignitaries.',
    categories: ['post-wedding', 'wedding', 'videography'],
    badge: 'RECEPTION GALA',
    duration: '02:55',
    cover: '/photos/post-wedding/2.jpg',
    gear: 'Multi-Directional Stage Lighting • 4K Master Audio'
  },
  {
    id: 'post-03',
    driveId: '1e4duNn84_gv8xISs08J7WwBIuBQvNiEO',
    title: 'The Evening Soirée — Reception Teaser',
    subtitle: 'Glamour, Laughter & Midnight Magic',
    description: 'A stylish, fast-paced teaser capturing high energy, glamorous designer wear, and non-stop dance celebrations.',
    categories: ['post-wedding', 'videography'],
    badge: 'EVENING ELEGANCE',
    duration: '02:05',
    cover: '/photos/post-wedding/3.jpg',
    gear: 'Handheld Cinema Motion • Club Light Balance'
  },

  // CEREMONIES & EVENTS
  {
    id: 'event-01',
    driveId: '1DfHOOBBv12e-PFKsZx-4npoSGyQQijN9',
    title: 'Hamsa Sangeet — Rhythm & Making',
    subtitle: 'Behind-the-Scenes & Dance Madness',
    description: 'From lively rehearsals to stage-shaking performances, a full-throttle celebration of music, family joy, and choreographed splendor.',
    categories: ['event', 'wedding', 'videography', 'family'],
    badge: 'SANGEET NIGHT',
    duration: '02:20',
    cover: '/photos/event/1.jpg',
    gear: 'Dynamic 60fps Action • Stage Synchronized Audio'
  },
  {
    id: 'event-02',
    driveId: '1mrRnzDHhjhqpV2F3ZIEJvWVZqXq2iTWl',
    title: 'Prathyusha — Haldi Radiance & Sangeet',
    subtitle: 'Yellow Turmeric Showers & Festive Smiles',
    description: 'Golden hues, playful water splashes, marigold garlands, and the electric beats of sangeet night captured with vibrant saturation.',
    categories: ['event', 'wedding', 'videography', 'family'],
    badge: 'HALDI & SANGEET',
    duration: '02:40',
    cover: '/photos/event/2.jpg',
    gear: 'High Dynamic Range Vivid Colors • Candid Eye Focus'
  },
  {
    id: 'event-03',
    driveId: '1Rpcuaz6gBg7-B3GBgkMxgWUiUf1xGzVf',
    title: 'Mangalasnanam — Sacred Cleansing Rituals',
    subtitle: 'Traditional Turmeric, Sacred Waters & Blessings',
    description: 'An ancient ceremonial bath where holy waters and loving elder hands bestow purity, strength, and blessings before the wedding vows.',
    categories: ['event', 'wedding', 'videography', 'family'],
    badge: 'SACRED TRADITION',
    duration: '02:10',
    cover: '/photos/event/3.jpg',
    gear: 'Ultra-Fast 120fps Water Splash Tracking • Warm Vedic Grade'
  },
  {
    id: 'event-04',
    driveId: '1OOZAYaMTMVeAF24soqgxN-rcNWVf7VMm',
    title: 'Hamsa — Traditional Half Saree Ceremony',
    subtitle: 'A Milestone of Grace & Family Heritage',
    description: 'Preserving the radiant coming-of-age festival with traditional silk langa voni, jasmine blossoms, and the adoration of all generations.',
    categories: ['event', 'family', 'birthday', 'videography'],
    badge: 'HERITAGE CELEBRATION',
    duration: '02:35',
    cover: '/photos/family/1.jpg',
    gear: 'Portrait 85mm f/1.4 • Studio Warm Master Grade'
  }
];

export const getVideosByCategory = (category) => {
  if (!category || category === 'all') return videos;
  return videos.filter((v) => v.categories.includes(category));
};

export const getFeaturedVideos = () => videos.filter((v) => v.featured || v.categories.includes('featured'));
