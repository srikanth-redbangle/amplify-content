import Link from 'next/link'

export const services = [
  {
    key: 'strategy',
    label: 'Strategy',
    title: 'STRATEGY',
    // image: { src: '/img/services/scs-cover.webp', width: 1062, height: 1115 },
    video: {
      src: '/img/services/strategy.mp4',
      poster: '/img/services/think-poster.webp',
      width: '1440',
      height: '810',
    },
    content:
      'We blend marketing expertise with data and insights to arrive at strategies to expand your audience, amplify reach, and boost your brand.',
    steps: [
      '01. Brand Environment Analysis',
      '02. Brand Positioning',
      '03. Brand Communication',
    ],
    detail: '/services/strategy',
    work: '/work/strategy',
  },
  {
    key: 'design',
    label: 'Design',
    title: 'DESIGN',
    // image: { src: '/img/services/ccs-cover.webp', width: 1062, height: 1115 },
    video: {
      src: '/img/services/design-rect.mp4',
      poster: '/img/services/create-poster.webp',
      width: '1440',
      height: '810',
    },
    content:
      'Our design solutions spark conversations and brand love amongst your audiences. Go from brand identity systems to design-led experiences and more.',
    steps: [
      '01. Brand Identity ',
      '02. Mascots & Avatars',
      '03. Tech-Powered Experiences',
      '04. Design Collateral',
      '05. Motion Graphics',
      '06. Environmental Graphics',
    ],
    detail: '/services/design',
    // work: '/work/design',
  },
  {
    key: 'campaign',
    label: 'Campaign',
    title: 'CAMPAIGN',
    // image: { src: '/img/services/ccs-cover.webp', width: 1062, height: 1115 },
    video: {
      src: '/img/services/campaign-rect.mp4',
      poster: '/img/services/create-poster.webp',
      width: '1440',
      height: '810',
    },
    content:
      'We dive into human behavior and culture to craft campaigns that do all it takes to deliver real, game-changing results for your brand.',
    steps: [
      '01. Integrated',
      '02. Television',
      '03. Digital',
      '04. Interactive',
      '05. Print & POSM ',
      '06. Outdoor & Offline',
    ],
    detail: '/services/campaign',
    work: '/work/campaign',
  },
  {
    key: 'content',
    label: ' Content',
    title: ' CONTENT',
    // image: { src: '/img/services/ecs-cover.webp', width: 1062, height: 1115 },
    video: {
      src: '/img/services/content-rect-1.mp4',
      poster: '/img/services/play-poster.webp',
      width: '1440',
      height: '810',
    },
    content:
      'We fuel growth with content that packs a punch. Our team builds brand communities and delivers ROI through brand IPs, snappy videos, and more',
    steps: [
      '01. Branded IPs & Series',
      '02. Platform Content',
      '03. Tech-powered Content',
      '04. Film & Video Content',
      '05. Influencer Marketing',
      '06. Website & Editorial Content',
    ],
    detail: '/services/content',
    work: '/work/content',
  },
  {
    key: 'technology',
    label: ' Technology',
    title: ' TECHNOLOGY',
    // image: { src: '/img/services/ccs-cover.webp', width: 1062, height: 1115 },
    video: {
      src: '/img/services/technology-rect.mp4',
      poster: '/img/services/create-poster.webp',
      width: '1440',
      height: '810',
    },
    content:
      'We fuse technology and creativity to craft engaging digital experiences. From campaigns to content, we deliver technology-enabled narratives that transform brands.',
    steps: [
      '01. AI-based Tech Solutions ',
      '02. Interactive & Immersive',
      '03. Phygital Experiences',
      '04. Gamified Experiences',
      '05. Branded Websites & Apps',
      '06. Private Social',
    ],
    detail: '/services/technology',
    work: '/work/technology',
  },
  {
    key: 'production',
    label: 'Production',
    title: 'PRODUCTION',
    // image: { src: '/img/services/ccs-cover.webp', width: 1062, height: 1115 },
    video: {
      src: '/img/services/production-rect-1.mp4',
      poster: '/img/services/create-poster.webp',
      width: '1440',
      height: '810',
    },
    content:
      'We produce campaigns and content that steal the spotlight. Our Producers bring big ideas to life across formats, locations, languages, genres and screens.',
    steps: [
      '01. Storyboards & Narramatics',
      '02. Celebrities & Casting',
      '03. Art Direction & Styling',
      '04. Music Sourcing & Composition',
      '05. Illustrations & CGI',
      '06. Production',
      '07. Editing & Animation',
      '08. Versioning & Adaptations',
    ],
    detail: '/services/production',
    // work: '/work/production',
  },
]

export const RecruitmentVideoFaq = [
  {
    key: 0,
    title: 'What types of employer branding and hiring videos do you create?',
    content: (
      <>
        <div className="mb-5">
          We craft a wide range of hiring, culture, and employer branding videos
          suited to communication needs and channels. These include:
        </div>
        <ul>
          <li className="mb-5">- Culture and workplace videos</li>
          <li className="mb-5">- Employee spotlight films</li>
          <li className="mb-5">- Diversity &amp; inclusion stories</li>
          <li className="mb-5">- Day-in-the-life videos</li>
          <li className="mb-5">- Leadership messages</li>
          <li className="mb-5">- Employee Value Proposition (EVP) Videos</li>
          <li className="mb-5">- Role-specific or department videos</li>
          <li className="mb-5">- Campus and internship videos</li>
          <li className="mb-5">- Recruitment teasers for social media</li>
          <li className="mb-5">- Onboarding and internal welcome videos</li>
          <li className="mb-5">- Employee onboarding and training videos</li>
          <li className="mb-5">- And more!</li>
        </ul>

        <div className="mt-5">
          We help you choose the right format, genre, and creative approach for
          every brief, whether you’re building brand awareness or doubling down
          on hiring in a specific region or vertical.
        </div>
      </>
    ),
  },
  {
    key: 1,
    title: 'How will you create a positioning video for our employer brand?',
    content:
      'We’ll help you tell the story of your employer brand in a way that is most meaningful to you and your target audience. We begin by understanding your brand story and core messaging, and we conceptualise and shape the narrative. Whether we create a testimonial-led video, a 3D animation video or a fictional film with actors - we creatively guide and manage all the details of the project end to end - always checking in with you to ensure our work delivers the distinct essence, culture and mood you are looking to communicate.',
  },
  {
    key: 2,
    title: 'What types of diversity and inclusion videos do you create?',
    content:
       <>
       We create videos that do more than <span className='italic'>say</span> you&apos;re inclusive—they show it. Whether it&apos;s an employee story that reveals a personal journey, a leadership message grounded in vulnerability, or a vibrant highlight reel from your Pride Month events, we create videos that feel human, thoughtful, and real. Our process starts with understanding your inclusion goals and the communities you want to spotlight. We then shape stories that celebrate authenticity, build empathy, and reflect the everyday experiences of your people. From Employee Resource Group (ERG) showcases to cultural moments and allyship narratives, every frame is crafted to inspire connection and spark conversation.
       </>
  },
  {
    key: 3,
    title:
      'How and where do you use animated videos in employer branding, hiring, and culture communication?',
    content:
      'We use animation when your message needs to be clear, consistent, and visually engaging—especially when live footage isn’t the best fit. Think of it as storytelling with design: we bring policies, processes, and values to life using motion graphics, illustration, and kinetic typography. From explaining how your hiring journey works to what your onboarding workflows, hybrid work guidelines, or even your culture code are—animation makes information feel effortless and branded. It’s also the go-to format when timelines are tight, teams are remote, or content needs to be adapted across regions. Plus, animated videos are highly reusable across your career site, internal comms, learning modules, and social platforms—making them a smart, scalable part of your employer brand toolkit.',
  },
  {
    key: 4,
    title:
      'Do you make videos for special occasions such as employee milestones, Pride Month, etc?',
    content: (
      <>
        <div className="mb-5">
          We love creating employer branding videos for the moments that matter.
          Whether it&apos;s celebrating a 20th work anniversary, launching a
          campaign for Pride Month, spotlighting a team achievement, or
          delivering a heartfelt Christmas message from your leadership – we
          help you mark the occasion with creativity, meaning, and authenticity.
          We offer tailored content for:
        </div>
        <ul>
          <li className="mb-5">
            - <span className="font-semibold">Cultural moments</span> – Pride,
            Women’s Day, Black History Month, Mental Health Awareness Week, etc
          </li>
          <li className="mb-5">
            - <span className="font-semibold">Company milestones</span> –
            anniversaries, mergers, new locations, growth highlights.
          </li>
          <li className="mb-5">
            - <span className="font-semibold">Employee experiences</span> –
            onboarding journeys, thank-you messages, end-of-year tributes.
          </li>
        </ul>
        <div className="mt-5">
          These videos are more than just nice-to-haves—they’re cultural
          touchpoints that reinforce recognition, inclusion, and community. They
          are designed to energize internal culture, boost morale, and show your
          people that you’re paying attention while keeping your brand voice
          intact.
        </div>
      </>
    ),
  },
  {
    key: 5,
    title:
      'How do you create hiring videos that are a great representation of our work and culture?',
    content: (
      <>
        <div className="mb-5">
          We help enterprises attract top talent through authentic storytelling
          and high-quality production. Here&apos;s how our typical recruitment
          video production process works:
        </div>
        <ul>
          <li className="mb-5">
            - We begin with a clear brief that outlines your communication
            goals, EVP themes, and the specific roles or audiences you want to
            reach.
          </li>
          <li className="mb-5">
            - Our creative team develops a concept that reflects your company
            culture and brings your employee experience to life – whether it’s a
            leadership video, employee spotlight, or day-in-the-life video.
          </li>
          <li className="mb-5">
            - We visualize the story through scripting, moodboards, and
            storyboards, and design branded graphics and motion elements that
            align with your tone and visual identity.
          </li>
          <li className="mb-5">
            - We help identify the right voices to feature in the film across
            functions, levels, and locations, and prep your speakers using
            talking points or interview prompts.
          </li>
          <li className="mb-5">
            - Our directors, writers, and producers run the shoot, guiding
            speakers around on-camera delivery and capturing moments that feel
            real and relatable.
          </li>
          <li className="mb-5">
            - Our post-production experts edit the footage, adding the required
            graphics, music, subtitles, and voiceovers while keeping the film
            on-brand.
          </li>
          <li className="mb-5">
            - And, our entire video creation process is managed on our
            proprietary creative cloud workflows platform that aligns our teams,
            schedules, approvals, feedback, and delivery seamlessly for you.
          </li>
        </ul>
      </>
    ),
  },
  {
    key: 6,
    title: 'How do you make recruitment videos that feel authentic?',
    content:
      'The key to authenticity lies in two things: the people you feature, and how you tell their story. We work closely with your talent or employer branding team to identify the right voices - employees, leaders, new joiners - and shape a narrative that captures their genuine experiences. We guide people on camera so they come across as comfortable and natural, not rehearsed. We also avoid scripting testimonials too tightly wherever possible. Instead, we shape the story around real emotions, cultural values, and day-to-day experiences with simple talking points to get authentic content. We also visualize and capture supporting B-roll footage to enhance the narrative in a relatable manner.',
  },
  {
    key: 7,
    title:
      'Our employees are not media-trained. How will you work around this when filming testimonials or interviews?',
    content:
      'We hear this often. Worry not, you’re in good hands with our experienced writers, directors, and producers. They’re skilled at putting people at ease in front of the camera by creating a relaxed, supportive environment. Instead of scripted lines, we guide employees through natural conversations, often filming in familiar or relaxed settings to help them feel more comfortable. We also provide prep materials ahead of time, keep the shoot informal, and allow multiple takes so there’s no pressure to get it right the first time. With the right crew and setup, even first-time speakers can come across as confident and authentic on camera.',
  },
  {
    key: 8,
    title: 'What is the typical timeline for crafting a video end-to-end?',
    content:
      'Video turnaround times depend on the scale and complexity of the requirement. A simple testimonial video can often be completed in as little as 1 week, while larger projects, like multi-location employer branding films or a larger campaign, can take 4–6 weeks end-to-end. Our process includes briefing and goal alignment, concept development, project planning, scripting, graphic design, production across locations, followed by post-production, which includes editing, music, subtitles, voice-over, and animation. We work fast, but thoughtfully—giving you enough time to share feedback and approvals at every key milestone. If you have a set launch or hiring deadline, we’ll plan backwards from there to ensure everything’s ready on time.',
  },
  {
    key: 9,
    title: 'How do you make sure the video reflects our employer brand?',
    content:
      "We work with your brand and talent teams to align the video with your employer's brand positioning, tone of voice, visual identity, and key messaging pillars. We reference your brand guidelines, talent personas, and EVP (Employee Value Proposition) throughout the creative process. From colors and music to voiceover and visuals, the final film will feel like a natural extension of your careers page, social content, and company culture.",
  },
  {
    key: 10,
    title: 'Can you work with teams across different locations?',
    content:
      'Yes, many of our recruitment video projects involve global teams. We coordinate multi-location shoots or even fully remote interviews using guided filming setups and local crews. We can also stitch together footage from different offices or countries into a unified employer brand story, showcasing your company’s culture across geographies without compromising on quality or messaging.',
  },
  {
    key: 11,
    title: 'Do you follow a specific hiring video creation process?',
    content: (
      <>
        <div className="mb-5">
          As experts who have produced hundreds of employer branding videos
          across industries, geographies, and formats, with every new brief,
          we’re always on the lookout to try something new. This has helped us
          come up with a tried-and-tested process that delivers impactful
          employer branding and hiring videos for you. Our typical workflow
          starts with a clear brief, followed by research, concepts, script,
          design, production, post-production, reviews, and versioning. But
          what’s unique about how we do it, is our proprietary platform that
          facilitates efficient cloud-based workflows. Here’s a quick
          run-through of how it helps:
        </div>
        <ul>
          <li className="mb-5">
            - Your brief is loaded on our platform. This contains all the
            information you&apos;ve shared, everything we&apos;ve dug up, and all the
            creative assets we need to work on. Everything is in one place.
          </li>
          <li className="mb-5">
            - We use rate cards, add-ons, and an efficient costing tool on our
            platform to speed up the pricing and contract process for you.
          </li>
          <li className="mb-5">
            - We propose a narrative structure with one or more creative
            approaches that align with your industry, audience, tone, and brand
            identity. You can choose what resonates most with your brand and
            communication needs.
          </li>
          <li className="mb-5">
            - Our project managers draft the most optimal project schedule on
            our platform, setting milestones that work best for your
            requirements. Everyone on the project knows exactly when something
            is due to you, so no follow-ups are required.
          </li>
          <li className="mb-5">
            - Our creative team gets going with their work, coming to you for
            reviews at the script and design stages.
          </li>
          <li className="mb-5">
            - Our producers coordinate all logistics – scheduling interviews,
            sharing prep material, confirming availability, and curating and
            managing professional on-ground crews.
          </li>
          <li className="mb-5">
            - Files, links, and updates are all on the cloud, so you and your
            colleagues are never left wondering what&apos;s next or how things are
            progressing.
          </li>
          <li className="mb-5">
            - Once the post-production team gets going with their work, video
            drafts are uploaded directly to the platform where you use our
            interactive review feature to share frame-accurate comments and
            respond to our creative suggestions – all without lengthy email
            chains or missed feedback. Additionally, all video drafts on the
            project are accessible to you on one dashboard, so you won’t have to
            hunt for links to compare notes.
          </li>
          <li className="mb-5">
            - Once the project is complete, your video assets are uploaded to
            our platform. Everything is neatly organised, downloadable,
            shareable with colleagues and partners, and ready for repurposing in
            the future.
          </li>
        </ul>

        <div className="mt-5">
          Our cloud-based platform-led workflow allows us to maintain creative
          excellence while delivering at speed and scale. It also gives you an
          efficient and transparent experience from start to finish.
        </div>
      </>
    ),
  },
]

export const redbanglewayCreate = [
  {
    key: '0',
    heading: 'Knowledge',
    content: (
      <>
        <div>
          We dive deep into your brand&apos;s DNA to understand your audience,
          challenges, and specific needs, to craft campaigns that truly
          resonate.
        </div>
      </>
    ),
    image: {
      src: '/img/services/service-image.webp',
      width: '726',
      height: '915',
    },
  },
  {
    key: '1',
    heading: 'Inspiration',
    content:
      'We tap into cultural contexts to uncover insights and draw inspiration, setting the stage to explore limitless ways in which we can approach your creative campaign.',
    image: {
      src: '/img/services/service-image.webp',
      width: '726',
      height: '915',
    },
  },
  {
    key: '2',
    heading: 'Creation',
    content:
      'We turn our insights into the perfect marriage of visuals and words, crafting engaging stories and conversations that make your brand campaigns impossible to ignore.',
    image: {
      src: '/img/services/service-image.webp',
      width: '726',
      height: '915',
    },
  },
  {
    key: '3',
    heading: 'Execution',
    content: (
      <>
        <div>
          From films to print and interactive, we&apos;ve got the creative
          chops, production expertise and tech know-how to bring great campaign
          ideas to life.
        </div>
      </>
    ),
    image: {
      src: '/img/services/service-image.webp',
      width: '726',
      height: '915',
    },
  },
]
export const redbanglewayCreateAbout = [
  {
    key: '0',
    heading: 'Always tech-first',
    content:
      'We started building our technology on day zero. Our intent was to bake efficiencies into creative workflows and cross-border creative collaboration, ensure zero information and asset loss, and accelerate growth.',
    image: {
      src: '/img/services/service-image.webp',
      width: '726',
      height: '915',
    },
  },
  {
    key: '1',
    heading: 'Creative Collaboration',
    content:
      'Our platform enables seamless collaboration between us, our clients and our curated community of creative collaborators the world over. We onboard, co-create, collaborate, manage and deliver on the cloud.',
    image: {
      src: '/img/services/service-image.webp',
      width: '726',
      height: '915',
    },
  },
  {
    key: '2',
    heading: 'Efficient Workflows',
    content:
      'From briefs to estimates, project management, real-time reviews, asset organisation, expense logging and timesheets. Project upon project, our platform helps us create with greater efficiency.',
    image: {
      src: '/img/services/service-image.webp',
      width: '726',
      height: '915',
    },
  },
  {
    key: '3',
    heading: 'Value for Clients',
    content:
      'On-brief, on-time and great quality - the mix we’ve been aiming for from day one. What clients want with every agency. And our path to success.',
    image: {
      src: '/img/services/service-image.webp',
      width: '726',
      height: '915',
    },
  },
  {
    key: '4',
    heading: 'Value for Freelancers',
    content:
      'Whether it’s video crews in North America or graphic designers in India—our platform allows us to seamlessly onboard, curate and co-create with creative gig workers the world over.',
    image: {
      src: '/img/services/service-image.webp',
      width: '726',
      height: '915',
    },
  },
]
export const approach = [
  { key: 0, title: 'Project Brief', src: 'brief.svg' },
  { key: 1, title: 'Info Gathering', src: 'info.svg' },
  { key: 2, title: 'Concept Proposal', src: 'concept.svg' },
  { key: 3, title: 'Research & Script', src: 'research.svg' },
  { key: 4, title: 'Visualization', src: 'visualization.svg' },
  { key: 5, title: 'Pre-Prod Meeting', src: 'prepod.svg' },
  { key: 6, title: 'Production', src: 'production.svg' },
  { key: 7, title: 'Post Production', src: 'postproduction.svg' },
  { key: 8, title: 'Delivery', src: 'delivery.svg' },
  { key: 9, title: 'Video Asset Repurposing', src: 'videoasset.svg' },
]

