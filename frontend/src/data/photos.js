export const themePhoto = (theme, index = 1) => `/photos/${theme}/${index}.jpg`;

export const hideOnError = (event) => {
  event.currentTarget.style.display = 'none';
};

// Complete curated catalogue of authentic Sai Krishna Photography shoots
export const portfolioItems = [
  // WEDDINGS
  {
    id: 1,
    src: '/photos/optimized/photo_01.jpg',
    thumb: '/photos/thumbs/thumb_01.jpg',
    category: 'wedding',
    label: 'Wedding',
    discipline: 'ROYAL WEDDING CINEMATOGRAPHY',
    title: 'The Grand Mandapam Vows',
    description: 'A timeless union captured amidst regal floral architecture and radiant golden chandeliers. Every glance and sacred ritual documented with uncompromising emotional fidelity.',
    inclusions: ['Sony Alpha A7IV 4K Full-Frame RAW', 'Dual Off-Camera Ambient Lighting', 'Color Graded Fine-Art Master', 'Signature Archival Retouching']
  },
  {
    id: 2,
    src: '/photos/optimized/photo_02.jpg',
    thumb: '/photos/thumbs/thumb_02.jpg',
    category: 'wedding',
    label: 'Wedding',
    discipline: 'BRIDAL CHRONICLES',
    title: 'Opulent Bridal Splendor',
    description: 'An intimate bridal portrait illuminating intricate heritage silk, diamond jewels, and the serene aura of a momentous day beginning.',
    inclusions: ['G Master 85mm f/1.4 Portrait Lens', 'Delicate Directional Softbox Fill', 'True-to-Skin Tone Calibration', 'Luxury Heirlooms Edition']
  },
  {
    id: 3,
    src: '/photos/optimized/photo_05.jpg',
    thumb: '/photos/thumbs/thumb_05.jpg',
    category: 'wedding',
    label: 'Wedding',
    discipline: 'MANDAPAM ARCHITECTURE',
    title: 'Sacred Muhurtham Moments',
    description: 'Breathtaking perspective of the ceremonial pavilion during the auspicious muhurtham hour, bathed in sacred chants and fragrant blossoms.',
    inclusions: ['Ultra-Wide 24mm Perspective', 'High Dynamic Range Scene Balance', 'Candid Documentary Framing', 'Master Silk Print Ready']
  },
  {
    id: 4,
    src: '/photos/optimized/photo_07.jpg',
    thumb: '/photos/thumbs/thumb_07.jpg',
    category: 'wedding',
    label: 'Wedding',
    discipline: 'TRADITIONAL RITUALS',
    title: 'Saptapadi & Eternal Promises',
    description: 'Documenting the timeless seven vows around the sacred fire, capturing the warmth, reverence, and unscripted joy between souls.',
    inclusions: ['Silent Electronic Shutter Capture', 'Warm Ambient Flame Grading', 'Candid Emotion Precision', 'Custom Leather Album Inclusion']
  },
  {
    id: 5,
    src: '/photos/optimized/photo_08.jpg',
    thumb: '/photos/thumbs/thumb_08.jpg',
    category: 'wedding',
    label: 'Wedding',
    discipline: 'CELEBRATION & CHEER',
    title: 'Garland Exchange Euphoria',
    description: 'The electrifying culmination of the Varmala ceremony surrounded by cascading petals, cheers of family, and golden celebration showers.',
    inclusions: ['High-Speed 10fps Burst Action', 'Low-Light ISO Dynamic Control', 'Multi-Angle Coverage Team', 'Cinematic Highlight Master']
  },

  // PRE-WEDDING
  {
    id: 6,
    src: '/photos/optimized/photo_20.jpg',
    thumb: '/photos/thumbs/thumb_20.jpg',
    category: 'pre-wedding',
    label: 'Pre-Wedding',
    discipline: 'DESTINATION ROMANCE',
    title: 'Whispering Winds & Golden Hour',
    description: 'Airy, editorial pre-wedding portraits choreographed against sweeping landscape horizons under the soft glow of dusk.',
    inclusions: ['Natural Sun-Flare Optical Artistry', 'Styling & Wardrobe Motion Guidance', 'Mood-Toned Cinematic Film Look', 'Ultra-Res Framed Wall Canvas']
  },
  {
    id: 7,
    src: '/photos/optimized/photo_21.jpg',
    thumb: '/photos/thumbs/thumb_21.jpg',
    category: 'pre-wedding',
    label: 'Pre-Wedding',
    discipline: 'CONTEMPORARY LOVE STORY',
    title: 'Intimate Coastal Solitude',
    description: 'Unforced, candid connection framed in minimalistic nature, celebrating the quiet laughter and shared dreams of a couple embarking on forever.',
    inclusions: ['Prime 50mm f/1.2 Shallow Bokeh', 'Gentle Atmospheric Grading', 'Documentary Lifestyle Direction', 'Digital Love Teaser Integration']
  },
  {
    id: 8,
    src: '/photos/optimized/photo_22.jpg',
    thumb: '/photos/thumbs/thumb_22.jpg',
    category: 'pre-wedding',
    label: 'Pre-Wedding',
    discipline: 'CINEMATIC PANORAMA',
    title: 'The Horizon Embrace',
    description: 'Wide cinematic framing that balances breathtaking scenic grandeur with the tender intimacy of two hearts united.',
    inclusions: ['Sweeping Composition Geometry', 'Polarized Sunset Sky Contrast', 'Archival Fine-Art Paper Master', 'High-Res Presentation Suite']
  },
  {
    id: 9,
    src: '/photos/optimized/photo_15.jpg',
    thumb: '/photos/thumbs/thumb_15.jpg',
    category: 'pre-wedding',
    label: 'Pre-Wedding',
    discipline: 'TWILIGHT ROMANCE',
    title: 'Golden Silhouette Promenade',
    description: 'Romantic stroll captured during the fleeting blue-and-gold magic hour, blending poetic shadows with luminous backlight.',
    inclusions: ['Dual Color Temperature Balancing', 'Ethereal Rim Lighting Technique', 'Unscripted Motion Moments', 'Full-Resolution Master Suite']
  },

  // POST-WEDDING
  {
    id: 10,
    src: '/photos/optimized/photo_16.jpg',
    thumb: '/photos/thumbs/thumb_16.jpg',
    category: 'post-wedding',
    label: 'Post-Wedding',
    discipline: 'NEW BEGINNINGS',
    title: 'Serene Afterglow Portraits',
    description: 'Relaxed and reflective post-wedding session where the rush of ceremonies gives way to effortless romance and quiet contentment.',
    inclusions: ['Editorial Fashion Lighting Grid', 'Calm Unhurried Pacing', 'Signature Matte-Luster Finish', 'Heirloom Folio Presentation']
  },
  {
    id: 11,
    src: '/photos/optimized/photo_17.jpg',
    thumb: '/photos/thumbs/thumb_17.jpg',
    category: 'post-wedding',
    label: 'Post-Wedding',
    discipline: 'RECEPTION NOCTURNE',
    title: 'Midnight Elegance & Revelry',
    description: 'High-contrast evening glamour showcasing couture evening wear and the celebratory spirit of the reception gala.',
    inclusions: ['Creative Off-Camera Rim Strobe', 'Deep Midnight Color Grade', 'Glamour Retouch Precision', 'Large-Format Gallery Master']
  },
  {
    id: 12,
    src: '/photos/optimized/photo_18.jpg',
    thumb: '/photos/thumbs/thumb_18.jpg',
    category: 'post-wedding',
    label: 'Post-Wedding',
    discipline: 'MODERN COUPLE PORTFOLIO',
    title: 'Under the Starlit Canopy',
    description: 'Artistic composition blending modern architectural lines with intimate couple portraiture under warm fairy lights.',
    inclusions: ['Atmospheric Bokeh Rendering', '35mm Street-Style Storytelling', 'True Black Contrast Preservation', 'Editorial Lookbook Curation']
  },
  {
    id: 13,
    src: '/photos/optimized/photo_19.jpg',
    thumb: '/photos/thumbs/thumb_19.jpg',
    category: 'post-wedding',
    label: 'Post-Wedding',
    discipline: 'EDITORIAL ROMANCE',
    title: 'First Dance Symphony',
    description: 'Capturing the cadence and emotion of the newlyweds’ inaugural dance, enveloped in soft mist and cinematic spotlights.',
    inclusions: ['Dynamic Low-Light Tracking', 'Motion-Blur Artistry', 'Stage Flare Optimization', 'High-Res Digital Heirlooms']
  },

  // MATERNITY
  {
    id: 14,
    src: '/photos/optimized/photo_28.jpg',
    thumb: '/photos/thumbs/thumb_28.jpg',
    category: 'maternity',
    label: 'Maternity',
    discipline: 'MATERNAL ELEGANCE',
    title: 'The Miracle of Anticipation',
    description: 'Tender, ethereal portraits honoring mother and the unborn child, crafted with gentle diffuse lighting and peaceful grace.',
    inclusions: ['Soft Wrap-Around Feather Light', 'Comfort-First Studio Pacing', 'Gentle Pastel Tone Gradients', 'Fine-Art Maternity Album']
  },
  {
    id: 15,
    src: '/photos/optimized/photo_29.jpg',
    thumb: '/photos/thumbs/thumb_29.jpg',
    category: 'maternity',
    label: 'Maternity',
    discipline: 'GOLDEN MATERNITY',
    title: 'Radiant Life in Bloom',
    description: 'Celebration of motherhood in golden outdoor light, capturing the serene joy and heartfelt strength of this sacred chapter.',
    inclusions: ['Golden Hour Backlit Radiance', 'Couple & Bump Bonding Moments', 'Soft-Focus Fine Glass', 'Archival Cotton Rag Prints']
  },
  {
    id: 16,
    src: '/photos/optimized/photo_30.jpg',
    thumb: '/photos/thumbs/thumb_30.jpg',
    category: 'maternity',
    label: 'Maternity',
    discipline: 'STUDIO INTIMACY',
    title: 'Sculpted Shadows & Tenderness',
    description: 'Minimalist, sculpted monochrome-inspired lighting that accentuates the sacred curves of new life with timeless reverence.',
    inclusions: ['Controlled Single-Light Silhouette', 'High-Key Velvet Textures', 'Private Studio Session', 'Signature Wall Piece Art']
  },

  // FAMILY
  {
    id: 17,
    src: '/photos/optimized/photo_31.jpg',
    thumb: '/photos/thumbs/thumb_31.jpg',
    category: 'family',
    label: 'Family',
    discipline: 'GENERATIONAL LEGACY',
    title: 'Three Generations United',
    description: 'Preserving the wisdom of grandparents, the joy of parents, and the wonder of youth together in one harmonious portrait.',
    inclusions: ['Wide Dynamic Range Depth', 'Authentic Unposed Interactions', 'Family Tree Heirloom Framing', 'Ultra-Res Silk Group Print']
  },
  {
    id: 18,
    src: '/photos/optimized/photo_32.jpg',
    thumb: '/photos/thumbs/thumb_32.jpg',
    category: 'family',
    label: 'Family',
    discipline: 'CANDID HOMECOMING',
    title: 'Laughter Across the Table',
    description: 'Unrehearsed warmth and joyous storytelling, documenting real family bonds that will be treasured for decades.',
    inclusions: ['Documentary Home Session Style', 'Natural Window Light Balance', 'Zero-Intrusion Photography', 'Custom Keepsake Album']
  },
  {
    id: 19,
    src: '/photos/optimized/photo_33.jpg',
    thumb: '/photos/thumbs/thumb_33.jpg',
    category: 'family',
    label: 'Family',
    discipline: 'HERITAGE PORTRAIT',
    title: 'Pillars of the Ancestry',
    description: 'A stately yet soulful tribute to family roots, honoring traditions passed down through generations.',
    inclusions: ['Classic Formal Group Setup', 'Even Lighting Distribution', 'Rich Velvet Color Grading', 'Generational Canvas Master']
  },
  {
    id: 20,
    src: '/photos/optimized/photo_34.jpg',
    thumb: '/photos/thumbs/thumb_34.jpg',
    category: 'family',
    label: 'Family',
    discipline: 'SIBLING CHRONICLES',
    title: 'Joyful Childhood Companionship',
    description: 'Capturing innocent laughter, playful mischief, and the inseparable bond of siblings growing together.',
    inclusions: ['Fast Shutter Action Freeze', 'Vibrant Natural Color Palette', 'Child-Friendly Direction', 'Playful Keepsake Folio']
  },

  // BIRTHDAY
  {
    id: 21,
    src: '/photos/optimized/photo_25.jpg',
    thumb: '/photos/thumbs/thumb_25.jpg',
    category: 'birthday',
    label: 'Birthday',
    discipline: 'MILESTONE CELEBRATIONS',
    title: 'First Year of Wonder',
    description: 'Vibrant and heartwarming documentation of precious first-year milestones, cake smashes, and tiny footsteps of joy.',
    inclusions: ['Safe & Gentle Studio Flash', 'Non-Toxic Set Preparation', 'Burst Mode Candid Smiles', 'Mini Keepsake Accordion Book']
  },
  {
    id: 22,
    src: '/photos/optimized/photo_26.jpg',
    thumb: '/photos/thumbs/thumb_26.jpg',
    category: 'birthday',
    label: 'Birthday',
    discipline: 'CHILDHOOD WHIMSY',
    title: 'Candlelight & Dreams',
    description: 'The wide-eyed wonder of blowing out birthday candles surrounded by loving cheers and colorful confetti showers.',
    inclusions: ['Low-Light Flame Ambiance', 'Fast Prime 35mm Lens', 'Vibrant Color Pop Master', 'Digital Celebration Reel']
  },
  {
    id: 23,
    src: '/photos/optimized/photo_27.jpg',
    thumb: '/photos/thumbs/thumb_27.jpg',
    category: 'birthday',
    label: 'Birthday',
    discipline: 'FESTIVE REVELRY',
    title: 'Golden Milestone Jubilee',
    description: 'A grand jubilee celebration commemorating decades of accomplishments, surrounded by lifelong friends and family.',
    inclusions: ['High-Energy Multi-Flash Rig', 'Live Guest Red Carpet Snaps', 'Speedy Highlight Delivery', 'Commemorative Guest Album']
  },

  // STUDIO
  {
    id: 24,
    src: '/photos/optimized/photo_23.jpg',
    thumb: '/photos/thumbs/thumb_23.jpg',
    category: 'studio',
    label: 'Studio',
    discipline: 'EDITORIAL PORTRAITURE',
    title: 'Precision in Light & Shadow',
    description: 'Clean, controlled high-fashion portraiture with calibrated Profoto studio lighting and razor-sharp optic precision.',
    inclusions: ['Profoto Softbox & Grid Modifiers', 'High-Res Medium-Format Look', 'Master Retouching Workflow', 'Commercial Agency Delivery']
  },
  {
    id: 25,
    src: '/photos/optimized/photo_24.jpg',
    thumb: '/photos/thumbs/thumb_24.jpg',
    category: 'studio',
    label: 'Studio',
    discipline: 'CLASSIC EXECUTIVE',
    title: 'The Sovereign Gaze',
    description: 'Sophisticated executive and artistic headshots reflecting poise, charisma, and undeniable authority.',
    inclusions: ['Rembrandt Studio Light Pattern', 'Calibrated Color Accuracy', 'Professional Skin Sculpting', 'LinkedIn & Press Ready Pack']
  },
  {
    id: 26,
    src: '/photos/optimized/photo_06.jpg',
    thumb: '/photos/thumbs/thumb_06.jpg',
    category: 'studio',
    label: 'Studio',
    discipline: 'FINE ART DRAPERY',
    title: 'Traditional Studio Grandeur',
    description: 'Rich velvet backdrops highlighting traditional Indian couture with dramatic rim lighting and deep jewel tones.',
    inclusions: ['Jewelry Detail Micro-Contrast', 'Deep Velvety Shadow Rolloff', 'Signature Golden Tone Tint', 'Archival Museum Canvas']
  },

  // DRONE
  {
    id: 27,
    src: '/photos/optimized/photo_11.jpg',
    thumb: '/photos/thumbs/thumb_11.jpg',
    category: 'drone',
    label: 'Drone',
    discipline: 'AERIAL ARCHITECTURE',
    title: 'The Palace from the Heavens',
    description: 'Breathtaking 4K drone cinematography capturing the majestic sprawling architecture of palatial wedding venues.',
    inclusions: ['DJI Pro Cinema 4K Aerial Sensor', 'Hasselblad Color Science Engine', 'Licensed Commercial Pilot', '4K Aerial B-Roll Reel']
  },
  {
    id: 28,
    src: '/photos/optimized/photo_14.jpg',
    thumb: '/photos/thumbs/thumb_14.jpg',
    category: 'drone',
    label: 'Drone',
    discipline: 'BIRD’S EYE REVELRY',
    title: 'Baraat Procession from Above',
    description: 'Vibrant birds-eye vantage of the grand baraat procession pulsing with drums, colored smoke, and royal vintage cars.',
    inclusions: ['Dynamic Tracking Gimbal Stabilizer', 'ND Filter Motion Blur Tuning', 'Sweeping Orbit Flight Paths', 'Full 48MP Aerial Stills']
  },
  {
    id: 29,
    src: '/photos/optimized/photo_22.jpg',
    thumb: '/photos/thumbs/thumb_22.jpg',
    category: 'drone',
    label: 'Drone',
    discipline: 'LANDSCAPE REVEAL',
    title: 'Nature’s Grand Tapestry',
    description: 'Dramatic landscape pull-back revealing the intimate couple framed by grand hills, tranquil waters, and endless sky.',
    inclusions: ['Wide 20mm Cinema Perspective', 'Hyperlapse Cloud Movement', 'Color Matched Ground/Air Blend', 'Fine Art Panoramic Canvas']
  },

  // COMMERCIAL
  {
    id: 30,
    src: '/photos/optimized/photo_35.jpg',
    thumb: '/photos/thumbs/thumb_35.jpg',
    category: 'commercial',
    label: 'Commercial',
    discipline: 'BRAND CAMPAIGN',
    title: 'Luxury Retail & Craftsmanship',
    description: 'Flawless product and jewelry lighting engineered to elevate brand prestige and drive commercial conversion.',
    inclusions: ['Focus Stacking Razor Sharpness', 'Polarized Glare Elimination', 'Color Managed CMYK Calibration', 'Multi-Channel Ad License']
  },
  {
    id: 31,
    src: '/photos/optimized/photo_36.jpg',
    thumb: '/photos/thumbs/thumb_36.jpg',
    category: 'commercial',
    label: 'Commercial',
    discipline: 'ARCHITECTURAL SPACES',
    title: 'Spaces of Distinction',
    description: 'Crisp, perspective-corrected architectural photography capturing interior textures, ambient warmth, and structural geometry.',
    inclusions: ['Tilt-Shift Perspective Control', 'Ambient & Flash Composite Merge', 'Interior Editorial Standard', 'Full Print Publication Rights']
  },
  {
    id: 32,
    src: '/photos/optimized/photo_04.jpg',
    thumb: '/photos/thumbs/thumb_04.jpg',
    category: 'commercial',
    label: 'Commercial',
    discipline: 'FASHION LOOKBOOK',
    title: 'Haute Couture Textures',
    description: 'Highlighting the rich weaves of pure zari, hand-embroidery, and silhouette flow for elite bridal fashion houses.',
    inclusions: ['Macro Fabric Texture Fidelity', 'Runway-Calibrated Color Match', 'Model Direction & Posing', 'Lookbook Catalog Masters']
  },

  // EVENT
  {
    id: 33,
    src: '/photos/optimized/photo_09.jpg',
    thumb: '/photos/thumbs/thumb_09.jpg',
    category: 'event',
    label: 'Event',
    discipline: 'CEREMONIAL HERITAGE',
    title: 'Sacred Rituals & Blessings',
    description: 'Reverent documentation of auspicious ceremonies, sacred homams, and the tender blessings showered by family elders.',
    inclusions: ['Available Light Sensitivity', 'Respectful Candid Framing', 'Cultural Context Preservation', 'Full Day Event Archive']
  },
  {
    id: 34,
    src: '/photos/optimized/photo_10.jpg',
    thumb: '/photos/thumbs/thumb_10.jpg',
    category: 'event',
    label: 'Event',
    discipline: 'AUSPICIOUS DAWN',
    title: 'Mangalasnanam Sacred Glow',
    description: 'The golden hues of haldi, aromatic waters, and pure laughter celebrating ancient auspicious morning purification rites.',
    inclusions: ['High Speed Water Splash Freeze', 'Rich Golden Turmeric Palette', 'Candid Family Smiles', 'Custom Wooden Box Album']
  },
  {
    id: 35,
    src: '/photos/optimized/photo_12.jpg',
    thumb: '/photos/thumbs/thumb_12.jpg',
    category: 'event',
    label: 'Event',
    discipline: 'HALDI FESTIVAL',
    title: 'Sunlit Joy & Golden Sprays',
    description: 'Dynamic explosion of marigold petals, playful water splashes, and uninhibited festive euphoria with loved ones.',
    inclusions: ['Weather-Sealed Pro Bodies', 'Action Shot Composition', 'Joyful Color Vibrancy', 'Highlight Social Teaser']
  },
  {
    id: 36,
    src: '/photos/optimized/photo_13.jpg',
    thumb: '/photos/thumbs/thumb_13.jpg',
    category: 'event',
    label: 'Event',
    discipline: 'SANGEET EXTRAVAGANZA',
    title: 'Rhythms of the Night',
    description: 'Stage pyrotechnics, pulsating choreography, and high-octane musical performances frozen in spectacular clarity.',
    inclusions: ['Stage Light Color Synchronization', 'Dynamic Low-Angle Motion Tracking', 'Crowd Reaction Storytelling', 'Cinematic Concert Edit']
  },

  // VIDEOGRAPHY
  {
    id: 37,
    src: '/photos/optimized/photo_37.jpg',
    thumb: '/photos/thumbs/thumb_37.jpg',
    category: 'videography',
    label: 'Videography',
    discipline: 'FILMIC CINEMATOGRAPHY',
    title: 'Cinema in Motion',
    description: 'Crafted with cinematic 24fps film cadence, anamorphic lens flares, and bespoke original music scoring.',
    inclusions: ['4K 10-bit 4:2:2 Color Science', 'Gimbal & Steadicam Sweeps', 'Multi-Track Spatial Audio', 'Full Wedding Feature Film']
  },
  {
    id: 38,
    src: '/photos/optimized/photo_38.jpg',
    thumb: '/photos/thumbs/thumb_38.jpg',
    category: 'videography',
    label: 'Videography',
    discipline: 'DOCUMENTARY TEASER',
    title: 'The Director’s Cut',
    description: 'Emotional, punchy 3-minute teaser cut that weaves spoken vows, crescendo music, and intimate gazes into pure movie magic.',
    inclusions: ['Hollywood Color Grading Suite', 'Custom Sound Design & Foley', 'Fast Turnaround Social Cut', '4K Master Archival Drive']
  },
  {
    id: 39,
    src: '/photos/optimized/photo_39.jpg',
    thumb: '/photos/thumbs/thumb_39.jpg',
    category: 'videography',
    label: 'Videography',
    discipline: 'AERIAL CINEMATIC',
    title: 'Symphony from Above',
    description: 'Seamless integration of sweeping aerial drone cinematography with ground gimbal moves for an epic cinematic narrative.',
    inclusions: ['Dual Operator Drone & Gimbal', 'Log Profile Wide Dynamic Range', 'Master 4K Delivery', 'Heirloom Keepsake Presentation']
  }
];

// Helper to get photos by category
export const getPhotosByCategory = (category) => {
  if (!category || category === 'all') return portfolioItems;
  return portfolioItems.filter(p => p.category === category);
};

// Legacy flat array for backward compatibility
export const portfolioImages = portfolioItems.map(p => p.src);