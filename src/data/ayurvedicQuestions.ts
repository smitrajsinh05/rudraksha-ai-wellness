// Classical Ayurvedic Prakruti Assessment based on Charaka Samhita and Sushruta Samhita

export interface AyurvedicQuestion {
  id: number;
  category: 'physical' | 'mental' | 'physiological' | 'behavioral';
  question: string;
  sanskrit?: string;
  options: { 
    text: string; 
    dosha: "vata" | "pitta" | "kapha";
    weight: number; // Classical importance weight (1-3)
  }[];
}

export const ayurvedicQuestions: AyurvedicQuestion[] = [
  // Physical Characteristics (Sharira Lakshana)
  {
    id: 1,
    category: 'physical',
    question: "What is your natural body frame and structure?",
    sanskrit: "Sharira Samsthana",
    options: [
      { text: "Thin, lean, prominent joints and veins, light frame", dosha: "vata", weight: 3 },
      { text: "Medium build, well-proportioned, moderate muscle development", dosha: "pitta", weight: 3 },
      { text: "Large frame, heavy bones, well-developed muscles, broad shoulders", dosha: "kapha", weight: 3 }
    ]
  },
  {
    id: 2,
    category: 'physical',
    question: "How would you describe your skin texture and appearance?",
    sanskrit: "Tvak Lakshana",
    options: [
      { text: "Dry, rough, thin, cool to touch, prominent veins", dosha: "vata", weight: 2 },
      { text: "Warm, oily, soft, ruddy complexion, prone to rashes", dosha: "pitta", weight: 2 },
      { text: "Thick, smooth, cool, moist, pale or white complexion", dosha: "kapha", weight: 2 }
    ]
  },
  {
    id: 3,
    category: 'physical',
    question: "What is the nature of your hair?",
    sanskrit: "Kesha Prakriti",
    options: [
      { text: "Dry, brittle, kinky, scanty, dark colored", dosha: "vata", weight: 2 },
      { text: "Fine, soft, oily, early graying/balding, reddish or light colored", dosha: "pitta", weight: 2 },
      { text: "Thick, abundant, wavy, lustrous, dark or brown colored", dosha: "kapha", weight: 2 }
    ]
  },
  {
    id: 4,
    category: 'physical',
    question: "How are your eyes naturally?",
    sanskrit: "Netra Svarupa",
    options: [
      { text: "Small, dry, active, dark brown or black, restless", dosha: "vata", weight: 2 },
      { text: "Medium sized, sharp, penetrating, light brown, green or gray", dosha: "pitta", weight: 2 },
      { text: "Large, beautiful, calm, blue or dark colored, thick lashes", dosha: "kapha", weight: 2 }
    ]
  },
  {
    id: 5,
    category: 'physical',
    question: "What is your natural weight tendency?",
    sanskrit: "Bharatva",
    options: [
      { text: "Low weight, difficult to gain weight, lose weight easily", dosha: "vata", weight: 3 },
      { text: "Moderate weight, can gain or lose weight with effort", dosha: "pitta", weight: 3 },
      { text: "Heavy weight, gain weight easily, difficult to lose weight", dosha: "kapha", weight: 3 }
    ]
  },

  // Physiological Functions (Kriya Lakshana)
  {
    id: 6,
    category: 'physiological',
    question: "How is your digestive fire (Agni)?",
    sanskrit: "Agni Bala",
    options: [
      { text: "Variable appetite, irregular digestion, gas and bloating", dosha: "vata", weight: 3 },
      { text: "Strong appetite, sharp digestion, cannot skip meals", dosha: "pitta", weight: 3 },
      { text: "Low appetite, slow digestion, can skip meals easily", dosha: "kapha", weight: 3 }
    ]
  },
  {
    id: 7,
    category: 'physiological',
    question: "What is your natural elimination pattern (Mala Pravritti)?",
    sanskrit: "Mala Pravritti",
    options: [
      { text: "Irregular, dry, hard stools, tendency to constipation", dosha: "vata", weight: 3 },
      { text: "Regular, soft, yellowish stools, loose when upset", dosha: "pitta", weight: 3 },
      { text: "Slow, heavy, well-formed stools, sometimes sluggish", dosha: "kapha", weight: 3 }
    ]
  },
  {
    id: 8,
    category: 'physiological',
    question: "How is your natural perspiration (Sweda)?",
    sanskrit: "Sweda Pravritti",
    options: [
      { text: "Scanty perspiration, no strong odor", dosha: "vata", weight: 2 },
      { text: "Profuse sweating, hot, strong odor", dosha: "pitta", weight: 2 },
      { text: "Moderate perspiration, cool, pleasant smell", dosha: "kapha", weight: 2 }
    ]
  },
  {
    id: 9,
    category: 'physiological',
    question: "What is your sleep pattern (Nidra)?",
    sanskrit: "Nidra Prakriti",
    options: [
      { text: "Light sleep, easily disturbed, 5-6 hours, active dreams", dosha: "vata", weight: 2 },
      { text: "Moderate sleep, 6-8 hours, intense dreams, wake up alert", dosha: "pitta", weight: 2 },
      { text: "Deep sleep, hard to wake up, 8+ hours, few dreams", dosha: "kapha", weight: 2 }
    ]
  },
  {
    id: 10,
    category: 'physiological',
    question: "How is your circulation and body temperature?",
    sanskrit: "Rakta Sanchara",
    options: [
      { text: "Poor circulation, cold hands/feet, prefer warmth", dosha: "vata", weight: 2 },
      { text: "Good circulation, warm body, prefer cool environment", dosha: "pitta", weight: 2 },
      { text: "Steady circulation, normal temperature, adapt to weather", dosha: "kapha", weight: 2 }
    ]
  },

  // Mental Characteristics (Manas Prakriti)
  {
    id: 11,
    category: 'mental',
    question: "How is your mental activity and learning style?",
    sanskrit: "Buddhi Prakriti",
    options: [
      { text: "Quick to learn and forget, restless mind, creative", dosha: "vata", weight: 2 },
      { text: "Sharp intelligence, good memory, focused, analytical", dosha: "pitta", weight: 2 },
      { text: "Slow to learn but good retention, steady mind, methodical", dosha: "kapha", weight: 2 }
    ]
  },
  {
    id: 12,
    category: 'mental',
    question: "How do you typically respond to stress (Chinta)?",
    sanskrit: "Chinta Prakriti",
    options: [
      { text: "Anxiety, worry, fear, nervous excitement", dosha: "vata", weight: 3 },
      { text: "Anger, irritability, criticism, impatience", dosha: "pitta", weight: 3 },
      { text: "Withdrawal, depression, attachment, lethargy", dosha: "kapha", weight: 3 }
    ]
  },
  {
    id: 13,
    category: 'mental',
    question: "What is your natural emotional tendency?",
    sanskrit: "Bhava Prakriti",
    options: [
      { text: "Enthusiastic, changeable, anxious, fearful", dosha: "vata", weight: 2 },
      { text: "Intense, passionate, aggressive, ambitious", dosha: "pitta", weight: 2 },
      { text: "Calm, loving, attached, possessive", dosha: "kapha", weight: 2 }
    ]
  },
  {
    id: 14,
    category: 'mental',
    question: "How is your memory (Smriti)?",
    sanskrit: "Smriti Shakti",
    options: [
      { text: "Quick to grasp but forgets easily, short-term memory better", dosha: "vata", weight: 2 },
      { text: "Sharp memory, good recall, remembers details clearly", dosha: "pitta", weight: 2 },
      { text: "Slow to memorize but once learned, never forgets", dosha: "kapha", weight: 2 }
    ]
  },

  // Behavioral Characteristics (Achara Lakshana)
  {
    id: 15,
    category: 'behavioral',
    question: "How is your speech pattern (Vak Prakriti)?",
    sanskrit: "Vak Svarupa",
    options: [
      { text: "Fast, talkative, changeable topics, enthusiastic", dosha: "vata", weight: 2 },
      { text: "Clear, sharp, penetrating, argumentative, precise", dosha: "pitta", weight: 2 },
      { text: "Slow, steady, pleasant voice, thoughtful speech", dosha: "kapha", weight: 2 }
    ]
  },
  {
    id: 16,
    category: 'behavioral',
    question: "What is your natural activity level (Cheshtita)?",
    sanskrit: "Karma Pravritti",
    options: [
      { text: "Always active, restless, quick movements, multitasking", dosha: "vata", weight: 2 },
      { text: "Moderate activity, focused, goal-oriented, efficient", dosha: "pitta", weight: 2 },
      { text: "Slow, steady, methodical, prefers routine, consistent", dosha: "kapha", weight: 2 }
    ]
  },
  {
    id: 17,
    category: 'behavioral',
    question: "How do you handle money and possessions (Artha Vyaya)?",
    sanskrit: "Dravya Vyavahara",
    options: [
      { text: "Spend impulsively, poor saving habits, generous", dosha: "vata", weight: 1 },
      { text: "Spend on luxury items, calculated purchases, competitive", dosha: "pitta", weight: 1 },
      { text: "Save money, accumulate possessions, careful spending", dosha: "kapha", weight: 1 }
    ]
  },
  {
    id: 18,
    category: 'behavioral',
    question: "What is your natural relationship style (Sangati)?",
    sanskrit: "Sangati Prakriti",
    options: [
      { text: "Many acquaintances, changeable friendships, social butterfly", dosha: "vata", weight: 1 },
      { text: "Selective friends, loyal but intense relationships, leadership", dosha: "pitta", weight: 1 },
      { text: "Few close friends, long-lasting relationships, nurturing", dosha: "kapha", weight: 1 }
    ]
  },
  {
    id: 19,
    category: 'physiological',
    question: "How is your natural strength and endurance (Bala)?",
    sanskrit: "Sharira Bala",
    options: [
      { text: "Low strength, quick fatigue, bursts of energy", dosha: "vata", weight: 3 },
      { text: "Moderate strength, good stamina when motivated", dosha: "pitta", weight: 3 },
      { text: "High strength, excellent endurance, steady energy", dosha: "kapha", weight: 3 }
    ]
  },
  {
    id: 20,
    category: 'behavioral',
    question: "What weather do you naturally prefer (Ritu Ruci)?",
    sanskrit: "Prakriti Anukula Kala",
    options: [
      { text: "Warm, humid, still weather; dislike cold and wind", dosha: "vata", weight: 2 },
      { text: "Cool, dry weather; dislike heat and sun", dosha: "pitta", weight: 2 },
      { text: "Warm, dry weather; dislike cold and damp", dosha: "kapha", weight: 2 }
    ]
  }
];