export const aboutServices = [
  {
    id: 0,
    title: 'B2B Global Services',
    desc: 'End–to-end creative solutions for global B2B enterprises.',
    img: '/img/who-we-are/B2B.jpg',
    imgmweb: '/img/who-we-are/B2B.jpg',
    alt: 'B2B Global',
  },
  {
    id: 1,
    title: 'B2C India Services',
    desc: 'Brand Content solutions for consumer brands in India.',
    img: '/img/who-we-are/B2C.jpg',
    imgmweb: '/img/who-we-are/B2C.jpg',
    alt: 'B2C India',
  },
  // {
  //   id: 2,
  //   title: 'AI Products',
  //   desc: 'Artificial intelligence products that amplify brand communications.',
  //   img: '/img/who-we-are/AI.jpg',
  //   imgmweb: '/img/who-we-are/AI.jpg',
  //   alt: 'AI Products',
  //   href: '#',
  // },
]

export const TNC = [
  {
    key: 0,
    title: 'What services does your global B2B agency offer?',
    content: (
      <>
        <div>
          Makerrs offers a range of creative services to global businesses.
        </div>
        <h3 className="mt-5 font-semibold  text-base">1. Strategy:</h3>
        <div>
          We offer a range of strategy services - including brand environment
          analysis, brand communication strategy, and video content strategy. We
          blend data, insights and marketing expertise to craft strategies that
          drive growth for your B2B enterprise.
        </div>
        <h3 className="mt-5 font-semibold  text-base">2. Design:</h3>
        <div>
          We offer a range of design services. From brand identity and
          experiences, to mascots, print and editorial collateral, to wall
          graphics for corporate offices. We help you build brand
          differentiation, credibility and human connect through our design
          solutions.
        </div>
        <h3 className="mt-5 font-semibold  text-base">3. Videos:</h3>
        <div>
          We offer a wide range of content services for brand growth. Whether it
          is case study videos, thought leadership content, product explainer
          videos, hiring and culture videos, or videos for corporate
          communications and public relations. We offer end to end video
          production services, including research, conceptualisation, anywhere
          production, and endless versioning.
        </div>
        <h3 className="mt-5 font-semibold  text-base">4. Campaign:</h3>
        <div>
          From insightful communication strategies, to big campaign ideas and
          creatives, exciting campaign plans, and flawless execution across
          formats and locations – we provide comprehensive campaign solutions.
          Whether it&apos;s for brand marketing, product and solution marketing,
          employer branding, localisation or ESG campaigns – we support every
          phase of enterprise growth.
        </div>
        <h3 className="mt-5 font-semibold  text-base">
          5. Artificial Intelligence:
        </h3>
        <div>
          From using GenAI to generate video and imagery for brand
          communications and creating AI Influencers to developing AI models for
          a global campaign - we’ve got what it takes to conceptualise, consult,
          and develop AI-integrated communications for B2B brands.
        </div>
        <h3 className="mt-5 font-semibold  text-base">6. Technology:</h3>
        <div>
          From beautifully responsive corporate websites and private social apps
          to immersive XR experiences and gamified content – we conceptualise,
          design and develop custom technology solutions that help you achieve
          your B2B brand communication goals.
        </div>
        <h3 className="mt-5 font-semibold  text-base">7. Crews:</h3>
        <div>
          With Makerrs, you can get professional video crews on-demand in 100
          countries. Be it a single-camera testimonial shoot or a multi-camera
          event shoot - our curated video crew services scale to your brief, no
          matter how many cities and continents.
        </div>
      </>
    ),
  },
  {
    key: 1,
    title: 'How experienced is your team?',
    content:
      'We’ve been fuelling B2B communications with great creativity and technology for nearly a decade now. We are a team of over 50 people across design, videos, technology and more. We know what sticks in global B2B communications.',
  },
  {
    key: 2,
    title: ' Do you have a portfolio i can view?',
    content: (
      <>
        Yes. Explore our Campaign portfolio{' '}
        <Link href="/work/campaign" className="underline text-rb-red">
          here
        </Link>
        {''}, Videos portfolio {''}
        <Link href="/work/videos" className="underline text-rb-red">
          here
        </Link>
        {''}, and our Technology portfolio{' '}
        <Link href="/work/technology" className="underline text-rb-red">
          here
        </Link>
        .
      </>
    ),
  },
  {
    key: 3,
    title: 'Typically, what business verticals do you create videos for?',
    content:
      'Makerrs produces a variety of videos and video content to meet the diverse needs of global B2B brands. This includes videos for marketing, corporate communications and public relations, employer branding, internal communications, sales and RFPs, and more. The formats range from corporate films to marketing explainers.',
  },
  {
    key: 5,
    title: 'What are your typical project turnaround times?',
    content: (
      <>
        <div>
          Project turnaround times vary based on the format, scale of production
          as well as the type of service. Here’s a little guidance for each of
          our services.
        </div>
        <h3 className="mt-5 font-semibold  text-base">1. Strategy</h3>
        <div>
          A smaller ask such as researching and defining your content strategy
          could take up to 4 weeks, but a larger ask such as brand strategy
          could take up to 2 months depending on the amount of research and
          analysis required.
        </div>
        <h3 className="mt-5 font-semibold  text-base">2. Design</h3>
        <div>
          Depending on the requirement, the timeline varies. A simple brochure
          may take a week. A branded tee may take a couple of days for an
          existing brand. And a whole new brand identity system could take
          anywhere between 2 and 6 months depending on the expanse of the brief.
        </div>
        <h3 className="mt-5 font-semibold  text-base">3. Videos</h3>
        <div>
          Depending on the format and the scale of the project, as well as
          depending on how quickly we receive your feedback - we take anywhere
          between 10 and 40 working days to turnaround a brief. When we are
          making a longer-duration video (that’s not a simple testimonial video
          or an interview video) or an interactive video, this timeline might
          stretch to over 45 days. A short series of videos could be produced in
          45 days and a larger requirement - for example, YouTube content to
          grow subscribers and community - could be run as a year-long project.
        </div>
        <h3 className="mt-5 font-semibold  text-base">4. Campaign</h3>
        <div>
          Workflows and timelines are highly customized and responsive for this
          service. A simple campaign could be created in 30 working days from
          the formal contract or take up to 90 days - this is subject to the
          brief, the scale of the requirement, as well as dependencies on the
          client-side.
        </div>
        <h3 className="mt-5 font-semibold  text-base">
          5. Artificial Intelligence
        </h3>
        <div>
          From using GenAI to generate video and imagery for brand
          communications and creating AI Influencers to developing AI models for
          a global campaign - we’ve got what it takes to conceptualise, consult,
          and develop AI-integrated communications for B2B brands.
        </div>
        <h3 className="mt-5 font-semibold  text-base">6. Technology</h3>
        <div>
          When it comes to technology, the conceptualisation, research,
          consulting, design and development process could vary between as
          little as 1 month for a microsite, 4 months for a website (including
          all the graphics and content) and up to 12 months for a branded game.
          Turnaround times similarly vary for other services such as augmented
          reality, private social apps, etc.
        </div>
        <h3 className="mt-5 font-semibold  text-base">7. Crews</h3>
        <div>
          Typically, we can get a curated video crew in place in as little as 3
          working days. And post the shoot, we could either handover the files
          at the shoot on a hard disk or quality-check the footage and deliver
          it online 28 hours post the shoot.
        </div>
      </>
    ),
  },
  {
    key: 9,
    title:
      'What are your policies around intellectual property rights and business data confidentiality?',
    content:
      'We take data security, privacy, confidentiality, and intellectual property rights very seriously. Our practices adhere to global standards. We license every single software and creative asset required, and ensure that necessary media release documents and service contracts are in place to explicitly call out the intellectual property rights assigned to the client.',
  },
  {
    key: 10,
    title: 'Which time zone does your company operate in?',
    content: (
      <>
        Our global services team supports clients across time zones. So,{' '}
        <Link href="/contact" className="underline text-rb-red">
          send us a brief
        </Link>{' '}
        and we’ll set up a meeting at a mutually convenient time.
      </>
    ),
  },
]

export const serviceVideos = {
  get_design: {
    video: {
      src: '/img/services/service_get_design.mp4',
      poster: '/img/services/design/design_video.png',
      width: '1440',
      height: '810',
    },
    fullVideo: {
      src: '/img/services/service_get_design.mp4',
      poster: '/img/services/design/design_video.png',
      width: '1920',
      height: '1080',
    },
  },
  get_videos: {
    video: {
      src: '/img/services/videos/hero.mp4',
      poster: '/img/services/videos/hero.png',
      width: '1440',
      height: '810',
    },
    fullVideo: {
      src: '/img/services/videos/hero.mp4',
      poster: '/img/services/videos/hero.png',
      width: '1920',
      height: '1080',
    },
  },
   get_podcast: {
    video: {
      src: '/img/services/service_get_podcast.mp4',
      poster: '/img/services/podcast/hero-poster.png',
      width: '1440',
      height: '810',
    },
    fullVideo: {
      src: '/img/services/service_get_podcast.mp4',
      poster: '/img/services/podcast/hero-poster.png',
      width: '1920',
      height: '1080',
    },
  },
  get_campaign: {
    video: {
      src: '/img/services/campaign/hero.mp4',
      poster: '/img/services/campaign/hero.png',
      width: '1440',
      height: '810',
    },
    fullVideo: {
      src: '/img/services/campaign/hero.mp4',
      poster: '/img/services/campaign/hero.png',
      width: '1920',
      height: '1080',
    },
  },
  book_a_crew: {
    video: {
      src: '/img/services/crew/hero.mp4',
      poster: '/img/services/crew/hero.webp',
      width: '1440',
      height: '810',
    },
    fullVideo: {
      src: '/img/services/crew/hero.mp4',
      poster: '/img/services/crew/hero.webp',
      width: '1920',
      height: '1080',
    },
  },
  design: {
    video: {
      src: '/img/services/design_video.mp4',
      poster: '/img/services/design_video.png',
      width: '1440',
      height: '810',
    },
    fullVideo: {
      src: '/img/services/design_video.mp4',
     poster: '/img/services/design_video.png',
      width: '1920',
      height: '1080',
    },
  },
  content: {
    video: {
      src: '/img/services/content-rect-2.mp4',
      poster: '/img/services/content-rect-2.webp',
      width: '1440',
      height: '810',
    },
    fullVideo: {
      src: '/img/services/content-rect-2.mp4',
      poster: '/img/services/content-rect-2.webp',
      width: '1920',
      height: '1080',
    },
  },
  technology: {
    video: {
      src: '/img/services/tech-rect2.mp4',
      poster: '/img/services/tech-rect2.webp',
      width: '1440',
      height: '810',
    },
    fullVideo: {
      src: '/img/services/tech-rect2.mp4',
      poster: '/img/services/tech-rect2.webp',
      width: '1920',
      height: '1080',
    },
  },
  production: {
    video: {
      src: '/img/services/production-rect.mp4',
      poster: '/img/services/production_rect.webp',
      width: '1440',
      height: '810',
    },
    fullVideo: {
      src: '/img/services/production-rect.mp4',
      poster: '/img/services/production_rect.webp',
      width: '1920',
      height: '1080',
    },
  },
  ai: {
    video: {
      src: '/img/services/ai-react.mp4',
      poster: '/img/services/ai-react.webp',
      width: '1440',
      height: '810',
    },
    fullVideo: {
      src: '/img/services/ai-react.mp4',
      poster: '/img/services/ai-react.webp',
      width: '1920',
      height: '1080',
    },
  }
}

export const podcastCards = [
  {
    key: 0,
    title: 'Podcast Research & Strategy',
    text: 'We study your industry, audience and competitors, and build on your strategic priorities to define the themes and direction for your podcast. We ensure that your podcast reflects your brand purpose, market positioning and long-term goals.',
    icon: {
      src: '/img/services/podcast/icon1.svg',
      alt:'star',
      width: 111,
      height: 111,
    },
  },
  {
    key: 1,
    title: 'Podcast Concept',
    text: 'We translate focus themes into a unique podcast concept and structure the format to ensure that each episode embraces your brand, expresses your point of view consistently and with authority, and offers something memorable to your audience.',
    icon: {
      src: '/img/services/podcast/icon2.svg',
      alt: 'S-circles',
      width: 111,
      height: 111,
    },
  },
  {
    key: 2,
    title: 'Podcast Branding',
    text: 'We craft a great name and tagline for your podcast, design the logo, channel art, thumbnails, in-episode graphics, music, and more. We bring the whole package together so your podcast stands out no matter where it is viewed and how.',
    icon: {
      src: '/img/services/podcast/icon3.svg',
      alt: 'S-Maze',
      width: 111,
      height: 111,
    },
  },
  {
    key: 3,
    title: 'Global Production',
    text: 'From a two-camera shoot to a four-camera setup. Whether it’s in a studio, at an event, or on the go. Whether it’s in New York or New Delhi. Makerrs has podcast production covered for your brand, no matter what the scale, format, or genre.',
    icon: {
      src: '/img/services/podcast/icon4.svg',
      alt: 'Think',
      width: 111,
      height: 111,
    },
  },
  {
    key: 4,
    title: 'Podcast Publishing',
    text: 'Our eye-grabbing thumbnails, SEO-friendly titles, descriptions, chapters, and transcripts, and our overall comprehensive project management ensure every episode goes live on schedule across YouTube, Spotify, Apple Podcast, and more. ',
    icon: {
      src: '/img/services/podcast/icon5.svg',
      alt: 'Services',
      width: 111,
      height: 111,
    },
  },
  {
    key: 5,
    title: 'Podcast Marketing',
    text: (
          <>
          We scale podcast versioning, publishing and marketing for you. We track podcast performance across Twitter, LinkedIn, Instagram and other social platforms. We also plan and execute media spends to help you reach your podcast growth goals.
          </>
    ),
    icon: {
      src: '/img/services/podcast/icon6.svg',
      alt: 's-chart',
      width: 111,
      height: 111,
    },
  },
]

export const redbanglewayThink = [
  {
    key: '0',
    heading: 'Discovery',
    content:
      "We explore your brand DNA and aspirations through research, interviews, analysis, and discussions.",
    image: {
      src: '/img/services/service-image.webp',
      width: '726',
      height: '915',
    },
  },
  {
    key: '1',
    heading: 'Strategy',
    content:
      'We craft a creative strategy to give your brand and communication a unique personality and advantage.',
    image: {
      src: '/img/services/service-image.webp',
      width: '726',
      height: '915',
    },
  },
  {
    key: '2',
    heading: 'Creative',
    content:
      'We explore creative directions and build design assets for your unique requirements.',
    image: {
      src: '/img/services/service-image.webp',
      width: '726',
      height: '915',
    },
  },
  {
    key: '3',
    heading: ' Delivery',
    content:
      'We compile and deliver all assets along with clear guidelines for consistent usage.',
    image: {
      src: '/img/services/service-image.webp',
      width: '726',
      height: '915',
    },
  },
  {
    key: '4',
    heading: 'Scale',
    content:
      'From brand identity to brand mascots, we help roll out and scale.',
    image: {
      src: '/img/services/service-image.webp',
      width: '726',
      height: '915',
    },
  },
]

