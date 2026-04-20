// Reading passages — built from Dylan's vocab with Jenna
// Each passage: { id, title, level, text (Korean), translation (English), questions: [{q, options, correct}] }

const PASSAGES = [

  // ── BEGINNER (lessons 1-20) ──────────────────

  {
    id: 'p01',
    level: 'beginner',
    title: '주말 계획',
    text: `이번 주말에 친구를 만나려고 해요. 친구는 집순이라서 보통 집에 있어요. 하지만 날씨가 좋으면 같이 공원에 가요. 공원에서 산책하고 커피도 마셔요. 저는 이번 주말이 기대돼요.`,
    translation: `This weekend I'm planning to meet a friend. My friend is a homebody, so they're usually at home. But if the weather is nice, we go to the park together. We take a walk and drink coffee at the park. I'm looking forward to this weekend.`,
    questions: [
      { q: "Where do they go when the weather is nice?", options: ["A café", "The park", "A restaurant", "Home"], correct: "The park" },
      { q: "What does 집순이 mean?", options: ["Night owl", "Morning person", "Homebody (female)", "Hard worker"], correct: "Homebody (female)" },
      { q: "How does the writer feel about the weekend?", options: ["Nervous", "Bored", "Looking forward to it", "Worried"], correct: "Looking forward to it" },
    ]
  },

  {
    id: 'p02',
    level: 'beginner',
    title: '오늘 기분',
    text: `오늘 많이 피곤해요. 어제 밤에 뒤척뒤척했어요. 아침에 일어나자마자 커피를 마셨어요. 지금은 조금 괜찮아요. 오늘 저녁에는 일찍 자려고 해요.`,
    translation: `I'm very tired today. Last night I was tossing and turning. As soon as I woke up in the morning, I drank coffee. Now I feel a little okay. This evening I'm planning to sleep early.`,
    questions: [
      { q: "Why is the writer tired?", options: ["They worked late", "They were tossing and turning", "They forgot to sleep", "They drank too much coffee"], correct: "They were tossing and turning" },
      { q: "What did they do as soon as they woke up?", options: ["Exercised", "Ate breakfast", "Drank coffee", "Checked their phone"], correct: "Drank coffee" },
      { q: "What are they planning for this evening?", options: ["Meet a friend", "Watch a movie", "Sleep early", "Study Korean"], correct: "Sleep early" },
    ]
  },

  {
    id: 'p03',
    level: 'beginner',
    title: '날씨와 계절',
    text: `저는 봄을 제일 좋아해요. 날씨가 따뜻하고 꽃이 많이 피어요. 여름은 너무 더워요. 가을은 선선하고 경치가 아름다워요. 겨울은 쌀쌀해서 별로 안 좋아해요.`,
    translation: `I like spring the most. The weather is warm and many flowers bloom. Summer is too hot. Autumn is cool and the scenery is beautiful. I don't really like winter because it's chilly.`,
    questions: [
      { q: "Which season does the writer like most?", options: ["Summer", "Autumn", "Winter", "Spring"], correct: "Spring" },
      { q: "Why don't they like winter?", options: ["Too much rain", "Too chilly", "Too cloudy", "Too dark"], correct: "Too chilly" },
      { q: "How is autumn described?", options: ["Warm and rainy", "Hot and dry", "Cool with beautiful scenery", "Cold and cloudy"], correct: "Cool with beautiful scenery" },
    ]
  },

  // ── INTERMEDIATE (lessons 21-44) ────────────

  {
    id: 'p04',
    level: 'intermediate',
    title: '건강 관리',
    text: `요즘 건강에 관심이 많아요. 유산소 운동을 일주일에 세 번 하려고 해요. 음식도 신경 써요. 단백질을 충분히 먹고 탄수화물은 줄이고 있어요. 건강한 생활을 유지하는 게 쉽지 않지만 중요해요.`,
    translation: `These days I'm very interested in health. I'm trying to do cardio exercise three times a week. I'm also paying attention to food. I'm eating enough protein and reducing carbohydrates. It's not easy to maintain a healthy lifestyle, but it's important.`,
    questions: [
      { q: "How often does the writer plan to do cardio?", options: ["Every day", "Twice a week", "Three times a week", "Once a week"], correct: "Three times a week" },
      { q: "What are they reducing in their diet?", options: ["Protein", "Vegetables", "Carbohydrates", "Water"], correct: "Carbohydrates" },
      { q: "How does the writer describe maintaining a healthy lifestyle?", options: ["Easy and fun", "Not easy but important", "Boring", "Very expensive"], correct: "Not easy but important" },
    ]
  },

  {
    id: 'p05',
    level: 'intermediate',
    title: '직장 생활',
    text: `새 직업을 찾고 있어요. 지금 회사는 월급이 괜찮지만 워라벨이 별로예요. 출퇴근 시간도 너무 길어요. 장단점을 생각해 봤어요. 결국 더 좋은 기회를 찾기로 했어요.`,
    translation: `I'm looking for a new job. The salary at my current company is okay, but the work-life balance isn't great. The commute is also too long. I've thought about the pros and cons. In the end, I decided to look for a better opportunity.`,
    questions: [
      { q: "What is okay about the current job?", options: ["Work-life balance", "Commute", "Salary", "The boss"], correct: "Salary" },
      { q: "What does 워라벨 mean?", options: ["Overtime pay", "Work-life balance", "Commute time", "Office location"], correct: "Work-life balance" },
      { q: "What did the writer decide to do?", options: ["Stay at their job", "Ask for a raise", "Look for a better opportunity", "Start their own business"], correct: "Look for a better opportunity" },
    ]
  },

  {
    id: 'p06',
    level: 'intermediate',
    title: '사진 취미',
    text: `저는 흑백사진 찍는 걸 좋아해요. 좋은 사진을 찍기 위해서 천천히 기다려요. 빛과 경치가 중요해요. 필름 카메라를 써요. 현상소에 맡기는 게 번거롭지만 결과가 독특해요.`,
    translation: `I like taking black-and-white photos. I wait patiently in order to take a good photo. Light and scenery are important. I use a film camera. Having it developed at a lab is inconvenient, but the results are unique.`,
    questions: [
      { q: "What type of photos does the writer like?", options: ["Portrait photos", "Black-and-white photos", "Landscape only", "Digital photos"], correct: "Black-and-white photos" },
      { q: "What does the writer use to take photos?", options: ["Smartphone", "Digital camera", "Film camera", "Instant camera"], correct: "Film camera" },
      { q: "How does the writer describe getting film developed?", options: ["Quick and easy", "Cheap", "Inconvenient but unique results", "Always perfect"], correct: "Inconvenient but unique results" },
    ]
  },

  // ── ADVANCED (lessons 56+) ───────────────────

  {
    id: 'p07',
    level: 'advanced',
    title: '감정과 이성',
    text: `사람들은 감정적으로 결정할 때가 많아요. 이성적으로 생각하는 게 항상 쉽지 않아요. 기대가 높으면 실망도 커요. 상황에 따라 감정을 조절하는 게 중요해요. 자신감이 있으면 어려운 상황에서도 더 잘 대처할 수 있어요.`,
    translation: `People often make decisions emotionally. It's not always easy to think rationally. The higher the expectations, the greater the disappointment. It's important to manage your emotions depending on the situation. If you have confidence, you can handle difficult situations better.`,
    questions: [
      { q: "What does the passage say about high expectations?", options: ["They lead to success", "They lead to greater disappointment", "They are always good", "They should be avoided"], correct: "They lead to greater disappointment" },
      { q: "What helps you handle difficult situations better?", options: ["Being emotional", "Having confidence", "Ignoring problems", "Asking for help"], correct: "Having confidence" },
      { q: "What is described as 'not always easy'?", options: ["Being emotional", "Having high expectations", "Thinking rationally", "Making decisions"], correct: "Thinking rationally" },
    ]
  },

  {
    id: 'p08',
    level: 'advanced',
    title: '여행과 문화 충격',
    text: `처음 한국에 왔을 때 문화 충격을 받았어요. 성격 차이뿐만 아니라 생활 방식도 달랐어요. 시간이 지나면서 점점 익숙해졌어요. 지금은 한국 생활이 아주 편해요. 외국에서 살면서 더 열린 마음을 갖게 됐어요.`,
    translation: `When I first came to Korea, I experienced culture shock. Not only personality differences but also lifestyle was different. As time passed, I gradually got used to it. Now Korean life is very comfortable for me. Living abroad, I've come to have a more open mind.`,
    questions: [
      { q: "What did the writer experience when they first came to Korea?", options: ["Happiness immediately", "Culture shock", "Language barriers only", "No difficulties"], correct: "Culture shock" },
      { q: "What changed as time passed?", options: ["They left Korea", "They got used to Korean life", "They missed home more", "They stopped learning Korean"], correct: "They got used to Korean life" },
      { q: "What did living abroad help them develop?", options: ["A new job", "More open mind", "Better cooking skills", "Financial success"], correct: "More open mind" },
    ]
  },

  {
    id: 'p09',
    level: 'advanced',
    title: '충고하기',
    text: `친구가 요즘 너무 스트레스를 많이 받고 있어요. 제 생각에는 먼저 충분히 쉬는 게 좋을 것 같아요. 나라면 잠깐 모든 걸 내려놓겠어요. 걱정을 많이 하면 몸에도 안 좋아요. 이성적으로 생각하면 해결책을 찾을 수 있어요.`,
    translation: `My friend is under too much stress these days. In my opinion, I think it would be good to rest properly first. If I were them, I would put everything down for a moment. Worrying a lot is also bad for your health. If you think rationally, you can find a solution.`,
    questions: [
      { q: "What does the writer suggest their friend do first?", options: ["Exercise more", "Rest properly", "Change jobs", "Talk to a doctor"], correct: "Rest properly" },
      { q: "What grammar pattern is 나라면 잠깐 모든 걸 내려놓겠어요 an example of?", options: ["나라면 -(으)겠어요", "-아/어야 해요", "-자마자", "-는 게 좋을 것 같아요"], correct: "나라면 -(으)겠어요" },
      { q: "What does the writer say worrying a lot affects?", options: ["Work performance", "Relationships", "Health", "Finances"], correct: "Health" },
    ]
  },

  {
    id: 'p10',
    level: 'advanced',
    title: '언어 학습',
    text: `한국어를 배운 지 꽤 됐어요. 처음에는 발음이 어려웠어요. 꾸준히 공부하다 보니 점점 늘었어요. 선생님과 매주 수업하는 게 가장 도움이 돼요. 언어를 배우면서 문화도 함께 이해하게 됐어요.`,
    translation: `It's been quite a while since I started learning Korean. At first, pronunciation was difficult. As I kept studying consistently, I gradually improved. Having weekly lessons with a teacher is the most helpful. While learning the language, I've also come to understand the culture.`,
    questions: [
      { q: "What was difficult at first?", options: ["Grammar", "Writing", "Pronunciation", "Vocabulary"], correct: "Pronunciation" },
      { q: "What does the writer find most helpful?", options: ["Watching dramas", "Reading books", "Weekly lessons with a teacher", "Using an app"], correct: "Weekly lessons with a teacher" },
      { q: "What has learning the language helped them understand?", options: ["History", "Culture", "Politics", "Business"], correct: "Culture" },
    ]
  },

];