// Classical Dosha Descriptions from Ayurvedic Texts
export const doshaDescriptions = {
  vata: {
    name: "Vata Prakriti",
    sanskrit: "वात प्रकृति",
    element: "Air + Space (Vayu + Akasha)",
    qualities: "Ruksha (Dry), Laghu (Light), Chala (Mobile), Vishada (Clear), Khara (Rough), Sheeta (Cold)",
    characteristics: "Vata governs all movement in the body including breathing, circulation, and nervous system function. People with Vata constitution are naturally creative, enthusiastic, and energetic but can become anxious and scattered when imbalanced.",
    classical_reference: "As described in Charaka Samhita Vimana Sthana 8/96"
  },
  pitta: {
    name: "Pitta Prakriti", 
    sanskrit: "पित्त प्रकृति",
    element: "Fire + Water (Agni + Jala)",
    qualities: "Ushna (Hot), Tikshna (Sharp), Drava (Liquid), Amla (Sour), Katu (Pungent), Sara (Flowing)",
    characteristics: "Pitta governs digestion, metabolism, and transformation in the body. People with Pitta constitution are naturally intelligent, focused, and ambitious but can become angry and critical when imbalanced.",
    classical_reference: "As described in Charaka Samhita Vimana Sthana 8/97"
  },
  kapha: {
    name: "Kapha Prakriti",
    sanskrit: "कफ प्रकृति", 
    element: "Water + Earth (Jala + Prithvi)",
    qualities: "Snigdha (Oily), Guru (Heavy), Sthira (Stable), Madhura (Sweet), Picchila (Sticky), Manda (Slow)",
    characteristics: "Kapha governs structure, immunity, and stability in the body. People with Kapha constitution are naturally calm, loving, and steady but can become lethargic and possessive when imbalanced.",
    classical_reference: "As described in Charaka Samhita Vimana Sthana 8/98"
  }
};