export const designCards = [
  {
    key: 0,
    title: 'Brand Design Systems',
    text: 'Get unique, multi-sensory Brand Design Systems–visual, verbal, and sonic–that deliver a cohesive brand story and brand experience across touch points. Sign up for an immersive branding workshop and get started today!',
    icon: {
      src: '/img/services/design/icon1.svg',
      alt:'star',
      width: 111,
      height: 111,
    },
  },
  {
    key: 1,
    title: 'Event Branding',
    text: 'Be it your own brand event or a branded booth–our comprehensive event branding services include event theme and logo design, invites, motion graphics, mailers, zone and booth design, presentation design, merchandise design, and giveaway curation.',
    icon: {
      src: '/img/services/design/icon2.svg',
      alt: 'S-circles',
      width: 111,
      height: 111,
    },
  },
  {
    key: 2,
    title: 'Collateral Design',
    text: 'From presentations and coffee table books to packaging design, brochure design, brand merchandise design, social media creatives, and more—we help you slay brand conversations through great design.',
    icon: {
      src: '/img/services/design/icon3.svg',
      alt: 'S-Maze',
      width: 111,
      height: 111,
    },
  },
  {
    key: 3,
    title: 'Interactive Experiences',
    text: 'We design and develop interactive and immersive brand experiences that transform physical and digital spaces into dynamic storytelling platforms. Be it interactive, augmented or mixed reality - we forge unforgettable experiences for your brand.',
    icon: {
      src: '/img/services/design/icon4.svg',
      alt: 'Think',
      width: 111,
      height: 111,
    },
  },
  {
    key: 4,
    title: 'Brand Mascots and Avatars',
    text: 'Fuel infinite customer engagement possibilities with custom-crafted brand mascots and avatars inspired by human, animal, object, sci-fi, or hybrid DNA. Supercharge your brand across web, social, email, events, and more.',
    icon: {
      src: '/img/services/design/icon5.svg',
      alt: 'Services',
      width: 111,
      height: 111,
    },
  },
  {
    key: 5,
    title: 'Environmental Graphics',
    text: 'We design visually appealing environments and physical spaces for retail, corporate offices, galleries, public spaces, events, and more—helping people feel, navigate, and interact with your brand through curiosity and joy.',
    icon: {
      src: '/img/services/design/icon6.svg',
      alt: 's-megaphone',
      width: 111,
      height: 111,
    },
  },
  {
    key: 6,
    title: 'Motion Graphics',
    text: 'We\'re motion-first. In today\'s digital landscape, motion is key to captivate audiences through a "fourth dimension" in graphic design. We specialize in motion graphics, animation, VFX, CGI, and more.',
    icon: {
      src: '/img/services/design/icon7.svg',
      alt: 's-chart',
      width: 111,
      height: 111,
    },
  },
]

export const campaignCards = [
  {
    key: 0,
    title: 'Brand & Marketing Campaigns',
    text: 'Get brand awareness campaigns for your new markets that cut through the noise. Get marketing campaigns that drive sales for your product/service. Talk to us today for campaign services that win big for your business.',
    icon: {
      src: '/img/services/campaign/icon1.svg',
      alt:'star',
      width: 111,
      height: 111,
    },
  },
  {
    key: 1,
    title: 'Employer Branding & Recruitment Campaigns',
    text: 'Get employer brand awareness campaigns to drive recruitment in new regions. Get interactive campaigns that engage your people globally. Talk to us for employer branding campaigns that work hard for your employer brand.',
    icon: {
      src: '/img/services/campaign/icon2.svg',
      alt: 'S-circles',
      width: 111,
      height: 111,
    },
  },
  {
    key: 2,
    title: 'CorpComm and Public Relations Campaigns',
    text: 'Enhance your corporate communications with great campaigns that engage every stakeholder group. Our strategy and creative teams are here to craft meaningful campaign strategy, ideas and creatives for you.',
    icon: {
      src: '/img/services/campaign/icon3.svg',
      alt: 'S-Maze',
      width: 111,
      height: 111,
    },
  },
  {
    key: 3,
    title: 'Environmental, Social & Governance Campaigns',
    text: 'From campaigns big on documentary films to campaigns big on data-driven storytelling and immersive experiences–craft exciting ESG campaigns with us. Get great ideas and global execution for your ESG campaigns.',
    icon: {
      src: '/img/services/campaign/icon4.svg',
      alt: 'Think',
      width: 111,
      height: 111,
    },
  }
]

export const campaignCards2 = [
  {
    key: 0,
    title: 'Integrated',
    icon: {
      src: '/img/services/campaign/icon5.svg',
      width: 111,
      height: 111,
    },
  },
  {
    key: 1,
    title: 'Digital',
    icon: {
      src: '/img/services/campaign/icon6.svg',
      width: 111,
      height: 111,
    },
  },
  {
    key: 2,
    title: 'Interactive & Immersive',
    icon: {
      src: '/img/services/campaign/icon7.svg',
      width: 111,
      height: 111,
    },
  },
  {
    key: 3,
    title: 'AI-first',
    icon: {
      src: '/img/services/campaign/icon8.svg',
      width: 111,
      height: 111,
    },
  },
   {
    key: 4,
    title: 'Gamified',
    icon: {
      src: '/img/services/campaign/icon9.svg',
      width: 111,
      height: 111,
    },
  },
  {
    key: 5,
    title: 'Television',
    icon: {
      src: '/img/services/campaign/icon10.svg',
      width: 111,
      height: 111,
    },
  },
  {
    key: 6,
    title: 'Print & POSM',
    icon: {
      src: '/img/services/campaign/icon11.svg',
      width: 111,
      height: 111,
    },
  },
  {
    key: 7,
    title: 'Outdoor & Offline',
    icon: {
      src: '/img/services/campaign/icon12.svg',
      width: 111,
      height: 111,
    },
  }
]

export const campaignCards3 = [
  {
    key: '0',
    heading: 'Discovery',
    content:
      "We understand your brand, offering, audience and business objectives. We then design a tailored approach to solve communication challenges and craft compelling campaigns.",
    image: {
      src: '/img/services/service-image.webp',
      width: '726',
      height: '915',
    },
  },
  {
    key: '1',
    heading: 'Strategy',
    content:
      'We go beyond the brief–connecting the dots between your goals, audience, competitive landscape and market to uncover insights and shape a message that stands out for your campaign.',
    image: {
      src: '/img/services/service-image.webp',
      width: '726',
      height: '915',
    },
  },
  {
    key: '2',
    heading: 'Creative Direction',
    content:
      'We craft unique ideas and stunning visuals, making your campaigns sticky and memorable. From the campaign key visual and tag line to videos, hoardings, and more–we offer end-to-end campaign solutions.',
    image: {
      src: '/img/services/service-image.webp',
      width: '726',
      height: '915',
    },
  },
  {
    key: '3',
    heading: 'Creative Execution',
    content:
      'From copy and design across genres and styles to high-quality film and video production, and limitless versioning–we offer comprehensive, scalable creative execution services so you can focus on the rest.',
    image: {
      src: '/img/services/service-image.webp',
      width: '726',
      height: '915',
    },
  },
  {
    key: '4',
    heading: 'Technology Integrations',
    content:
      'From leveraging AI for interactive campaigns, immersive technologies for memorable campaign experiences and gamified high-engagement campaigns–we bring the tech chops required to deliver new-age campaigns online and offline.',
    image: {
      src: '/img/services/service-image.webp',
      width: '726',
      height: '915',
    },
  },
]

export const videosCards = [
  {
    key: 0,
    title: 'Video Strategy & SEO',
    text: 'As your strategic video partner, we begin by understanding your business and communication goals. We then define your video strategy and plan for the right channels, strong video SEO / AEO, and define goals-to-achieve in the next 12 and 18 months.',
    icon: {
      src: '/img/services/videos/icon1.svg',
      alt:'star',
      width: 111,
      height: 111,
    },
  },
  {
    key: 1,
    title: 'Concepts & Scripts',
    text: 'We explore and understand your brand, product/service, market and audience. We then brainstorm and craft creative concepts, scripts, visual approaches and design ideas that are unique to your brand and suitable to your objectives.',
    icon: {
      src: '/img/services/videos/icon2.svg',
      alt: 'S-circles',
      width: 111,
      height: 111,
    },
  },
  {
    key: 2,
    title: 'Video Visualisation & Design',
    text: 'From the right actor to the right stock video clip and the right illustrations - we detail out every frame of every video. Our visualisation, design and storyboarding are in-line with your brand, your audience, your message and sticky video trends.',
    icon: {
      src: '/img/services/videos/icon3.svg',
      alt: 'S-Maze',
      width: 111,
      height: 111,
    },
  },
  {
    key: 3,
    title: 'Video Production Across Locations',
    text: 'From locations and studios to crews, casting and styling. From one-camera testimonial videos filmed at an office to a series of videos produced across 5 countries and commercial videos produced on custom sets - we do it all, across 100 countries!',
    icon: {
      src: '/img/services/videos/icon4.svg',
      alt: 'Think',
      width: 111,
      height: 111,
    },
  },
  {
    key: 4,
    title: 'Editing, Motion Graphics, Animation, & GenAI',
    text: 'From basic video editing to documentary editing, motion graphics, 2D / 3D animation and GenAI videos - our post production studios are experienced in a wide range of video tools, styles, formats and genres. We also offer unlimited versioning.',
    icon: {
      src: '/img/services/videos/icon5.svg',
      alt: 'Services',
      width: 111,
      height: 111,
    },
  },
  {
    key: 5,
    title: 'Cloud-based Workflows',
    text: 'We run all your projects on our proprietary creative cloud platform. From briefs to project management, easy and interactive video reviews, to anytime asset access - our platform ensures we work together seamlessly, no matter how complex the project.',
    icon: {
      src: '/img/services/videos/icon6.svg',
      alt: 's-megaphone',
      width: 111,
      height: 111,
    },
  }
]

export const AIblogFAQ = [
  {
    key: 1,
    title: 'What is an AI explainer video?',
    content:
      'It’s a short-form video created using AI tools for scripting, voiceover, animation, and editing - ideal for explaining products, services, or processes quickly.',
  },

  {
    key: 2,
    title: ' How are AI explainer videos used in marketing?',
    content:
      'Like with most explainer videos, AI explainer videos are ideal for simplifying product features, boosting conversions on landing pages, supporting SaaS onboarding, and localizing campaigns fast - especially for startups and digital-first brands aiming to scale content production without ballooning costs.',
  },
  {
    key: 3,
    title: 'Can AI tools fully replace human video teams?',
    content:
      'Not entirely. They streamline execution, but creative input is still key for emotional impact, tone, and brand fidelity.',
  },
  {
    key: 4,
    title: 'Which tools are best for making AI explainer videos?',
    content:
      'Top picks include ChatGPT (scripts), ElevenLabs (voiceovers), Synthesia (avatars), Vyond (animation), and Descript (editing).',
  },
  {
    key: 5,
    title: 'Are AI-generated videos customizable to my brand?',
    content:
      'To some extent, current day tools offer  basic logo and color options. For deeper brand integration, partner with a creative studio that layers original storytelling over AI.',
  },
  {
    key: 6,
    title: 'What should I look for in an AI-powered explainer video agency?',
    content:
      "Look for a studio that blends AI efficiency with storytelling craft - one that understands your brand voice, optimizes for platforms, and knows when to use human writers, animators, or voice talent to avoid robotic or generic output. AI alone isn't magic; it’s how creatively it’s used that makes the difference.",
  },
]
export const AnimatedblogFAQ = [
  {
    key: 1,
    title: ' What is an animated explainer video?',
    content:
      'An animated explainer video is a short video that explains your product, service, or idea using animation, voiceover, and storytelling.',
  },

  {
    key: 2,
    title: 'How long should my explainer video be?',
    content:
      'The ideal length is between 60 and 90 seconds. It’s long enough to explain key points but short enough to keep viewers engaged.',
  },
  {
    key: 3,
    title: 'What type of animation is best for B2B companies?',
    content:
      '2D animation and motion graphics are most common for B2B. They’re versatile, easy to brand, and ideal for explaining abstract or technical concepts.',
  },
  {
    key: 4,
    title: ' How much does an animated explainer video cost?',
    content:
      'Costs vary based on style, length, and complexity. At Makerrs, we scope projects based on your goals and the production treatment best suited for your brand.',
  },
  {
    key: 5,
    title: 'Where can I use my explainer video?',
    content:
      'Explainer videos can go on websites, landing pages, social media, sales presentations, onboarding flows, and internal training tools.',
  },
]

export const ExplainerVideos = [
  {
    key: 1,
    title: 'What is an explainer video, and how does it work?',
    content: (
      <>
        An explainer video is a short, engaging video designed to simplify
        complex ideas or products using visuals, narration, and storytelling. It
        works by combining animation, voiceovers, and scripts to break down
        information into clear, digestible content that helps viewers understand
        a brand&apos;s offering quickly.
      </>
    ),
  },

  {
    key: 2,
    title: 'How do explainer videos increase conversions?',
    content:
      'Explainer videos increase conversions by capturing attention, clarifying value propositions, and guiding viewers to take action. When embedded on landing pages or product sites, they boost engagement, improve time-on-page, and lead to more sign-ups or purchases through clearer messaging.',
  },
  {
    key: 3,
    title: 'What is the ideal length for an explainer video?',
    content:
      'The ideal length for an explainer video is 60 to 90 seconds. This duration helps maintain viewer attention while delivering key information efficiently. Shorter videos tend to perform better, especially on social platforms and mobile devices.',
  },
  {
    key: 4,
    title: 'How do I create an effective explainer video for my business?',
    content:
      'To create an effective explainer video, start by defining your audience and objective. Write a compelling script using a clear structure, choose a suitable format (animated, live-action, etc.), and ensure high production quality with a strong call-to-action. Promote it across relevant channels like your website, YouTube, and email.',
  },
  {
    key: 5,
    title: 'What tools or software can I use to make an explainer video?',
    content:
      'Makerrs is a top choice for AI-powered, professionally produced, and high-quality explainer videos tailored to your brand and audience. For do-it-yourself options, platforms like Animaker and Synthesia offer user-friendly templates, animation, and AI features. These tools help teams create engaging videos without needing advanced technical skills.',
  },
  {
    key: 6,
    title: 'What is the ROI of using explainer videos in marketing?',
    content:
      'Explainer videos deliver high ROI by improving conversions, increasing time on site, and enhancing user understanding. They help reduce bounce rates, support SEO goals, and communicate complex products effectively, making them a valuable asset across the marketing funnel.',
  },
]

export const BestExplainerVideos = [
  {
    key: 1,
    title: 'What are the best explainer videos in 2025?',
    content: (
      <>
        The best explainer videos in 2025 simplify complex topics with
        storytelling, high-quality visuals, and concise messaging. Notable
        examples include SLB, Dropbox, Slack, HubSpot, and PayPal, each using
        tailored animation and clear scripts to engage audiences and drive
        conversions.
      </>
    ),
  },

  {
    key: 2,
    title: 'How do I choose the best explainer video style for my business?',
    content:
      'Select your explainer video style based on your product, audience, and goals. SaaS and startups often use animated videos for clarity. Live-action builds trust for service brands. Whiteboard works well for education, while screencasts suit product demos. Match style with your message.',
  },
  {
    key: 3,
    title: 'What makes an explainer video highly engaging and effective?',
    content:
      'An effective explainer video combines strong storytelling, simple messaging, clear visuals, and a direct call to action. The script focuses on a single core idea. Quality visuals enhance brand perception, while optimal length keeps viewers engaged and boosts conversions.',
  },
  {
    key: 4,
    title:
      'How long should the best explainer videos be for maximum engagement?',
    content:
      'The ideal length for explainer videos is typically 60 to 90 seconds. This duration captures attention, delivers the message concisely, and reduces viewer drop-off. Shorter formats under 60 seconds work better for social media and mobile-first audiences.',
  },
  {
    key: 5,
    title:
      'Should I use a professional agency or DIY tools for creating explainer videos?',
    content:
      'Professional agencies like Makerrs offer expertise in scripting, animation, and brand alignment, ideal for high-stakes marketing. They handle complex messaging and brand alignment. DIY tools like Vyond or Animaker are suitable for budget-conscious projects or internal training. The choice depends on budget, complexity, and desired production quality.',
  },
  {
    key: 6,
    title: ' What are the latest trends in explainer video design?',
    content:
      'Explainer videos in 2025 leverage AI-assisted production, vertical formats for mobile, interactive video features, hyper-personalization for target segments, and shorter attention-grabbing scripts. SaaS brands also invest heavily in 60-second videos to simplify onboarding and product showcases.',
  },
]

export const ExplainerVideosServices = [
  {
    key: 1,
    title: 'What are explainer video services?',
    content: (
      <>
        Explainer video services offer end-to-end video production that
        simplifies complex business ideas through visual storytelling. These
        services include scripting, animation, voiceovers, and editing to create
        short videos that clarify products, services, or processes for your
        target audience.
      </>
    ),
  },

  {
    key: 2,
    title: 'What factors affect the cost of explainer video services?',
    content:
      'The cost of explainer video services depends on several factors, including the complexity of animation, script and voiceover requirements, video length, production timeline, and the level of customization involved. Agencies may also vary pricing based on creative strategy, revision cycles, and brand-specific needs.',
  },
  {
    key: 3,
    title: 'What’s the process of creating an explainer video?',
    content:
      'The process includes discovery and goal-setting, followed by scriptwriting and storyboarding. Then comes voiceover recording, illustration, animation, editing, and final delivery. Most providers follow this structured workflow to ensure clarity and brand alignment.',
  },
  {
    key: 4,
    title: 'Which is better: live-action or animated explainer videos?',
    content:
      'Both styles serve different needs. Animated videos are ideal for SaaS, B2B, and abstract concepts, while live-action works best for showcasing real environments, people, or physical products. Some brands use hybrid videos combining both formats.',
  },
  {
    key: 5,
    title: 'Are explainer videos still effective in 2025?',
    content:
      'Yes. Explainer videos remain highly effective in 2025, helping brands boost conversions, simplify messaging, and improve engagement across digital platforms. They are especially valuable for mobile-first, short-form content strategies.',
  },
  {
    key: 6,
    title: 'What’s included in a typical explainer video service package?',
    content:
      'A typical package includes consultation, scriptwriting, storyboarding, professional voiceover, custom animation or live-action filming, background music, editing, and multiple delivery formats optimized for web and social platforms.',
  },
]

