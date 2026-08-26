import type { FAQItem } from '../types';

export interface ClientStory {
  title: string;
  text: string;
  quote: string;
}

export interface LocationProcessStep {
  step: string;
  description: string;
}

export interface LocationContent {
  name: string;
  slug: string;
  heroTitle: string;
  heroSubtitle: string;
  seoTitle: string;
  seoDescription: string;
  environment: string;
  whyUs: [string, string];
  clientStories: ClientStory[];
  whatSetsUsApart: string;
  process: LocationProcessStep[];
  founderText: string;
  faqs: FAQItem[];
}

const DEFAULT_PROCESS: LocationProcessStep[] = [
  { step: 'Book Online or by Phone', description: 'Tell us your vehicle, package, and preferred time — most appointments are confirmed within 24 hours.' },
  { step: 'We Arrive Fully Equipped', description: 'Our self-contained van brings its own water and power, so no setup is needed on your end.' },
  { step: 'Assessment & Walkthrough', description: 'We do a quick walkaround with you to note any specific concerns before starting.' },
  { step: 'Detailing Service', description: 'We complete your selected package on-site, typically in 1-4 hours depending on scope.' },
  { step: 'Final Walkthrough & Payment', description: 'We review the results with you and collect payment only once you are satisfied.' },
];

const FOUNDER_TEXT =
  "Albuquerque Detailing Pros was built around one idea: New Mexico's climate is uniquely hard on vehicles, and most detailing services weren't designed for it. We built our process specifically around the sun, dust, and hard water our neighbors deal with every day.";

