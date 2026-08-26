export type WritingSample = {
  key: string;
  title: string;
  type: string;
  year: string;
  description: string;
  body: { id: string; text: string }[];
  worksCited?: { id: string; text: string }[];
  hasFullText: boolean;
};

export const writingSamples: WritingSample[] = [
  {
    key: 'farscape-intelligent-fiction',
    title: 'Farscape: Intelligent Fiction',
    type: 'Cultural / Critical Writing',
    year: '2004',
    description:
      'A critical examination of how Farscape transforms familiar science-fiction conventions through inventive storytelling, character interaction, humor, and an unusually candid approach to human experience.',
    hasFullText: true,
    body: [
      {
        id: 'p-1',
        text: 'Science fiction is a popular genre in television. For more than fifty years, sci-fi shows have been viewed with excitement and fear of "what could be." The possibilities for exciting plotlines and characters are infinite in the contexts of unknown futures and foreign galaxies. The Twilight Zone, The Outer Limits, Lost In Space, Star Trek, Space 1999, Battlestar Galactica, Star Trek: The Next Generation, The X-Files, and numerous others have sparked imaginations and garnered a large share of ratings through the years, even in syndication. Clearly, there have been numerous successful television shows exploring these endless possible themes, but the most intelligent and interesting of them is Farscape, produced by the Henson Company and presented on the Sci-Fi Channel from March 1999 through March 2003.',
      },
      {
        id: 'p-2',
        text: 'The show features a large array of characters, mostly alien, frequently puppets, and all from different races. This series focuses on a young man from Earth named John Crichton. He\'s a second-generation NASA astronaut, although, in this not too distant future, NASA is called IASA (International replacing National). "The Farscape Mission" is a new space shuttle that John has helped to design and will solitarily man. Of course, things don\'t go as planned. Once his orbit is established, he hits an electro-magnetic wave and slips into a turbulent wormhole. He emerges into a full-fledged alien battle. In the melee, he accidentally collides with another ship. His shuttle is damaged and the other ship explodes, killing the pilot. His only hope is to dock on the large ship at the center of the fracas. Crichton successfully enters the ship\'s bay and is escorted to his alien-tongued captors. He\'s hostilely injected with "translator microbes" by a small horseshoe-crab-shaped android, allowing him to understand their languages. This large spaceship is a "living" bio-mechanoid prison transport named Moya. The ship\'s prisoners speak of their former captors, a race similar to humans called Sebacians, and their military force, the Peacekeepers. John is lost on the other side of the universe, and the Peacekeeper commander is seeking revenge for the death of his brother, the man Crichton involuntarily killed.',
      },
      {
        id: 'p-3',
        text: 'Through the imaginative characters, the Farscape writers build a surreal reality. The prisoners and consequent recurring characters of the show include: Aeryn Sun, a member of the Peacekeeper corps accidentally trapped on Moya; Ka D\'Argo, a huge, fierce warrior of the Luxan race; Pa\'u Zotoh Zhaan, a blue-skinned priestess from the Delvian race; Chiana, a white-skinned, street-smart girl of the Nebari race; Rygel XVI, a former sovereign of the Hynerian race portrayed by an elf-like puppet; and Pilot, a crustaceous-looking creature and Moya\'s control center, also a puppet.',
      },
      {
        id: 'p-4',
        text: 'In the opening of Out of Their Minds from the second season, an alien ship targets Moya and the reasons for the attack are unclear. D\'Argo is frantically trying to patch the defense system together, but he\'s only able to attain half power. Always the diplomat and pacifist, Zhaan has taken a transport pod to the other ship and finds a vulture-like alien lying on the deck apparently wounded. He claims to prefer death to surrender and begs her to finish him. Zhaan tries to convince him that Moya\'s crew means his ship no harm, but he demands to know why their "smaller ship" attacked them. Talyn, Moya\'s genetically engineered offspring introduced in season one, is apparently responsible for the damage. Zhaan reassures the alien that Moya is peaceful and harmless, telling him that Moya doesn\'t have weapons of any kind. Hearing this news, the alien, not as wounded as he\'d pretended to be, rears up and orders his crewmate to attack. The alien ship prepares to fire as D\'Argo jams a final cable into place. The ship fires a blast at Moya just as Rygel activates the defense screen. The screen holds, but a strange energy leaps from Crichton to Aeryn, then to Rygel. They stagger and look at each other in shock and confusion.',
      },
      {
        id: 'p-5',
        text: 'Aeryn breaks the silence, "Screw me, this is impossible."',
      },
      {
        id: 'p-6',
        text: '"What the frell\'s going on?" Rygel asks. "That\'s my body. I\'m Aeryn. Who are you?"',
      },
      {
        id: 'p-7',
        text: '"I\'m Crichton," says Aeryn.',
      },
      {
        id: 'p-8',
        text: '"By the Hynerian gods," says Crichton, "I\'m not me."',
      },
      {
        id: 'p-9',
        text: 'Actors and audiences love body-switching episodes when they\'re this innovative and effective. The Farscape writers and cast obviously enjoyed creating this episode. As usual, the creators take a normally cliché plotline and exceed all expectations. Puppets play human characters, humans play puppet characters, and everyone switches not once but twice. This is an episode that lends itself to repeat viewing; looking for all the quirks the actors are copying from each other\'s characters. Massive D\'Argo imitating Chiana\'s birdlike mannerisms, Aeryn slowing down her usual fast-paced Australian dialect to fit Crichton\'s American slang, and Crichton going wild with his rarely used flair for physical comedy and convincing us he truly is the pompous and annoying Rygel. Even the puppeteers get into the act, pulling off three distinct characters with nothing more than voice and the limited mobility of the Rygel puppet. Despite the comedic tone, there are also some serious moments. Pilot\'s inability to adjust to the vastly different bodies of the humanoids makes perfect sense and gives the episode a sense of urgency. A frustrated D\'Argo finds himself in a position where the only thing he can do is give and receive information as Pilot. Poor Zhaan is taken prisoner on the alien vessel and doesn\'t get to take part in any of the body-swapping fun.',
      },
      {
        id: 'p-10',
        text: 'One thing that differentiates this episode from other series\' attempts at body switching is the honest and realistic approach to sex and other bodily functions. A little sexual innuendo is typical of this kind of plotline, but it usually feels forced and self-conscious. Farscape avoids this by diving into its sex, urination, and vomiting scenes without apology. Witnessing these characters teach each other how their respective bodies work is where the magic and humor lie. Crichton, in Aeryn\'s body, is required to teach Rygel, in Crichton\'s body, how to urinate. The exchange is comic in its innocence and ironic in its juxtaposition of a woman teaching a man to pee. In another scene, Crichton has a moment to explore his new female body and does so with hilarious results.',
      },
      {
        id: 'p-11',
        text: 'He unzips his vest and fondles his breasts, then jiggles them like a stripper. He\'s caught in the act by Aeryn, who exclaims, "You\'re mentally damaged!"',
      },
      {
        id: 'p-12',
        text: '"I\'m a guy. Guys dream about this sort of thing," he/she retorts. "God only knows what you\'ve been doing to that body."',
      },
      {
        id: 'p-13',
        text: 'The spirit transitions also allow for an interesting homoerotic scene involving the male characters D\'Argo and Crichton while Chiana and Rygel inhabit them. Chiana suggests escaping in their current bodies, but you have to wonder if she really just wants Crichton\'s body for herself, as Rygel is sexually an easy target. After another attack, they switch bodies again with equal effectiveness and hilarity. The crew needs to convince Zhaan to fire on Moya from the alien vessel to switch everyone back into his or her respective body. During this conversation, the stoic and reserved Aeryn calls Zhaan a "blue-assed bitch." Knowing she\'s possessed by Rygel doesn\'t detract from the humor of the uncharacteristic exclamation.',
      },
      {
        id: 'p-14',
        text: 'While many of the themes in Farscape sound cliché, they are tackled in ever-surprising and innovative ways. The series\' effectiveness and success hinges on the fact that the protagonist is the only human in the story. His dialogue is frequently peppered with references to American pop culture, engaging viewers to relate to this character as he\'s experiencing unreal circumstances, including body swapping. The honesty of the dialogue, natural responses and interactions of the characters works to create the first believable body-switching episode in the history of entertainment.',
      },
    ],
  },
  {
    key: 'leaders-and-effective-leadership',
    title: 'Leaders and Effective Leadership',
    type: 'Feature / Profile Writing',
    year: '2005',
    description:
      'A feature-style examination of Elizabeth Birch\'s leadership and communication style, combining research, observation, personal perspective, and analysis. The piece explores how effective leaders build trust, communicate across differences, and inspire people around a shared purpose.',
    hasFullText: true,
    body: [
      {
        id: 'p-1',
        text: "As a new member of the leadership team of Bristol-Myers Squibb's Gay, Lesbian, Bisexual, Transgender & Allies Affinity Group, I had the privilege of traveling to New Jersey to attend a keynote address by Elizabeth Birch in the summer of 2005. As a rookie to gay activism in the business world, I had absolutely no idea who Elizabeth Birch was at the time.",
      },
      {
        id: 'p-2',
        text: 'That was all about to change. Elizabeth Birch is one of the most visible, outspoken and effective leaders and proponents of gay rights and issues. She served as the President and Executive Director of the Human Rights Campaign (the largest lesbian, gay, bisexual and transgender advocacy organization in the United States — aka HRC) from 1995 to 2004. Under her leadership, the organization grew dramatically in both membership and budget. The HRC became the key lobby group in Washington, D.C., for GLBT issues under her leadership within a few years.',
      },
      {
        id: 'p-3',
        text: 'The HRC is not a typical business organization and Elizabeth Birch is not a typical leader. Not only did she get high performance from direct employees, she got high performance from all of America. She appealed to gays, lesbians, bisexuals, transgender individuals, allies and surprisingly, even conservatives and the homophobic contingency.',
      },
      {
        id: 'p-4',
        text: 'Her logic and intellect, self-confidence and humility are unmistakably the ingredients of a great leader. Her charisma and ability to expose injustice remain unmatched. Her vast knowledge and ability to debate clearly and effectively generate trust and respect while simultaneously inspiring those around her.',
      },
      {
        id: 'p-5',
        text: 'Under her leadership the HRC grew into one of the most respected mainstream advocacy organizations in the country. They remain the model for nonprofit organizations and continue to be the cornerstone for setting precedents in moving civil rights and equality forward for GLBT people.',
      },
      {
        id: 'p-6',
        text: "As a master of emotional intelligence, she clearly understands both her own emotions and her opponent's. In a subsequent talk show on the Here! Network, I was constantly surprised at her composure while discussing gay issues with Pat Buchanan. I found myself getting furious for her! She has proven herself to be a listener and an intellectual at the highest levels, not simply listening and responding but interpreting and understanding the subtext of the conversation.",
      },
      {
        id: 'p-7',
        text: 'In her keynote address at Bristol-Myers Squibb she talked about two male penguins that had bonded as a couple at the Bronx Zoo. The penguins had been presented with an egg which they hatched and raised together. She segued into her own experiences growing up in West Virginia. I found myself deeply moved and energized while I followed her presentation on the importance of believing in yourself, fighting for what you believe in, and promoting understanding. I felt deep pride in realizing that this intelligent and articulate woman and I shared membership in the same minority group. I felt deep pride in knowing that her experiences were similar to mine. I felt deep pride understanding that our fight was just beginning.',
      },
    ],
  },
  {
    key: 'apples-new-gravity',
    title: "Apple's New Gravity",
    type: 'Business & Technology Analysis',
    year: '2007',
    description:
      'A research-driven examination of Apple\'s leadership, innovation strategy, organizational structure, competitive environment, brand, and approach to global growth. The piece demonstrates research, synthesis, and the translation of complex business and technology subjects for a general audience.',
    hasFullText: true,
    body: [
      {
        id: 'p-1',
        text: 'Steve Jobs and Steve Wozniak founded Apple Computer on April 1, 1976 and incorporated the company in the state of California on January 3, 1977. Their first personal computer, called the Apple I, was built in Steve Jobs\' parents\' garage and sold for $666.66. Reportedly, Wozniak was fond of repeating numbers although they probably had a good laugh at the price tag\'s "mark of the devil" popularized in the film The Omen, which was released in 1976. This time, the mark would eventually prove to be a good omen.',
      },
      {
        id: 'p-2',
        text: 'Today, the company designs, manufactures, and markets personal computers and portable digital music players along with related software, peripherals, services and networking solutions. Apple\'s mission statement spells it out, "The Company is committed to bringing the best personal computing and portable digital music experience to students, educators, creative professionals, businesses, government agencies, and consumers through its innovative hardware, software, peripherals, services, and Internet offerings." (Apple Annual Report, Form 10K, 2006) This sounds simple, but the defining term in the mission is "innovative." The company\'s products and services include the Macintosh®, the iPod, the Mac OS® X operating system, the online iTunes Store®, a vast array of software, accessories and peripherals to support the Macintosh and iPod too numerous to list here, as well as the Xserve and Xserve RAID server and storage product lines. Apple sells the products and services worldwide through their online stores, company-owned retail stores, a direct sales force, and third-party wholesalers and resellers. Net sales have skyrocketed during the past four years following the introduction and ever-increasing popularity of the iPod® and iTunes Store, topping out at just over 19 billion in 2006. Globally, the company employs nearly 18,000 people with an additional approximately 2,000 temporary employees and contractors. Diversity of their workforce is also a priority. As demonstrated in their Commitment to Diversity, "Apple celebrates diverse experiences and backgrounds. By introducing new and innovative people to the company, we incorporate their different perspectives and skills and achieve our goal of making the best products on the market. Our diversity partners share our passion for excellence, and they provide resources and recruitment opportunities to help us find new talent and grow our business." (Apple.com, 2007)',
      },
      {
        id: 'p-3',
        text: "Apple's competitors include some of the richest and most innovative companies in the world: Microsoft, Dell Computer, and Sony top the list. The competition between Steve Jobs and Bill Gates of Microsoft is well-known and well-documented. Many credit the early efforts and innovations of Apple for developing the current interface of personal computers including the Microsoft Windows® operating system. Apple introduced the desktop interface and mouse with the very first Macintosh computer in 1984.",
      },
      {
        id: 'p-4',
        text: "In relation to Apple's largest competitors' net sales for 2006 (Microsoft — 44 billion, Dell — 56 billion, Sony — 62 billion), Apple's take seems like small change. But Apple's growth and performance record over the past five years is proving the company is on the way to becoming a major contender. The company's net sales have been growing by just over $1 billion per quarter and in terms of cash assets, Apple is ahead of the game with about 61 percent compared to Microsoft's 44 percent.",
      },
      {
        id: 'p-5',
        text: 'Co-founder Steve Jobs was the CEO of Apple from its inception until 1983 when, due to the challenges of expansion, he lured John Sculley away from Pepsi-Cola to serve as the new CEO. Within two years their business relationship deteriorated and Jobs was fired from the company. A disenchanted Jobs found himself ousted by the company he had helped found and decided to start fresh with a new company he called NeXT Computer.',
      },
      {
        id: 'p-6',
        text: "One of NeXT's accomplishments was an e-mail program that allowed for interactive and visual content within an e-mail. Today, this ability is taken for granted but in 1987, most e-mail was text only. Another NeXT-related accomplishment was the development of the original World Wide Web system on a NeXT workstation by Tim Berners-Lee at CERN, the world's largest particle physics laboratory located on the border of France and Switzerland.",
      },
      {
        id: 'p-7',
        text: "Within the same mid-eighties timeframe, Steve Jobs purchased The Graphics Group from Lucasfilm's computer graphics division for $10 million. The fledgling company was renamed Pixar and initially manufactured high-end computer hardware primarily sold to government agencies, the medical community, and Disney studios. As poor sales of Pixar's computers threatened to put the company out of business, the animation leg of the group, primarily charged with creating animation to demonstrate the capability of the hardware, became widely respected and in-demand. After substantial layoffs in the company's computer department, Pixar and Disney struck a deal in 1991 to produce computer-animated feature films, the first of which was Toy Story.",
      },
      {
        id: 'p-8',
        text: 'In 1996, Apple purchased NeXT for $402 million. Jobs was again employed by the company he had founded. At the time, Apple was struggling and Jobs found himself back in the CEO position on an interim basis by 1997. Within a year, Jobs was restructuring and terminating those projects which he felt held little hope for success. One of NeXT Computer\'s projects, NeXTSTEP, would evolve into an operating system for the Macintosh, Mac OS® X.',
      },
      {
        id: 'p-9',
        text: 'Jobs introduced the iMac® in 1998 and the company started to rebound in terms of profitability. Apple decided to confirm Jobs as the company\'s permanent CEO in 2000 and dropped the term "interim" from his title. Apple introduced the iPod® and iTunes music software in 2001 to great critical acclaim and financial gain. The iTunes Store® was consequently launched in April 2003. In 2006, Apple launched the iPhone, which combines the iPod® with a cellular phone and an internet surfing device. This year, Apple will launch the iTV® — a device to play content from a computer running iTunes® software on a television, or the device can act as a digital media receiver depending on the need of the user.',
      },
      {
        id: 'p-10',
        text: 'Apple is an odd company. Their over-arching slogan is "Think different" and they take it to heart. Apple is essentially operating within a mini technological economy. In order for a single company to equal their product diversity and integration, Microsoft, Sony and Dell would have to merge. Apple deliberately chooses to remain secretive about the products in development and frequently remains equally secretive about key talent to avoid aggressive poaching of employees through guerrilla tactics. Their major competitor within recent years has been themselves, particularly with the iPod®. The first iPod® featured a monochrome screen, a five-gigabyte hard drive and played digital music. The newest release features a color screen, a 60-gigabyte hard drive and plays music, video and games. Both sold at roughly the same price. When you consider the other options offered by Apple for digital music players — the iPod® mini, the iPod® nano, iPod Shuffle, and iPhone — clearly, they have become their own competition.',
      },
      {
        id: 'p-11',
        text: "Jobs is an odd CEO. Jobs instills a holistic approach to all aspects of Apple business. As opposed to the accepted method of projects passing from one development team to another, Apple develops all aspects of the product — design, hardware, and software — at the same time, in parallel, creating a relatively flat organizational structure. The collaborative process lends itself to an integrated product. When the teams disagree, or for example, the engineers respond negatively to a design, Jobs steps in on the aspects he feels the most passionate about and convinces the engineers that it can be done and ensures that the challenge is conquered. Without his ability to successfully and ingeniously strategize, lead, manage, organize and control, most of the innovations within the computing world would not have been fully realized. Without Jobs' management skills, Apple's products would not integrate with each other as successfully and simply as they have been intended.",
      },
      {
        id: 'p-12',
        text: 'The task environment currently facing Apple is surprisingly positive. During the first 23 years of the company\'s existence, the task environment was challenging due to their own sense of proprietary computer hardware and software. The ability of companies like Microsoft and Dell to offer products at a lower cost to consumers that were compatible with each other gained those companies the market share of the business. The future, however, seems to be headed toward an even more integrated and simplified model, which Apple has constantly been successful at achieving. Apple has proven to be a trend-setter in the general environment, developing many new technologies prior to them being accepted by the general population. When the government stepped in to regulate illegal music downloading, Apple developed the iTunes Store, the quintessential model for legal music downloading. Widening the scope of iTunes to include compatibility with Microsoft Windows machines was a large step for Apple.',
      },
      {
        id: 'p-13',
        text: 'Apple is, above all else, a global brand. The style and design is recognized and expected. Consumers may pay more for the products but they understand that the product will be of the highest standards and will perform efficiently and effectively. Jobs drives this branding from the top down. He is charismatic and remains as passionate and focused on the products as he was at the very start. Driving the brand from the top down ensures that it is consistent throughout the organization and marketing. The most serious challenges for Apple in globalizing are addressing each product and service to be legally compliant and language specific. There are currently over 20 country-specific online iTunes® Stores.',
      },
      {
        id: 'p-14',
        text: 'Apple has continuously had a strong sense of values and ethics and has strengthened the programs addressing social responsibility over the past few years. The fundamental principle at the core of Apple\'s ethics is "use good judgment." Apple\'s ethics policy is titled "Ethics: The way we do business worldwide." The company has certainly had their fair share of controversy. In one exchange, Jobs was granted 7.5 million shares of stock options with an exercise price of $18.30, which allegedly should have been $21.10, thereby incurring taxable income of $20,000,000 that he did not report as income. Similarly, Apple overstated its earnings by that same amount. If he were found liable, Jobs could face a number of criminal charges and civil penalties. An independent internal Apple investigation completed on December 29, 2006 determined that Jobs was unaware of these issues and that the options granted to him were returned without being exercised in 2003.',
      },
      {
        id: 'p-15',
        text: 'Apple has also been criticized for having lax standards in the recycling area. In 2005, in response to direct criticism, Apple announced it would accept and recycle iPods for free at its retail stores. This sparked further criticism for only recycling the smaller units that Apple manufactured. In response, Jobs expanded Apple\'s recycling programs to any U.S. customer who buys a new Mac. The expanded program includes shipping costs and environmentally-friendly disposal of the old systems. While Apple tends to focus on design and manufacture of product, they also respond positively to criticism when an oversight is brought to light. In the future, Apple needs to focus on addressing these issues before the critics strike, particularly in the new "green" environment of the 21st century.',
      },
      {
        id: 'p-16',
        text: 'Steve Jobs is considered by some critics to be overly aggressive and demanding. He can be stubborn and egomaniacal but in all fairness he is passionate, focused, driven and charismatic. In spite of all the criticism, a few aspects of this enigmatic leader shine through. He has a vision and strategy and expects them to be implemented and followed. If an employee doesn\'t "get it," he/she is replaced. He enjoys control but also promotes deep collaboration and cross-pollination. A decade ago he was considered a temperamental micromanager whose insistence on total control and stylish, proprietary innovation would set the stage for the end of the company. Today, with his connections to Hollywood and the Disney Corporation, and his (and Apple\'s) commitment to innovation, simplicity and quality, Apple has a bright and lucrative future.',
      },
    ],
    worksCited: [
      { id: 'wc-1', text: 'Form 10K (Apple\'s Annual Report) filed December 29, 2006, 142 pages.' },
      { id: 'wc-2', text: 'Author unknown. "Apple and the Environment." www.apple.com/environment. Accessed 17 March 2007.' },
      { id: 'wc-3', text: 'Author unknown. "Ethics: The way we do business." PDF download. Governance. www.apple.com/investor. Accessed 4 April 2007.' },
      { id: 'wc-4', text: 'Author unknown. "Job Opportunities; Commitment to Diversity." www.apple.com/jobs/us/pro/inside/diversity.html. Accessed 22 April 2007.' },
      { id: 'wc-5', text: 'Grossman, Lev. "How Apple Does It; Conventional wisdom says its strategy is wrong, yet it keeps turning out great products. TIME looks inside the world\'s most innovative company." Time Magazine. 24 October 2005. 66–70.' },
      { id: 'wc-6', text: 'Vogelstein, Fred. "Mastering the Art of Disruption; Move over, Jack Welch. From Apple to Pixar, Steve Jobs is showing why he\'s the model CEO for the 21st century." Fortune Magazine. 6 February 2006. 23–24.' },
      { id: 'wc-7', text: 'Author unknown. "Brand Leaders; Top trumps among brand CEOs." Brand Strategy. 12 March 2007. 30–33.' },
      { id: 'wc-8', text: 'Hesseldahl, Arik. "What to Do with Apple\'s Cash; Its $12 billion and tech expertise could nurture promising startups." Business Week. 19 March 2007. 80–81.' },
      { id: 'wc-9', text: 'Unseem, Jerry & Mero, Jenny. "Simply Irresistible." Fortune Magazine. 19 March 2007. 107–111.' },
    ],
  },
];

export function getSample(key: string): WritingSample | undefined {
  return writingSamples.find((s) => s.key === key);
}