export const ExplainerVideosCompany = [
  {
    key: 1,
    title: ' What is an explainer videos company?',
    content: (
      <>
        An explainer videos company specializes in creating short, engaging
        videos that simplify complex ideas. These companies combine
        scriptwriting, animation, voiceover, and editing to deliver videos that
        help brands communicate clearly, engage audiences, and convert leads.
      </>
    ),
  },

  {
    key: 2,
    title: 'How do explainer video companies help B2B businesses?',
    content:
      'Explainer video companies help B2B brands by translating technical products and services into simple, compelling visual stories. They support sales, onboarding, and marketing with high-converting videos tailored to the target audience and platform.',
  },
  {
    key: 3,
    title: 'Which is the best explainer videos company for SaaS?',
    content:
      'Makerrs is one of the best explainer video companies for SaaS brands. Their Creative Cloud Platform, global delivery, and experience with leading B2B clients make them a trusted choice for product demos, onboarding videos, and branded explainers.',
  },
  {
    key: 4,
    title: ' What are the types of explainer videos offered by companies?',
    content:
      'Explainer video companies offer 2D/3D animations, motion graphics, whiteboard explainers, live-action videos, and hybrid formats. These styles are selected based on the brand’s tone, audience, and business goals.',
  },
  {
    key: 5,
    title: 'How much does it cost to hire an explainer video company?',
    content:
      'Costs vary based on video length, complexity, and production quality. Some companies offer tiered pricing models, while others charge per minute or per deliverable. Most professional agencies include scripting, design, animation, and revisions in their packages.',
  },
  {
    key: 6,
    title: 'How do I choose the right explainer video company for my brand?',
    content:
      'To choose the right company, evaluate their portfolio, creative style, pricing transparency, industry expertise, communication process, and ownership of source files. Look for alignment with your goals, tone, and target audience.',
  },
]

export const SaasExplainerVideos = [
  {
    key: 1,
    title: 'What are SaaS explainer videos?',
    content:
      'SaaS explainer videos are short, scripted videos that simplify complex software features. They use animation, motion graphics, or UI walkthroughs to explain how a SaaS product works visually. These videos help users quickly understand the benefits and functionality of the product.',
  },

  {
    key: 2,
    title: 'How do explainer videos help SaaS companies increase conversions?',
    content:
      'Explainer videos improve conversions by clearly demonstrating product value and solving user pain points. They reduce friction in the buyer journey, boost engagement, and increase sign-ups or demo requests by showcasing real use cases and benefits within 60–90 seconds.',
  },
  {
    key: 3,
    title: 'What makes a good SaaS explainer video?',
    content:
      'A good tech explainer video is concise, product-focused, and visually engaging. It follows a problem-solution narrative, highlights key features, aligns with brand tone, and ends with a clear call to action. Strong visuals, scripting, and voiceover enhance clarity and retention.',
  },
  {
    key: 4,
    title: 'How long should a SaaS explainer video be?',
    content:
      'The ideal length for a Software explainer video is 60 to 90 seconds. This duration keeps the viewer’s attention while effectively communicating the product’s value, features, and use cases without overwhelming the audience.',
  },
  {
    key: 5,
    title: ' What is the best format for a SaaS product demo video?',
    content:
      'The best format blends UI walkthroughs with light animation or motion graphics. This hybrid approach helps demonstrate real software workflows while keeping the visual experience engaging and user-friendly, ideal for onboarding and homepage demos.',
  },
  {
    key: 6,
    title: 'Are animated explainer videos effective for SaaS onboarding?',
    content:
      'Yes. Animated explainer videos are highly effective for SaaS onboarding. They simplify complex workflows, reduce support queries, and help new users get started quickly. Animation allows flexibility in illustrating abstract or multi-step processes with clarity.',
  },
]

export const B2BExplainerVideos = [
  {
    key: 1,
    title: 'What are B2B explainer videos and how do they work?',
    content: (
      <>
        B2B explainer videos are short, visual content pieces that simplify
        complex products or services for business audiences. Using formats like
        animation, screencasts, or live action, they explain your value
        proposition in 60–90 seconds. They&apos;re commonly used in sales decks,
        landing pages, and email campaigns.
      </>
    ),
  },

  {
    key: 2,
    title: 'Why should a B2B company use explainer videos?',
    content:
      'B2B companies use explainer videos to clarify complex offerings, shorten sales cycles, and improve demo conversion rates, making it easier for decision-makers to grasp product value quickly. They’re especially useful in reaching multiple stakeholders with different technical knowledge.',
  },
  {
    key: 3,
    title: 'What is the ideal length for a B2B explainer video?',
    content:
      'The ideal length for a B2B explainer video is between 60 and 90 seconds. This duration ensures enough time to introduce the problem, explain the solution, and include a clear call to action, while still retaining viewer attention.',
  },
  {
    key: 4,
    title: 'Are animated explainer videos effective for B2B audiences?',
    content:
      'Yes, animated explainer videos are highly effective for B2B audiences. They help visualize abstract or technical concepts, maintain viewer interest, and allow greater brand customization. Formats like 2D animation and hybrid styles are commonly used to explain software, workflows, or multi-step processes.',
  },
  {
    key: 5,
    title: 'How do I choose the right agency for a B2B explainer video?',
    content:
      'When choosing an agency, look for one with proven B2B experience, a collaborative briefing process, and storytelling expertise that aligns with your sales funnel. Makerrs is a trusted partner for many B2B brands, offering end-to-end production, strategic scripting, and video formats tailored to different industries and funnel stages.',
  },
  {
    key: 6,
    title: 'Can B2B explainer videos improve lead conversion rates?',
    content:
      'Yes. The best business explainer videos help clarify product value quickly, build trust, and guide buyers toward action. When placed strategically in the buyer journey such as on landing pages or in sales outreach, they can shorten decision-making time and boost conversions.',
  },
]

export const CustomExplainerVideos = [
  {
    key: 1,
    title: 'What are custom explainer videos?',
    content: (
      <>
        Custom explainer videos are short, engaging videos tailored to
        communicate a brand’s message, product, or service in a clear, visual
        format. They use unique scripts, storyboards, animation styles, and
        voiceovers to align with brand identity and audience needs.
      </>
    ),
  },

  {
    key: 2,
    title:
      ' How are custom explainer videos different from template-based videos?',
    content:
      'Custom explainer videos are built from scratch to match your specific business goals, tone, and visual style. Template-based videos reuse generic formats and visuals, often lacking brand alignment, storytelling depth, or creative differentiation.',
  },
  {
    key: 3,
    title: 'How much does a custom explainer video cost?',
    content:
      'The cost of a custom explainer video varies based on complexity, animation style, duration, and production quality. Factors include scripting, storyboarding, design, animation, voiceover, and revision rounds. Premium videos with unique concepts and high-quality production tend to cost more.',
  },
  {
    key: 4,
    title: 'What’s the process of creating a custom explainer video?',
    content:
      'The process includes briefing, scripting, storyboarding, animation, voiceover, and final delivery. It is a collaborative journey between the creative team and the client to ensure the final video aligns with brand goals and effectively communicates the message.',
  },
  {
    key: 5,
    title: 'What styles can I choose from in custom animated explainer videos?',
    content:
      'You can choose from 2D animation, 3D animation, whiteboard animation, screencasts, motion graphics, and hybrid styles. The choice depends on the brand personality, message complexity, and target audience.',
  },
  {
    key: 6,
    title: 'Are custom explainer videos effective for lead generation?',
    content:
      'Yes, custom explainer videos are highly effective for lead generation. They simplify your product story, grab attention, and build trust quickly, especially when used on websites, LinkedIn, and email campaigns to convert prospects.',
  },
]

export const CorporateExplainerVideos = [
  {
    key: 1,
    title: 'What is a corporate explainer video?',
    content: (
      <>
        A corporate explainer video is a short, engaging video designed to
        clearly communicate a company’s product, service, or value proposition.
        It uses storytelling, visuals, and voiceovers to simplify complex ideas,
        making it easier for audiences to understand and take action.
      </>
    ),
  },

  {
    key: 2,
    title: 'How do explainer videos help B2B businesses?',
    content:
      'Explainer videos help B2B businesses by making complex services easy to understand. They increase engagement, build trust, and improve sales enablement by communicating value propositions quickly, especially in pitches, product demos, and email campaigns.',
  },
  {
    key: 3,
    title: 'What’s the ideal length for a corporate explainer video?',
    content:
      'The ideal length for a corporate explainer video is between 60 to 90 seconds. This timeframe maintains viewer attention while allowing enough time to explain a problem, present a solution, and offer a clear call to action.',
  },
  {
    key: 4,
    title: 'How can I make my corporate explainer video more engaging?',
    content:
      'To make your corporate explainer video more engaging, focus on clear scripting, strong visuals, and relatable storytelling. Use a hook in the first 10 seconds, maintain a tight structure (problem → solution → benefit), and align the tone and style with your brand and audience.',
  },
  {
    key: 5,
    title: 'What are the best styles for corporate explainer videos?',
    content:
      'The most effective styles include animated videos, live-action sequences, screencasts, and hybrid formats. Animation is ideal for SaaS and abstract services, while live-action works well for human-led stories or team intros.',
  },
  {
    key: 6,
    title: 'Are explainer videos effective for SaaS or tech businesses?',
    content:
      'Yes, explainer videos are highly effective for SaaS and tech companies. They simplify abstract concepts, drive product adoption, and are especially powerful in product walkthroughs, onboarding, and lead generation campaigns.',
  },
]
export const FAQ = [
  {
    key: 0,
    title: 'Do you have a unique explainer video creation process?',
    content: (
      <>
        <div className="mb-5">
          Over the years, we have scripted, designed and produced hundreds of
          explainer videos across industries such as SAAS, technology,
          manufacturing, logistics, education and more. And while on every
          project we ask ourselves what we might do differently, and what we
          might do better – we also follow a tried-and-tested process that
          enables our clients to grow their brands and us to keep delivering
          on-point, on-quality. Our typical project workflow is something that
          starts with a clear brief, moves on to research, concepts, script,
          visualisation, design, storyboards, post production, reviews and
          versioning. But what’s unique about how we do it, is our proprietary
          platform that facilitates efficient cloud-based workflows. Here’s a
          quick run through of how it helps:
        </div>
        <ul>
          <li className="mb-5">
            - Your brief is loaded on our platform: this contains all the
            information you give us, we dig up, and all the creative assets we
            need to work on. Everything is in one place.
          </li>
          <li className="mb-5">
            - We use rate cards, add-ons and an efficient costing tool on our
            platform to speed up the pricing and contract process for you.
          </li>
          <li className="mb-5">
            - A great creative team is assigned to your project and briefed in
            detail.
          </li>
          <li className="mb-5">
            - Our producers choose the most optimal schedule on our platform,
            and update the dates as per your requirement. This way, everyone on
            the project knows exactly when something is due to you.
          </li>
          <li className="mb-5">
            - The creative team gets going with their work, coming to you for
            reviews at the script, storyboard or design stage.
          </li>
          <li className="mb-5">
            - We deliver the draft video on our platform and make it easy for
            you to review videos using our interactive review feature.
          </li>
          <li>
            - Once done, all the project assets are also uploaded to our
            platform so you can find them anytime you need and even share them
            with colleagues.
          </li>
        </ul>
      </>
    ),
  },
  {
    key: 1,
    title:
      'How do you ensure that the explainer and demo videos you create are engaging for our target audience?',
    content:
      'We don’t just spend time understanding your business and competitors to arrive at a great video idea for you, we are also tuned into design and animation trends, AI innovations, content consumption platforms and marketing shifts happening around us. We track and continuously gather fresh knowledge and creative inspiration that keeps us delivering amazing and effective work for you. With every new creative idea we unleash and bring to life, we focus on what’s going to work for your business, brand, audience and mediums.',
  },
  {
    key: 2,
    title:
      'How do you ensure that the films and videos created for us align with our brand?',
    content:
      'We start by getting to know your brand, its values and audiences. We always ask for your brand manual. We use our understanding of your brand and business, as well as your brand guidelines to align our creative craft and develop videos that not only reflect your brand but also support your business objectives.',
  },
  {
    key: 3,
    title: 'Which platforms do you create videos for?',
    content:
      'As a B2B video and creative agency, we conceptualize and craft videos that work across a range of platforms such as YouTube, LinkedIn, WhatsApp, events and internal portals. Our goal is to ensure every piece of video content you commission connects with your audience, and drives engagement, no matter where it’s seen. Let’s say you are making a B2B explainer video with us, we are able to also help you create versions and thumbnails of this film for various platforms.',
  },
  {
    key: 4,
    title: 'Do you create live action explainer videos?',
    content:
      'Yes, whether it’s featuring your team members or professional actors - we script, storyboard, cast, style, scout locations, do art direction, Direction, Production, post production, animation and more to create live-action explainer videos that work for your brand.',
  },
  {
    key: 5,
    title: 'How do you handle copyright and ownership of the video content?',
    content: (
      <>
        <div>
          With the majority of our work, as per our pre-agreed contracts with
          our clients, the copyright for creative assets are transferred to the
          client upon receipt of final payment for the commissioned work.
        </div>
        <br />
        <div>
          In some cases though, the copyright is not assigned or transferred for
          perpetuity. Examples of short-term rights assignment include
          custom-composed music, celebrity cast, etc. Rights with these creators
          and artists are agreed to on a case-to-case basis, and usually are for
          a year or three to begin with for specific mediums. Clients may extend
          such rights for additional years and mediums via Makerrs, at a
          future date and at an additional cost.
        </div>
      </>
    ),
  },
]

export const corporateFaq = [
  {
    key: 0,
    title: 'Do you have a unique video creation process?',
    content: (
      <>
        <div className="mb-5">
          Over the years, we have scripted, designed and produced thousands of
          videos across several countries and industries. On every project, we
          ask ourselves what we could do differently and how we could do it
          better—while still following a tried-and-tested process that helps our
          clients grow their brands and enables us to consistently deliver work
          that’s on-point and on-quality. Our typical project workflow is
          something that starts with a clear brief, moves on to research,
          concepts, script, visualisation, design, production, post production,
          reviews and versioning. But what’s unique about how we do it, is our
          proprietary platform that facilitates efficient cloud-based workflows.
          Here’s a quick run through of how it helps:
        </div>
        <ul>
          <li className="mb-5">
            - Your brief is loaded on our platform. This contains all the
            information you&apos;ve shared, everything we&apos;ve dug up, and
            all the creative assets we need to work on. Everything is in one
            place.
          </li>
          <li className="mb-5">
            - We use rate cards, add-ons and an efficient costing tool on our
            platform to speed up the pricing and contract process for you.
          </li>
          <li className="mb-5">
            - A great creative team is assigned to your project and briefed in
            detail.
          </li>
          <li className="mb-5">
            - Our producers choose the most optimal schedule on our platform,
            and update the dates as per your requirement. This way, everyone on
            the project knows exactly when something is due to you.
          </li>
          <li className="mb-5">
            - The creative team gets going with their work, coming to you for
            reviews at the script, storyboard or design stage.
          </li>
          <li className="mb-5">
            - We deliver the draft video on our platform and make it easy for
            you to review videos using our interactive review feature.
          </li>
          <li>
            - Once done, all the project assets are also uploaded to our
            platform so you can find them anytime you need and even share them
            with colleagues.
          </li>
        </ul>
      </>
    ),
  },
  {
    key: 1,
    title:
      'How do you ensure that the films and videos you create are engaging for our target audience?',
    content:
      'We don’t just spend time understanding your business and competitors to arrive at a great video idea for you, we are also tuned into creative trends, AI innovations, top content consumption platforms and marketing shifts happening around us. We track and continuously gather fresh knowledge and creative inspiration that keeps us delivering amazing and effective work for you. With every new creative idea we unleash and bring to life, we focus on what’s going to work for your business, brand, audience and mediums.',
  },
  {
    key: 2,
    title:
      'How do you ensure that the films and videos created for us align with our brand?',
    content:
      'We start by getting to know your brand, its values and audiences. We always ask for your brand manual. We use our understanding of your brand and business, as well as your brand guidelines to align our creative craft and develop videos that not only reflect your brand but also support your business objectives.',
  },
  {
    key: 3,
    title: 'Which platforms do you create videos for?',
    content:
      'As a B2B video and creative agency, we conceptualize and craft videos that work across a range of platforms such as YouTube, LinkedIn, WhatsApp, events and internal portals. Our goal is to ensure every piece of video content you commission connects with your audience, and drives engagement, no matter where it’s seen. Let’s say you are making a premium corporate film with us, we are also able to help you create versions and thumbnails of this film for various platforms.',
  },
  {
    key: 4,
    title: 'Do you create illustrated and animated videos?',
    content:
      'Yes, from 2D animation videos to 3D and mixed media—we script, visualise, illustrate, design, and animate a range of animated videos for corporate communications, PR, internal communications, employer branding, and more, take care of voice-overs in the accent suitable to your audience, find the right stock music or craft a custom-composed track, and handle sound effects, audio mixing, and mastering. Ours is an end-to-end process across illustrated and animated video styles.',
  },
  {
    key: 5,
    title: 'How do you handle copyright and ownership of the video content?',
    content: (
      <>
        <div>
          With the majority of our work, as per our pre-agreed contracts with
          our clients, the copyright for creative assets are transferred to the
          client upon receipt of final payment for the commissioned work.
        </div>
        <br />
        <div>
          In some cases though, the copyright is not assigned or transferred for
          perpetuity. Examples of short-term rights assignment include
          custom-composed music, celebrity cast, etc. Rights with these creators
          and artists are agreed to on a case-to-case basis, and usually are for
          a year or three to begin with for specific mediums. Clients may extend
          such rights for additional years and mediums via Makerrs, at a
          future date and at an additional cost.
        </div>
      </>
    ),
  },
]