export const locationContent: LocationContent[] = [
  {
    name: 'Albuquerque',
    slug: 'albuquerque',
    heroTitle: 'Mobile Auto Detailing in Albuquerque, NM',
    heroSubtitle: 'Professional detailing that comes to your driveway, office, or job site anywhere in the metro.',
    seoTitle: 'Mobile Auto Detailing Albuquerque NM | Albuquerque Detailing Pros',
    seoDescription:
      'Professional mobile auto detailing in Albuquerque, NM. Interior detailing, ceramic coating, and paint correction that comes to you. Book online today.',
    environment:
      "Albuquerque's high desert elevation means intense UV exposure, dry air, and seasonal dust that ages paint and interiors faster than milder climates.",
    whyUs: [
      "We built our business around Albuquerque's specific conditions — the sun that fades interiors, the dust that scratches paint if wiped instead of washed, and the hard water that etches into a hood left un-dried in the sun.",
      'As a locally based, mobile-only operation, we know which neighborhoods deal with more dust, which HOAs restrict at-home washing, and how to schedule around the city\'s traffic patterns to get to you on time.',
    ],
    clientStories: [
      {
        title: 'A Nob Hill Daily Driver',
        text: 'A customer near Nob Hill had gone over a year without a professional detail on their commuter car. We started with a Gold Standard package to reset the baseline.',
        quote: "I didn't realize how much dust had built up in my vents until it was gone. Car feels brand new.",
      },
      {
        title: 'A Downtown Professional\'s Schedule',
        text: 'A downtown Albuquerque professional needed service that didn\'t require taking time off work. We detailed the vehicle in their office parking garage during the day.',
        quote: 'I never had to leave my desk. That alone is worth it.',
      },
      {
        title: 'Pre-Sale Detail in the Northeast Heights',
        text: 'Before listing a vehicle for sale, a Northeast Heights customer booked our Masterpiece Detail to maximize their asking price.',
        quote: 'Sold within a week of listing, and I think the detail made a real difference in the photos.',
      },
    ],
    whatSetsUsApart:
      'We are mobile-only, self-contained, and built our process around Albuquerque conditions specifically — not a generic detailing checklist imported from a different climate.',
    process: DEFAULT_PROCESS,
    founderText: FOUNDER_TEXT,
    faqs: [
      { question: 'Do you serve all of Albuquerque, including the Northeast Heights and West Side?', answer: 'Yes, we serve the entire Albuquerque metro including the Northeast Heights, West Side, Downtown, and surrounding neighborhoods.' },
      { question: 'How quickly can I get an appointment in Albuquerque?', answer: 'Most Albuquerque appointments are available within 2-4 business days, sometimes sooner.' },
      { question: 'Do you handle HOA communities in Albuquerque?', answer: 'Yes, our self-contained vans comply with most HOA restrictions on at-home washing since we bring our own water and power.' },
      { question: 'What if I am at work during the day?', answer: 'We can detail your vehicle at your office parking lot or garage — many Albuquerque customers book daytime appointments while at work.' },
    ],
  },
  {
    name: 'Rio Rancho',
    slug: 'rio-rancho',
    heroTitle: 'Mobile Auto Detailing in Rio Rancho, NM',
    heroSubtitle: 'Skip the drive into Albuquerque — professional detailing comes directly to your Rio Rancho driveway.',
    seoTitle: 'Mobile Auto Detailing Rio Rancho NM | Albuquerque Detailing Pros',
    seoDescription:
      'Mobile car detailing in Rio Rancho, NM. Full detail, ceramic coating, and interior cleaning at your home or office. Book your Rio Rancho appointment today.',
    environment:
      "Rio Rancho's mesa-top location means more direct wind exposure and construction dust from the city's continued growth, both hard on parked vehicles.",
    whyUs: [
      'Rio Rancho residents already deal with a longer commute into Albuquerque for work and errands — we remove one more trip by coming directly to you.',
      "We've serviced Rio Rancho's newer developments and older neighborhoods alike, and understand the mesa wind and construction dust unique to the area.",
    ],
    clientStories: [
      {
        title: 'A Growing Family in Rio Rancho',
        text: 'A family with two kids and a dog needed a recurring interior detailing schedule to keep up with daily wear.',
        quote: 'Having them come to us every couple months instead of us driving somewhere has been a game changer.',
      },
      {
        title: 'New Construction Dust',
        text: 'A customer in a newer Rio Rancho development was dealing with heavy construction dust settling on their car daily.',
        quote: 'The ceramic coating made a noticeable difference in how easy it is to keep the dust off now.',
      },
      {
        title: 'Highway Commuter Bug and Tar Removal',
        text: 'A daily highway commuter needed regular front-end bug and tar removal as part of their exterior maintenance.',
        quote: 'They always get the front bumper spotless, which used to be the hardest part to clean myself.',
      },
    ],
    whatSetsUsApart: 'We understand Rio Rancho\'s specific mix of mesa wind exposure and new-development dust, and tailor our exterior process accordingly.',
    process: DEFAULT_PROCESS,
    founderText: FOUNDER_TEXT,
    faqs: [
      { question: 'Do you serve all of Rio Rancho?', answer: 'Yes, including established neighborhoods and newer developments throughout the city.' },
      { question: 'Is mobile detailing allowed in my Rio Rancho HOA?', answer: 'Our self-contained vans typically comply with HOA restrictions on hose-and-bucket washing since we bring our own water and power.' },
      { question: 'How far in advance should I book?', answer: 'We recommend booking 3-5 days ahead, though we can often accommodate sooner.' },
      { question: 'Do you offer recurring service in Rio Rancho?', answer: 'Yes, many Rio Rancho customers set up a recurring schedule every 8-12 weeks.' },
    ],
  },
  {
    name: 'Corrales',
    slug: 'corrales',
    heroTitle: 'Mobile Auto Detailing in Corrales, NM',
    heroSubtitle: 'Detailing built for the dust and rural roads of Corrales.',
    seoTitle: 'Mobile Auto Detailing Corrales NM | Albuquerque Detailing Pros',
    seoDescription:
      'Mobile auto detailing in Corrales, NM, built for the dust and dirt roads of the area. Interior and exterior detailing at your property.',
    environment:
      "Corrales' rural roads, irrigation ditches, and agricultural dust create heavier buildup on vehicles than paved city neighborhoods.",
    whyUs: [
      'Corrales properties often have long dirt or gravel driveways, and we come fully equipped to work in that setting without needing a paved surface.',
      'We understand the unique dust and mud conditions of irrigation season and adjust our exterior process to handle heavier buildup.',
    ],
    clientStories: [
      {
        title: 'A Corrales Horse Property',
        text: 'A customer with a large rural property needed regular detailing to keep up with dust and mud from farm activity.',
        quote: 'They never mind the dirt driveway or the mud — very easy to work with.',
      },
      {
        title: 'Irrigation Season Mud',
        text: 'A Corrales resident near an acequia dealt with recurring mud splash on their vehicle\'s lower panels.',
        quote: 'They know exactly what to focus on around here, way more than a generic car wash.',
      },
      {
        title: 'Protecting an Investment',
        text: 'A Corrales customer wanted ceramic coating specifically to reduce how often mud and dust bonded to the paint.',
        quote: 'Cleanup between details is so much faster now.',
      },
    ],
    whatSetsUsApart: 'We are comfortable working on unpaved driveways and understand Corrales-specific mud and dust conditions that a standard city-based detailer might not.',
    process: DEFAULT_PROCESS,
    founderText: FOUNDER_TEXT,
    faqs: [
      { question: 'Can you work on a dirt or gravel driveway?', answer: 'Yes, our van is fully self-contained and works well on unpaved surfaces.' },
      { question: 'Do you handle heavy mud buildup?', answer: 'Yes, our exterior process is adjusted for heavier mud and dust common in Corrales.' },
      { question: 'How often should I book given the dust here?', answer: 'Many Corrales customers book every 6-8 weeks given the heavier dust and mud exposure.' },
      { question: 'Do you offer ceramic coating for rural properties?', answer: 'Yes, and it is one of our most popular options for Corrales customers dealing with recurring dust and mud.' },
    ],
  },
  {
    name: 'North Valley',
    slug: 'north-valley',
    heroTitle: 'Mobile Auto Detailing in the North Valley',
    heroSubtitle: "Detailing that understands the North Valley's rural charm and dusty roads.",
    seoTitle: 'Mobile Auto Detailing North Valley Albuquerque | Albuquerque Detailing Pros',
    seoDescription:
      'Mobile car detailing in the North Valley of Albuquerque. Interior and exterior detailing built for the dust and unpaved roads of the area.',
    environment:
      "The North Valley's mix of paved and unpaved roads and proximity to agricultural land means heavier seasonal dust than denser city neighborhoods.",
    whyUs: [
      'We know which North Valley streets stay unpaved and adjust scheduling and process to match the heavier dust load in the area.',
      'Many North Valley properties have larger lots and longer driveways — our self-contained van has no trouble accommodating that.',
    ],
    clientStories: [
      {
        title: 'A Los Poblanos-Area Resident',
        text: 'A customer near the North Valley\'s agricultural land needed regular exterior maintenance to keep dust from bonding to paint.',
        quote: 'They always get the wheel wells spotless, which is where all our dust seems to collect.',
      },
      {
        title: 'A Large Family Vehicle',
        text: 'A North Valley family needed a deep interior shampoo after a summer of outdoor activities and pets.',
        quote: 'It genuinely smelled brand new afterward.',
      },
      {
        title: 'Seasonal Maintenance Program',
        text: 'A North Valley customer set up a recurring schedule timed around planting and harvest season dust.',
        quote: 'Having a schedule that adjusts for the season has kept the car looking great year-round.',
      },
    ],
    whatSetsUsApart: 'We tailor our exterior process for the North Valley\'s unpaved roads and agricultural dust rather than applying a one-size-fits-all city wash.',
    process: DEFAULT_PROCESS,
    founderText: FOUNDER_TEXT,
    faqs: [
      { question: 'Do you serve properties near Los Poblanos and the acequias?', answer: 'Yes, we regularly service the North Valley including properties near agricultural land and irrigation ditches.' },
      { question: 'How do you handle heavier dust here?', answer: 'We adjust our wash process, including extra rinse steps, to safely remove heavier dust without scratching.' },
      { question: 'Can you work on a longer or unpaved driveway?', answer: 'Yes, our self-contained van works well on unpaved and gravel driveways.' },
      { question: 'What package do you recommend for North Valley properties?', answer: 'Many customers start with Gold Standard and add ceramic coating given the seasonal dust exposure.' },
    ],
  },
  {
    name: 'Tanoan',
    slug: 'tanoan',
    heroTitle: 'Mobile Auto Detailing in Tanoan',
    heroSubtitle: 'HOA-friendly, self-contained mobile detailing for the Tanoan community.',
    seoTitle: 'Mobile Auto Detailing Tanoan Albuquerque | Albuquerque Detailing Pros',
    seoDescription:
      'Mobile auto detailing for the Tanoan community in Albuquerque. HOA-compliant, self-contained service at your home.',
    environment:
      "Tanoan's established, tree-lined streets see less dust than outer neighborhoods but still face intense UV exposure on daily drivers and weekend vehicles alike.",
    whyUs: [
      'Tanoan\'s HOA guidelines restrict at-home vehicle washing — our self-contained vans bring their own water and power, keeping service fully compliant.',
      'We regularly service enthusiast and luxury vehicles in the Tanoan area and take extra care with paint correction and ceramic coating on higher-end finishes.',
    ],
    clientStories: [
      {
        title: 'A Weekend Sports Car',
        text: 'A Tanoan customer with a weekend-only sports car wanted ceramic coating to keep it protected between infrequent drives.',
        quote: 'It sits most of the week, so the ceramic coating keeping dust and UV off has been perfect.',
      },
      {
        title: 'HOA-Compliant Regular Service',
        text: 'A Tanoan resident needed a washing solution that complied with community guidelines against hose washing at home.',
        quote: 'Didn\'t realize a mobile detailer could solve our HOA rule until we found them.',
      },
      {
        title: 'A Full Fleet of Family Vehicles',
        text: 'A Tanoan family with three vehicles set up a recurring schedule to rotate through all of them monthly.',
        quote: 'Scheduling all three together each month has been seamless.',
      },
    ],
    whatSetsUsApart: 'Our self-contained equipment keeps us HOA-compliant in communities like Tanoan, and we bring extra care to higher-end and enthusiast vehicles.',
    process: DEFAULT_PROCESS,
    founderText: FOUNDER_TEXT,
    faqs: [
      { question: 'Is your service compliant with Tanoan HOA rules?', answer: 'Yes, our self-contained vans do not use your home water or power, keeping us compliant with most HOA restrictions on at-home washing.' },
      { question: 'Do you work on luxury or enthusiast vehicles?', answer: 'Yes, we regularly detail higher-end vehicles and take extra care with paint correction and coating application.' },
      { question: 'Can you service multiple vehicles in one visit?', answer: 'Yes, many Tanoan households book multiple vehicles in a single appointment window.' },
      { question: 'How often should a weekend-only vehicle be detailed?', answer: 'Every 3-4 months is typical for vehicles driven infrequently, with ceramic coating to protect it between uses.' },
    ],
  },
  {
    name: 'Paradise Hills',
    slug: 'paradise-hills',
    heroTitle: 'Mobile Auto Detailing in Paradise Hills',
    heroSubtitle: 'Convenient mobile detailing for the Paradise Hills neighborhood of Albuquerque.',
    seoTitle: 'Mobile Auto Detailing Paradise Hills Albuquerque | Albuquerque Detailing Pros',
    seoDescription:
      'Mobile car detailing serving Paradise Hills in Albuquerque, NM. Full interior and exterior detailing at your home or workplace.',
    environment:
      "Paradise Hills sits on the West Side mesa with significant wind and sun exposure, common causes of paint fading and dust accumulation on outdoor-parked vehicles.",
    whyUs: [
      "West Side mesa winds carry more dust than sheltered valley neighborhoods, and we adjust our wash process to safely handle that heavier buildup.",
      'Many Paradise Hills homes lack covered parking, making UV protection like ceramic coating especially valuable here.',
    ],
    clientStories: [
      {
        title: 'A Driveway Without Cover',
        text: 'A Paradise Hills customer with no garage or carport wanted long-term UV protection for their daily driver.',
        quote: 'The ceramic coating has kept the paint looking new despite parking outside every day.',
      },
      {
        title: 'A Work Truck Fleet',
        text: 'A small contracting business based in Paradise Hills set up recurring exterior washing for its work trucks.',
        quote: 'Keeps our trucks looking professional without anyone having to leave the job site.',
      },
      {
        title: 'Mesa Wind Dust Buildup',
        text: 'A resident dealing with frequent dust from mesa winds switched to a shorter maintenance wash interval.',
        quote: 'Between visits the car barely collects dust anymore.',
      },
    ],
    whatSetsUsApart: 'We account for the West Side mesa\'s wind and sun exposure with an adjusted wash process and a strong recommendation for UV-protective coatings.',
    process: DEFAULT_PROCESS,
    founderText: FOUNDER_TEXT,
    faqs: [
      { question: 'Do you serve the entire Paradise Hills area?', answer: 'Yes, we cover all of Paradise Hills and the surrounding West Side.' },
      { question: 'Is ceramic coating especially useful here?', answer: 'Yes, given how many homes in the area lack covered parking, ceramic coating provides valuable UV and dust protection.' },
      { question: 'Do you service work trucks and small business fleets?', answer: 'Yes, we offer recurring fleet programs for small businesses based in Paradise Hills and the West Side.' },
      { question: 'How often should I book given the mesa wind?', answer: 'We recommend every 6-8 weeks for vehicles regularly exposed to mesa wind and dust.' },
    ],
  },
  {
    name: 'Los Ranchos',
    slug: 'los-ranchos',
    heroTitle: 'Mobile Auto Detailing in Los Ranchos de Albuquerque',
    heroSubtitle: 'Detailing tailored to the rural, tree-lined character of Los Ranchos.',
    seoTitle: 'Mobile Auto Detailing Los Ranchos Albuquerque | Albuquerque Detailing Pros',
    seoDescription:
      'Mobile auto detailing serving Los Ranchos de Albuquerque. Interior and exterior detailing built for the area\'s rural roads and agricultural surroundings.',
    environment:
      "Los Ranchos' quiet, rural streets and proximity to farmland mean seasonal dust and occasional mud, similar to nearby Corrales and the North Valley.",
    whyUs: [
      'We regularly service the Los Ranchos community and understand its mix of paved streets and rural, agricultural surroundings.',
      'Larger properties are common here, and our self-contained van comfortably handles long driveways and multiple vehicles per visit.',
    ],
    clientStories: [
      {
        title: 'A Multi-Vehicle Rural Property',
        text: 'A Los Ranchos property with several vehicles set up a rotating monthly detailing schedule.',
        quote: 'Having them handle all our vehicles on one schedule has simplified things a lot.',
      },
      {
        title: 'Seasonal Farmland Dust',
        text: 'A resident near agricultural land needed more frequent exterior washing during dry, windy months.',
        quote: 'They adjusted our schedule for the dustier months without us even having to ask.',
      },
      {
        title: 'A Family Truck Restoration',
        text: 'A Los Ranchos customer wanted paint correction and ceramic coating on an older family truck.',
        quote: 'Didn\'t expect it to look this good again — really impressed with the correction work.',
      },
    ],
    whatSetsUsApart: 'We bring the same rural-road, agricultural-dust expertise here that we use in Corrales and the North Valley, with flexible scheduling for larger properties.',
    process: DEFAULT_PROCESS,
    founderText: FOUNDER_TEXT,
    faqs: [
      { question: 'Do you serve Los Ranchos de Albuquerque?', answer: 'Yes, we regularly service the Los Ranchos community.' },
      { question: 'Can you handle multiple vehicles on a large property?', answer: 'Yes, we routinely service multiple vehicles in a single visit for larger properties.' },
      { question: 'How does seasonal dust affect scheduling?', answer: 'We can adjust your recurring schedule for drier, dustier months common in the area.' },
      { question: 'Do you offer paint correction for older vehicles?', answer: 'Yes, paint correction and ceramic coating are popular for restoring the look of older, well-loved vehicles.' },
    ],
  },
  {
    name: 'Sandia Heights',
    slug: 'sandia-heights',
    heroTitle: 'Mobile Auto Detailing in Sandia Heights',
    heroSubtitle: 'Foothills detailing built for elevation, sun, and mountain dust.',
    seoTitle: 'Mobile Auto Detailing Sandia Heights Albuquerque | Albuquerque Detailing Pros',
    seoDescription:
      'Mobile car detailing serving Sandia Heights in the Albuquerque foothills. Full interior and exterior detailing at your home.',
    environment:
      "Sandia Heights sits at the base of the Sandia Mountains at a higher elevation, meaning even more intense UV exposure and mountain-blown dust than the valley floor below.",
    whyUs: [
      'Higher elevation means stronger UV exposure — we recommend UV-protectant interior treatments and ceramic coating more strongly for Sandia Heights vehicles than valley locations.',
      'Steep driveways and foothill terrain are no obstacle for our self-contained mobile setup.',
    ],
    clientStories: [
      {
        title: 'A Foothills Home With No Garage',
        text: 'A Sandia Heights customer parking outdoors year-round wanted maximum UV protection for their vehicle.',
        quote: 'The interior UV treatment has made a real difference — no more fading on the dash.',
      },
      {
        title: 'Mountain Dust and Wind',
        text: 'A resident dealing with wind-blown dust off the mountain needed more frequent exterior maintenance washing.',
        quote: 'They know exactly why our cars get dusty faster up here.',
      },
      {
        title: 'A Steep Driveway, No Problem',
        text: 'A customer with a steep foothills driveway wasn\'t sure a mobile service could work there.',
        quote: 'They handled our driveway without any issue at all.',
      },
    ],
    whatSetsUsApart: 'We factor in the added elevation and UV intensity of the foothills, recommending stronger protection than we would for valley-floor vehicles.',
    process: DEFAULT_PROCESS,
    founderText: FOUNDER_TEXT,
    faqs: [
      { question: 'Do you service the Sandia Heights foothills area?', answer: 'Yes, including steep driveways and foothill terrain.' },
      { question: 'Is UV protection more important at this elevation?', answer: 'Yes, higher elevation means more intense UV exposure, so we recommend stronger interior UV treatment and ceramic coating here.' },
      { question: 'Can your van handle a steep driveway?', answer: 'Yes, our self-contained van and equipment work well on steep or uneven foothill driveways.' },
      { question: 'How often should I book given the mountain dust?', answer: 'Every 6-8 weeks is typical for vehicles exposed to regular mountain wind and dust.' },
    ],
  },
];
