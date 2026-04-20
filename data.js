// ─────────────────────────────────────────
//  Dylan's Korean — vocab & grammar data
//  Edit this file to add new lessons.
//  Format: {k, e, cat, conj?, note?, lesson}
// ─────────────────────────────────────────

const VOCAB = [
  // Emotions & Feelings
  {k:"신나요",e:"excited / thrilling",cat:"Emotions",lesson:41},
  {k:"기대하고 있어요",e:"I'm looking forward to it",cat:"Emotions",lesson:41},
  {k:"긴장해요",e:"I'm nervous",cat:"Emotions",lesson:41},
  {k:"걱정해요",e:"I'm worried",cat:"Emotions",lesson:41},
  {k:"슬프다",e:"to be sad",cat:"Emotions",conj:"슬퍼요",note:"ㅂ irregular",lesson:41},
  {k:"슬픔",e:"sadness",cat:"Emotions",lesson:41},
  {k:"기쁘다",e:"to be happy",cat:"Emotions",conj:"기뻐요",note:"ㅂ irregular",lesson:41},
  {k:"기쁨",e:"joy",cat:"Emotions",lesson:41},
  {k:"질투",e:"jealousy",cat:"Emotions",lesson:41},
  {k:"부러워요",e:"I'm envious",cat:"Emotions",lesson:41},
  {k:"존경",e:"respect",cat:"Emotions",lesson:41},
  {k:"실망하다",e:"to be disappointed",cat:"Emotions",conj:"실망해요",lesson:41},
  {k:"흥분하다",e:"to get excited",cat:"Emotions",conj:"흥분해요",lesson:41},
  {k:"외롭다",e:"to be lonely",cat:"Emotions",conj:"외로워요",note:"ㅂ irregular",lesson:41},
  {k:"혼자이다",e:"to be alone",cat:"Emotions",conj:"혼자예요",lesson:41},
  {k:"탓하다",e:"to blame",cat:"Emotions",conj:"탓해요",lesson:41},
  {k:"불평하다",e:"to complain",cat:"Emotions",conj:"불평해요",lesson:41},
  {k:"우울하다",e:"to be depressed",cat:"Emotions",conj:"우울해요",lesson:41},
  {k:"우울해져요",e:"becoming depressed",cat:"Emotions",lesson:41},
  {k:"신경 안 써요",e:"I don't care",cat:"Emotions",lesson:41},
  {k:"남을 의식하다",e:"to be conscious of others",cat:"Emotions",conj:"남을 의식해요",lesson:41},
  {k:"부끄러워요",e:"I'm embarrassed",cat:"Emotions",lesson:41},
  {k:"심각하다",e:"serious",cat:"Emotions",conj:"심각해요",lesson:41},
  {k:"긍정적",e:"positive",cat:"Emotions",lesson:41},
  {k:"부정적",e:"negative",cat:"Emotions",lesson:41},
  {k:"만족",e:"satisfaction",cat:"Emotions",lesson:41},
  {k:"기대",e:"expectation",cat:"Emotions",lesson:41},
  {k:"평화적",e:"peaceful",cat:"Emotions",lesson:41},
  {k:"자신감",e:"confidence",cat:"Emotions",lesson:41},
  {k:"궁금했어요",e:"I was curious",cat:"Emotions",lesson:41},
  {k:"궁금해요",e:"I'm curious",cat:"Emotions",lesson:41},
  {k:"질렸어요",e:"I'm sick of it",cat:"Emotions",lesson:41},
  {k:"지긋지긋해요",e:"I'm really fed up",cat:"Emotions",lesson:41},
  {k:"지쳤어요",e:"I'm exhausted",cat:"Emotions",lesson:41},
  {k:"설레요",e:"heart flutters / excited (romantic)",cat:"Emotions",lesson:41},
  {k:"짜증나게 하다",e:"to annoy",cat:"Emotions",conj:"짜증나게 해요",lesson:41},
  {k:"패닉하다",e:"to panic",cat:"Emotions",conj:"패닉해요",lesson:41},
  {k:"멍청해요",e:"dumb / foolish",cat:"Emotions",lesson:41},
  {k:"깨닫다",e:"to realize",cat:"Emotions",conj:"깨달아요",note:"ㄷ irregular",lesson:41},
  {k:"순수하다",e:"to be pure",cat:"Emotions",conj:"순수해요",lesson:41},
  {k:"아깝다",e:"what a waste / too bad",cat:"Emotions",conj:"아까워요",note:"ㅂ irregular",lesson:41},
  {k:"개운하다",e:"refreshed / feeling clean",cat:"Emotions",conj:"개운해요",lesson:41},
  {k:"피곤하다",e:"to be tired",cat:"Emotions",conj:"피곤해요",lesson:41},
  {k:"배부르다",e:"to be full",cat:"Emotions",conj:"배불러요",note:"르 irregular",lesson:41},
  {k:"심심하다",e:"to be bored",cat:"Emotions",conj:"심심해요",lesson:41},
  {k:"독특해요",e:"unique",cat:"Emotions",lesson:41},
  // 감 Family
  {k:"감",e:"feeling / sense / intuition",cat:"감(感) Family",lesson:41},
  {k:"감동",e:"being emotionally moved",cat:"감(感) Family",lesson:41},
  {k:"감동했어요",e:"I was moved",cat:"감(感) Family",lesson:41},
  {k:"감명",e:"deep impression",cat:"감(感) Family",lesson:41},
  {k:"공감",e:"empathy",cat:"감(感) Family",lesson:41},
  {k:"공감할 수 없어요",e:"I can't empathize",cat:"감(感) Family",lesson:41},
  {k:"동감",e:"agreement",cat:"감(感) Family",lesson:41},
  {k:"동감해요",e:"I agree",cat:"감(感) Family",lesson:41},
  {k:"민감",e:"sensitive",cat:"감(感) Family",lesson:41},
  {k:"감정",e:"emotion",cat:"감(感) Family",lesson:41},
  {k:"감정적",e:"emotional",cat:"감(感) Family",lesson:41},
  {k:"이성적",e:"rational / logical",cat:"감(感) Family",lesson:41},
  {k:"실감",e:"vivid realization",cat:"감(感) Family",lesson:41},
  {k:"예감",e:"premonition / intuition",cat:"감(感) Family",lesson:41},
  // Personality
  {k:"성격",e:"personality",cat:"Personality",lesson:41},
  {k:"성격 차이",e:"personality difference",cat:"Personality",lesson:41},
  {k:"외모",e:"appearance",cat:"Personality",lesson:41},
  {k:"닮다",e:"to resemble",cat:"Personality",conj:"닮아요",lesson:41},
  {k:"집돌이",e:"homebody (male)",cat:"Personality",lesson:41},
  {k:"집순이",e:"homebody (female)",cat:"Personality",lesson:41},
  {k:"이상형",e:"ideal type",cat:"Personality",lesson:41},
  {k:"눈 높아요",e:"has high standards",cat:"Personality",lesson:41},
  {k:"부지런하다",e:"to be diligent",cat:"Personality",conj:"부지런해요",lesson:41},
  {k:"게으르다",e:"to be lazy",cat:"Personality",conj:"게을러요",note:"르 irregular",lesson:41},
  {k:"짠순이",e:"frugal woman",cat:"Personality",lesson:41},
  {k:"짠돌이",e:"frugal man",cat:"Personality",lesson:41},
  {k:"야행성",e:"night owl",cat:"Personality",lesson:41},
  {k:"아침형",e:"morning person",cat:"Personality",lesson:41},
  {k:"가면 증후군",e:"imposter syndrome",cat:"Personality",lesson:41},
  // Daily Life
  {k:"집안일",e:"housework",cat:"Daily Life",lesson:41},
  {k:"설거지하다",e:"to do the dishes",cat:"Daily Life",conj:"설거지해요",lesson:41},
  {k:"청소하다",e:"to clean",cat:"Daily Life",conj:"청소해요",lesson:41},
  {k:"빨래하다",e:"to do laundry",cat:"Daily Life",conj:"빨래해요",lesson:41},
  {k:"홈트",e:"home training (exercise at home)",cat:"Daily Life",lesson:41},
  {k:"푹 자다",e:"to sleep deeply",cat:"Daily Life",conj:"푹 자요",lesson:41},
  {k:"뒤척뒤척하다",e:"to toss and turn",cat:"Daily Life",conj:"뒤척뒤척해요",lesson:41},
  {k:"일상",e:"daily life",cat:"Daily Life",lesson:41},
  {k:"아점",e:"brunch",cat:"Daily Life",lesson:41},
  {k:"간식",e:"snack",cat:"Daily Life",lesson:41},
  {k:"원두",e:"coffee beans",cat:"Daily Life",lesson:41},
  {k:"이력서",e:"résumé",cat:"Daily Life",lesson:41},
  {k:"면접",e:"interview",cat:"Daily Life",lesson:41},
  {k:"방콕하다",e:"to stay home / hole up inside",cat:"Daily Life",conj:"방콕해요",lesson:41},
  {k:"평소하고 같아요",e:"same as usual",cat:"Daily Life",lesson:41},
  {k:"말도 안 돼요",e:"that makes no sense",cat:"Daily Life",lesson:41},
  {k:"힘든 하루예요",e:"it's a hard day",cat:"Daily Life",lesson:41},
  // Health
  {k:"독감",e:"flu",cat:"Health",lesson:41},
  {k:"감기",e:"cold",cat:"Health",lesson:41},
  {k:"증상",e:"symptom",cat:"Health",lesson:41},
  {k:"열 나요",e:"I have a fever",cat:"Health",lesson:41},
  {k:"기침 나요",e:"I'm coughing",cat:"Health",lesson:41},
  {k:"재채기 나요",e:"I'm sneezing",cat:"Health",lesson:41},
  {k:"콧물 나요",e:"I have a runny nose",cat:"Health",lesson:41},
  {k:"코 막혔어요",e:"my nose is stuffed",cat:"Health",lesson:41},
  {k:"몸살 나요",e:"I have body aches",cat:"Health",lesson:41},
  {k:"백신",e:"vaccine",cat:"Health",lesson:41},
  {k:"주사 맞았어요",e:"I got a shot",cat:"Health",lesson:41},
  {k:"링거",e:"IV drip",cat:"Health",lesson:41},
  {k:"빨리 나으세요",e:"get well soon",cat:"Health",lesson:41},
  {k:"물리치료",e:"physical therapy",cat:"Health",lesson:41},
  {k:"통증",e:"pain",cat:"Health",lesson:41},
  {k:"근육",e:"muscle",cat:"Health",lesson:41},
  {k:"유산소 운동",e:"cardio exercise",cat:"Health",lesson:41},
  {k:"수술",e:"surgery",cat:"Health",lesson:41},
  {k:"숙취",e:"hangover",cat:"Health",lesson:41},
  {k:"술 취하다",e:"to get drunk",cat:"Health",conj:"술 취해요",lesson:41},
  {k:"끊다",e:"to quit (drinking/smoking)",cat:"Health",conj:"끊어요",lesson:41},
  {k:"식중독",e:"food poisoning",cat:"Health",lesson:41},
  {k:"토하다",e:"to vomit",cat:"Health",conj:"토해요",lesson:41},
  {k:"설사",e:"diarrhea",cat:"Health",lesson:41},
  // Sports
  {k:"금메달 따다",e:"to win a gold medal",cat:"Sports",conj:"금메달 따요",lesson:41},
  {k:"금 / 은 / 동",e:"gold / silver / bronze",cat:"Sports",lesson:41},
  {k:"올림픽 선수",e:"Olympic athlete",cat:"Sports",lesson:41},
  {k:"결승전",e:"final match",cat:"Sports",lesson:41},
  {k:"역전",e:"comeback / reversal",cat:"Sports",lesson:41},
  {k:"연장전",e:"overtime",cat:"Sports",lesson:41},
  {k:"아슬아슬하다",e:"nail-biting / barely",cat:"Sports",conj:"아슬아슬해요",lesson:41},
  {k:"이겼어요",e:"we won",cat:"Sports",lesson:41},
  {k:"졌어요",e:"we lost",cat:"Sports",lesson:41},
  {k:"비겼어요",e:"it was a tie",cat:"Sports",lesson:41},
  {k:"투수",e:"pitcher",cat:"Sports",lesson:41},
  {k:"포수",e:"catcher",cat:"Sports",lesson:41},
  {k:"타자",e:"batter",cat:"Sports",lesson:41},
  {k:"선수",e:"athlete / player",cat:"Sports",lesson:41},
  // Food
  {k:"맛집",e:"famous restaurant",cat:"Food",lesson:41},
  {k:"미식가",e:"food connoisseur / gourmet",cat:"Food",lesson:41},
  {k:"생선 구이",e:"grilled fish",cat:"Food",lesson:41},
  {k:"땡겨요",e:"I'm craving it",cat:"Food",lesson:41},
  {k:"충분해요",e:"enough / sufficient",cat:"Food",lesson:41},
  {k:"기름",e:"oil",cat:"Food",lesson:41},
  {k:"야채",e:"vegetables",cat:"Food",lesson:41},
  {k:"참치",e:"tuna",cat:"Food",lesson:41},
  {k:"단백질",e:"protein",cat:"Food",lesson:41},
  {k:"디저트",e:"dessert",cat:"Food",lesson:41},
  // Travel
  {k:"봄방학",e:"spring break",cat:"Travel",lesson:41},
  {k:"연휴",e:"long weekend / holiday break",cat:"Travel",lesson:41},
  {k:"휴가",e:"vacation",cat:"Travel",lesson:41},
  {k:"왕복",e:"round trip",cat:"Travel",lesson:41},
  {k:"공항",e:"airport",cat:"Travel",lesson:41},
  {k:"비행",e:"flight",cat:"Travel",lesson:41},
  {k:"자전거 여행",e:"bicycle trip",cat:"Travel",lesson:41},
  {k:"자전거 도로",e:"bike path",cat:"Travel",lesson:41},
  {k:"가볍게 짐 싸다",e:"pack lightly",cat:"Travel",conj:"가볍게 짐 싸요",lesson:41},
  {k:"탐험",e:"exploration",cat:"Travel",lesson:41},
  {k:"경험",e:"experience",cat:"Travel",lesson:41},
  {k:"독특한 장소",e:"unique place",cat:"Travel",lesson:41},
  // Time
  {k:"얼마나 자주",e:"how often",cat:"Time",lesson:41},
  {k:"하루에 한 번",e:"once a day",cat:"Time",lesson:41},
  {k:"일주일에 두 번",e:"twice a week",cat:"Time",lesson:41},
  {k:"한 달에 세 번",e:"three times a month",cat:"Time",lesson:41},
  {k:"일주일에 한두 번",e:"once or twice a week",cat:"Time",lesson:41},
  {k:"이틀에 한 번",e:"once every two days",cat:"Time",lesson:41},
  {k:"언젠가",e:"someday",cat:"Time",lesson:41},
  {k:"어딘가",e:"somewhere",cat:"Time",lesson:41},
  {k:"일년 내내",e:"all year round",cat:"Time",lesson:41},
  {k:"평일",e:"weekday",cat:"Time",lesson:41},
  {k:"불금",e:"TGIF / Fire Friday",cat:"Time",lesson:41},
  {k:"오래전에",e:"a long time ago",cat:"Time",lesson:41},
  {k:"오랫동안",e:"for a long time",cat:"Time",lesson:41},
  {k:"오랜만에",e:"after a long time",cat:"Time",lesson:41},
  {k:"곧",e:"soon",cat:"Time",lesson:41},
  {k:"최근에",e:"recently",cat:"Time",lesson:41},
  // Work
  {k:"근무시간",e:"working hours",cat:"Work",lesson:41},
  {k:"월급",e:"salary",cat:"Work",lesson:41},
  {k:"경쟁",e:"competition",cat:"Work",lesson:41},
  {k:"경쟁적",e:"competitive",cat:"Work",lesson:41},
  {k:"장점",e:"advantage / strength",cat:"Work",lesson:41},
  {k:"단점",e:"disadvantage / weakness",cat:"Work",lesson:41},
  {k:"장단점",e:"pros and cons",cat:"Work",lesson:41},
  {k:"그만두다",e:"to quit",cat:"Work",conj:"그만둬요",note:"ㅜ contraction",lesson:41},
  {k:"계약",e:"contract",cat:"Work",lesson:41},
  {k:"상사",e:"boss",cat:"Work",lesson:41},
  {k:"퇴직하다",e:"to retire",cat:"Work",conj:"퇴직해요",lesson:41},
  {k:"워라벨",e:"work-life balance",cat:"Work",lesson:41},
  {k:"일 중독",e:"workaholic",cat:"Work",lesson:41},
  {k:"생산적인",e:"productive",cat:"Work",lesson:41},
  {k:"출퇴근 시간",e:"commute time",cat:"Work",lesson:41},
  // School
  {k:"교실",e:"classroom",cat:"School",lesson:41},
  {k:"교장 선생님",e:"principal",cat:"School",lesson:41},
  {k:"담임",e:"homeroom teacher",cat:"School",lesson:41},
  {k:"과목",e:"subject",cat:"School",lesson:41},
  {k:"학기말 시험",e:"end-of-term exam",cat:"School",lesson:41},
  {k:"시험 치다",e:"to take an exam",cat:"School",conj:"시험 쳐요",note:"이+어 contraction",lesson:41},
  {k:"성적",e:"grades",cat:"School",lesson:41},
  {k:"부서",e:"department",cat:"School",lesson:41},
  {k:"책임",e:"responsibility",cat:"School",lesson:41},
  {k:"새학기",e:"new semester",cat:"School",lesson:41},
  {k:"남녀공학",e:"co-ed school",cat:"School",lesson:41},
  // Politics
  {k:"대통령",e:"president",cat:"Politics",lesson:41},
  {k:"수도",e:"capital city",cat:"Politics",lesson:41},
  {k:"국회",e:"national assembly / parliament",cat:"Politics",lesson:41},
  {k:"정치",e:"politics",cat:"Politics",lesson:41},
  {k:"경제",e:"economy",cat:"Politics",lesson:41},
  {k:"관세",e:"tariff",cat:"Politics",lesson:41},
  {k:"세금",e:"tax",cat:"Politics",lesson:41},
  {k:"투자",e:"investment",cat:"Politics",lesson:41},
  {k:"주식",e:"stocks",cat:"Politics",lesson:41},
  {k:"사회",e:"society",cat:"Politics",lesson:41},
  {k:"문화",e:"culture",cat:"Politics",lesson:41},
  {k:"역사",e:"history",cat:"Politics",lesson:41},
  {k:"인구",e:"population",cat:"Politics",lesson:41},
  {k:"부동산",e:"real estate",cat:"Politics",lesson:41},
  {k:"찬성하다",e:"to agree / support",cat:"Politics",conj:"찬성해요",lesson:41},
  {k:"반대하다",e:"to oppose",cat:"Politics",conj:"반대해요",lesson:41},
  {k:"전쟁",e:"war",cat:"Politics",lesson:41},
  {k:"기후 변화",e:"climate change",cat:"Politics",lesson:41},
  // Arts
  {k:"예술",e:"art",cat:"Arts",lesson:41},
  {k:"예술가",e:"artist",cat:"Arts",lesson:41},
  {k:"독립 영화",e:"independent film",cat:"Arts",lesson:41},
  {k:"단편 영화",e:"short film",cat:"Arts",lesson:41},
  {k:"배우",e:"actor",cat:"Arts",lesson:41},
  {k:"연기",e:"acting",cat:"Arts",lesson:41},
  {k:"소설",e:"novel",cat:"Arts",lesson:41},
  {k:"영감",e:"inspiration",cat:"Arts",lesson:41},
  {k:"작품",e:"work of art",cat:"Arts",lesson:41},
  {k:"흑백사진",e:"black-and-white photo",cat:"Arts",lesson:41},
  {k:"현상하다",e:"to develop (film)",cat:"Arts",conj:"현상해요",lesson:41},
  {k:"영화관",e:"movie theater",cat:"Arts",lesson:41},
  {k:"가사",e:"lyrics",cat:"Arts",lesson:41},
  // Nature
  {k:"자연",e:"nature",cat:"Nature",lesson:41},
  {k:"경치",e:"scenery",cat:"Nature",lesson:41},
  {k:"우주",e:"space / universe",cat:"Nature",lesson:41},
  {k:"별",e:"star",cat:"Nature",lesson:41},
  {k:"사막",e:"desert",cat:"Nature",lesson:41},
  {k:"계곡",e:"valley",cat:"Nature",lesson:41},
  {k:"정상",e:"summit",cat:"Nature",lesson:41},
  {k:"습도",e:"humidity",cat:"Nature",lesson:41},
  {k:"건조해요",e:"it's dry",cat:"Nature",lesson:41},
  {k:"흐렸어요",e:"it was cloudy",cat:"Nature",lesson:41},
  {k:"바다",e:"ocean",cat:"Nature",lesson:41},
  // Conversation
  {k:"그렇게 생각해요",e:"I think so",cat:"Conversation",lesson:41},
  {k:"그렇게 생각 안 해요",e:"I don't think so",cat:"Conversation",lesson:41},
  {k:"그러기 바래요",e:"I hope so",cat:"Conversation",lesson:41},
  {k:"안 그러기 바래요",e:"I hope not",cat:"Conversation",lesson:41},
  {k:"익숙해졌어요",e:"I got used to it",cat:"Conversation",lesson:41},
  {k:"잘 지내",e:"take care / stay well",cat:"Conversation",lesson:41},
  {k:"당연하지",e:"of course",cat:"Conversation",lesson:41},
  {k:"내 잘못이야",e:"it's my fault",cat:"Conversation",lesson:41},
  {k:"요약하자면",e:"in summary",cat:"Conversation",lesson:41},
  {k:"확실히",e:"definitely",cat:"Conversation",lesson:41},
  {k:"왠지",e:"somehow / for some reason",cat:"Conversation",lesson:41},
  {k:"내 말이",e:"exactly / that's what I mean",cat:"Conversation",lesson:41},
  {k:"그러니까",e:"so / therefore",cat:"Conversation",lesson:41},
  {k:"결국",e:"eventually / in the end",cat:"Conversation",lesson:41},
  {k:"특히",e:"especially",cat:"Conversation",lesson:41},
  {k:"어쨌든",e:"anyway",cat:"Conversation",lesson:41},
  {k:"두 말하면 잔소리예요",e:"it goes without saying",cat:"Conversation",lesson:41},
  {k:"삼천포로 빠지다",e:"to go off topic",cat:"Conversation",conj:"삼천포로 빠져요",lesson:41},
  // Intensifiers
  {k:"훨씬",e:"much / far more",cat:"Intensifiers",lesson:41},
  {k:"거의",e:"almost",cat:"Intensifiers",lesson:41},
  {k:"별로",e:"not really (negative nuance)",cat:"Intensifiers",lesson:41},
  {k:"전혀",e:"not at all",cat:"Intensifiers",lesson:41},
  {k:"꽤",e:"quite / fairly",cat:"Intensifiers",lesson:41},
  {k:"약간",e:"a little / slightly",cat:"Intensifiers",lesson:41},
  // Verbs
  {k:"이사하다",e:"to move (houses)",cat:"Verbs",conj:"이사해요",lesson:41},
  {k:"정하다",e:"to decide",cat:"Verbs",conj:"정해요",lesson:41},
  {k:"찾다",e:"to find / look for",cat:"Verbs",conj:"찾아요",lesson:41},
  {k:"바꾸다",e:"to change",cat:"Verbs",conj:"바꿔요",note:"ㅜ contraction",lesson:41},
  {k:"서두르다",e:"to hurry",cat:"Verbs",conj:"서둘러요",note:"르 irregular",lesson:41},
  {k:"출발하다",e:"to depart",cat:"Verbs",conj:"출발해요",lesson:41},
  {k:"도착하다",e:"to arrive",cat:"Verbs",conj:"도착해요",lesson:41},
  {k:"연락하다",e:"to contact",cat:"Verbs",conj:"연락해요",lesson:41},
  {k:"고치다",e:"to fix",cat:"Verbs",conj:"고쳐요",note:"이+어 contraction",lesson:41},
  {k:"입양하다",e:"to adopt",cat:"Verbs",conj:"입양해요",lesson:41},
  {k:"연기하다",e:"to postpone",cat:"Verbs",conj:"연기해요",lesson:41},
  {k:"취소하다",e:"to cancel",cat:"Verbs",conj:"취소해요",lesson:41},
  {k:"팔다",e:"to sell",cat:"Verbs",conj:"팔아요",lesson:41},
  {k:"모아요",e:"to collect",cat:"Verbs",lesson:41},
  {k:"버려요",e:"to throw away",cat:"Verbs",lesson:41},
  {k:"계속하다",e:"to continue",cat:"Verbs",conj:"계속해요",lesson:41},
  {k:"낭비하다",e:"to waste",cat:"Verbs",conj:"낭비해요",lesson:41},
  {k:"챙기다",e:"to take care of / make sure to get",cat:"Verbs",conj:"챙겨요",note:"이+어 contraction",lesson:41},
  {k:"연결하다",e:"to connect",cat:"Verbs",conj:"연결해요",lesson:41},
  {k:"알아내다",e:"to find out",cat:"Verbs",conj:"알아내요",lesson:41},
  {k:"회복하다",e:"to recover",cat:"Verbs",conj:"회복해요",lesson:41},
  {k:"통제하다",e:"to control",cat:"Verbs",conj:"통제해요",lesson:41},
  {k:"존중하다",e:"to respect",cat:"Verbs",conj:"존중해요",lesson:41},
  {k:"포기하다",e:"to give up",cat:"Verbs",conj:"포기해요",lesson:41},
  {k:"사랑에 빠지다",e:"to fall in love",cat:"Verbs",conj:"사랑에 빠져요",lesson:41},
  {k:"헤어졌어요",e:"broke up",cat:"Verbs",lesson:41},
  // Abstract
  {k:"통계",e:"statistics",cat:"Abstract",lesson:41},
  {k:"연구",e:"research",cat:"Abstract",lesson:41},
  {k:"이유",e:"reason",cat:"Abstract",lesson:41},
  {k:"운명",e:"fate / destiny",cat:"Abstract",lesson:41},
  {k:"목표",e:"goal",cat:"Abstract",lesson:41},
  {k:"목적",e:"purpose",cat:"Abstract",lesson:41},
  {k:"논문",e:"thesis / dissertation",cat:"Abstract",lesson:41},
  {k:"비결",e:"secret / key to success",cat:"Abstract",lesson:41},
  {k:"비밀",e:"secret",cat:"Abstract",lesson:41},
  {k:"공통점",e:"common point",cat:"Abstract",lesson:41},
  {k:"유사점",e:"similarity",cat:"Abstract",lesson:41},
  {k:"차이점",e:"difference",cat:"Abstract",lesson:41},

  // ── CLASS 001 — Feelings & Mood ──
  {k:"오늘 기분 어때요?",e:"How is your mood today?",cat:"Mood",lesson:1},
  {k:"좋아요",e:"good",cat:"Mood",lesson:1},
  {k:"괜찮아요",e:"okay",cat:"Mood",lesson:1},
  {k:"그저그래요",e:"so-so",cat:"Mood",lesson:1},
  {k:"안 좋아요",e:"not good",cat:"Mood",lesson:1},
  {k:"힘들어요",e:"difficult / hard / tough",cat:"Mood",lesson:1},
  {k:"아파요",e:"sick / hurt / painful",cat:"Mood",lesson:1},
  {k:"바빠요",e:"busy",cat:"Mood",lesson:1},
  {k:"화나요",e:"mad / angry",cat:"Mood",lesson:1},
  {k:"짜증나요",e:"annoying / irritating",cat:"Mood",lesson:1},
  {k:"답답해요",e:"frustrating / suffocating feeling",cat:"Mood",lesson:1},

  // ── CLASS 001 — How Often ──
  {k:"항상",e:"always",cat:"Frequency",lesson:1},
  {k:"보통",e:"usually",cat:"Frequency",lesson:1},
  {k:"자주",e:"often",cat:"Frequency",lesson:1},
  {k:"가끔",e:"sometimes",cat:"Frequency",lesson:1},
  {k:"거의 안",e:"seldom / hardly",cat:"Frequency",lesson:1},
  {k:"절대로 안",e:"never",cat:"Frequency",lesson:1},

  // ── CLASS 001 — Transitions ──
  {k:"하고",e:"and (nouns)",cat:"Transitions",lesson:1},
  {k:"이/랑",e:"and (nouns, casual)",cat:"Transitions",lesson:1},
  {k:"그리고",e:"and (connecting sentences/verbs)",cat:"Transitions",lesson:1},
  {k:"그래서",e:"so / therefore",cat:"Transitions",lesson:1},
  {k:"그러면",e:"then / in that case",cat:"Transitions",lesson:1},
  {k:"하지만",e:"but",cat:"Transitions",lesson:1},
  {k:"왜냐하면",e:"because",cat:"Transitions",lesson:1},

  // ── CLASS 001 — Vocab ──
  {k:"어제",e:"yesterday",cat:"Time",lesson:1},
  {k:"드디어",e:"finally",cat:"Conversation",lesson:1},
  {k:"사진작가",e:"photo artist / photographer",cat:"Arts",lesson:1},
  {k:"방학",e:"school vacation",cat:"School",lesson:1},
  {k:"많이",e:"many / a lot",cat:"Intensifiers",lesson:1},
  {k:"가족",e:"family",cat:"People",lesson:1},
  {k:"동료",e:"coworker / colleague",cat:"Work",lesson:1},
  {k:"추천해요",e:"recommend",cat:"Conversation",lesson:1},
  {k:"무슨",e:"what kind of",cat:"Conversation",lesson:1},

  // ── CLASS 002 — Weather ──
  {k:"비",e:"rain",cat:"Weather",lesson:2},
  {k:"눈",e:"snow",cat:"Weather",lesson:2},
  {k:"맑아요",e:"sunny / clear",cat:"Weather",lesson:2},
  {k:"흐려요",e:"overcast / cloudy",cat:"Weather",lesson:2},
  {k:"습도 높아요",e:"the humidity is high / humid",cat:"Weather",lesson:2},
  {k:"찐득해요",e:"sticky / muggy",cat:"Weather",lesson:2},

  // ── CLASS 002 — Transportation ──
  {k:"차",e:"car",cat:"Transport",lesson:2},
  {k:"지하철",e:"subway",cat:"Transport",lesson:2},

  // ── CLASS 002 — Comparisons ──
  {k:"같아요",e:"same",cat:"Comparison",lesson:2},
  {k:"달라요",e:"different",cat:"Comparison",lesson:2},

  // ── CLASS 002 — Expressions ──
  {k:"시간 빨리 가요",e:"time goes fast",cat:"Expressions",lesson:2},
  {k:"시간 천천히 가요",e:"time goes slow",cat:"Expressions",lesson:2},
  {k:"특별한 거 없어요",e:"nothing special",cat:"Expressions",lesson:2},
  {k:"평소 하고 같아요",e:"same old same old",cat:"Expressions",lesson:2},
  {k:"대단하다",e:"awesome / amazing",cat:"Expressions",conj:"대단해요",lesson:2},
  {k:"그냥",e:"just / simply",cat:"Conversation",lesson:2},
  {k:"있는 그대로",e:"the way it is / as is",cat:"Expressions",lesson:2},
  {k:"사실은",e:"actually / in fact",cat:"Conversation",lesson:2},
  {k:"부러워요",e:"I'm jealous / envious",cat:"Emotions",lesson:2},
  {k:"죽겠다",e:"...that I'm dying (hyperbole)",cat:"Expressions",lesson:2},

  // ── CLASS 002 — Time ──
  {k:"주말",e:"weekend",cat:"Time",lesson:2},
  {k:"학기",e:"semester",cat:"School",lesson:2},
  {k:"이번",e:"this (time/week/month)",cat:"Time",lesson:2},
  {k:"지난",e:"last (time period)",cat:"Time",lesson:2},
  {k:"다음",e:"next",cat:"Time",lesson:2},

  // ── CLASS 002 — Food ──
  {k:"음식",e:"food",cat:"Food",lesson:2},
  {k:"아침",e:"breakfast / morning",cat:"Food",lesson:2},
  {k:"점심",e:"lunch / afternoon",cat:"Food",lesson:2},
  {k:"저녁",e:"dinner / evening",cat:"Food",lesson:2},
  {k:"건강한",e:"healthy",cat:"Food",lesson:2},
  {k:"해물",e:"seafood",cat:"Food",lesson:2},
  {k:"물고기",e:"fish",cat:"Food",lesson:2},

  // ── CLASS 002 — Intensifiers ──
  {k:"엄청",e:"super / extremely / very much",cat:"Intensifiers",lesson:2},
  {k:"제일",e:"most / number one",cat:"Intensifiers",lesson:2},
  {k:"다",e:"all / everything",cat:"Intensifiers",lesson:2},
  {k:"진짜",e:"really / truly",cat:"Intensifiers",lesson:2},

  // ── CLASS 002 — Vocab ──
  {k:"질문",e:"question",cat:"Abstract",lesson:2},
  {k:"문제",e:"problem",cat:"Abstract",lesson:2},
  {k:"고향",e:"hometown",cat:"People",lesson:2},

  // ── CLASS 003 — Sick ──
  {k:"감기 걸렸어요?",e:"Did you catch a cold?",cat:"Health",lesson:3},
  {k:"걸렸어요",e:"caught (an illness)",cat:"Health",lesson:3},

  // ── CLASS 003 — Countries ──
  {k:"나라",e:"country",cat:"Places",lesson:3},
  {k:"인도",e:"India",cat:"Places",lesson:3},
  {k:"독일",e:"Germany",cat:"Places",lesson:3},
  {k:"태국",e:"Thailand",cat:"Places",lesson:3},

  // ── CLASS 003 — Location Particles ──
  {k:"에",e:"to (place) / at (place) / on (time)",cat:"Grammar Particles",lesson:3},
  {k:"에서",e:"from / at (place where action happens)",cat:"Grammar Particles",lesson:3},

  // ── CLASS 003 — Sleep/Wake Up ──
  {k:"밤",e:"night",cat:"Time",lesson:3},
  {k:"어제 밤",e:"last night",cat:"Time",lesson:3},
  {k:"일찍",e:"early",cat:"Time",lesson:3},
  {k:"늦게",e:"late",cat:"Time",lesson:3},
  {k:"일어나다",e:"to get up",cat:"Daily Life",conj:"일어나요",lesson:3},

  // ── CLASS 003 — Vocab ──
  {k:"요즘",e:"these days / lately",cat:"Time",lesson:3},
  {k:"글쎄요",e:"well... / hmm...",cat:"Conversation",lesson:3},
  {k:"전",e:"ex (boyfriend/girlfriend)",cat:"People",lesson:3},
  {k:"어느",e:"which",cat:"Conversation",lesson:3},
  {k:"먼저",e:"firstly / first",cat:"Conversation",lesson:3},
  {k:"첫 번째 날",e:"first day",cat:"Time",lesson:3},
  {k:"예뻐요",e:"pretty",cat:"Adjectives",lesson:3},
  {k:"이상해요",e:"strange / weird",cat:"Adjectives",lesson:3},
  {k:"조상",e:"ancestors",cat:"People",lesson:3},
  {k:"교육",e:"education",cat:"School",lesson:3},
  {k:"느낌",e:"feeling / vibe",cat:"Emotions",lesson:3},

  // ── CLASS 004 — Days of the Week ──
  {k:"일요일",e:"Sunday",cat:"Days",lesson:4},
  {k:"월요일",e:"Monday",cat:"Days",lesson:4},
  {k:"화요일",e:"Tuesday",cat:"Days",lesson:4},
  {k:"수요일",e:"Wednesday",cat:"Days",lesson:4},
  {k:"목요일",e:"Thursday",cat:"Days",lesson:4},
  {k:"금요일",e:"Friday",cat:"Days",lesson:4},
  {k:"토요일",e:"Saturday",cat:"Days",lesson:4},
  {k:"월요병",e:"Monday blues",cat:"Days",lesson:4},

  // ── CLASS 004 — Particles ──
  {k:"전에",e:"before (nouns + verbs)",cat:"Grammar Particles",lesson:4},
  {k:"후에",e:"after (nouns + verbs)",cat:"Grammar Particles",lesson:4},
  {k:"부터",e:"from (starting point)",cat:"Grammar Particles",lesson:4},
  {k:"까지",e:"until / up to",cat:"Grammar Particles",lesson:4},

  // ── CLASS 004 — Vocab ──
  {k:"물론",e:"of course",cat:"Conversation",lesson:4},
  {k:"호수",e:"lake",cat:"Nature",lesson:4},
  {k:"돈",e:"money",cat:"Daily Life",lesson:4},
  {k:"장마",e:"monsoon / rainy season",cat:"Weather",lesson:4},
  {k:"공주병",e:"princess complex",cat:"Personality",lesson:4},
  {k:"왕자병",e:"prince complex",cat:"Personality",lesson:4},
  {k:"마음에 들어요",e:"I like it (enters my heart)",cat:"Expressions",lesson:4},

  // ── CLASS 005 — Sports ──
  {k:"야구",e:"baseball",cat:"Sports",lesson:5},
  {k:"축구",e:"soccer",cat:"Sports",lesson:5},
  {k:"미식축구",e:"American football",cat:"Sports",lesson:5},
  {k:"농구",e:"basketball",cat:"Sports",lesson:5},
  {k:"배구",e:"volleyball",cat:"Sports",lesson:5},
  {k:"수영",e:"swimming",cat:"Sports",lesson:5},
  {k:"이기다",e:"to win",cat:"Sports",conj:"이겨요",note:"이+어 contraction",lesson:5},
  {k:"비기다",e:"to tie",cat:"Sports",conj:"비겨요",note:"이+어 contraction",lesson:5},
  {k:"지다",e:"to lose",cat:"Sports",conj:"져요",lesson:5},
  {k:"이야기",e:"story",cat:"Conversation",lesson:5},
  {k:"재미있어요",e:"interesting / fun",cat:"Adjectives",lesson:5},
  {k:"이번 주말 계획 있어요?",e:"Do you have plans this weekend?",cat:"Expressions",lesson:5},
  {k:"직업",e:"job / occupation",cat:"Work",lesson:5},

  // ── CLASS 005 — Seasons ──
  {k:"여름",e:"summer",cat:"Seasons",lesson:5},
  {k:"가을",e:"fall / autumn",cat:"Seasons",lesson:5},
  {k:"겨울",e:"winter",cat:"Seasons",lesson:5},
  {k:"봄",e:"spring",cat:"Seasons",lesson:5},
  {k:"오전",e:"AM / morning",cat:"Time",lesson:5},
  {k:"오후",e:"PM / afternoon",cat:"Time",lesson:5},
  {k:"꽃",e:"flowers",cat:"Nature",lesson:5},
  {k:"우산",e:"umbrella",cat:"Daily Life",lesson:5},
  {k:"더워요",e:"hot / it's hot",cat:"Weather",lesson:5},

  // ── CLASS 005 — Vocab ──
  {k:"중에서",e:"among / out of",cat:"Grammar Particles",lesson:5},
  {k:"인기",e:"popularity",cat:"Abstract",lesson:5},
  {k:"근처에",e:"around / near / nearby",cat:"Places",lesson:5},
  {k:"같이",e:"together",cat:"Conversation",lesson:5},
  {k:"어려워요",e:"difficult / hard",cat:"Adjectives",lesson:5},
  {k:"싫어요",e:"hate / dislike",cat:"Emotions",lesson:5},
  {k:"걷다",e:"to walk",cat:"Verbs",conj:"걸어요",note:"ㄷ irregular",lesson:5},

  // ── CLASS 006 — Food/Drink ──
  {k:"신선한",e:"fresh",cat:"Food",lesson:6},
  {k:"술집",e:"bar / pub",cat:"Food",lesson:6},
  {k:"주문하다",e:"to order",cat:"Food",conj:"주문해요",lesson:6},
  {k:"계란",e:"egg",cat:"Food",lesson:6},

  // ── CLASS 006 — Slang ──
  {k:"음치",e:"tone-deaf / music idiot",cat:"Slang",lesson:6},
  {k:"몸치",e:"can't dance / body idiot",cat:"Slang",lesson:6},
  {k:"길치",e:"bad with directions / street idiot",cat:"Slang",lesson:6},

  // ── CLASS 006 — Activity ──
  {k:"산책하다",e:"to take a stroll",cat:"Daily Life",conj:"산책해요",lesson:6},
  {k:"놀다",e:"to hang out / play",cat:"Daily Life",conj:"놀아요",lesson:6},
  {k:"수업 후에",e:"after class",cat:"School",lesson:6},

  // ── CLASS 006 — Vocab ──
  {k:"분위기",e:"ambience / atmosphere / vibe",cat:"Abstract",lesson:6},
  {k:"마다",e:"every / each",cat:"Grammar Particles",lesson:6},
  {k:"처음",e:"first time / beginning",cat:"Time",lesson:6},
  {k:"주다",e:"to give",cat:"Verbs",conj:"줘요",note:"ㅜ contraction",lesson:6},
  {k:"작아요",e:"small",cat:"Adjectives",lesson:6},
  {k:"관심있어요",e:"interested in / has interest",cat:"Emotions",lesson:6},
  {k:"준비하다",e:"to prepare / get ready",cat:"Verbs",conj:"준비해요",lesson:6},
  {k:"어색해요",e:"awkward",cat:"Emotions",lesson:6},
  {k:"멋있어요",e:"cool / stylish / awesome",cat:"Adjectives",lesson:6},

  // ── CLASS 007 — Open/Close ──
  {k:"몇 시에",e:"at what time",cat:"Time",lesson:7},
  {k:"열어요",e:"open",cat:"Daily Life",lesson:7},
  {k:"닫아요",e:"close",cat:"Daily Life",lesson:7},

  // ── CLASS 007 — Days relative to today ──
  {k:"그저께",e:"two days ago",cat:"Time",lesson:7},
  {k:"오늘",e:"today",cat:"Time",lesson:7},
  {k:"내일",e:"tomorrow",cat:"Time",lesson:7},
  {k:"모레",e:"two days later / the day after tomorrow",cat:"Time",lesson:7},

  // ── CLASS 007 — Vocab ──
  {k:"전시회",e:"exhibition",cat:"Arts",lesson:7},
  {k:"하루 종일",e:"all day long",cat:"Time",lesson:7},
  {k:"중요해요",e:"important",cat:"Adjectives",lesson:7},
  {k:"계획",e:"plan / plans",cat:"Abstract",lesson:7},
  {k:"만들다",e:"to make / create",cat:"Verbs",conj:"만들어요",lesson:7},
  {k:"넣다",e:"to put in / insert",cat:"Verbs",conj:"넣어요",lesson:7},
  {k:"돌다",e:"to go around / return",cat:"Verbs",conj:"돌아요",lesson:7},
  {k:"제 생각에는",e:"in my opinion / I think...",cat:"Conversation",lesson:7},

  // ── CLASS 008 — Start/Finish ──
  {k:"시작하다",e:"to start",cat:"Verbs",conj:"시작해요",lesson:8},
  {k:"끝나다",e:"to finish / end",cat:"Verbs",conj:"끝나요",lesson:8},
  {k:"잘하다",e:"to do well",cat:"Verbs",conj:"잘해요",lesson:8},
  {k:"연습하다",e:"to practice",cat:"Verbs",conj:"연습해요",lesson:8},

  // ── CLASS 008 — Negation ──
  {k:"안",e:"don't / not (choice)",cat:"Grammar Particles",lesson:8},
  {k:"못",e:"can't (inability)",cat:"Grammar Particles",lesson:8},
  {k:"잘못해요",e:"can't do well / do poorly",cat:"Expressions",lesson:8},

  // ── CLASS 008 — Reactions ──
  {k:"잘됐어요",e:"good for you! / that worked out well",cat:"Expressions",lesson:8},
  {k:"안됐어요",e:"sorry to hear / that's too bad",cat:"Expressions",lesson:8},

  // ── CLASS 008 — Estimation ──
  {k:"로",e:"by (means of transport)",cat:"Grammar Particles",lesson:8},
  {k:"쯤",e:"about / approximately",cat:"Grammar Particles",lesson:8},

  // ── CLASS 008 — Verbs ──
  {k:"고장났어요",e:"broken / out of order",cat:"Daily Life",lesson:8},
  {k:"살다",e:"to live",cat:"Verbs",conj:"살아요",lesson:8},
  {k:"받다",e:"to get / receive",cat:"Verbs",conj:"받아요",lesson:8},

  // ── CLASS 008 — Vocab ──
  {k:"우리 둘다",e:"both of us",cat:"People",lesson:8},
  {k:"작가",e:"artist / author / writer",cat:"Arts",lesson:8},
  {k:"문자",e:"text message",cat:"Daily Life",lesson:8},
  {k:"매운 음식",e:"spicy food",cat:"Food",lesson:8},
  {k:"시간 많이 걸리다",e:"takes a long time",cat:"Expressions",lesson:8},
  {k:"뭐에 관심있어요?",e:"What are you interested in?",cat:"Expressions",lesson:8},

  // ── CLASS 009 — Demonstratives ──
  {k:"이런",e:"like this / this kind of",cat:"Conversation",lesson:9},
  {k:"그런",e:"like that / that kind of",cat:"Conversation",lesson:9},
  {k:"저런",e:"like that over there",cat:"Conversation",lesson:9},

  // ── CLASS 009 — Directions ──
  {k:"북",e:"north",cat:"Places",lesson:9},
  {k:"남",e:"south",cat:"Places",lesson:9},
  {k:"동",e:"east",cat:"Places",lesson:9},
  {k:"서",e:"west",cat:"Places",lesson:9},

  // ── CLASS 009 — Verbs ──
  {k:"기억나요",e:"I remember",cat:"Verbs",lesson:9},
  {k:"기억 안 나요",e:"I don't remember",cat:"Verbs",lesson:9},
  {k:"축하합니다",e:"congratulations",cat:"Expressions",lesson:9},
  {k:"이상하다",e:"strange / weird",cat:"Adjectives",conj:"이상해요",lesson:9},

  // ── CLASS 009 — Vocab ──
  {k:"다른",e:"other / another / different",cat:"Conversation",lesson:9},
  {k:"숙제",e:"homework",cat:"School",lesson:9},
  {k:"단골",e:"regular customer",cat:"Conversation",lesson:9},
  {k:"생일",e:"birthday",cat:"People",lesson:9},
  {k:"어떤",e:"what kind of / some",cat:"Conversation",lesson:9},
  {k:"예를 들면",e:"for example",cat:"Conversation",lesson:9},
  {k:"냉장고",e:"fridge / refrigerator",cat:"Daily Life",lesson:9},
  {k:"까지",e:"until / up to / by (deadline)",cat:"Grammar Particles",lesson:9},

  // ── CLASS 010 — Beach ──
  {k:"파도",e:"waves",cat:"Nature",lesson:10},
  {k:"차가워요",e:"cold (to the touch / temperature)",cat:"Adjectives",lesson:10},

  // ── CLASS 010 — Personality ──
  {k:"취향",e:"taste / preference (in things)",cat:"Personality",lesson:10},
  {k:"유명해요",e:"famous",cat:"Adjectives",lesson:10},
  {k:"인기 있어요",e:"popular",cat:"Adjectives",lesson:10},
  {k:"서양사람",e:"Westerner",cat:"People",lesson:10},

  // ── CLASS 010 — Talking ──
  {k:"특히",e:"especially / particularly",cat:"Conversation",lesson:10},
  {k:"솔직히",e:"honestly / frankly",cat:"Conversation",lesson:10},
  {k:"솔직히 말하면",e:"if I speak honestly / to be frank",cat:"Expressions",lesson:10},

  // ── CLASS 010 — Sounds ──
  {k:"바삭바삭",e:"crispy (sound/texture)",cat:"Food",lesson:10},
  {k:"아삭아삭",e:"crunchy (sound/texture)",cat:"Food",lesson:10},

  // ── CLASS 010 — Numbers ──
  {k:"하나, 둘, 셋",e:"1, 2, 3 (native Korean numbers)",cat:"Numbers",lesson:10},
  {k:"일, 이, 삼",e:"1, 2, 3 (Sino-Korean numbers)",cat:"Numbers",lesson:10},

  // ── CLASS 010 — Verbs ──
  {k:"걸리다",e:"to take (time)",cat:"Verbs",conj:"걸려요",lesson:10},
  {k:"말하다",e:"to speak / tell / say",cat:"Verbs",conj:"말해요",lesson:10},
  {k:"이야기하다",e:"to talk / chat",cat:"Verbs",conj:"이야기해요",lesson:10},
  {k:"기대하다",e:"to look forward to",cat:"Verbs",conj:"기대해요",lesson:10},

  // ── CLASS 010 — Vocab ──
  {k:"우체국",e:"post office",cat:"Places",lesson:10},
  {k:"만",e:"only (after nouns)",cat:"Grammar Particles",lesson:10},

  // ── CLASS 010 — Verb table ──
  {k:"가다",e:"to go",cat:"Verbs",conj:"가요",lesson:10},
  {k:"사다",e:"to buy",cat:"Verbs",conj:"사요",lesson:10},
  {k:"자다",e:"to sleep",cat:"Verbs",conj:"자요",lesson:10},
  {k:"만나다",e:"to meet",cat:"Verbs",conj:"만나요",lesson:10},
  {k:"마시다",e:"to drink",cat:"Verbs",conj:"마셔요",note:"이+어 contraction",lesson:10},
  {k:"보다",e:"to see / watch",cat:"Verbs",conj:"봐요",note:"ㅗ+아 contraction",lesson:10},
  {k:"오다",e:"to come",cat:"Verbs",conj:"와요",note:"ㅗ+아 contraction",lesson:10},
  {k:"타다",e:"to ride",cat:"Verbs",conj:"타요",lesson:10},
  {k:"배우다",e:"to learn",cat:"Verbs",conj:"배워요",note:"ㅜ+어 contraction",lesson:10},
  {k:"가르치다",e:"to teach",cat:"Verbs",conj:"가르쳐요",note:"이+어 contraction",lesson:10},
  {k:"쉬다",e:"to rest",cat:"Verbs",conj:"쉬어요",lesson:10},
  {k:"하다",e:"to do",cat:"Verbs",conj:"해요",lesson:10},
  {k:"일하다",e:"to work",cat:"Verbs",conj:"일해요",lesson:10},
  {k:"공부하다",e:"to study",cat:"Verbs",conj:"공부해요",lesson:10},
  {k:"운동하다",e:"to exercise",cat:"Verbs",conj:"운동해요",lesson:10},
  {k:"요리하다",e:"to cook",cat:"Verbs",conj:"요리해요",lesson:10},
  {k:"사랑하다",e:"to love",cat:"Verbs",conj:"사랑해요",lesson:10},
  {k:"먹다",e:"to eat",cat:"Verbs",conj:"먹어요",lesson:10},
  {k:"입다",e:"to wear",cat:"Verbs",conj:"입어요",lesson:10},
  {k:"읽다",e:"to read",cat:"Verbs",conj:"읽어요",lesson:10},
  {k:"원하다",e:"to want",cat:"Verbs",conj:"원해요",lesson:10},
  {k:"끝나다",e:"to finish / be over",cat:"Verbs",conj:"끝나요",lesson:10},

  // ── CLASS 011 — Smart/Stupid ──
  {k:"똑똑해요",e:"smart / clever",cat:"Adjectives",lesson:11},
  {k:"버릇없어요",e:"spoiled / rude / bad-mannered",cat:"Adjectives",lesson:11},
  {k:"무례해요",e:"rude / impolite",cat:"Adjectives",lesson:11},
  {k:"실수",e:"mistake",cat:"Abstract",lesson:11},
  {k:"다시",e:"again",cat:"Conversation",lesson:11},

  // ── CLASS 011 — Age ──
  {k:"나이",e:"age",cat:"People",lesson:11},
  {k:"몇 살이에요?",e:"How old are you?",cat:"Expressions",lesson:11},
  {k:"살",e:"age counter (years old)",cat:"Grammar Particles",lesson:11},
  {k:"열",e:"10 (native Korean)",cat:"Numbers",lesson:11},
  {k:"스물",e:"20 (native Korean)",cat:"Numbers",lesson:11},
  {k:"서른",e:"30 (native Korean)",cat:"Numbers",lesson:11},
  {k:"마흔",e:"40 (native Korean)",cat:"Numbers",lesson:11},

  // ── CLASS 011 — Vocab ──
  {k:"에너지",e:"energy",cat:"Abstract",lesson:11},
  {k:"선택",e:"choice",cat:"Abstract",lesson:11},
  {k:"주인",e:"owner",cat:"People",lesson:11},
  {k:"경우에 따라 달라요",e:"it depends on the case/situation",cat:"Expressions",lesson:11},

  // ── CLASS 012 — Body ──
  {k:"가슴",e:"chest",cat:"Body",lesson:12},
  {k:"다리",e:"legs",cat:"Body",lesson:12},
  {k:"귀",e:"ears",cat:"Body",lesson:12},
  {k:"입",e:"mouth",cat:"Body",lesson:12},
  {k:"목",e:"throat / neck",cat:"Body",lesson:12},
  {k:"어깨",e:"shoulder",cat:"Body",lesson:12},
  {k:"얼굴",e:"face",cat:"Body",lesson:12},
  {k:"팔",e:"arm",cat:"Body",lesson:12},
  {k:"등",e:"upper back",cat:"Body",lesson:12},
  {k:"허리",e:"lower back / waist",cat:"Body",lesson:12},
  {k:"미소",e:"smile",cat:"Body",lesson:12},
  {k:"손",e:"hand",cat:"Body",lesson:12},
  {k:"손가락",e:"fingers",cat:"Body",lesson:12},
  {k:"허벅지",e:"thighs",cat:"Body",lesson:12},
  {k:"손목",e:"wrist",cat:"Body",lesson:12},
  {k:"발목",e:"ankle",cat:"Body",lesson:12},
  {k:"배",e:"stomach / belly",cat:"Body",lesson:12},
  {k:"종아리",e:"calves",cat:"Body",lesson:12},
  {k:"엉덩이",e:"butt",cat:"Body",lesson:12},
  {k:"발가락",e:"toes",cat:"Body",lesson:12},
  {k:"-에 끌려요",e:"attracted to (body part)",cat:"Expressions",lesson:12},

  // ── CLASS 012 — Sweat / Clothes ──
  {k:"땀",e:"sweat",cat:"Health",lesson:12},
  {k:"땀 나요",e:"sweating",cat:"Health",lesson:12},
  {k:"깎다",e:"to cut (hair)",cat:"Verbs",conj:"깎아요",lesson:12},
  {k:"반바지",e:"shorts / half pants",cat:"Daily Life",lesson:12},
  {k:"벌써",e:"already",cat:"Time",lesson:12},
  {k:"아직",e:"still (positive) / yet (negative)",cat:"Time",lesson:12},
  {k:"아직 안 했어요",e:"not yet done / not decided yet",cat:"Expressions",lesson:12},
  {k:"해봐요",e:"try it / give it a try",cat:"Expressions",lesson:12},

  // ── CLASS 012 — Vocab ──
  {k:"전화하다",e:"to call (phone)",cat:"Verbs",conj:"전화해요",lesson:12},
  {k:"전화",e:"phone / phone call",cat:"Daily Life",lesson:12},

  // ── CLASS 013 — Travel ──
  {k:"불편하다",e:"uncomfortable",cat:"Travel",conj:"불편해요",lesson:13},
  {k:"편하다",e:"comfortable / convenient",cat:"Travel",conj:"편해요",lesson:13},
  {k:"비행기",e:"airplane",cat:"Transport",lesson:13},
  {k:"시차",e:"time difference / jet lag",cat:"Travel",lesson:13},
  {k:"배",e:"boat / ship",cat:"Transport",lesson:13},
  {k:"교통",e:"traffic / transportation",cat:"Transport",lesson:13},
  {k:"공원",e:"park",cat:"Places",lesson:13},
  {k:"수영장",e:"swimming pool",cat:"Places",lesson:13},
  {k:"가지고 오다",e:"to bring (something)",cat:"Verbs",conj:"가지고 와요",lesson:13},
  {k:"안에",e:"inside of",cat:"Grammar Particles",lesson:13},
  {k:"구경하다",e:"to look around / browse",cat:"Verbs",conj:"구경해요",lesson:13},
  {k:"낮잠 자다",e:"to take a nap",cat:"Daily Life",conj:"낮잠 자요",lesson:13},
  {k:"-아/어 보여요",e:"looks like / appears to be",cat:"Grammar Particles",lesson:13},
  {k:"오리",e:"duck",cat:"Nature",lesson:13},
  {k:"벌레",e:"bug / insect / worm",cat:"Nature",lesson:13},
  {k:"자정",e:"midnight",cat:"Time",lesson:13},

  // ── CLASS 014 — Gym/Health ──
  {k:"탄수화물",e:"carbohydrates / carbs",cat:"Health",lesson:14},
  {k:"지방",e:"fat (dietary)",cat:"Health",lesson:14},
  {k:"행복해요",e:"happy",cat:"Emotions",conj:"행복해요",lesson:14},
  {k:"기분 좋아요",e:"mood is good / feeling good",cat:"Mood",lesson:14},
  {k:"인생",e:"life",cat:"Abstract",lesson:14},
  {k:"결혼식",e:"wedding ceremony",cat:"People",lesson:14},
  {k:"의자",e:"chair",cat:"Daily Life",lesson:14},
  {k:"늦어서 죄송합니다",e:"sorry I'm late (formal)",cat:"Expressions",lesson:14},

  // ── CLASS 015 — Believe/Trust ──
  {k:"믿다",e:"to believe / trust",cat:"Verbs",conj:"믿어요",lesson:15},
  {k:"믿을 수 없어요",e:"I can't believe it",cat:"Expressions",lesson:15},
  {k:"제일 친한 친구",e:"best friend",cat:"People",lesson:15},
  {k:"이따가",e:"later (soon)",cat:"Time",lesson:15},
  {k:"나중에",e:"later (more distant future)",cat:"Time",lesson:15},
  {k:"미래",e:"future",cat:"Time",lesson:15},
  {k:"초등학교",e:"elementary school",cat:"School",lesson:15},
  {k:"중학교",e:"middle school",cat:"School",lesson:15},
  {k:"고등학교",e:"high school",cat:"School",lesson:15},
  {k:"기회",e:"opportunity / chance",cat:"Abstract",lesson:15},
  {k:"상황",e:"situation",cat:"Abstract",lesson:15},
  {k:"암실",e:"darkroom",cat:"Arts",lesson:15},
  {k:"호주",e:"Australia",cat:"Places",lesson:15},
  {k:"과학",e:"science",cat:"School",lesson:15},
  {k:"과학자",e:"scientist",cat:"People",lesson:15},
  {k:"태어나다",e:"to be born",cat:"Verbs",conj:"태어나요",lesson:15},
  {k:"생각 많이 하지 마",e:"stop overthinking (casual)",cat:"Expressions",lesson:15},

  // ── CLASS 016 — Scary/House ──
  {k:"무서워요",e:"scary / scared",cat:"Adjectives",lesson:16},
  {k:"위험해요",e:"dangerous",cat:"Adjectives",lesson:16},
  {k:"화분",e:"potted plant",cat:"Daily Life",lesson:16},
  {k:"뒹굴뒹굴해요",e:"lying around / lazing about",cat:"Daily Life",lesson:16},
  {k:"개학",e:"start of school / back to school",cat:"School",lesson:16},
  {k:"어릴 때",e:"when (I was) a kid",cat:"Time",lesson:16},
  {k:"날씬해요",e:"slim / slender",cat:"Adjectives",lesson:16},
  {k:"여행하다",e:"to travel / take a trip",cat:"Travel",conj:"여행해요",lesson:16},
  {k:"에게",e:"to (a person)",cat:"Grammar Particles",lesson:16},
  {k:"듣다",e:"to listen / hear",cat:"Verbs",conj:"들어요",note:"ㄷ irregular",lesson:16},
  {k:"과/와",e:"and / with (formal)",cat:"Grammar Particles",lesson:16},
  {k:"랑/이랑",e:"and / with (casual)",cat:"Grammar Particles",lesson:16},

  // ── CLASS 017 — Know/Don't Know ──
  {k:"알아요",e:"I know",cat:"Expressions",lesson:17},
  {k:"알겠어요",e:"I got it / I understand",cat:"Expressions",lesson:17},
  {k:"이해해요",e:"I understand / I know what you mean",cat:"Expressions",lesson:17},
  {k:"몰라요",e:"I don't know",cat:"Expressions",lesson:17},
  {k:"모르겠어요",e:"I don't understand / I have no idea",cat:"Expressions",lesson:17},
  {k:"이해 못 해요",e:"I can't understand",cat:"Expressions",lesson:17},

  // ── CLASS 017 — Family ──
  {k:"부모님",e:"parents",cat:"People",lesson:17},
  {k:"아버님",e:"father (formal)",cat:"People",lesson:17},
  {k:"어머님",e:"mother (formal)",cat:"People",lesson:17},
  {k:"형제",e:"brothers / siblings",cat:"People",lesson:17},

  // ── CLASS 017 — Vocab ──
  {k:"반반",e:"half and half",cat:"Conversation",lesson:17},
  {k:"안경",e:"glasses / spectacles",cat:"Daily Life",lesson:17},
  {k:"시계",e:"watch / clock",cat:"Daily Life",lesson:17},
  {k:"복잡해요",e:"crowded / complicated",cat:"Adjectives",lesson:17},
  {k:"결혼하다",e:"to marry / get married",cat:"Verbs",conj:"결혼해요",lesson:17},
  {k:"마트",e:"supermarket / mart",cat:"Places",lesson:17},

  // ── CLASS 018 ──
  {k:"하이킹",e:"hiking",cat:"Sports",lesson:18},
  {k:"아름다워요",e:"beautiful",cat:"Adjectives",lesson:18},
  {k:"특별한 날",e:"special day",cat:"Time",lesson:18},
  {k:"다양한",e:"diverse / all kinds of",cat:"Adjectives",lesson:18},
  {k:"친척",e:"relatives",cat:"People",lesson:18},
  {k:"검정",e:"black",cat:"Adjectives",lesson:18},
  {k:"시골",e:"countryside / rural area",cat:"Places",lesson:18},
  {k:"도시",e:"city",cat:"Places",lesson:18},

  // ── CLASS 019 — Wedding ──
  {k:"신랑",e:"groom",cat:"People",lesson:19},
  {k:"신부",e:"bride",cat:"People",lesson:19},
  {k:"주례",e:"wedding officiant",cat:"People",lesson:19},
  {k:"사회자",e:"MC / emcee",cat:"People",lesson:19},
  {k:"박수",e:"applause / clapping",cat:"Expressions",lesson:19},
  {k:"하객",e:"wedding guests",cat:"People",lesson:19},
  {k:"피로연",e:"wedding reception",cat:"People",lesson:19},
  {k:"사위",e:"son-in-law",cat:"People",lesson:19},
  {k:"잘 살겠습니다",e:"we will live well (wedding phrase)",cat:"Expressions",lesson:19},
  {k:"그 다음에",e:"after that",cat:"Transitions",lesson:19},
  {k:"쓰다",e:"to write / use / spend / wear (hat)",cat:"Verbs",conj:"써요",lesson:19},
  {k:"되다",e:"to become",cat:"Verbs",conj:"돼요",lesson:19},
  {k:"울다",e:"to cry",cat:"Verbs",conj:"울어요",lesson:19},
  {k:"벗다",e:"to take off (clothes)",cat:"Verbs",conj:"벗어요",lesson:19},
  {k:"떠나다",e:"to leave / depart",cat:"Verbs",conj:"떠나요",lesson:19},

  // ── CLASS 020 ──
  {k:"설명하다",e:"to explain",cat:"Verbs",conj:"설명해요",lesson:20},
  {k:"친절하다",e:"to be kind / friendly",cat:"Adjectives",conj:"친절해요",lesson:20},
  {k:"필요하다",e:"to need / be necessary",cat:"Verbs",conj:"필요해요",lesson:20},
  {k:"수영복",e:"swimsuit",cat:"Daily Life",lesson:20},
  {k:"현재",e:"currently / the present",cat:"Time",lesson:20},
  {k:"원래",e:"originally / by nature",cat:"Conversation",lesson:20},

  // ── CLASS 021 — Dyeing Hair ──
  {k:"염색하다",e:"to dye (hair)",cat:"Daily Life",conj:"염색해요",lesson:21},
  {k:"갑자기",e:"suddenly",cat:"Conversation",lesson:21},
  {k:"어울리다",e:"to suit / match / go well",cat:"Verbs",conj:"어울려요",lesson:21},
  {k:"웃다",e:"to laugh / smile",cat:"Verbs",conj:"웃어요",lesson:21},
  {k:"놀리다",e:"to tease",cat:"Verbs",conj:"놀려요",lesson:21},
  {k:"잘 되다",e:"to go well / work out",cat:"Expressions",lesson:21},
  {k:"부탁하다",e:"to request / ask a favour",cat:"Verbs",conj:"부탁해요",lesson:21},
  {k:"자세히",e:"in detail",cat:"Conversation",lesson:21},
  {k:"마지막으로",e:"lastly / finally",cat:"Conversation",lesson:21},

  // ── CLASS 024 — Adjectives / Taste ──
  {k:"크다",e:"big / large",cat:"Adjectives",conj:"커요",lesson:24},
  {k:"많다",e:"many / a lot",cat:"Adjectives",conj:"많아요",lesson:24},
  {k:"단어",e:"word / vocabulary item",cat:"Abstract",lesson:24},
  {k:"싸다",e:"cheap / inexpensive",cat:"Adjectives",conj:"싸요",lesson:24},
  {k:"맛있다",e:"tasty / delicious",cat:"Food",conj:"맛있어요",lesson:24},
  {k:"맵다",e:"spicy / hot (taste)",cat:"Food",conj:"매워요",note:"ㅂ irregular",lesson:24},
  {k:"따뜻하다",e:"warm",cat:"Weather",conj:"따뜻해요",lesson:24},
  {k:"잘생겼어요",e:"handsome",cat:"Adjectives",lesson:24},
  {k:"평범하다",e:"ordinary / average",cat:"Adjectives",conj:"평범해요",lesson:24},
  {k:"뚱뚱하다",e:"fat / overweight",cat:"Adjectives",conj:"뚱뚱해요",lesson:24},
  {k:"더럽다",e:"dirty",cat:"Adjectives",conj:"더러워요",note:"ㅂ irregular",lesson:24},
  {k:"짜다",e:"salty",cat:"Food",conj:"짜요",lesson:24},
  {k:"달다",e:"sweet",cat:"Food",conj:"달아요",lesson:24},
  {k:"시다",e:"sour",cat:"Food",conj:"셔요",lesson:24},
  {k:"싱겁다",e:"bland / tasteless",cat:"Food",conj:"싱거워요",note:"ㅂ irregular",lesson:24},
  {k:"고소하다",e:"nutty / savory / toasty",cat:"Food",conj:"고소해요",lesson:24},
  {k:"촉촉하다",e:"moist",cat:"Adjectives",conj:"촉촉해요",lesson:24},
  {k:"뜨겁다",e:"hot to the touch",cat:"Adjectives",conj:"뜨거워요",note:"ㅂ irregular",lesson:24},
  {k:"무겁다",e:"heavy",cat:"Adjectives",conj:"무거워요",note:"ㅂ irregular",lesson:24},
  {k:"가볍다",e:"light (weight)",cat:"Adjectives",conj:"가벼워요",note:"ㅂ irregular",lesson:24},
  {k:"행복하다",e:"to be happy",cat:"Emotions",conj:"행복해요",lesson:24},
  {k:"친근하다",e:"friendly / approachable",cat:"Adjectives",conj:"친근해요",lesson:24},

  // ── CLASS 025 ──
  {k:"젖다",e:"to get wet",cat:"Verbs",conj:"젖어요",lesson:25},
  {k:"병원",e:"hospital / clinic",cat:"Health",lesson:25},
  {k:"신문",e:"newspaper",cat:"Daily Life",lesson:25},
  {k:"연달아",e:"back to back / in a row",cat:"Conversation",lesson:25},
  {k:"집들이",e:"housewarming party",cat:"Daily Life",lesson:25},
  {k:"수제",e:"handmade",cat:"Adjectives",lesson:25},
  {k:"즐거운 시간",e:"enjoyable time / fun time",cat:"Expressions",lesson:25},

  // ── CLASS 026 ──
  {k:"아내",e:"wife",cat:"People",lesson:26},
  {k:"남편",e:"husband",cat:"People",lesson:26},
  {k:"연어",e:"salmon",cat:"Food",lesson:26},
  {k:"도와주다",e:"to help",cat:"Verbs",conj:"도와줘요",lesson:26},
  {k:"그런데",e:"but / by the way / however",cat:"Transitions",lesson:26},

  // ── CLASS 027 ──
  {k:"잡지",e:"magazine",cat:"Arts",lesson:27},
  {k:"대부분",e:"mostly / the majority",cat:"Intensifiers",lesson:27},
  {k:"보수적",e:"conservative",cat:"Abstract",lesson:27},
  {k:"진보적",e:"liberal / progressive",cat:"Abstract",lesson:27},
  {k:"이빨",e:"tooth / teeth",cat:"Body",lesson:27},
  {k:"늘리다",e:"to extend / expand / increase",cat:"Verbs",conj:"늘려요",lesson:27},
  {k:"착하다",e:"good-hearted / kind / nice",cat:"Adjectives",conj:"착해요",lesson:27},

  // ── CLASS 028 ──
  {k:"공공장소",e:"public place",cat:"Places",lesson:28},
  {k:"세대 차이",e:"generation gap",cat:"Abstract",lesson:28},
  {k:"나이 차이",e:"age difference",cat:"Abstract",lesson:28},

  // ── CLASS 029 ──
  {k:"학년",e:"school year / grade level",cat:"School",lesson:29},
  {k:"어린이집",e:"daycare",cat:"School",lesson:29},
  {k:"유치원",e:"kindergarten",cat:"School",lesson:29},
  {k:"매일 밤",e:"every night",cat:"Time",lesson:29},
  {k:"매일 아침",e:"every morning",cat:"Time",lesson:29},
  {k:"매주 토요일",e:"every Saturday",cat:"Time",lesson:29},
  {k:"매달",e:"every month",cat:"Time",lesson:29},
  {k:"승진",e:"promotion (at work)",cat:"Work",lesson:29},
  {k:"어른",e:"adult / grown-up",cat:"People",lesson:29},
  {k:"깨끗한 공기",e:"clean air",cat:"Nature",lesson:29},
  {k:"정부",e:"government",cat:"Politics",lesson:29},
  {k:"보조금",e:"subsidy / grant",cat:"Politics",lesson:29},
  {k:"정규",e:"regular / standard",cat:"Abstract",lesson:29},

  // ── CLASS 030 — Weather/Photography ──
  {k:"태풍",e:"typhoon",cat:"Weather",lesson:30},
  {k:"바람",e:"wind",cat:"Weather",lesson:30},
  {k:"바람 불어요",e:"it's windy",cat:"Weather",lesson:30},
  {k:"천둥",e:"thunder",cat:"Weather",lesson:30},
  {k:"번개",e:"lightning",cat:"Weather",lesson:30},
  {k:"안개",e:"fog",cat:"Weather",lesson:30},
  {k:"초상화",e:"portrait (photography)",cat:"Arts",lesson:30},
  {k:"풍경",e:"landscape / scenery (photography)",cat:"Arts",lesson:30},
  {k:"정물",e:"still life (photography)",cat:"Arts",lesson:30},
  {k:"취미",e:"hobby",cat:"Daily Life",lesson:30},
  {k:"침술",e:"acupuncture",cat:"Health",lesson:30},
  {k:"전문가",e:"expert / specialist",cat:"Work",lesson:30},
  {k:"점수",e:"score / points",cat:"Sports",lesson:30},

  // ── CLASS 032 ──
  {k:"잊다",e:"to forget",cat:"Verbs",conj:"잊어요",lesson:32},
  {k:"잃다",e:"to lose (something)",cat:"Verbs",conj:"잃어요",lesson:32},
  {k:"길다",e:"long",cat:"Adjectives",conj:"길어요",lesson:32},
  {k:"짧다",e:"short",cat:"Adjectives",conj:"짧아요",lesson:32},

  // ── CLASS 033 ──
  {k:"추천서",e:"recommendation letter",cat:"School",lesson:33},
  {k:"규정",e:"rules / policy / regulation",cat:"Abstract",lesson:33},
  {k:"숫자",e:"number / digit / figure",cat:"Abstract",lesson:33},
  {k:"상상하다",e:"to imagine",cat:"Verbs",conj:"상상해요",lesson:33},
  {k:"트림하다",e:"to burp",cat:"Daily Life",conj:"트림해요",lesson:33},
  {k:"코 풀다",e:"to blow one's nose",cat:"Health",conj:"코 풀어요",lesson:33},
  {k:"짐작하다",e:"to guess / make an educated guess",cat:"Verbs",conj:"짐작해요",lesson:33},

  // ── CLASS 034 — Work/Commute ──
  {k:"출퇴근하다",e:"to commute",cat:"Work",conj:"출퇴근해요",lesson:34},
  {k:"편리하다",e:"convenient",cat:"Adjectives",conj:"편리해요",lesson:34},
  {k:"참여하다",e:"to participate",cat:"Verbs",conj:"참여해요",lesson:34},
  {k:"동의하다",e:"to agree",cat:"Verbs",conj:"동의해요",lesson:34},
  {k:"약하다",e:"weak",cat:"Adjectives",conj:"약해요",lesson:34},
  {k:"술 마시다",e:"to drink alcohol",cat:"Daily Life",conj:"술 마셔요",lesson:34},
  {k:"취해요",e:"tipsy / drunk",cat:"Health",lesson:34},
  {k:"만취하다",e:"to be blackout drunk",cat:"Health",conj:"만취해요",lesson:34},
  {k:"정장",e:"formal clothes / suit",cat:"Daily Life",lesson:34},
  {k:"운동화",e:"sneakers / trainers",cat:"Daily Life",lesson:34},
  {k:"구두",e:"dress shoes",cat:"Daily Life",lesson:34},
  {k:"전자제품",e:"electronics",cat:"Daily Life",lesson:34},

  // ── CLASS 036 — Looks ──
  {k:"못생겼어요",e:"ugly / unattractive",cat:"Adjectives",lesson:36},
  {k:"내성적",e:"introverted",cat:"Personality",lesson:36},
  {k:"외향적",e:"extroverted",cat:"Personality",lesson:36},

  // ── CLASS 037 ──
  {k:"미루다",e:"to postpone / put off",cat:"Verbs",conj:"미뤄요",note:"ㅜ contraction",lesson:37},
  {k:"놀라다",e:"to be surprised",cat:"Emotions",conj:"놀라요",lesson:37},
  {k:"끔찍하다",e:"terrible / awful / horrific",cat:"Adjectives",conj:"끔찍해요",lesson:37},
  {k:"사고",e:"accident / incident",cat:"Abstract",lesson:37},
  {k:"모임",e:"meeting / gathering / get-together",cat:"Daily Life",lesson:37},
  {k:"어느 정도",e:"to a certain extent / somewhat",cat:"Conversation",lesson:37},

  // ── CLASS 039 — Weather ──
  {k:"선선하다",e:"cool (weather)",cat:"Weather",conj:"선선해요",lesson:39},
  {k:"쌀쌀하다",e:"chilly",cat:"Weather",conj:"쌀쌀해요",lesson:39},
  {k:"가치",e:"value / worth",cat:"Abstract",lesson:39},
  {k:"얼룩",e:"stain / spot",cat:"Daily Life",lesson:39},

  // ── CLASS 040 ──
  {k:"정돈하다",e:"to tidy up / organize",cat:"Daily Life",conj:"정돈해요",lesson:40},
  {k:"복도",e:"hallway / corridor",cat:"Places",lesson:40},
  {k:"여가 시간",e:"free time / leisure time",cat:"Daily Life",lesson:40},

  // ── CLASS 041 ──
  {k:"체육",e:"P.E. / physical education",cat:"School",lesson:41},
  {k:"노동절",e:"Labor Day",cat:"Time",lesson:41},
  {k:"어린이날",e:"Children's Day",cat:"Time",lesson:41},
  {k:"부처님 오신 날",e:"Buddha's Birthday (public holiday)",cat:"Time",lesson:41},

  // ── CLASS 042 ──
  {k:"여름 방학",e:"summer break / summer vacation",cat:"School",lesson:42},
  {k:"날씨 예보",e:"weather forecast",cat:"Weather",lesson:42},
  {k:"시험 기간",e:"exam period",cat:"School",lesson:42},
  {k:"달리기",e:"running",cat:"Sports",lesson:42},
  {k:"살을 빼다",e:"to lose weight",cat:"Health",conj:"살을 빼요",lesson:42},
  {k:"효과적인",e:"effective",cat:"Adjectives",lesson:42},
  {k:"도전",e:"challenge",cat:"Abstract",lesson:42},
  {k:"반대",e:"opposite / against",cat:"Abstract",lesson:42},
  {k:"잘 어울리는 사람",e:"compatible person / good match",cat:"People",lesson:42},
  {k:"제가 보기에는",e:"as I see it / in my view",cat:"Conversation",lesson:42},
  {k:"헤어진 후",e:"after breaking up",cat:"Expressions",lesson:42},
  {k:"같이 살다",e:"to live together",cat:"Daily Life",conj:"같이 살아요",lesson:42},
  {k:"럭셔리",e:"luxury",cat:"Adjectives",lesson:42},

  // ── CLASS 043 ──
  {k:"감동적인",e:"moving / touching / emotional",cat:"Adjectives",lesson:43},
  {k:"유명해지다",e:"to become famous",cat:"Verbs",conj:"유명해져요",lesson:43},

  // ── CLASS 044 ──
  {k:"나빠졌어요",e:"got worse",cat:"Expressions",lesson:44},
  {k:"예뻐졌어요",e:"got prettier",cat:"Expressions",lesson:44},
  {k:"바빠졌어요",e:"got busy",cat:"Expressions",lesson:44},

  // ── CLASS 056 — Time/Travel ──
  {k:"한파",e:"cold wave / cold snap",cat:"Weather",lesson:56},
  {k:"난기류",e:"turbulence",cat:"Travel",lesson:56},
  {k:"항공사",e:"airline",cat:"Travel",lesson:56},
  {k:"현지 시간",e:"local time",cat:"Time",lesson:56},
  {k:"문화 충격",e:"culture shock",cat:"Abstract",lesson:56},
  {k:"관광객",e:"tourist",cat:"Travel",lesson:56},
  {k:"직장인",e:"office worker / working adult",cat:"Work",lesson:56},
  {k:"미국",e:"USA / America",cat:"Places",lesson:56},
  {k:"완벽주의자",e:"perfectionist",cat:"Personality",lesson:56},
  {k:"이해하다",e:"to understand",cat:"Verbs",conj:"이해해요",lesson:56},
  {k:"보장하다",e:"to guarantee",cat:"Verbs",conj:"보장해요",lesson:56},

  // ── CLASS 057 ──
  {k:"말이 없다",e:"tight-lipped / quiet / reserved",cat:"Personality",lesson:57},
  {k:"관련이 있다",e:"related / connected",cat:"Conversation",lesson:57},
  {k:"초대하다",e:"to invite",cat:"Verbs",conj:"초대해요",lesson:57},
  {k:"초대받다",e:"to be invited / receive an invitation",cat:"Verbs",conj:"초대받아요",lesson:57},
  {k:"사무실",e:"office",cat:"Work",lesson:57},
  {k:"재료",e:"materials / ingredients",cat:"Abstract",lesson:57},
  {k:"담당",e:"in charge of / responsible for",cat:"Work",lesson:57},

  // ── CLASS 058 ──
  {k:"채식주의자",e:"vegetarian",cat:"People",lesson:58},
  {k:"긴 하루",e:"long / hard day",cat:"Expressions",lesson:58},

  // ── CLASS 059 — Personality/Traits ──
  {k:"섭씨",e:"Celsius",cat:"Weather",lesson:59},
  {k:"화씨",e:"Fahrenheit",cat:"Weather",lesson:59},
  {k:"질기다",e:"tough (food or personality)",cat:"Adjectives",conj:"질겨요",lesson:59},
  {k:"지루하다",e:"boring",cat:"Adjectives",conj:"지루해요",lesson:59},
  {k:"잘생긴 남자",e:"handsome man",cat:"People",lesson:59},
  {k:"예쁜 여자",e:"beautiful woman",cat:"People",lesson:59},
  {k:"열린 마음",e:"open-minded",cat:"Personality",lesson:59},
  {k:"좁은 마음",e:"narrow-minded",cat:"Personality",lesson:59},
  {k:"피부색",e:"skin tone / complexion",cat:"Body",lesson:59},
  {k:"탈모",e:"hair loss",cat:"Health",lesson:59},
  {k:"평발",e:"flat feet",cat:"Health",lesson:59},
  {k:"응원하다",e:"to cheer / root for",cat:"Verbs",conj:"응원해요",lesson:59},
  {k:"유전적인",e:"genetic / inherited",cat:"Abstract",lesson:59},
  {k:"환경",e:"environment",cat:"Abstract",lesson:59},
  {k:"결정하다",e:"to decide / determine",cat:"Verbs",conj:"결정해요",lesson:59},
  {k:"확률",e:"probability / chance",cat:"Abstract",lesson:59},
  {k:"비율",e:"ratio / proportion",cat:"Abstract",lesson:59},
  {k:"압도적으로",e:"overwhelmingly / by a large margin",cat:"Intensifiers",lesson:59},
  {k:"분명히",e:"definitely / clearly",cat:"Intensifiers",lesson:59},
  {k:"놀랍게도",e:"surprisingly",cat:"Intensifiers",lesson:59},
  {k:"대략",e:"approximately / roughly",cat:"Intensifiers",lesson:59},
  {k:"~에 관해 말하자면",e:"speaking of... / on the topic of...",cat:"Conversation",lesson:59},

  // ── CLASS 060 ──
  {k:"습관의 동물",e:"creature of habit",cat:"Personality",lesson:60},
  {k:"심리",e:"psychology / mindset",cat:"Abstract",lesson:60},
  {k:"자연스럽게",e:"naturally",cat:"Conversation",lesson:60},
  {k:"조언",e:"advice",cat:"Conversation",lesson:60},
  {k:"용서하다",e:"to forgive",cat:"Verbs",conj:"용서해요",lesson:60},
  {k:"우연히",e:"by chance / coincidentally",cat:"Conversation",lesson:60},
  {k:"이루다",e:"to achieve / accomplish",cat:"Verbs",conj:"이뤄요",note:"ㅜ contraction",lesson:60},

  // ── CLASS 061 ──
  {k:"제목",e:"title (of a work)",cat:"Arts",lesson:61},
  {k:"건축가",e:"architect",cat:"People",lesson:61},
  {k:"십대",e:"teenager",cat:"People",lesson:61},
  {k:"갈등",e:"conflict",cat:"Abstract",lesson:61},
  {k:"욕망",e:"desire / craving",cat:"Emotions",lesson:61},
  {k:"수집하다",e:"to collect",cat:"Verbs",conj:"수집해요",lesson:61},
  {k:"혼자 사는 것",e:"living alone",cat:"Daily Life",lesson:61},
  {k:"나만의 공간",e:"my own space / personal space",cat:"Daily Life",lesson:61},

  // ── CLASS 062 (2026.03.26) — Travel, Quality, Health, Abstract ──
  {k:"배경",e:"background / setting",cat:"Abstract",lesson:62},
  {k:"설명하기 어려워요",e:"it's hard to explain",cat:"Expressions",lesson:62},
  {k:"몇 박 며칠",e:"how many nights and days",cat:"Travel",lesson:62},
  {k:"4박5일",e:"4 nights, 5 days",cat:"Travel",lesson:62},
  {k:"벚꽃",e:"cherry blossoms",cat:"Nature",lesson:62},
  {k:"피다",e:"to bloom",cat:"Verbs",conj:"피어요",lesson:62},
  {k:"질",e:"quality",cat:"Abstract",lesson:62},
  {k:"양",e:"quantity",cat:"Abstract",lesson:62},
  {k:"양보다 질",e:"quality over quantity",cat:"Expressions",lesson:62},
  {k:"-에 관해서",e:"regarding ~ / about ~",cat:"Grammar Particles",lesson:62},
  {k:"장수",e:"longevity / long life",cat:"Health",lesson:62},
  {k:"오래 사는 사람",e:"a person who lives long",cat:"People",lesson:62},
  {k:"식단",e:"diet / meal plan",cat:"Health",lesson:62},
  {k:"고기 중심 식단",e:"meat-centered diet",cat:"Health",lesson:62},
  {k:"건강한 음식",e:"healthy food",cat:"Food",lesson:62},
  {k:"활동적",e:"active",cat:"Adjectives",lesson:62},
  {k:"사회 복지",e:"social welfare",cat:"Politics",lesson:62},
  {k:"만족하다",e:"to be satisfied",cat:"Verbs",conj:"만족해요",lesson:62},
  {k:"학생 중심 수업",e:"student-centered class",cat:"School",lesson:62},
  {k:"기록",e:"record",cat:"Abstract",lesson:62},
  {k:"행복의 정의",e:"the definition of happiness",cat:"Expressions",lesson:62},
  {k:"사랑의 정의",e:"the definition of love",cat:"Expressions",lesson:62},
  {k:"확신할 수 없어요",e:"I can't be certain",cat:"Expressions",lesson:62},
  {k:"안전하다",e:"to be safe",cat:"Adjectives",conj:"안전해요",lesson:62},
  {k:"지역",e:"region / area",cat:"Places",lesson:62},
  {k:"진하다",e:"thick / strong (flavor or color)",cat:"Adjectives",conj:"진해요",lesson:62},
  {k:"연하다",e:"light / mild (flavor or color)",cat:"Adjectives",conj:"연해요",lesson:62},
  {k:"독하다",e:"strong / harsh",cat:"Adjectives",conj:"독해요",lesson:62},
  {k:"순하다",e:"mild / gentle",cat:"Adjectives",conj:"순해요",lesson:62},
  {k:"힘 세다",e:"physically strong",cat:"Adjectives",conj:"힘 세요",lesson:62},
  {k:"피는 물보다 진하다",e:"blood is thicker than water",cat:"Expressions",lesson:62},
  {k:"제한",e:"limit / restriction",cat:"Abstract",lesson:62},
  {k:"백만",e:"one million",cat:"Numbers",lesson:62},
  {k:"백만장자",e:"millionaire",cat:"People",lesson:62},
  {k:"억만장자",e:"billionaire",cat:"People",lesson:62},
  {k:"물가",e:"prices / cost of living",cat:"Abstract",lesson:62},
  {k:"비치발리볼",e:"beach volleyball",cat:"Sports",lesson:62},
  {k:"먹기 대회",e:"eating competition",cat:"Expressions",lesson:62},
  {k:"애교",e:"cuteness / affectionate behavior",cat:"Personality",lesson:62},

  // ── CLASS 063 (2026.04.20) — Emotions, Personality, Time, Life, Verbs ──
  {k:"지쳤어요",e:"I'm exhausted",cat:"Emotions",lesson:63},
  {k:"지긋지긋해요",e:"I'm fed up / sick of it",cat:"Emotions",lesson:63},
  {k:"우울해요",e:"I'm depressed / gloomy",cat:"Emotions",lesson:63},
  {k:"만족해요",e:"I'm satisfied",cat:"Emotions",lesson:63},
  {k:"불만족",e:"dissatisfaction",cat:"Emotions",lesson:63},
  {k:"실망했어요",e:"I'm disappointed",cat:"Emotions",lesson:63},
  {k:"속상해요",e:"I'm upset / bothered",cat:"Emotions",lesson:63},
  {k:"까다로워요",e:"I'm picky / difficult",cat:"Emotions",lesson:63},
  {k:"귀찮다",e:"it's bothersome / annoying",cat:"Emotions",conj:"귀찮아요",lesson:63},
  {k:"슬픔의 고통",e:"the pain of sadness / grief",cat:"Emotions",lesson:63},
  {k:"긍정적인",e:"positive",cat:"Personality",lesson:63},
  {k:"부정적인",e:"negative",cat:"Personality",lesson:63},
  {k:"현실적인",e:"realistic",cat:"Personality",lesson:63},
  {k:"비현실적인",e:"unrealistic",cat:"Personality",lesson:63},
  {k:"초현실적인",e:"surreal / surrealistic",cat:"Personality",lesson:63},
  {k:"논리적인",e:"logical",cat:"Personality",lesson:63},
  {k:"비논리적인",e:"illogical",cat:"Personality",lesson:63},
  {k:"감정적인",e:"emotional",cat:"Personality",lesson:63},
  {k:"이성적인",e:"rational",cat:"Personality",lesson:63},
  {k:"낙관적인",e:"optimistic",cat:"Personality",lesson:63},
  {k:"비관적인",e:"pessimistic",cat:"Personality",lesson:63},
  {k:"매력적",e:"attractive / charming",cat:"Personality",lesson:63},
  {k:"순간",e:"moment / instant",cat:"Time",lesson:63},
  {k:"순간적으로",e:"momentarily / instantly",cat:"Time",lesson:63},
  {k:"마지막 순간에",e:"at the last moment",cat:"Expressions",lesson:63},
  {k:"요전날",e:"the other day",cat:"Time",lesson:63},
  {k:"자기 전에",e:"before sleeping",cat:"Expressions",lesson:63},
  {k:"생활",e:"daily life / lifestyle",cat:"Daily Life",lesson:63},
  {k:"현실",e:"reality",cat:"Abstract",lesson:63},
  {k:"불면증",e:"insomnia",cat:"Health",lesson:63},
  {k:"논리",e:"logic",cat:"Abstract",lesson:63},
  {k:"에피소드",e:"episode / anecdote",cat:"Conversation",lesson:63},
  {k:"충고",e:"advice",cat:"Conversation",lesson:63},
  {k:"주제",e:"topic / subject",cat:"Abstract",lesson:63},
  {k:"언어",e:"language",cat:"Abstract",lesson:63},
  {k:"어조",e:"tone (of voice)",cat:"Conversation",lesson:63},
  {k:"실물",e:"the real thing / in person",cat:"Conversation",lesson:63},
  {k:"헛소리",e:"nonsense / rubbish",cat:"Conversation",lesson:63},
  {k:"계속되다",e:"to continue / keep going",cat:"Verbs",conj:"계속돼요",lesson:63},
  {k:"풀다",e:"to solve / untangle",cat:"Verbs",conj:"풀어요",lesson:63},
  {k:"질문하다",e:"to ask a question",cat:"Verbs",conj:"질문해요",lesson:63},
  {k:"물어보다",e:"to ask / inquire",cat:"Verbs",conj:"물어봐요",lesson:63},
  {k:"살 빼다",e:"to lose weight",cat:"Verbs",conj:"살 빼요",lesson:63},
  {k:"살 찌다",e:"to gain weight",cat:"Verbs",conj:"살 쪄요",lesson:63},
  {k:"이발소",e:"barbershop",cat:"Places",lesson:63},
  {k:"미용실",e:"hair salon",cat:"Places",lesson:63},
  {k:"문구점",e:"stationery shop",cat:"Places",lesson:63},
  {k:"경우에 따라 달라요",e:"it depends on the situation",cat:"Expressions",lesson:63},
  {k:"주제에 따라 달라요",e:"it depends on the topic",cat:"Expressions",lesson:63},
  {k:"기대 높으면 항상 실망해요",e:"high expectations always lead to disappointment",cat:"Expressions",lesson:63},
  {k:"-하니까 말인데",e:"speaking of ~ / since you mention ~",cat:"Expressions",lesson:63},
  {k:"나라면 -(으)겠어요",e:"if I were you, I would… (hypothetical advice)",cat:"Grammar Particles",lesson:63},
  {k:"-는 게 좋을 것 같아요",e:"I think it would be good to… (soft suggestion)",cat:"Grammar Particles",lesson:63},
];