export const CaseStudyVideoFaq = [
  {
    key: 0,
    title: 'Do you follow a specific case study video creation process?',
    content: (
      <>
        <div className="mb-5">
          As experts who have produced hundreds of B2B case study videos across
          industries, geographies and video formats - with every new brief,
          we’re always on the lookout to try something new. This has helped us
          come up with a tried-and-tested process that enables us to deliver
          impactful case study videos for your brand. Our typical workflow
          starts with a clear brief, followed by research, concepts, script,
          design, production, post-production, reviews, and versioning. But
          what’s unique about how we do it, is our proprietary platform that
          facilitates efficient cloud-based workflows. Here’s a quick
          run-through of how it helps:
        </div>
        <ul>
          <li className="mb-5">
            - Your brief is loaded on our platform. This contains all the
            information you&apos;ve shared, everything we&apos;ve dug up, and
            all the creative assets we need to work on. Everything is in one
            place.
          </li>
          <li className="mb-5">
            - We use rate cards, add-ons, and an efficient costing tool on our
            platform to speed up the pricing and contract process for you.
          </li>
          <li className="mb-5">
            - We propose a narrative structure with one or more creative
            approaches that align with your industry, audience, tone, and brand
            identity. You can choose what resonates most with your brand and
            marketing needs.
          </li>
          <li className="mb-5">
            - Our project managers draft the most optimal project schedule on
            our platform, setting milestones that work best for your
            requirements. Everyone on the project knows exactly when something
            is due to you, no follow-ups required.
          </li>
          <li className="mb-5">
            - The creative team gets going with their work, coming to you for
            reviews at the script and storyboard, or design stages.
          </li>
          <li className="mb-5">
            - Our producers coordinate all logistics - scheduling interviews,
            sharing prep material, confirming availability, and curating and
            managing professional on-ground crews.
          </li>
          <li className="mb-5">
            - Files, links, and updates are all on the cloud, so you and your
            colleagues are never left wondering what&apos;s next or how things
            are progressing.
          </li>
          <li className="mb-5">
            - Once the post-production team gets going with their work, video
            drafts are uploaded directly to the platform where you use our
            interactive review feature to share frame-accurate comments and
            respond to our creative suggestions - all without lengthy email
            chains or missed feedback. Additionally, all video drafts on the
            project are accessible to you on one dashboard, so you won’t have to
            hunt for links to compare notes.
          </li>
          <li>
            - Once the project is complete, your video assets are uploaded to
            our platform. Everything is neatly organised, downloadable, and
            shareable with colleagues and partners, and ready for repurposing in
            the future.
          </li>
        </ul>
        <div className="mt-5">
          Our cloud-based platform-led workflow allows us to maintain creative
          excellence while delivering at speed and scale. It also gives you an
          efficient and transparent experience from start to finish.
        </div>
      </>
    ),
  },
  {
    key: 1,
    title:
      'How do you ensure that the testimonial video made for us reflects our brand?',
    content:
      'We always request your brand guidelines at the start of the project and seek an understanding of your business, products, and solutions. This includes guidelines around tone of voice, visual styles, colors, fonts, logo usage, and reading material on your offerings. Our creative teams refer to these throughout the duration of the project to maintain consistency. We also align voiceover tone, music, subtitles, and animation style with your overall brand personality, message, and audience. The final result is a case study video that doesn’t just tell a successful and impressive story - it also feels unmistakably yours, wherever it’s posted.',
  },
  {
    key: 2,
    title:
      'What is the typical timeline for case study videos or testimonial videos?',
    content:
      'Timelines can vary based on the format, complexity, and number of stakeholders involved. That said, our typical end-to-end timeline ranges anywhere between 1 to 6 weeks for a single video, depending on the level of complexity of the format and style. This timeline includes scripting, production, editing, animation, voice over, and reviews with you.',
  },
  {
    key: 3,
    title:
      'Can you create a series of case studies or craft a creative campaign for lead generation?',
    content:
      'Yes, we frequently work with brands looking to create a suite of case study videos across geographies, products/services, or verticals. In such cases, we establish a visual and narrative framework upfront that ensures consistency, while allowing each video to reflect the unique customer and outcome. We also set up scalable production plans, centralised asset sharing, and a review process that’s easy to manage with colleagues and with client-side stakeholders. Whether you need three videos or fifteen, no matter how many locations, our professional processes help you roll out case study videos efficiently, without compromising on quality. We also work on projects where we design complete creative campaigns for lead generation, which include case study videos. This involves a unique, central campaign idea, designing a complete campaign plan, and supporting you with creatives required across the campaign, be they well-constructed webpages, LinkedIn banners, or videos.',
  },
  {
    key: 4,
    title: 'What kind of formats do you offer for case study videos?',
    content: (
      <>
        <div className="mb-5">
          We offer a range of case study video formats to suit different
          storytelling styles, platforms, and budgets. These include:
        </div>
        <ul>
          <li className="mb-5">- Live-action interview-led videos</li>
          <li className="mb-5">- Voiceover-led case study videos</li>
          <li className="mb-5">- Documentary-style case study videos</li>
          <li className="mb-5">- Stock-footage based case study videos</li>
          <li className="mb-5">- Animated case study videos</li>
          <li>- And, mixed format case study videos</li>
        </ul>
        <div className="mt-5">
          We help you select the right genre and format or a combination of
          formats, based on your audience, messaging goals, and preferred
          channels (e.g., LinkedIn, YouTube, internal portals, and sales decks).
          We also support with promos or teasers, language and vertical adapts.
        </div>
      </>
    ),
  },
  {
    key: 5,
    title: 'What kind of brands benefit from case study videos?',
    content:
      'Whether you’re a manufacturer, a consulting business, a pharmaceutical company, a logistics firm or an energy business - your marketing funnel needs case study videos to attract prospects and expand conversations with customers. A well-told and impactful case study video helps the world see your success stories and adds to your brand’s credibility.',
  },
]

export const  AnimatedExplainerFAQ  = [
  {
    key: 1,
    title: 'Can animated explainer videos help with SEO?',
    content:(
      <>
      Absolutely! Animated explainer videos can improve SEO by increasing time spent on your website, enhancing user experience, and boosting your page’s performance in search results. Properly optimized videos can also help increase organic traffic through platforms like YouTube.
      </>
    )
  },
  {
    key: 2,
    title: 'Are animated explainer videos effective for B2B Marketing?',
    content:
    'Yes, animated explainer videos work exceptionally well in B2B marketing. They’re ideal for explaining complex products, services, or technologies in an engaging and easy-to-understand way, making them perfect for SaaS, enterprise solutions, and more.'    
  },
   {
    key: 3,
    title: 'How can animated explainer videos improve customer understanding?',
    content:
    'By breaking down complicated concepts into digestible visual stories, animated explainer videos ensure that your audience quickly grasps your product or service, leading to better retention and informed decisions.'    
  },
   {
    key: 4,
    title: 'Where can I use animated explainer videos in my marketing funnel?',
    content:
    'Animated explainer videos are versatile. You can use them at the top of the funnel to introduce your product, in the middle to educate prospects on how it works, and at the bottom to boost conversions through testimonials, product walkthroughs, or use-case demos.'    
  },
   {
    key: 5,
    title: 'Can animated explainer videos be adapted for different platforms?',
    content:
    'Yes, animated explainer videos are highly adaptable. They can be customized for use on websites, social media, email campaigns, landing pages, and even mobile apps, ensuring maximum reach across various digital platforms.'    
  }
]

export const  TechExplainerVideosFAQ  = [
  {
    key: 1,
    title: 'What are tech explainer videos and how are they used?',
    content:(
      <>
      Tech explainer videos are short-form videos that simplify complex technology or software concepts using clear visuals and narrative. Brands use them for product demos, feature launches, onboarding, and customer education. They are commonly deployed on landing pages, email campaigns, and social media to increase engagement and drive conversions.
      </>
    )
  },

  {
    key: 2,
    title: 'How do explainer videos help increase user adoption?',
    content:
    'Explainer videos visually demonstrate workflows, user interfaces, and key benefits, making it easier for users to understand and adopt software. They reduce the learning curve during onboarding and support teams in communicating complex tech features effectively.'
  },
   {
    key: 3,
    title: 'How long should a tech explainer video be?',
    content:
    'The ideal length for a tech explainer video is between 60 to 120 seconds. Shorter videos under 90 seconds tend to have higher completion rates while maintaining viewer engagement and retention.'    
  },
   {
    key: 4,
    title: 'What are the key elements of a high-conversion tech explainer?',
    content:
    'A high-conversion tech explainer includes a problem-solution narrative, clear visuals (often animated or UI-based), concise scripting, synchronized voiceover, and a strong call to action. Brand alignment and platform-specific adaptations also enhance impact.'    
  },
   {
    key: 5,
    title: 'Should I choose animation or live-action for a tech product demo?',
    content:
  'Animated explainer videos work best for abstract or UI-driven SaaS products, while live-action is suitable when showcasing real people, environments, or customer testimonials. Many brands combine both for maximum clarity and emotional appeal.'   
  },
   {
    key: 6,
    title: 'What tools or agencies specialize in tech explainer videos?',
    content:
  'Specialized tech video agencies like Makerrs offer end-to-end production services, from scriptwriting and storyboarding to animation and post-production. DIY tools such as Adobe After Effects, Vyond, and AI-based platforms like Synthesia are often used for production under a tight budget.'    
  }, 
]

export const  ProductFAQ  = [
  {
    key: 1,
    title: 'What is a product explainer video?',
    content:(
      <>
      A product explainer video is a short, animated or live-action video that introduces a product, showcases its features, and explains how it solves a specific problem. These videos combine visuals, voiceover, and storytelling to simplify complex messages and improve product understanding.
      </>
    )
  },

  {
    key: 2,
    title: 'How do explainer videos help increase conversions?',
    content:
    'Explainer videos increase conversions by presenting product benefits clearly and engagingly. They grab attention quickly, address buyer objections, and end with a strong call-to-action, leading to higher demo bookings, reduced bounce rates, and more purchases.'  
  },
   {
    key: 3,
    title: 'What’s the ideal length for a product explainer video?',
    content:
    'The ideal length for a product explainer video is 60 to 90 seconds. This duration balances audience attention span and message clarity, making it long enough to inform but short enough to retain viewer interest.'
   },
   {
    key: 4,
    title: 'Are animated or live-action explainer videos more effective?',
    content:
    'Animated explainer videos are more effective for tech products and abstract concepts, while live-action videos work well for products that benefit from human interaction or physical demonstration. The right format depends on your brand, audience, and use case.'
   },
   {
    key: 5,
    title: 'Which tools or platforms can I use to create product explainer videos?',
    content:
    'Popular DIY tools include Vyond, Adobe After Effects, and AI-based platforms like Synthesia. For fully custom videos, many companies partner with explainer video agencies like Makerrs that manage scripting, animation, and production end-to-end.'
  },
   {
    key: 6,
    title: 'How can product explainer videos be optimized for SEO or YouTube?',
    content:
    'Optimize product explainer videos with keyword-rich titles, engaging thumbnails, video transcripts, schema markup, and closed captions. Publishing on YouTube with proper tags, chapters, and descriptions also boosts visibility and ranking.'  
  }, 
]

export const  DifferentTypesFAQ  = [
  {
    key: 1,
    title: 'What are the different types of explainer videos?',
    content:(
      <>
      Explainer videos come in various formats including 2D animation, 3D animation, whiteboard, screencast, live-action, and motion graphics. Each type serves different goals, from education and product demos to storytelling and conversions. For example, 2D animation works well for brand storytelling, while screencasts are ideal for SaaS walkthroughs.
      </>
    )
  },

  {
    key: 2,
    title: 'How do 2D and 3D explainer videos differ in terms of cost and impact?',
    content:
      '2D explainer videos are more cost-effective and versatile across industries. They’re quicker to produce and highly customizable for branding. In contrast, 3D videos offer a more premium feel and are often used for hardware, product design, or high-tech demos, but they come with longer timelines and higher production costs.'  
  },
   {
    key: 3,
    title: 'Should I choose animation or live-action for my explainer video?',
    content:
    'Choose animation if you need to simplify complex ideas or want full visual control for storytelling. Go for live-action if you want to humanize your message, build trust, or showcase real people and spaces, ideal for testimonials and brand introductions.'  
  },
   {
    key: 4,
    title: 'What are whiteboard explainer videos and when should I use them?',
    content:
    'Whiteboard explainer videos simulate hand-drawn visuals unfolding on a whiteboard. They are great for instructional content, B2B education, and topics where simplicity and clarity are crucial. Their low production needs make them ideal for quick, educational storytelling.' 
  },
   {
    key: 5,
    title: 'How effective are screencast explainer videos for SaaS platforms?',
    content:
    'Screencast videos are highly effective for SaaS platforms. They visually demonstrate product workflows, onboarding steps, or features directly on screen. They are cost-efficient, easy to update, and perfect for building product familiarity and user confidence.'
  },
   {
    key: 6,
    title: 'Can different explainer video types be used together in a campaign?',
    content:
    'Yes, using different types together creates a richer brand narrative. For example, combine screencasts for product walkthroughs, 2D animation for brand storytelling, and live-action for testimonials. A multi-format approach helps match content style to audience expectations and platform behaviors.'  
  }, 
]

export const  HealthcareFAQ  = [
  {
    key: 1,
    title: 'What are healthcare explainer videos?',
    content:(
      <>
      Healthcare explainer videos are short, animated or live-action videos that simplify complex healthtech solutions for B2B audiences. These videos help SaaS companies, medtech platforms, and digital health startups explain how their products work, why they matter, and how they solve specific pain points for healthcare providers, payers, or enterprise buyers.
      </>
    )
  },

  {
    key: 2,
    title: 'How do explainer videos help B2B buyers understand healthtech products?',
    content:
      'Explainer videos use storytelling, motion graphics, and visual metaphors to turn technical features into clear, easy-to-understand messages. This helps decision-makers such as hospital administrators or procurement leads understand your platform’s value without needing to read long documents or sit through demos early in the process.'
      },
   {
    key: 3,
    title: 'What healthcare topics are best explained through B2B videos?',
    content:
    'Animated explainer videos are effective for topics like data workflows, AI-powered diagnostics, patient data security, EHR integration, compliance processes, or app onboarding. They are ideal for any feature that is abstract, technical, or new to B2B healthcare buyers.'
   },
   {
    key: 4,
    title: 'What is the ideal format for a B2B healthcare explainer video?',
    content:
    'The best healthcare explainer videos for B2B audiences are 60 to 90 seconds long, use animation and voiceovers, and follow a clear structure that covers the problem, the solution, how the product works, and the business benefits. Most also include a call to action such as "Book a demo" or "Contact sales."'  
  },
   {
    key: 5,
    title: 'Where can B2B healthtech brands use explainer videos?',
    content:
  'Explainer videos can be embedded on product landing pages, demo request pages, sales decks, email campaigns, investor presentations, or even app onboarding flows. Many healthtech companies also use them in conferences or pitch meetings to simplify messaging across non-technical stakeholders.' 
  },
   {
    key: 6,
    title: 'Can healthcare explainer videos improve conversions for B2B platforms?',
    content:
    'Yes. When used on product pages, in sales presentations, or in outbound campaigns, explainer videos can improve demo bookings, lead-to-close ratios, and stakeholder understanding. Many healthtech brands rely on them to shorten sales cycles and help buyers understand key value points across multiple decision-makers.'
    }, 
]

export const  ThreeDExplainerFAQ  = [
  {
    key: 1,
    title: 'What are 3D explainer videos, and how do they work?',
    content:(
      <>
      3D explainer videos are short, animated videos that use three-dimensional graphics to explain complex products, ideas, or services in a visually engaging way. These videos typically combine custom 3D models, motion graphics, voiceovers, and storytelling to simplify information and improve audience understanding across digital platforms.     
       </>
    )
  },

  {
    key: 2,
    title: 'How are 3D explainer videos different from 2D ones?',
    content:
    'Unlike 2D animations that use flat visuals, 3D explainer videos offer depth, realism, and immersive design. This makes them ideal for showcasing product features, internal mechanisms, or technical workflows—especially in SaaS, manufacturing, and healthcare sectors.'    
    },
   {
    key: 3,
    title: 'What types of businesses use 3D explainer videos?',
    content:
  'B2B tech companies, SaaS platforms, healthcare providers, industrial manufacturers, and startups often use 3D explainer videos to visually communicate how their product works, highlight benefits, or simplify technical processes for prospects, clients, or investors.'  
  },
   {
    key: 4,
    title: 'How do I choose the right partner for a 3D explainer video?',
    content:
    'Partner with agencies like Makerrs that offer custom 3D animation, industry expertise, and a collaborative workflow involving scriptwriting, storyboarding, and modeling. Review their portfolio for realism, clarity, and storytelling strength. Prioritize studios that understand your product’s complexity and can deliver visual quality aligned with your brand.'  
  },
   {
    key: 5,
    title: 'What’s the typical duration of an effective 3D explainer video?',
    content:
  'Most effective 3D explainer videos are between 60 to 120 seconds long. This timeframe allows businesses to communicate core ideas clearly while retaining viewer attention across channels like landing pages, email campaigns, and social media.'
  },
   {
    key: 6,
    title: 'Can 3D explainer videos improve conversion rates?',
    content:
    'Yes, 3D explainer videos can significantly improve conversion rates by engaging viewers, simplifying product messaging, and increasing trust. When placed on key landing pages or used in outreach campaigns, they help reduce bounce rates and move prospects further along the funnel.'  
  }, 
]