// ── Diary prompts ────────────────────────────
// Each: { topic, grammar, hint (English), vocabCats }

const DIARY_PROMPTS = [
  { topic: "오늘 기분이 어때요?", english: "How are you feeling today?", grammar: "-아/어서 (because/so)", hint: "Try to explain why you feel that way.", vocabCats: ["Emotions","Mood"] },
  { topic: "이번 주에 뭐 했어요?", english: "What did you do this week?", grammar: "-았/었어요 (past tense)", hint: "Describe 2-3 things you did.", vocabCats: ["Daily Life","Verbs"] },
  { topic: "좋아하는 계절은 뭐예요?", english: "What is your favourite season?", grammar: "-(으)면 (if/when)", hint: "Explain what you like to do in that season.", vocabCats: ["Seasons","Weather"] },
  { topic: "요즘 어떤 목표가 있어요?", english: "What goals do you have these days?", grammar: "-(으)려고 해요 (planning to)", hint: "Share one personal or professional goal.", vocabCats: ["Abstract","Work"] },
  { topic: "가장 스트레스 받을 때가 언제예요?", english: "When do you get most stressed?", grammar: "-(으)ㄹ 때 (when)", hint: "Describe a situation that stresses you out.", vocabCats: ["Emotions","Daily Life"] },
  { topic: "한국어를 왜 배우고 있어요?", english: "Why are you learning Korean?", grammar: "-기 위해서 (in order to)", hint: "Give one or two reasons.", vocabCats: ["Abstract","Conversation"] },
  { topic: "가장 좋아하는 음식은 뭐예요?", english: "What is your favourite food?", grammar: "A보다 B를 선호해요 (I prefer B over A)", hint: "Compare two foods you like.", vocabCats: ["Food"] },
  { topic: "친구에게 조언을 해주세요.", english: "Give some advice to a friend.", grammar: "-는 게 좋을 것 같아요 (I think it would be good to)", hint: "Imagine a friend is stressed or unhappy.", vocabCats: ["Conversation","Emotions"] },
  { topic: "오늘 날씨가 어때요?", english: "What is the weather like today?", grammar: "-아/어지다 (becoming/getting)", hint: "Describe how the weather has been changing.", vocabCats: ["Weather","Seasons"] },
  { topic: "지금 어떤 감정을 느끼고 있어요?", english: "What emotions are you feeling right now?", grammar: "-고 있어요 (currently doing)", hint: "Be honest — describe 2-3 feelings.", vocabCats: ["Emotions","감(感) Family"] },
  { topic: "이번 주말에 뭐 할 거예요?", english: "What will you do this weekend?", grammar: "-(으)ㄹ 거예요 (going to/will)", hint: "Make at least 3 plans.", vocabCats: ["Time","Travel"] },
  { topic: "학교에서 무슨 일이 있었어요?", english: "What happened at school?", grammar: "-아/어 버렸어요 (ended up doing)", hint: "Describe something unexpected that happened.", vocabCats: ["School","Daily Life"] },
  { topic: "건강을 위해 뭘 해요?", english: "What do you do for your health?", grammar: "-기 위해서 (in order to)", hint: "Describe your health habits.", vocabCats: ["Health","Sports"] },
  { topic: "가장 기억에 남는 여행은 뭐예요?", english: "What is your most memorable trip?", grammar: "-ㄴ/은 적 있어요 (have ever done)", hint: "Describe where you went and what you did.", vocabCats: ["Travel","Places"] },
];