const GRAMMAR = [
  {pattern:"-아/어야 해요", meaning:"Have to / Must", examples:[
    {k:"수업 준비해야 해요.",e:"I have to prepare for class."},
    {k:"한국어 공부를 더 해야 해요.",e:"I need to study more Korean."},
    {k:"약을 먹어야 해요.",e:"I must take medicine."}
  ]},
  {pattern:"안 -아/어도 돼요", meaning:"Don't have to", examples:[
    {k:"오늘 운동 안 해도 돼요.",e:"I don't have to work out today."},
    {k:"주말에는 일 안 해도 돼요.",e:"I don't have to work on weekends."},
    {k:"안 와도 돼요.",e:"You don't have to come."}
  ]},
  {pattern:"-(으)면 안 돼요", meaning:"Must not / Not allowed", examples:[
    {k:"수업 중에 핸드폰 쓰면 안 돼요.",e:"You can't use your phone during class."},
    {k:"너무 늦게 자면 안 돼요.",e:"I shouldn't go to bed too late."},
    {k:"여기서 담배 피우면 안 돼요.",e:"You must not smoke here."}
  ]},
  {pattern:"-아/어도 돼요", meaning:"It's okay to / May I", examples:[
    {k:"지금 커피 마셔도 돼요?",e:"Can I drink coffee now?"},
    {k:"사진 찍어도 돼요.",e:"You're allowed to take photos."}
  ]},
  {pattern:"-아/어도", meaning:"Even if", examples:[
    {k:"바빠도 운동해요.",e:"Even if I'm busy, I work out."},
    {k:"피곤해도 출근해요.",e:"Even if I'm tired, I go to work."},
    {k:"비가 와도 갈 거예요.",e:"Even if it rains, I'll go."}
  ]},
  {pattern:"-더라도", meaning:"Even if (stronger)", examples:[
    {k:"피곤하더라도 한국어 공부해요.",e:"Even if I'm tired, I study Korean."},
    {k:"비싸더라도 사고 싶어요.",e:"Even if it's expensive, I want to buy it."}
  ]},
  {pattern:"아무리 -아/어도", meaning:"No matter how", examples:[
    {k:"아무리 바빠도 커피는 마셔요.",e:"No matter how busy I am, I drink coffee."},
    {k:"아무리 배불러도 디저트는 먹어요.",e:"No matter how full I am, I eat dessert."}
  ]},
  {pattern:"-(으)면 -ㄹ/을수록 더", meaning:"The more... the more...", examples:[
    {k:"많으면 많을수록 더 좋아요.",e:"The more the better."},
    {k:"공부할수록 더 어려워요.",e:"The more I study, the harder it gets."}
  ]},
  {pattern:"-(으)려고 해요", meaning:"Plan / intend to", examples:[
    {k:"다음 주에 제주도에 가려고 해요.",e:"I plan to go to Jeju next week."},
    {k:"이력서를 업데이트하려고 해요.",e:"I'm trying to update my résumé."},
    {k:"이사하려고 해요.",e:"I'm planning to move."}
  ]},
  {pattern:"-기로 했어요", meaning:"Decided to", examples:[
    {k:"사진 찍기로 했어요.",e:"I decided to take photos."},
    {k:"이사하기로 했어요.",e:"I decided to move."},
    {k:"5일 동안 가기로 했어요.",e:"I decided to go for 5 days."}
  ]},
  {pattern:"-ㄹ/을까 해요", meaning:"Thinking of / considering", examples:[
    {k:"친구 만날까 해요.",e:"I'm thinking of meeting a friend."},
    {k:"여행 갈까 해요.",e:"I'm considering going on a trip."}
  ]},
  {pattern:"-ㄹ/을 생각이에요", meaning:"Planning to", examples:[
    {k:"이번 주말에 쉴 생각이에요.",e:"I'm planning to rest this weekend."},
    {k:"한국어 더 공부할 생각이에요.",e:"I'm planning to study more Korean."}
  ]},
  {pattern:"-ㄹ/을 예정이에요", meaning:"Scheduled / planned to", examples:[
    {k:"내일 면접 볼 예정이에요.",e:"I'm scheduled to have an interview tomorrow."},
    {k:"다음 달에 이사할 예정이에요.",e:"I'm planned to move next month."}
  ]},
  {pattern:"-ㄹ/을지도 몰라요", meaning:"Might / maybe", examples:[
    {k:"비 올지도 몰라요.",e:"It might rain."},
    {k:"늦을지도 몰라요.",e:"I might be late."},
    {k:"취소될지도 몰라요.",e:"It might get cancelled."}
  ]},
  {pattern:"-곤 했어요", meaning:"Used to (past habit)", examples:[
    {k:"대학교 때 많이 쓰곤 했어요.",e:"I used to write a lot in college."},
    {k:"학교 끝나고 친구랑 놀곤 했어요.",e:"I used to hang out with friends after school."}
  ]},
  {pattern:"-아/어지다", meaning:"Become / get (change of state)", examples:[
    {k:"좋아졌어요.",e:"It got better."},
    {k:"비싸졌어요.",e:"It became expensive."},
    {k:"날씬해졌어요.",e:"Became slimmer."}
  ]},
  {pattern:"-게 되다", meaning:"Ended up / came to", examples:[
    {k:"한국에서 오래 살게 됐어요.",e:"I ended up living in Korea for a long time."},
    {k:"한국말하게 됐어요.",e:"I ended up speaking Korean."}
  ]},
  {pattern:"-자마자", meaning:"As soon as", examples:[
    {k:"집에 오자마자 샤워해요.",e:"I shower as soon as I get home."},
    {k:"일어나자마자 커피 마셔요.",e:"I drink coffee as soon as I wake up."},
    {k:"보자마자 사랑에 빠졌어요.",e:"I fell in love as soon as I saw it."}
  ]},
  {pattern:"-기로는 / 알기로는", meaning:"As far as I know / remember / heard", examples:[
    {k:"제가 알기로는…",e:"As far as I know…"},
    {k:"제가 기억하기로는…",e:"As far as I remember…"},
    {k:"제가 듣기로는…",e:"As far as I heard…"}
  ]},
  {pattern:"-에 까다로워요", meaning:"Picky about", examples:[
    {k:"저는 커피에 까다로워요.",e:"I'm picky about coffee."},
    {k:"저는 음식에 까다로워요.",e:"I'm picky about food."}
  ]},
  {pattern:"-ㄴ/은 적 있어요", meaning:"Have ever done", examples:[
    {k:"부산 불꽃 축제를 본 적 있어요.",e:"I've seen the Busan Fireworks Festival."},
    {k:"제주도에 간 적 있어요.",e:"I've been to Jeju."}
  ]},
  {pattern:"-았/었을 거예요", meaning:"Probably did / Must have", examples:[
    {k:"그 사람은 이미 갔을 거예요.",e:"That person probably already left."},
    {k:"피곤했을 거예요.",e:"You must have been tired."}
  ]},
  {pattern:"-ㄹ/을 때마다", meaning:"Every time", examples:[
    {k:"바닷가에 갈 때마다 사진을 찍어요.",e:"Every time I go to the beach, I take photos."},
    {k:"한국어 공부할 때마다 새로운 걸 배워요.",e:"Every time I study Korean, I learn something new."}
  ]},
  {pattern:"-면에서", meaning:"In terms of / from the perspective of", examples:[
    {k:"건강 면에서 운동이 중요해요.",e:"Exercise is important in terms of health."},
    {k:"월급 면에서 그 학교가 더 좋아요.",e:"In terms of salary, that school is better."}
  ]},
  {pattern:"상황에 따라 달라요", meaning:"It depends on the situation", examples:[
    {k:"상황에 따라 달라요.",e:"It depends on the situation."},
    {k:"날에 따라 달라요.",e:"It depends on the day."}
  ]},
  {pattern:"A보다 B를 선호해요", meaning:"I prefer B over A", examples:[
    {k:"커피보다 차를 선호해요.",e:"I prefer tea over coffee."},
    {k:"단체 활동보다 혼자 있는 걸 선호해요.",e:"I prefer being alone to group activities."}
  ]},
  {pattern:"-에 따르면", meaning:"According to", examples:[
    {k:"기사에 따르면 내일 비가 와요.",e:"According to the article, it will rain tomorrow."},
    {k:"친구 말에 따르면 그 카페가 좋아요.",e:"According to my friend, that café is good."}
  ]},
  {pattern:"제 경우에는", meaning:"In my case / In the case of", examples:[
    {k:"제 경우에는 아침에 공부가 잘 돼요.",e:"In my case, studying works best in the morning."},
    {k:"늦을 경우에는 미리 연락할게요.",e:"If I'm late, I'll contact you in advance."}
  ]},
  {pattern:"가지고 가다 / 데리고 가다", meaning:"Take / Bring (things vs people)", examples:[
    {k:"노트북 가지고 가요.",e:"I'll take my laptop."},
    {k:"아이들을 데리고 가요.",e:"I'll take the kids."}
  ]},
  {pattern:"-(으)니까", meaning:"Because / So (therefore)", examples:[
    {k:"금요일이니까 한 잔 하자.",e:"It's Friday, so let's have a drink."},
    {k:"배고프니까 밥 먹자.",e:"I'm hungry, so let's eat."}
  ]},
  {pattern:"-기 때문에", meaning:"Because of / Due to", examples:[
    {k:"비가 오기 때문에 밖에 나갈 수 없어요.",e:"I can't go out because it's raining."},
    {k:"열심히 공부했기 때문에 시험을 잘 봤어요.",e:"I did well on the exam because I studied hard."}
  ]},
  {pattern:"-ㄴ/은지 됐어요", meaning:"How long has it been since", examples:[
    {k:"감기 걸린 지 얼마나 됐어요?",e:"How long has it been since you caught a cold?"},
    {k:"한국에 온 지 얼마나 됐어요?",e:"How long has it been since you came to Korea?"}
  ]},
  {pattern:"-는 것 같아요", meaning:"Seems like / I think", examples:[
    {k:"학생인 것 같아요.",e:"They seem like a student."},
    {k:"비가 오는 것 같아요.",e:"It seems like it's raining."},
    {k:"슬픈 것 같아요.",e:"They seem sad."}
  ]},
  {pattern:"-기에는 너무", meaning:"Too... to", examples:[
    {k:"이 카메라는 매일 쓰기에는 너무 무거워요.",e:"This camera is too heavy to use every day."},
    {k:"이 가방은 여행하기에는 너무 작아요.",e:"This bag is too small to travel with."}
  ]},
  {pattern:"-는 동안", meaning:"While", examples:[
    {k:"영화 보는 동안 많이 감동했어요.",e:"While watching the movie, I was very moved."},
    {k:"사진 찍는 동안 음악을 들어요.",e:"I listen to music while taking photos."}
  ]},
  {pattern:"-기 위해서", meaning:"In order to", examples:[
    {k:"한국어를 잘하기 위해서 매일 공부해요.",e:"I study every day in order to improve my Korean."},
    {k:"건강하기 위해서 운동해요.",e:"I exercise in order to be healthy."}
  ]},
  {pattern:"A(이)라는 B", meaning:"B called A", examples:[
    {k:"딜런이라는 미국 남자예요.",e:"He's an American man called Dylan."},
    {k:"BHA라는 학교에 다녀요.",e:"I go to a school called BHA."}
  ]},
  {pattern:"-는 한 / (으)ㄴ 한", meaning:"As long as", examples:[
    {k:"열심히 공부하는 한 좋은 결과가 있을 거예요.",e:"As long as I study hard, there will be good results."},
    {k:"건강이 괜찮은 한 계속 일할 수 있어요.",e:"As long as my health is okay, I can keep working."}
  ]},
  {pattern:"-(이/가) 아니라", meaning:"Not A but B", examples:[
    {k:"영어 선생님이 아니라 코딩 선생님이에요.",e:"I'm not an English teacher, I'm a coding teacher."},
    {k:"화난 게 아니라 피곤해요.",e:"I'm not angry, I'm tired."}
  ]},
  {pattern:"말고 / 말고는 / 말고도", meaning:"Except / Instead of / Besides", examples:[
    {k:"월요일 말고 화요일 만나요.",e:"Let's meet Tuesday instead of Monday."},
    {k:"커피 말고도 차도 좋아해요.",e:"Besides coffee, I also like tea."}
  ]},
  {pattern:"-에 관심 있어요", meaning:"Interested in", examples:[
    {k:"과학에 제법 관심 있어요.",e:"I'm fairly interested in science."},
    {k:"정치에 별로 관심 없어요.",e:"I'm not really interested in politics."}
  ]},
  {pattern:"-게 하다", meaning:"Make someone do / cause to", examples:[
    {k:"학생들이 발표하게 했어요.",e:"I made the students present."},
    {k:"선생님이 저를 웃게 했어요.",e:"The teacher made me laugh."}
  ]},
  {pattern:"-ㄴ/은지 알다/모르다", meaning:"Know whether / Indirect questions", examples:[
    {k:"누구인지 몰라요.",e:"I don't know who it is."},
    {k:"언제 오는지 알아요?",e:"Do you know when they're coming?"}
  ]},
  {pattern:"꼭 그런 건 아니에요", meaning:"It's not necessarily like that", examples:[
    {k:"한국 사람들이 다 경쟁적인 건 아니에요.",e:"Not all Koreans are competitive."},
    {k:"항상 그런 건 아니에요.",e:"It's not always like that."}
  ]},
  {pattern:"-아/어 보다", meaning:"To try doing", examples:[
    {k:"피아노 해 봤어요.",e:"I tried playing the piano."},
    {k:"한국 음식 먹어 봤어요?",e:"Have you tried Korean food?"}
  ]},
  {pattern:"실수로 vs 고의로", meaning:"By mistake vs on purpose", examples:[
    {k:"실수로 이메일을 보냈어요.",e:"I sent the email by mistake."},
    {k:"고의로 그런 건 아니에요.",e:"I didn't do it on purpose."}
  ]},
  {pattern:"초/중/말", meaning:"Early / Mid / Late (periods)", examples:[
    {k:"11월 초 — early November",e:"11월 말 — late November"},
    {k:"20대 초반 — early 20s",e:"30대 중반 — mid-30s"}
  ]},
  {pattern:"-ㄴ/는/ㄹ 줄 알다/모르다", meaning:"I thought / I didn't know (assumption)", examples:[
    {k:"캐나다 사람인 줄 알았어요.",e:"I thought you were Canadian."},
    {k:"바쁜 줄 알았어요.",e:"I thought you were busy."},
    {k:"고기 먹는 줄 알았어요.",e:"I thought you ate meat."},
    {k:"결혼한 줄 몰랐어요.",e:"I didn't know you were married."},
    {k:"비 올 줄 몰랐어요.",e:"I didn't know it would rain."}
  ]},
  {pattern:"나라면 -(으)겠어요", meaning:"If I were you, I would… (hypothetical advice)", examples:[
    {k:"나라면 커피 안 마시겠어요.",e:"If I were you, I wouldn't drink coffee."},
    {k:"나라면 일찍 자겠어요.",e:"If I were you, I would sleep early."},
    {k:"나라면 그렇게 안 하겠어요.",e:"If I were you, I wouldn't do it that way."}
  ]},
  {pattern:"-는 게 좋을 것 같아요", meaning:"I think it would be good to… (soft suggestion)", examples:[
    {k:"자기 전에 핸드폰 안 쓰는 게 좋을 것 같아요.",e:"I think it would be good not to use your phone before sleeping."},
    {k:"운동을 좀 하는 게 좋을 것 같아요.",e:"I think it would be good to exercise a bit."},
    {k:"먼저 이야기하는 게 좋을 것 같아요.",e:"I think it would be good to talk first."}
  ]},
];

const LESSON_SEQUENCE = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,24,25,26,27,28,29,30,32,33,34,36,37,39,40,41,42,43,44,56,57,58,59,60,61,62,63];