export const  HowCreateFAQ  = [
  {
    key: 1,
    title: 'How long should my explainer video be?',
    content:(
      <>
      Explainer videos are most effective when kept between 60 and 90 seconds. This duration helps deliver a focused message without losing viewer interest, especially for B2B audiences with short attention spans.
      </>
    )
  },

  {
    key: 2,
    title: 'How do I measure the success of my explainer video?',
    content:
    (
      <>
      <p>
        You can evaluate success by tracking key performance metrics like:
      </p>
      <ul style={{ listStyleType: 'disc', padding: '10px 0px 10px 20px' }}>
        <li>View count</li>
        <li>Watch time</li>
        <li>Engagement (likes, shares, comments)</li>
        <li>Click-throughs</li>
        <li>Conversion rates (sign-ups, demo requests)</li>
      </ul>
      <p>
        These metrics show how well your video is performing across the funnel.
      </p>
      </>
    )},
   {
    key: 3,
    title: 'What type of explainer video is best for B2B?',
    content:
    'Animated explainer videos work best for simplifying complex B2B offerings. For product demos, screencasts are ideal. When trust and authenticity matter, such as testimonials or service-based offerings, live-action videos perform well.'
  },
{
  key: 4,
  title: 'When should I consider hiring a professional explainer video agency?',
  content: (
    <div>
      <p>Consider hiring an agency when:</p>

      <ul style={{ listStyleType: 'disc', padding: '10px 0px 10px 20px' }}>
        <li>You&apos;re launching a flagship product or major campaign</li>
        <li>Your messaging is complex or multi-layered</li>
        <li>You need consistent, on-brand visuals across multiple assets</li>
        <li>You&apos;re targeting high-value stakeholders like investors or enterprise clients</li>
      </ul>

      <p>Professional production ensures clarity, engagement, and brand polish.</p>
    </div>
  )
}
,
   {
    key: 5,
    title: 'How much does it cost to make a professional explainer video?',
    content:
    (
      <>
      It varies widely based on length, complexity, style, and production quality. At 
      <a href="https://www.makerrs.com/" className="text-rb-black underline hover:text-rb-link-green" target='_blank'> Makerrs</a>
      , we offer transparent pricing based on your brief with multiple creative options and timelines upfront. Whether it’s animation, live action, or a full campaign series, we tailor costs to outcomes.
      </>
    )
  },
   {
    key: 6,
    title: 'Can explainer videos boost SEO and engagement?',
    content:
  'Yes. Videos increase dwell time, reduce bounce rates, and improve user engagement. These are the signals that positively impact SEO. Pair it with metadata, subtitles, and a solid CTA, and it becomes a conversion tool and a visibility booster.'  
  }, 
]

export const  WhiteboardFAQ  = [
  {
    key: 1,
    title: 'What industries benefit most from whiteboard explainer videos?',
    content:(
      <>
      Whiteboard explainer videos are especially effective in industries where simplifying complex concepts is essential. This includes education, healthcare, finance, SaaS, and nonprofits. They’re widely used for training, onboarding, internal communication, and customer education, anywhere clarity matters more than visual flair.
      </>
    )
  },

  {
    key: 2,
    title: 'Can whiteboard explainer videos be used for product demos?',
    content:
'Yes. Whiteboard videos are a great fit for product demos, especially when the product has abstract workflows, technical features, or benefits that are hard to visualize with screenshots. The format helps break down processes step by step, making it easier for viewers to connect features with outcomes.'
  },
   {
    key: 3,
    title: 'How long should a whiteboard explainer video be?',
    content:
  'The ideal length is between 60 and 120 seconds. This is enough to explain a single idea or process clearly while keeping viewer engagement high. Training or internal education videos can run longer, up to 3–5 minutes, if the content is structured well and remains easy to follow.'
  },
   {
    key: 4,
    title: 'Do whiteboard videos perform better than other types on YouTube or social media?',
    content:
    'Whiteboard explainer videos often perform well on platforms like YouTube, LinkedIn, or in email campaigns, especially when the goal is education. However, on short-form platforms like Instagram Reels or TikTok, more dynamic styles like motion graphics or live action tend to capture attention faster due to their visual energy.'
   },
   {
    key: 5,
    title: 'Is it possible to create whiteboard explainer videos without any design experience?',
    content:
'Absolutely. Tools like VideoScribe, Doodly, and Animaker offer drag-and-drop functionality, pre-built templates, and libraries of stock visuals. These platforms make it easy for beginners to create professional-looking whiteboard videos without prior animation or design knowledge.'
  },
   {
    key: 6,
    title: 'Are whiteboard videos suitable for internal corporate training?',
    content:
   'Yes. Many companies use whiteboard videos to explain HR policies, compliance procedures, onboarding workflows, and internal tools. Their clear structure and visual storytelling make them easy to remember, ideal for internal training that needs to scale across teams or geographies.'
   }, 
]

export const  FunnyExplainerFAQ  = [
  {
    key: 1,
    title: 'What is a funny explainer video?',
    content:(
      <>
      A funny explainer video is a short (usually 60–90 seconds) video that explains a product or service in a simple, engaging way using humor. Instead of listing features, it tells a story, uses metaphors, or exaggerates pain points to entertain while educating.
       </>
    )
  },

  {
    key: 2,
    title: 'Why should B2B brands use humor in explainer videos?',
    content:
 'Because B2B content often gets complex with jargon. Humor cuts through the complexity, builds trust, and makes your brand more relatable. '
  },
   {
    key: 3,
    title: 'Won’t humor make my brand look less serious or professional?',
    content:
  'Not if it’s done the right way. The key is to match the humor to your brand’s personality and tone. A touch of wit or lighthearted storytelling can make your message more approachable without undermining credibility or losing your brand’s essence.'
  },
   {
    key: 4,
    title: 'Can humor actually help with conversions?',
    content:
    'Yes! Humor improves recall and emotional connection, which makes viewers more likely to trust your brand and take action. Studies show 90% of people remember funny ads, and 69% are more likely to click on content with a funny hook.'
   },
   {
    key: 5,
    title: 'Do you need a professional agency to make a funny product explainer video?',
    content:
    'Working with an experienced agency helps strike the right balance between storytelling, humor, and business messaging. At Makerrs, we specialize in making explainers that not only entertain but also stick in the minds of B2B audiences.'
  } 
]

export const  BenefitsExplainerFAQ  = [
  {
    key: 1,
    title: 'What are the top benefits of explainer videos for B2B companies?',
    content:(
      <>
        The top benefits of explainer videos for B2B brands include increased engagement, simplified messaging, higher conversion rates, and reduced customer support queries, making them essential for enterprise marketing strategies.
      </>
    )
  },

  {
    key: 2,
    title: 'How do explainer videos help build trust with B2B buyers?',
    content:
    'Explainer videos present complex solutions in clear, relatable formats, which helps establish credibility and trust—especially important for B2B decision-makers navigating long buying cycles.'
  },
   {
    key: 3,
    title: 'Can explainer videos boost conversion rates in B2B marketing?',
    content:
  'Yes, the benefits of explainer videos for B2B include boosting conversion rates on landing pages and campaigns, as visual storytelling encourages viewers to take action and commit to next steps.'
  },
   {
    key: 4,
    title: 'Why are explainer videos better than traditional content formats for B2B audiences?',
    content:
    'Explainer videos combine narration and visuals to make data engaging, increasing retention and comprehension compared to static formats like whitepapers—key among the top benefits of explainer videos for B2B brands.'
   },
   {
    key: 5,
    title: 'How do explainer videos impact customer support in B2B organizations?',
    content:
    'One of the important benefits of explainer videos for B2B is their ability to dramatically reduce customer support queries by providing clear, helpful instruction and onboarding content.'
  } 
]

export const  CustomerCaseStudyFAQ  = [
  {
    key: 1,
    title: 'What is a customer case study video?',
    content:'A customer case study video is a visual testimonial where real clients share their experiences and results, helping prospects understand the value of a product or service through authentic stories.'
  },

  {
    key: 2,
    title: 'Why are case study videos effective in B2B marketing?',
    content:
    'They build trust by showing genuine customer success, simplify complex solutions, and create emotional connections that accelerate purchase decisions.'
  },
   {
    key: 3,
    title: 'What’s the ideal length for a customer testimonial video?',
    content:
  'Typically, 60 to 90 seconds for social media and ads, and 2 to 3 minutes for detailed stories used in sales or websites.'
  },
   {
    key: 4,
    title: 'How do video testimonials affect brand trust?',
    content:
    'They increase trust by presenting real customer voices and emotions, making your brand more credible and relatable.'
   },
   {
    key: 5,
    title: 'How can I use testimonial videos effectively?',
    content:
    'Use them across multiple channels—websites, social media, emails, and sales decks to engage prospects at different buying stages.'
  },
   {
    key: 6,
    title: 'Do I need high-end production for these videos?',
    content:(
      <>
      Not necessarily; good audio, lighting, and authentic storytelling matter more. For polished results, reach out to experts for help at
      <a href="https://www.makerrs.com/" className="text-rb-black underline hover:text-rb-link-green" target='_blank'> Makerrs</a>
      </>
    )
     },
   {
    key: 7,
    title: 'How can businesses utilize video testimonials beyond just their website?',
    content:
    'Deploy videos in email campaigns, social media ads, trade shows, sales presentations, and onboarding to maximize reach and impact.'
  } 
]

export const  BestCaseStudyFAQ  = [
  {
    key: 1,
    title: 'What are Case Study Videos?',
    content:(
      <>
      Case Study Videos are short videos that document a real customer’s challenge, the solution implemented, and measurable outcomes.
      </>
    )
  },

  {
    key: 2,
    title: 'How do B2B Case Study Videos impact business?',
    content:
    'They accelerate trust, compress complexity, and shorten time-to-conviction, especially in high-consideration sales.'
  },
   {
    key: 3,
    title: 'How long should a case study video be?',
    content:
  '1–3 minutes is the productive middle: enough to land a story + proof, short enough to finish.'
  },
   {
    key: 4,
    title: 'How do I keep my case study video authentic?',
    content:
    'Let clients speak plainly, film in real environments, show product-in-action, and ground claims in outcomes.'
   },
   {
    key: 5,
    title: 'What styles work best for B2B case studies?',
    content:(
      <>
      Interview-led, animated explainers, hybrid product walk-throughs, and montage reels, are all valid. Choose the one that best proves <span className='italic'>your</span> core value. That’s how you join the best B2B case study videos.
      </>
    )
    },
   {
    key: 6,
    title: 'How much should I budget for a case study video?',
    content:'Costs vary widely, from lean animated explainers to multi-location live action. Scope comes from ambition: number of locations, days, stakeholders, and level of design.'
     },
   {
    key: 7,
    title: 'How often should a brand produce new case study videos?',
    content:(
      <>
      Aim for a steady cadence: twice a year at minimum to reflect evolving wins and keep the funnel fresh with video case studies.
      </>
    )
    } 
]

export const  CorporateCaseStudyFAQ  = [
  {
    key: 1,
    title: 'What is a corporate case study video?',
    content:(
      <>
      A corporate case study video is a short, narrative-driven film that showcases how a company solved a client’s problem using its product or service. These videos highlight the challenge, solution, and measurable results, making them a powerful tool for B2B marketing, sales enablement, and building customer trust.
      </>
    )
  },

  {
    key: 2,
    title: 'How do case study videos differ from testimonials?',
    content:
    'Testimonials usually feature customer opinions or endorsements, while corporate case study videos provide structured storytelling with evidence. They explain the client’s problem, the implemented solution, and the measurable results, offering more depth and credibility than simple testimonials.'
  },
   {
    key: 3,
    title: 'How long should a B2B case study video be in 2025?',
    content:
  'The ideal length depends on the channel and audience. Short clips under one minute perform best on social media, mid-length videos of one to three minutes work well for websites and LinkedIn, and extended versions of three to eight minutes allow for deeper dives when targeting decision-makers.'
  },
   {
    key: 4,
    title: 'How do I structure a case study video script?',
    content:
    'A proven framework is problem → approach → solution → results → call to action. This structure ensures clarity, keeps viewers engaged, and emphasizes measurable outcomes that resonate with B2B buyers.'
   },
   {
    key: 5,
    title: 'Do captions and transcripts help video SEO?',
    content:(
      <>
      Yes. Captions and transcripts make case study videos more accessible and improve search visibility. They provide keyword-rich text for search engines, increase engagement, and help videos rank for relevant queries.
      </>
    )
    },
   {
    key: 6,
    title: 'Should I create a series or playlist of case study videos?',
    content:'Yes. A series or playlist allows prospects to explore multiple success stories, increasing credibility and engagement. Grouping videos by industry, use case, or solution also improves discoverability and strengthens SEO through internal linking and structured metadata.'
   },
]

export const  AwardWinningCaseStudyFAQ  = [
  {
    key: 1,
    title: 'What is an award-winning case study video?',
    content:(
      <>
      An award-winning case study video is a visual representation of a brand’s story that showcases the effectiveness of its product or service. These videos are typically recognized for their creative storytelling, strong emotional impact, high production quality, and ability to drive business outcomes. They often highlight real customer experiences and demonstrate tangible results.
      </>
    )
  },

  {
    key: 2,
    title: 'How can a business create award-winning case study videos?',
    content:
    'To create an award-winning case study video, businesses must focus on compelling storytelling, showcasing real challenges and solutions, and ensuring high production quality. Key elements include strong visuals, an engaging script, customer testimonials, and a clear demonstration of results. The video should also resonate emotionally with the audience and be concise.'
  },
   {
    key: 3,
    title: 'What are the benefits of showcasing case study videos for marketing?',
    content:
  'Case study videos help businesses demonstrate the real-world impact of their products or services. They serve as powerful tools for building trust, providing social proof, and enhancing brand credibility. Additionally, these videos can significantly improve SEO, engage audiences, and generate leads by showcasing how your business solves actual customer problems.'
  },
   {
    key: 4,
    title: 'How can case study videos improve a brand’s SEO and visibility?',
    content:
    'Case study videos can boost SEO by improving engagement metrics such as time spent on page and social shares. They often rank higher in search results when properly optimized with relevant keywords and metadata. Furthermore, embedding videos on websites or social platforms helps increase organic traffic and improves overall visibility.'
   },
   {
    key: 5,
    title: 'What types of case study videos tend to win awards?',
    content:(
      <>
      Award-winning case study videos typically combine exceptional storytelling with a unique approach to showcasing results. They often include human-centric narratives, demonstrate real customer experiences, and deliver measurable outcomes. The use of creative visuals, emotional depth, and social proof also contributes to their success in winning awards.
      </>
    )
    },
   {
    key: 6,
    title: 'How does an award-winning video impact customer trust?',
    content:'An award-winning case study video enhances customer trust by showcasing real-life examples of how your product or service has positively impacted others. These videos provide transparency and authenticity, making it easier for potential customers to relate to your brand and feel confident in their purchasing decision.'
   },
]

export const  SaasCaseStudyFAQ  = [
  {
    key: 1,
    title: 'What are SaaS case study videos?',
    content:(
      <>
      SaaS case study videos are customer success stories told through visual storytelling. They combine testimonials, product walkthroughs, and real-world results to prove ROI. These videos build trust, simplify complex SaaS solutions, and provide buyers with authentic validation.
      </>
    )
  },

  {
    key: 2,
    title: 'Why do SaaS case study videos convert better than text?',
    content:
    'SaaS case study videos convert better than text because they show authentic proof through customer voices and measurable results. Videos create emotional connection, simplify technical concepts, and provide visual credibility that accelerates purchase decisions.'
  },
   {
    key: 3,
    title: 'How do I create a SaaS case study video that builds trust?',
    content:
  'To build trust, focus on authentic storytelling and measurable outcomes. Use real customers, highlight specific problems solved, and show clear results. Balance polished production with genuine client voices for credibility.'
  },
   {
    key: 4,
    title: 'Which format works best for SaaS case study videos?',
    content:
    'The best format depends on your audience and goals. Interviews highlight authentic voices, animated videos simplify technical use cases, walkthroughs show product impact, and testimonial montages combine multiple perspectives.'
   },
   {
    key: 5,
    title: 'How long should a SaaS case study video be?',
    content:(
      <>
      The ideal SaaS case study video length is 2–3 minutes for full stories and 30–60 seconds for short-form snippets. Short versions work best for ads and social media, while longer versions suit websites, events, and sales decks.
      </>
    )
    },
   {
    key: 6,
    title: 'How can I measure ROI from SaaS case study videos?',
    content:'You can measure ROI by tracking engagement metrics, conversions, and the influenced sales pipeline. Key indicators include views, watch time, click-through rates, demo requests, and closed deals linked to video touchpoints.'
   },
]

export const  MarketingCaseStudyFAQ  = [
  {
    key: 1,
    title: 'How long should a marketing case study video be?',
    content:'Most effective case study videos fall between 2 and 5 minutes. This length is short enough to keep viewers engaged but long enough to explain the client’s challenge, solution, and results. '
  },

  {
    key: 2,
    title: 'Should videos be scripted or unscripted?',
    content:
    'Scripts help maintain clarity, structure, and flow, especially when explaining complex solutions. On the other hand, unscripted customer testimonials feel authentic and relatable, adding credibility. Many brands mix both approaches, scripted frameworks with natural client voices for the best results.'
  },
   {
    key: 3,
    title: 'Can small businesses benefit from video case studies?',
    content:
  'Yes, small businesses can see just as much impact from case study videos as larger companies. Even a simple, well-shot customer story can build trust, show results, and attract new clients. It proves credibility without requiring massive budgets or production teams.'
  },
   {
    key: 4,
    title: 'How do you repurpose video case studies for other channels?',
    content:
    'You can break a full case study video into shorter clips for social media, embed it in email campaigns, or feature it on landing pages to boost conversions. Transcripts can be turned into blog posts, quotes, or infographics, extending the value of one video across multiple platforms.'
   }
]

export const  CaseStudyVideosFAQ  = [
  {
    key: 1,
    title: 'What are case study videos?',
    content:'Case study videos are short, story-driven films that showcase real customer experiences. They highlight a client’s problem, present the solution provided by a product or service, and demonstrate measurable results. These videos combine storytelling, visuals, and data to build trust and credibility.'
  },

  {
    key: 2,
    title: 'How do case study videos help businesses?',
    content:
    'Case study videos help businesses by demonstrating proof of success in an authentic way. They educate prospects, validate marketing claims, and influence purchase decisions. Sales teams use them to overcome objections, while marketers leverage them to nurture leads and build brand authority.'
  },
   {
    key: 3,
    title: 'How can I create an engaging case study video?',
    content:
  'An engaging case study video follows a clear structure: problem, solution, and results. It uses authentic client voices, compelling storytelling, and visual elements such as interviews, b-roll, and graphics. Keeping the video concise (2–5 minutes) ensures higher audience engagement and impact.'
  },
   {
    key: 4,
    title: 'How do case study videos differ from testimonials?',
    content:
    'Testimonials are short endorsements where customers share positive feedback. Case study videos go deeper by showing the full journey: the problem faced, the solution applied, and the measurable outcomes. This structured storytelling makes case study videos more detailed, data-driven, and persuasive.'
   },
   {
    key: 5,
    title: 'What industries benefit most from case study videos?',
    content:'Industries like SaaS, healthcare, and education benefit greatly from case study videos. These sectors rely on credibility and trust, making customer success stories powerful proof points. However, case study videos are versatile and effective across B2B and B2C markets.'
    },
   {
    key: 6,
    title: ' What’s the ROI of using case study videos in marketing?',
    content:'Case study videos deliver strong ROI by shortening sales cycles, increasing conversions, and improving brand credibility. They serve as evergreen assets for websites, sales decks, email campaigns, and social media, ensuring long-term marketing value and measurable business impact.'
   },
]

export const  ExplainerVideosHelpBusinessesFAQ  = [
  {
    key: 1,
    title: 'What are the benefits of explainer videos for businesses?',
    content:'Explainer videos help businesses simplify complex products, boost conversions, and improve customer engagement. They enhance brand recall, nurture leads across the funnel, and deliver measurable ROI. Businesses in sectors like SaaS, fintech, and e-commerce use them to shorten sales cycles, improve SEO, and communicate value more effectively.'
  },

  {
    key: 2,
    title: 'How do explainer videos increase conversions?',
    content:
    'Explainer videos lift conversions by clarifying value propositions at every funnel stage. They improve landing page performance, increase demo requests, and reduce decision friction. Visual storytelling builds trust faster, which drives higher click-through rates and purchase intent.'
  },
   {
    key: 3,
    title: 'How can explainer videos simplify complex products or services?',
    content:
  'Explainer videos use visuals, animation, and clear scripting to break down complex ideas into easy-to-understand stories. They help prospects grasp technical concepts quickly, which accelerates decision-making and reduces confusion during the sales process.'
  },
   {
    key: 4,
    title: 'Can explainer videos improve SEO and website performance?',
    content:
    'Yes. Embedding explainer videos increases dwell time, reduces bounce rates, and improves search rankings. Using video schema markup can generate rich snippets in search results and can boost click-through rates.'
   },
   {
    key: 5,
    title: 'What’s the ROI of using explainer videos?',
    content:'The ROI of explainer videos is measurable through metrics like conversion rate lift, lead quality, and revenue growth. Businesses often see shorter sales cycles, improved customer retention, and higher brand awareness, making them a high-impact marketing investment.'
    },
   {
    key: 6,
    title: 'Where should I place explainer videos in my marketing funnel?',
    content:'Explainer videos work across the entire marketing funnel. At the top, they build awareness on landing pages and social media. In the middle, they nurture leads through email campaigns and webinars. At the bottom, they support sales pitches, product demos, and investor presentations.'
   },
]

export const  HowToMakeExplainerVideosFAQ  = [
  {
    key: 1,
    title: 'What are the exact steps to create explainer videos from scratch?',
    content:'To make an explainer video from scratch, define your audience and objective, write a concise problem–solution–benefit script, choose a visual style such as animation, live-action, or screencast, and select the right tools. Record a clear voice-over, edit with branded visuals, add captions, and optimize metadata. Finally, publish on platforms like YouTube, LinkedIn, and Shorts, and track performance metrics.'
  },

  {
    key: 2,
    title: 'How long should an explainer video be for best engagement?',
    content:
    'An explainer video should typically be 60–120 seconds. This length helps maintain viewer attention while delivering a complete message. Shorter versions, 30–60 seconds, work well for social media cut-downs.'
  },
   {
    key: 3,
    title: 'Which software or tools are best for making explainer videos?',
    content:
  'Top tools for explainer video creation include Vyond for animation, Loom for screencasts, and Synthesia for AI-generated videos. Choose based on your preferred style, budget, and production needs. While these tools make DIY possible, working with a creative agency like Makerrs ensures professional storytelling, high-quality visuals, and end-to-end production support that’s hard to match on your own.'
  },
   {
    key: 4,
    title: 'Should I use animation or live-action for my explainer video?',
    content:
    'Use animation for abstract concepts, product walkthroughs, or when budget flexibility is needed. Live-action works best for showing real people, environments, or tangible products. A hybrid can combine the strengths of both.'
   },
   {
    key: 5,
    title: 'Do I need a human voice-over or will AI narration work?',
    content:'A human voice-over often builds stronger trust and emotional connection, especially for brand storytelling. AI narration can be cost-effective for quick turnarounds or multilingual versions, provided clarity and tone are well-matched to your audience.'
    },
   {
    key: 6,
    title: 'How do I optimize an explainer video for YouTube and Google search?',
    content:'Optimize your explainer video by including the primary keyword in the title, description, and tags. Add a transcript for accessibility, use an engaging thumbnail, and structure metadata for search. Ensure the first 5–10 seconds have a strong hook to improve retention.'
   },
]

export const  StartupExplainerVideosFAQ  = [
  {
    key: 1,
    title: 'What are startup explainer videos?',
    content:'Startup explainer videos are short, engaging videos that simplify and communicate a startup’s product, service, or mission. They often use animation, live-action, or hybrid formats to clearly convey value, highlight benefits, and encourage viewers to take action.'
  },

  {
    key: 2,
    title: 'How do startup explainer videos help raise funding?',
    content:
    'Explainer videos help startups raise funding by presenting a clear, concise pitch that investors can quickly understand. They communicate the problem, solution, market potential, and business model in under two minutes, making complex ideas easy to grasp and remember.'
  },
   {
    key: 3,
    title: 'How can I create an engaging explainer video for my startup?',
    content:
  'To create an engaging explainer video, start with a strong hook, clearly define the problem, present your solution with visuals, explain how it works, and highlight the benefits. End with a compelling call-to-action, ensuring the tone and visuals match your brand.'
  },
   {
    key: 4,
    title: 'What are the best styles of explainer videos for startups?',
    content:
    'The best styles include animated videos for simplifying abstract ideas, live-action for human connection, hybrid formats for flexibility, and product demos for showing functionality. The ideal style depends on your audience, message, and budget.'
   },
   {
    key: 5,
    title: 'How much do startup explainer videos cost?',
    content:'Costs vary widely based on style, length, and production quality. Animated videos can range from affordable DIY tools to high-end custom productions, while live-action shoots may require higher budgets for actors, locations, and equipment.'
    },
   {
    key: 6,
    title: 'How long should a startup explainer video be?',
    content:'Most effective startup explainer videos are 60–120 seconds. Shorter videos maintain attention, deliver key messages quickly, and perform better across social media and mobile platforms.'
   },
]

export const  EmployerBrandingStrategyFAQ  = [
  {
    key: 1,
    title: 'What is an employer branding strategy?',
    content:'An employer branding strategy is a structured plan to shape how candidates and employees perceive a company. It defines an Employer Value Proposition (EVP), communicates culture and values, and uses authentic storytelling to attract talent, improve retention, and strengthen reputation.'
  },

  {
    key: 2,
    title: 'How do I build an EVP that actually attracts talent?',
    content:'A strong EVP is authentic, relevant, and differentiated. It should reflect real employee experiences, highlight growth, flexibility, and purpose, and be validated through surveys or focus groups. Once crafted, the EVP must be expressed through consistent storytelling and visuals across all channels.'
  },
   {
    key: 3,
    title: ' Which channels work best for employer branding in 2025?',
    content:'The most effective channels include LinkedIn, YouTube, Glassdoor, and short-form social video platforms like Instagram Reels and TikTok. A strong strategy uses a multi-channel mix to reach different talent personas with tailored formats such as videos, employee stories, and interactive content.'
  },
   {
    key: 4,
    title: 'How can employees safely advocate for our brand online?',
    content:
    'Employees can be empowered as brand ambassadors by sharing authentic stories, testimonials, and behind-the-scenes content. Safe advocacy requires clear guidelines, voluntary participation, and recognition programs that make employees feel valued while ensuring brand alignment.'
   },
   {
    key: 5,
    title: 'How do we measure employer brand ROI?',
    content:'Employer brand ROI is measured through KPIs such as apply rates, offer acceptance rates, employee retention, brand sentiment, and campaign engagement metrics like reach, shares, and video completion. Continuous feedback loops and benchmarking against competitors help optimize performance.'
    },
   {
    key: 6,
    title: 'How do Glassdoor ratings affect apply rates?',
    content:'Glassdoor reviews strongly influence candidate perception. Positive ratings increase trust and application likelihood, while negative reviews can deter top talent. An effective employer branding strategy includes monitoring reviews, responding transparently, and showcasing improvements to build credibility.'
   },
]

export const  WhyIsEmployerBrandingImportantFAQ  = [
  {
    key: 1,
    title: 'What is the difference between employer brand and EVP?',
    content:'Your Employer Value Proposition (EVP) is the promise you make to employees—what they can expect from you in terms of culture, growth, and rewards. Your employer brand is how that promise is actually perceived by candidates, employees, and the outside world.'
  },

  {
    key: 2,
    title: 'How long does it take to see ROI from employer branding?',
    content:'Typically, you start noticing shifts within 6–12 months. This includes improvements in candidate quality, reduced time-to-hire, stronger retention, and better employee advocacy.'
  },
   {
    key: 3,
    title: 'Can employer branding help during downsizing or tough times?',
    content:'Yes. Being transparent and authentic during challenges strengthens trust. Even when circumstances are difficult, honesty and consistency protect your reputation.'
  },
   {
    key: 4,
    title: 'Is employer branding only for big companies?',
    content:
    'Not at all. Smaller businesses often have an advantage: they can communicate their culture more authentically, adapt faster, and connect with candidates on a more personal level.'
   },
   {
    key: 5,
    title: 'Can employer branding influence customers as well?',
    content:'Yes. Customers often pay attention to how companies treat their people. A positive employer reputation builds credibility and trust, which can strengthen customer loyalty and even influence purchase decisions.'
    },
   {
    key: 6,
    title: 'What role does social media play in employer branding?',
    content:'Social media is one of the most powerful tools for showcasing your culture. Employee stories, behind-the-scenes content, and authentic updates give candidates a real look at life inside your company, making your brand more relatable and trustworthy.'
   },
]

export const  EmployerBrandingFrameworkFAQ  = [
  {
    key: 1,
    title: 'What is an employer branding framework?',
    content:'An employer branding framework is a structured model that defines how an organization communicates its value as an employer. It connects the employer value proposition (EVP) with culture, talent branding, communication channels, and measurable KPIs to attract, engage, and retain employees.'
  },

  {
    key: 2,
    title: 'How do I create an employer branding framework step by step?',
    content:(
      <div>
        <p>To create an employer branding framework, you should:</p>

        <ul style={{ listStyleType: 'disc', padding: '10px 0px 10px 20px' }}>
          <li>Audit current employer perception.</li>
          <li>Define or refine your EVP.</li>
          <li>Map talent personas and candidate journeys.</li>
          <li>Select internal and external communication channels.</li>
          <li>Activate employee advocacy programs.</li>
          <li>Track KPIs and ROI to refine the framework.</li>
        </ul>
      </div>
    )
  },
   {
    key: 3,
    title: 'Which components must an effective employer branding framework include?',
    content:'An effective employer branding framework includes a strong EVP framework, a talent branding framework, clear communication channels, and alignment with company culture. It also requires governance, employee advocacy, and measurable KPIs to track success.'
  },
   {
    key: 4,
    title: 'How is EVP different from employer branding?',
    content:
    'EVP, or Employer Value Proposition, is the promise a company makes to its employees about rewards, opportunities, and culture. Employer branding is the perception of that promise in the talent market. An EVP defines what the company stands for, while employer branding communicates and proves it through authentic stories and actions.'
   },
   {
    key: 5,
    title: 'How do I measure the success of an employer branding framework?',
    content:'The success of an employer branding framework can be measured using KPIs such as application rates, quality of hire, time-to-fill, employee retention, eNPS, referral rates, and ROI. These metrics show how branding efforts impact both hiring outcomes and long-term employee engagement.'
    },
   {
    key: 6,
    title: 'What templates or examples can I use to build a framework?',
    content:'You can use an employer branding framework template that maps EVP, target audience, key messages, channels, and KPIs. Templates provide a repeatable structure that HR leaders can adapt for different roles, regions, or industries.'
   },
]

export const  EmployerBrandingVideoFAQ  = [
  {
    key: 1,
    title: 'What is an employer branding video?',
    content:'An employer branding video is a short film that showcases your company’s culture, values, and work environment through real employee stories. It helps potential candidates see what it’s like to work with you and decide if they’re a good fit.'
  },

  {
    key: 2,
    title: 'Why are employer branding videos important?',
    content:'Employer branding videos build trust and authenticity by showing real people and experiences instead of polished slogans. A strong employer branding video attracts top talent and makes candidates more likely to apply.'
  },
   {
    key: 3,
    title: 'How long should an employer branding video be?',
    content:'The sweet spot is typically 2–3 minutes. Long enough to tell a meaningful story, but short enough to maintain engagement. Short teasers (15–30 seconds) work well on social media to drive traffic to the full video.'
  },
   {
    key: 4,
    title: 'What should be included in an employer branding video?',
    content:
    'Employer branding video should include employee testimonials, company culture moments, leadership perspectives, and glimpses of daily work life. These elements combine to provide an authentic, well-rounded picture of your organization for candidates considering you as their next employer.'
   },
   {
    key: 5,
    title: 'What makes an employer branding video effective?',
    content:'Authenticity, storytelling, and focus are key. Videos should spotlight real employees, highlight specific cultural values in action, and have one clear message. Overly scripted or generic videos tend to lose credibility with today’s discerning job seekers.'
    },
   {
    key: 6,
    title: 'What questions should employees answer in testimonial videos?',
    content:'Ask employees about their role, growth experiences, team dynamics, and what makes the culture unique. Their candid answers reveal authenticity and create emotional resonance, helping potential candidates imagine themselves thriving in your workplace.'
   },
]

export const  EmployerBrandingExamplesFAQ  = [
  {
    key: 1,
    title: 'What are the best employer branding examples this year?',
    content:'The employer branding best examples in 2025 highlight authenticity, transparency, and flexibility. Leading brands use career pages with clear EVPs, short-form video campaigns, and employee testimonials to showcase culture. They also measure success through metrics like application rates, retention, and ROI.'
  },

  {
    key: 2,
    title: 'Which companies have standout career pages I can copy?',
    content:'Companies with strong career pages use above-the-fold EVP statements, transparent pay and benefits grids, employee stories, and clear interview timelines. They include visuals of team culture and highlight growth opportunities to attract top talent.'
  },
   {
    key: 3,
    title: 'How do top brands use video for employer branding?',
    content:'Top brands use short employer branding videos to humanize roles and teams. Popular formats include day-in-the-life clips, manager introductions, and hybrid work rituals. These videos boost candidate engagement and are shared across LinkedIn, Instagram, YouTube, and TikTok.'
  },
   {
    key: 4,
    title: 'What are good employee testimonial and advocacy examples?',
    content:
    'Effective examples feature employees sharing growth stories, referral highlights, and culture experiences. Advocacy programs often include referral leaderboards, rewards, and personalized job-sharing links. Employee voices are the most trusted signals for candidates.'
   },
   {
    key: 5,
    title: 'What metrics prove an employer branding strategy works?',
    content:'Employer branding impact is measured through application rates, quality-of-hire, retention data, review sentiment, and ROI. Brands also track cost-per-hire, offer-acceptance rates, and referral effectiveness to evaluate success.'
    }
]

export const  EmployerBrandingCompaniesFAQ  = [
  {
    key: 1,
    title: 'What do employer branding companies actually do?',
    content:'Employer branding companies, including leading employer branding companies in the US, specialize in helping organizations shape how they are perceived by potential and current employees. They design employee value propositions (EVPs), create recruitment campaigns, manage employer review sites like Glassdoor, and build storytelling assets across video, social media, and career sites. Their goal is to attract quality candidates, reduce hiring costs, and improve employee engagement.'
  },

  {
    key: 2,
    title: 'How do I choose the right employer branding agency for my industry?',
    content:'When choosing an employer branding agency, consider three factors: services offered, cultural fit, and measurement. For example, some agencies excel at EVP development, while others focus on creative campaigns or data-driven insights. It’s best to match an agency’s strengths to your industry’s needs, such as tech firms needing storytelling at scale, or global organizations requiring localization.'
  },
   {
    key: 3,
    title: 'How much do employer branding services cost?',
    content:'Costs vary depending on scope. Boutique agencies may offer targeted EVP or campaign projects, while enterprise-level firms provide full-stack solutions including analytics and global rollouts. Pricing depends on deliverables like EVP design, career site development, or multi-channel campaigns. Many companies evaluate cost in terms of ROI such as reduced cost-per-hire or time-to-fill.'
  },
   {
    key: 4,
    title: 'What KPIs should I use to measure employer branding strategy success?',
    content:
    'Key KPIs include brand awareness, application volume and quality, employee retention rates, social engagement, and candidate experience scores. Strong agencies will set up measurement frameworks, tying creative storytelling to tangible outcomes such as improved Glassdoor ratings, reduced cost-per-hire, or higher offer acceptance rates.'
   },
   {
    key: 5,
    title: 'Can employer branding companies help reduce cost-per-hire and time-to-fill?',
    content:'Yes. By improving brand visibility and candidate perception, agencies make it easier to attract qualified applicants. This shortens recruitment cycles and reduces reliance on high-cost channels. Many companies report measurable improvements in time-to-fill and cost-per-hire after implementing campaigns with specialized employer branding agencies.'
    },
   {
    key: 6,
    title: 'Do employer branding companies provide sector-specific examples?',
    content:'Top employer branding consulting firms and agencies often provide case studies tailored to sectors such as tech, healthcare, or manufacturing. These examples show how EVP and campaigns were adapted to each industry’s unique talent challenges, giving decision-makers proof of expertise before investing.'
   },
]

export const  EmployerBrandingBestPracticesFAQ  = [
  {
    key: 1,
    title: 'What are the key employer branding best practices?',
    content:'Employer branding best practices include defining a clear Employee Value Proposition (EVP), sharing authentic employee stories, ensuring platform consistency, engaging employees through advocacy programs, and continuously measuring impact. These practices help attract, engage, and retain top talent.'
  },

  {
    key: 2,
    title: 'Why is employer branding important for talent attraction?',
    content:'A strong employer brand builds trust with candidates by showcasing workplace culture, career growth opportunities, and authentic employee experiences. This creates a positive candidate experience, which directly influences talent attraction and retention.'
  },
   {
    key: 3,
    title: 'How can companies improve their EVP as part of employer branding best practices?',
    content:'Companies can improve their EVP by aligning it with employee expectations, highlighting growth opportunities, promoting diversity and inclusion (DEI), and ensuring benefits and culture reflect organizational values. A strong EVP differentiates the company in a competitive talent market.'
  },
   {
    key: 4,
    title: 'What role does employee advocacy play in employer branding?',
    content:
    'Employee advocacy programs amplify employer branding by enabling employees to share authentic workplace experiences. This enhances credibility, improves reach across digital platforms, and builds a positive reputation that attracts new talent.'
   },
   {
    key: 5,
    title: 'How does employer branding improve employee retention?',
    content:'When employer branding accurately reflects company culture and values, employees feel more engaged and connected. This alignment reduces turnover, improves job satisfaction, and encourages long-term loyalty.'
    },
   {
    key: 6,
    title: 'How should companies measure the success of employer branding best practices?',
    content:'Success can be measured using metrics like candidate quality, employee engagement scores, retention rates, referral rates, and employer review ratings on platforms such as Glassdoor or LinkedIn. Tracking these ensures strategies stay aligned with evolving talent needs.'
   },
]

export const  EmployerBrandingFAQ  = [
  {
    key: 1,
    title: 'What is the difference between employer branding and corporate branding?',
    content:'Corporate branding focuses on how customers perceive your company as a product or service provider, while employer branding focuses on how potential and current employees view your company as a workplace. A strong employer brand highlights your culture, values, and employee experience to attract and retain top talent.'
  },

  {
    key: 2,
    title: 'Can small companies build an employer brand?',
    content:'Yes. Small companies can create a powerful employer brand by focusing on authenticity and storytelling. Sharing real employee experiences, showcasing company culture, and communicating clear values help small businesses compete with larger organizations for top talent without relying solely on big budgets.'
  },
   {
    key: 3,
    title: 'Who owns employer branding: HR or Marketing?',
    content:'Employer branding is a shared responsibility between HR and Marketing. HR ensures internal alignment by shaping employee experience and culture, while Marketing amplifies the message externally through consistent communication across channels such as social media, career pages, and recruitment campaigns.'
  },
   {
    key: 4,
    title: 'How long does it take to see results from employer branding?',
    content:
    'Most companies begin to see tangible results, such as improved application quality and higher employee engagement, within 6–12 months. However, building a strong employer brand is a long-term commitment that requires ongoing monitoring, feedback, and adjustments.'
   },
   {
    key: 5,
    title: 'How do you repair a weak or negative employer brand?',
    content:'Repairing a weak employer brand starts internally by addressing issues in company culture, recognition, and transparency. Gathering employee feedback, improving onboarding experiences, and aligning internal and external messaging help rebuild trust and credibility with both employees and candidates.'
    },
   {
    key: 6,
    title: 'Why is employer branding important for employee retention?',
    content:'Employer branding fosters a sense of pride and loyalty among employees by creating a positive and engaging workplace. When employees feel valued and aligned with the company’s mission, they are more likely to stay, reducing turnover and recruitment costs while improving productivity.'
   },
]

export const  ElementsEmployerBrandingFAQ  = [
  {
    key: 1,
    title: 'What exactly are the elements of employer branding?',
    content:(
      <>
        <p className="mb-5">
          The elements of employer branding are the strategic pillars that define how an organization is perceived as an employer. 
        </p>
        <p>
          These include your Employer Value Proposition (EVP), company culture and values, employee experience, communication and storytelling, reputation and advocacy, recruitment marketing, and leadership alignment.
        </p>
      </>
    )
  },

  {
    key: 2,
    title: 'How is an Employer Value Proposition (EVP) different from a mission statement?',
    content:(
      <>
        <p className="mb-5">
          An EVP specifically communicates the unique value employees receive for joining and staying with your company professionally, emotionally, and culturally. 
        </p>
        <p>
          A mission statement defines the organization’s purpose for the outside world, while the EVP speaks directly to talent.
        </p>
      </>
    )  
  },
   {
    key: 3,
    title: 'How do the elements differ from the components of employer branding?',
    content:'Elements are strategic foundations; the “why” and “what” of your employer brand. Components are their tangible expressions; the “how” and “where” such as career sites, social media presence, onboarding experiences, employee testimonials, and benefits communication.'
  },
   {
    key: 4,
    title: 'Can a company improve its employer brand without changing culture?',
    content:
    'Short-term perception can be influenced through storytelling, communication, and recruitment design, but long-term credibility depends on culture. Authentic employer branding is inseparable from the lived experience of employees.'
   },
   {
    key: 5,
    title: 'How do I know if our employer branding is effective?',
    content:'Effectiveness can be measured through employee engagement and retention, candidate quality and experience, social sentiment, advocacy levels, and metrics like Glassdoor ratings. Alignment between what you promise and what is experienced is the ultimate indicator.'
    },
   {
    key: 6,
    title: 'Where should a company start when building or strengthening its employer brand?',
    content:'Begin with reflection: audit current perception, gather employee and candidate feedback, and identify gaps between promise and experience. Then define your EVP, align leadership and culture, activate the brand across touchpoints, and measure continuously.'
   },
]

export const  EmployerBrandingMistakesFAQ  = [
  {
    key: 1,
    title: 'What is employer branding, and why does it matter?',
    content:"Employer branding is a company's reputation as an employer, comprising the Employee Value Proposition (EVP) and how it's marketed. It matters because a strong brand is crucial for effective talent attraction, boosts retention, and significantly reduces recruitment costs."
  },

  {
    key: 2,
    title: 'How do employer branding mistakes affect recruitment?',
    content:"Mistakes increase the time it takes to hire and cause offer acceptance rates to plummet. They force you to spend more money on ads to fill roles with often misaligned candidates."
  },
   {
    key: 3,
    title: 'What’s the most common employer branding mistake?',
    content:"The most common mistake is the Authenticity Gap: selling a dream that doesn't match the daily employee experience. This promise causes immediate attrition and damaging external reviews."
  },
   {
    key: 4,
    title: 'How can a company know if its employer brand is failing?',
    content:
    'Look for a sharp drop in offer acceptance rates, an increase in candidate ghosting, and consistently negative feedback on public review sites.'
   },
   {
    key: 5,
    title: 'What are some quick wins to improve employer branding?',
    content:'Publish salary ranges in job descriptions to immediately build trust and clarity with candidates. Share short, authentic testimonials from real employees to humanize the brand.'
    },
]

export const  EmployerBrandingChallengesFAQ  = [
  {
    key: 1,
    title: 'What are employer branding challenges?',
    content:"Employer branding challenges occur when companies struggle to differentiate themselves in a competitive job market. These challenges often include poor reputation, ineffective communication, and a lack of transparency. Companies must also address issues like employee engagement, diversity, and aligning their branding with company values to attract and retain top talent."
  },

  {
    key: 2,
    title: 'How can I overcome employer branding challenges?',
    content:"Overcoming employer branding challenges requires a strategic approach. Companies should ensure clear communication, promote inclusivity, and align their branding with company values. Strengthening employer value propositions (EVP) and focusing on employee experience can significantly improve employer brand perception and help attract top talent."
  },
   {
    key: 3,
    title: 'Why is employer branding important for recruitment?',
    content:"Employer branding is crucial for recruitment as it directly influences a company’s ability to attract top talent. A strong employer brand enhances a company's reputation, showcasing it as a desirable place to work. Job seekers are more likely to apply to companies with a positive employer brand that aligns with their personal values and work preferences."
  },
   {
    key: 4,
    title: 'How can employer branding improve employee retention?',
    content:
    'Employer branding plays a key role in employee retention by fostering a positive work environment and aligning company values with employee expectations. A strong employer brand promotes job satisfaction, employee engagement, and loyalty, reducing turnover and boosting long-term retention rates.'
   },
   {
    key: 5,
    title: 'What role does company culture play in employer branding?',
    content:'Company culture is at the heart of employer branding. It shapes how employees perceive their workplace and influences external perceptions. A positive and inclusive company culture enhances employer branding by demonstrating the company’s commitment to values such as diversity, collaboration, and innovation, which can attract and retain top talent.'
    },
    {
    key: 6,
    title: 'How do diversity and inclusivity impact employer branding?',
    content:'Diversity and inclusivity are critical elements of employer branding. Companies that prioritize diversity create a welcoming and supportive environment, which attracts a broader range of candidates. An inclusive employer brand signals that the company values different perspectives, fostering innovation and improving employee satisfaction and retention.'
    },
]

export const  B2BEmployerBrandingFAQ  = [
  {
    key: 1,
    title: 'What is B2B employer branding?',
    content:"B2B employer branding is the process of defining and promoting a company’s reputation as an employer within the business-to-business sector. It highlights the company’s values, culture, and career opportunities to attract, engage, and retain top talent. A strong employer brand differentiates a company in a competitive job market, aligning its culture with candidates' values."
  },

  {
    key: 2,
    title: 'How does B2B employer branding impact talent acquisition?',
    content:"B2B employer branding attracts high-quality candidates by clearly communicating the company's culture, mission, and growth opportunities. It positions the company as an employer of choice, making it easier to attract top talent that aligns with company values and reduces recruitment costs by improving the quality of applicants."
  },
   {
    key: 3,
    title: 'Why is employer branding important for B2B companies?',
    content:"For B2B companies, employer branding builds a competitive edge by improving recruitment and employee retention. It strengthens the company’s reputation, attracting top-tier professionals who resonate with the company's mission and values, ultimately enhancing employee engagement and business performance."
  },
   {
    key: 4,
    title: 'What are the benefits of B2B employer branding?',
    content:
    'The benefits of B2B employer branding include better talent attraction, improved employee retention, reduced recruitment costs, and enhanced employee engagement. A strong employer brand also boosts the company’s reputation, making it more competitive in the talent market.'
   },
   {
    key: 5,
    title: 'How can B2B companies develop an employer brand strategy?',
    content:'To develop an effective employer brand strategy, B2B companies should audit their current brand, define a clear Employer Value Proposition (EVP), align internal culture with external messaging, and use digital channels to communicate the brand consistently. This strategy will attract the right candidates and engage employees.'
    },
    {
    key: 6,
    title: 'What are examples of B2B employer branding in action?',
    content:'Examples of successful B2B employer branding include Infosys’s EB Leadership Series, which highlights the company’s innovation and leadership culture, and Darwinbox’s Hiring Video, which showcases an employee-centric culture. These campaigns effectively communicate company values and attract top talent.'
    },
]

export const  ImproveEmployerBrandingFAQ  = [
  {
    key: 1,
    title: 'How can I improve my employer branding?',
    content:"Improving your employer branding starts with aligning your company’s values with employee experiences. Focus on clear communication, fostering a positive workplace culture, and highlighting the unique employee value proposition. Encourage employee advocacy and maintain transparency in your brand messaging. Prioritize employee well-being and leadership commitment to enhance your company's reputation."
  },

  {
    key: 2,
    title: 'What are the best ways to build a strong employer brand?',
    content:"To build a strong employer brand, focus on developing a supportive and inclusive corporate culture, offering competitive benefits, and maintaining open communication. Showcase employee success stories and provide opportunities for career growth. Leverage social media and employee reviews to reinforce your brand values and mission. Consistency across internal and external communications is key to a strong employer brand."
  },
   {
    key: 3,
    title: 'How does employer branding impact recruitment and employee retention?',
    content:"Employer branding plays a crucial role in attracting top talent and retaining employees. A strong employer brand communicates your company’s values, culture, and work environment, making it easier to attract candidates who align with your mission. For existing employees, a positive employer brand boosts job satisfaction, engagement, and loyalty, contributing to lower turnover rates."
  },
   {
    key: 4,
    title: 'What are the key components of a strong employer brand?',
    content:
    'Key components of a strong employer brand include clear communication of company values, an attractive employee value proposition (EVP), a positive company culture, leadership transparency, and employee engagement. Other factors like work-life balance, career development opportunities, and social responsibility initiatives also contribute to a compelling employer brand.'
   },
   {
    key: 5,
    title: 'How can employee satisfaction and experience improve employer branding?',
    content:'Employee satisfaction and experience directly influence employer branding. By prioritizing employee well-being, providing growth opportunities, and fostering a supportive work environment, your company can strengthen its reputation as a great place to work. Positive experiences lead to stronger employee advocacy, enhancing your brand’s appeal to potential job seekers.'
    },
    {
    key: 6,
    title: 'How does employer branding contribute to talent acquisition strategies?',
    content:'Employer branding is a powerful tool in talent acquisition strategies. A well-defined employer brand attracts candidates who resonate with your company’s values and culture, making recruitment more efficient. A strong brand also reduces hiring costs and improves the quality of candidates, as job seekers are more likely to apply to companies they trust and admire.'
    },
]

export const  EmployerBrandingContentFAQ  = [
  {
    key: 1,
    title: 'What is the main goal of employer branding content?',
    content:"The main goal of employer branding content is to communicate your company’s culture, values, and employee experience to potential and current employees. It builds trust by showing what makes your workplace unique and helps attract top talent who align with your organization’s mission and work environment. When done consistently, it strengthens your reputation as an employer of choice and supports long-term employee retention."
  },

  {
    key: 2,
    title: 'How can I ensure my employer branding content is authentic?',
    content:(
      <>
        Authenticity in <span className='font-bold'>employer branding content</span> comes from transparency. Share real employee stories, feature behind-the-scenes moments, and include employee-generated content that captures genuine experiences. Avoid overly polished narratives because candidates value honesty over perfection. Authentic storytelling not only builds credibility but also fosters emotional connection and trust with job seekers.
      </>
    )
  },
   {
    key: 3,
    title: 'What platforms are best for employer branding content?',
    content:"The most effective platforms for employer branding content are LinkedIn, Instagram, Twitter (X), and your company’s career page. Each platform serves a unique purpose. For example, LinkedIn highlights professional achievements and company values, Instagram captures culture through visual storytelling, and your career site serves as the central hub where all employer branding initiatives come together. Using a mix of these platforms ensures both reach and relevance."
  },
   {
    key: 4,
    title: 'How do I measure the success of my employer branding content?',
    content:
    'Measuring the impact of employer branding content requires tracking performance metrics such as engagement rates, social shares, website traffic, and applicant quality. Tools like Google Analytics, LinkedIn Insights, and social media dashboards can help identify which types of content perform best. Employee retention rates and sentiment analysis from platforms like Glassdoor also serve as valuable indicators of brand perception and success.'
   },
   {
    key: 5,
    title: 'Can employer branding content help with employee retention?',
    content:'Yes, effective employer branding content directly influences employee retention. By consistently sharing authentic stories that reflect your company’s values, development programs, and commitment to well-being, employees feel more connected and proud to represent your organization. A transparent, purpose-driven narrative reinforces trust, leading to stronger engagement and lower turnover.'
    },
    {
    key: 6,
    title: 'How can employer branding content improve a company’s reputation?',
    content:(
      <>
        Strong <span>employer branding content </span> enhances a company’s reputation by building visibility, transparency, and trust. When employees and candidates see consistent messages about your workplace culture, leadership, and social responsibility, they perceive your company as credible and forward-thinking. This reputation extends beyond hiring. It strengthens customer loyalty and business relationships as well.
      </>
    )
  }
]

export const  EmployerBrandingStorytellingFAQ  = [
  {
    key: 1,
    title: 'What is storytelling for employer branding?',
    content:"Employer brand storytelling is the practice of using authentic employee and leadership stories to showcase a company’s values, culture, and purpose. It builds trust, humanizes the brand, and attracts candidates by turning real workplace experiences into relatable narratives shared across careers pages, LinkedIn, and other recruitment channels."
  },

  {
    key: 2,
    title: 'How do authentic employee stories attract better candidates?',
    content:(
      <>
       Authentic employee stories attract better candidates by proving the company’s culture through lived experiences. When employees share real examples of growth, teamwork, and flexibility, it helps candidates visualize themselves within the organization. This transparency strengthens credibility and motivates higher-quality applications.
      </>
    )
  },
   {
    key: 3,
    title: 'How can I structure a careers page for storytelling and SEO?',
    content:"A strong careers page for storytelling and SEO features authentic visuals, concise employee quotes, and EVP-driven sections like “How We Work” or “Grow Here.” Including video stories, clear CTAs, and FAQ schema enhances engagement. Adding descriptive headings and keyword-rich copy helps search engines understand and rank the page effectively."
  },
   {
    key: 4,
    title: 'What types of stories work best on LinkedIn and YouTube?',
    content:
    'Short, authentic videos such as day-in-the-life stories, leadership notes, and project wins perform best on LinkedIn and YouTube. These stories should be employee-led, visually engaging, and focused on values, growth, and impact. Channel-native formats, like captioned clips or short reels, maximize reach and viewer engagement.'
   },
   {
    key: 5,
    title: 'How do I measure the ROI of employer branding content?',
    content:'ROI in employer brand storytelling is measured through recruitment funnel metrics such as impressions, watch time, click-through rates, applications, and quality hires. Data from LinkedIn analytics, careers pages, and review sites helps determine which stories generate the strongest engagement and candidate conversion rates.'
    },
    {
    key: 6,
    title: 'How do flexible work and development stories strengthen an EVP?',
    content:(
      <>
       Stories about flexibility and career development strengthen an Employer Value Proposition (EVP) by demonstrating real opportunities for balance and growth. Sharing examples of hybrid work, mentorship, and learning initiatives communicates trust and inclusivity, helping the organization appeal to modern, skills-driven talent.
      </>
    )
  }
]