export interface ProjectWorkflow {
  title: string;
  description: string;
}

export interface ProjectCaseStudy {
  role: string;
  deliverable: string;
  challenge: string[];
  approach: string[];
  workflows: ProjectWorkflow[];
  technicalNotes: string[];
  outcome: string[];
}

export interface PortfolioProject {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  overview: string;
  seoDescription: string;
  period: string;
  context: string;
  skills: string[];
  highlights: string[];
  caseStudy: ProjectCaseStudy;
  demo?: string;
  repo?: string;
}

export const projects: PortfolioProject[] = [
  {
    slug: 'oracle-ptrc-appointment-app',
    name: 'The Oracle PTRC Appointment App',
    shortName: 'Oracle PTRC',
    description:
      'Architected a real-time scheduling platform for a physical therapy clinic, replacing Google Sheets with a live booking calendar that manages 30+ daily appointments and eliminates double-bookings.',
    overview:
      'The Oracle PTRC Appointment App moves a busy rehabilitation clinic away from spreadsheet-based appointment coordination and into one structured scheduling system. The product covers patient, provider, and administrative workflows while keeping booking rules, clinical documentation, and access boundaries connected to the same appointment lifecycle.',
    seoDescription:
      'A Next.js scheduling platform for a physical therapy clinic that replaced Google Sheets, manages 30+ daily appointments, and prevents double-bookings.',
    period: 'BYND Digital • Jul 2025 - Present',
    context: 'Client work at BYND Digital',
    skills: [
      'Next.js',
      'SQL',
      'Appointment Scheduling',
      'Role-Based Access',
      'Clinical Workflows',
    ],
    highlights: [
      'Replaced a Google Sheets-based scheduling workflow with a live booking calendar.',
      'Built the scheduling experience around a workload of 30+ daily appointments.',
      'Designed the booking flow to prevent double-bookings and improve schedule visibility.',
    ],
    caseStudy: {
      role: 'Scheduling platform development',
      deliverable: 'Patient, provider, and administrative web application',
      challenge: [
        'Appointment coordination depended on Google Sheets, which made it difficult to keep patient, provider, room, and daily scheduling information aligned as booking volume grew.',
        'The clinic also has different service constraints. Doctor consultations can accommodate multiple bookings within an hour, while physical therapy sessions are one-to-one and share limited clinic rooms. Those rules needed to be represented directly in the booking workflow rather than managed manually.',
      ],
      approach: [
        'I helped move the workflow into a structured Next.js application with patient, provider, and administrative experiences built around the same appointment lifecycle.',
        'The scheduling flow was designed around live availability, conflict prevention, clear assignment of providers and times, and role boundaries for the information each user can view or change.',
      ],
      workflows: [
        {
          title: 'Appointment scheduling and assignment',
          description:
            'Patients can provide appointment preferences while the clinic team manages the final provider and schedule assignment. The calendar is structured around live availability instead of a manually maintained spreadsheet.',
        },
        {
          title: 'Capacity rules and temporary slot holds',
          description:
            'The booking flow accounts for different consultation and physical therapy capacity rules. Temporary slot holds are used during booking so two users are less likely to compete for the same availability while a request is being completed.',
        },
        {
          title: 'Waitlist handling',
          description:
            'When a schedule is full, the patient flow can surface a waitlist path instead of ending at an unavailable slot. The administrative side keeps visibility over patients waiting for an opening.',
        },
        {
          title: 'HMO, payment, and supporting documents',
          description:
            'The appointment workflow includes HMO information, payment-related requirements, uploaded supporting documents, and clinic-facing review steps so those details stay connected to the patient and appointment record.',
        },
        {
          title: 'Clinical records and daily charting',
          description:
            'Formal medical records are separated from day-to-day treatment notes. Providers can add their own clinical entries while access rules prevent one provider from casually modifying another provider\'s documentation.',
        },
        {
          title: 'Role-based access',
          description:
            'Patient, provider, and administrative capabilities are deliberately separated. Scheduling, patient information, provider notes, and account-level actions follow different permissions instead of relying on a single unrestricted dashboard.',
        },
      ],
      technicalNotes: [
        'Next.js is used for the application interface and workflow-driven pages, with SQL-backed application data for appointments and related records.',
        'Scheduling rules are expressed as application behavior, including availability, service capacity, provider assignment, waitlist states, and conflict prevention.',
        'The system separates patient-facing booking, clinic administration, provider schedules, clinical notes, and medical-record workflows so each role sees the actions relevant to its responsibilities.',
      ],
      outcome: [
        'The clinic moved its core scheduling workflow out of Google Sheets and into a dedicated booking application.',
        'The application is designed around a daily workload of more than 30 appointments while preventing conflicting bookings.',
        'Scheduling, documentation, HMO requirements, and role-based access now live within one coordinated product rather than separate manual processes.',
      ],
    },
  },
  {
    slug: 'sun-island-bali-website',
    name: 'Sun Island Bali Website',
    shortName: 'Sun Island Bali',
    description:
      'Managed and redesigned the Sun Island Bali website, developed custom plugins, and integrated an AI chatbot to support visitor inquiries and site operations.',
    overview:
      'This is ongoing work on a live hospitality website serving Sun Island Bali properties and their guests. The scope combines WordPress and Elementor page development with custom functionality, promotional content, SEO-focused publishing, and an AI chatbot experience built around the needs of the live site.',
    seoDescription:
      'Website redesign and ongoing WordPress development for Sun Island Bali, including custom plugins, site management, and an AI chatbot integration.',
    period: 'Live Website • Ongoing',
    context: 'Live hospitality website',
    skills: [
      'WordPress',
      'Elementor',
      'Custom Plugins',
      'AI Chatbot',
      'SEO Content',
    ],
    highlights: [
      'Managed and redesigned the live Sun Island Bali website.',
      'Developed custom plugins to support site-specific functionality.',
      'Integrated an AI chatbot to support visitor inquiries and site operations.',
    ],
    caseStudy: {
      role: 'Website development, plugin work, and ongoing management',
      deliverable: 'Live hospitality website and custom WordPress functionality',
      challenge: [
        'A live hotel website changes continuously. Offers, activities, dining information, property content, blog articles, and guest questions all need to stay current without losing visual consistency or making routine content work difficult to maintain.',
        'Some requirements also went beyond what was comfortable to manage as page-builder content alone, particularly promotional components and the chatbot experience.',
      ],
      approach: [
        'I worked within the existing WordPress and Elementor environment rather than forcing a platform replacement. Reusable site-specific behavior was moved into custom plugins, while page layouts and content remained manageable through the CMS.',
        'The visual work followed the established Sun Island Bali brand and hospitality context, with attention to responsive layouts, image handling, internal links, search metadata, and clear guest-facing information.',
      ],
      workflows: [
        {
          title: 'Page redesign and live-site maintenance',
          description:
            'I updated and rebuilt live pages while preserving the site\'s existing brand direction. Work covered hospitality content such as rooms, dining, activities, offers, contact information, and property-specific experiences.',
        },
        {
          title: 'Custom promotional components',
          description:
            'Custom plugin work supports promotional content that needed more control than a static Elementor section, including reusable offer presentation and carousel behavior that can be managed from WordPress.',
        },
        {
          title: 'Activities and editorial content',
          description:
            'Activities and blog content were structured around useful destination information for Seminyak, Kuta, and Legian, with intentional internal links, metadata, and compressed web imagery for publishing.',
        },
        {
          title: 'AI chatbot integration',
          description:
            'The site includes a custom AI chatbot experience for visitor questions. The work has included model configuration, source-content behavior, privacy wording, consent interactions, branding, and rate-conscious product decisions.',
        },
        {
          title: 'Responsive content delivery',
          description:
            'Layouts and custom components are designed to remain usable across desktop and mobile rather than treating the desktop Elementor canvas as the final experience.',
        },
      ],
      technicalNotes: [
        'WordPress and Elementor remain the primary content-management environment, with custom plugins used when site-specific behavior needs to be reusable or centrally managed.',
        'The work includes front-end layout changes, plugin-level functionality, SEO metadata and internal-link improvements, and image optimization for live content publishing.',
        'The chatbot is treated as part of the website product rather than a detached widget, including brand styling, consent behavior, content-source decisions, and controls intended to avoid unnecessary API usage.',
      ],
      outcome: [
        'The site can support ongoing hospitality content and promotional updates while keeping site-specific functionality inside maintainable WordPress workflows.',
        'Custom components reduce the need to rebuild the same promotional behavior manually on individual pages.',
        'The chatbot adds another guest-support touchpoint while remaining visually connected to the Sun Island Bali website.',
      ],
    },
    demo: 'https://sunislandbali.com/',
  },
  {
    slug: 'app-construction-inventory-system',
    name: 'APP Construction Supplies Inventory System',
    shortName: 'APP Construction Inventory',
    description:
      'Delivered a real-time inventory management system for a local construction supplies business, tracking 300+ SKUs with automated low-stock alerts and analytics dashboards while replacing manual inventory workflows.',
    overview:
      'The APP Construction system centralizes inventory and operational visibility for a construction supplies business. The core application replaces manual stock tracking with a MERN-based workflow for more than 300 SKUs, then extends the same operational dashboard with reporting and fleet-location features.',
    seoDescription:
      'A MERN inventory system for a construction supplies business, tracking 300+ SKUs with low-stock alerts, analytics dashboards, and real-time workflows.',
    period: 'BYND Digital • Jul 2025 - Present',
    context: 'Client work at BYND Digital',
    skills: [
      'MongoDB',
      'Express.js',
      'React',
      'Node.js',
      'Leaflet',
      'Inventory Analytics',
    ],
    highlights: [
      'Replaced manual inventory workflows with a real-time inventory management system.',
      'Structured the system to track more than 300 SKUs.',
      'Added automated low-stock alerts and analytics dashboards for inventory visibility.',
    ],
    caseStudy: {
      role: 'Full-stack inventory and operations system development',
      deliverable: 'Inventory dashboard with stock monitoring, reporting, and fleet visibility',
      challenge: [
        'The business relied on manual inventory processes for a catalog of more than 300 SKUs. That made stock visibility, low-stock awareness, and reporting harder to keep consistent as day-to-day transactions accumulated.',
        'Operational visibility also extended beyond products. Vehicle location and delivery activity needed a clearer place inside the same internal system.',
      ],
      approach: [
        'I worked on a MERN application that centralizes product records, stock activity, alerts, analytics, and operational views instead of spreading those tasks across manual records.',
        'The interface is designed around repeatable administrative workflows: finding an item quickly, understanding its current stock state, reviewing activity, and surfacing exceptions such as low inventory.',
      ],
      workflows: [
        {
          title: 'SKU and stock management',
          description:
            'The system structures inventory around more than 300 SKUs so product information and stock state can be reviewed and updated from a centralized application.',
        },
        {
          title: 'Low-stock visibility',
          description:
            'Automated low-stock alerts surface inventory that needs attention instead of requiring staff to manually inspect every item to determine what should be reordered.',
        },
        {
          title: 'Inventory analytics and reports',
          description:
            'Dashboard and reporting views summarize inventory activity so operational decisions can be based on current system data rather than reconstructed from separate manual records.',
        },
        {
          title: 'Fleet location workflows',
          description:
            'Leaflet-based map views support vehicle tracking and GPS reporting. Location updates, route context, and device-to-vehicle relationships are handled as part of the broader operations workflow.',
        },
      ],
      technicalNotes: [
        'MongoDB stores application records while Express.js and Node.js provide the API layer used by the React interface.',
        'Inventory interfaces are designed for growing data volumes, with searchable and filterable operational views rather than rendering the full dataset as one unstructured screen.',
        'Leaflet is used for mapping and fleet visibility, connecting location information to internal operational records rather than treating GPS tracking as a separate public map.',
      ],
      outcome: [
        'The business moved core stock monitoring away from manual inventory workflows into one real-time application.',
        'More than 300 SKUs can be managed with low-stock alerts and centralized analytics.',
        'Inventory and fleet information can be reviewed through the same internal operational environment.',
      ],
    },
  },
  {
    slug: 'produkto-elyukal',
    name: 'Produkto Elyukal',
    shortName: 'Produkto Elyukal',
    description:
      'Built an augmented reality mobile application that showcases local products in La Union, featuring a Mapbox-powered shop navigator that helps tourists and residents explore regional goods directly from their phones.',
    overview:
      'Produkto Elyukal is a mobile product-discovery experience centered on locally made goods in La Union. The application combines augmented reality, location-aware shop navigation, backend product services, and a supporting administration workflow so regional products can be explored through more than a conventional catalog.',
    seoDescription:
      'An augmented reality mobile app for discovering La Union products, built with React Native, Supabase, FastAPI, ViroReact, and Mapbox navigation.',
    period: 'Academic Project • 2025',
    context: 'Academic mobile application',
    skills: [
      'React Native',
      'Supabase',
      'FastAPI',
      'ViroReact',
      'Mapbox',
      'Next.js',
    ],
    highlights: [
      'Built an augmented reality mobile experience for showcasing local products in La Union.',
      'Integrated a Mapbox-powered shop navigator for regional product discovery.',
      'Designed the experience for tourists and residents exploring local goods from their phones.',
    ],
    caseStudy: {
      role: 'Mobile application and supporting admin development',
      deliverable: 'AR product-discovery app with map navigation and product-management support',
      challenge: [
        'The project explored how local products in La Union could be discovered through a more engaging digital experience than a standard list of stores and product cards.',
        'The mobile experience needed to connect product information, physical shop locations, and augmented reality without making users jump between separate applications.',
      ],
      approach: [
        'I built the mobile experience with React Native and combined ViroReact for augmented reality with Mapbox for shop navigation. Supabase and FastAPI support the data and service layer behind the application.',
        'The product was structured around two complementary discovery modes: seeing local products through an AR experience and finding the physical shops connected to those products on a map.',
      ],
      workflows: [
        {
          title: 'Augmented reality product discovery',
          description:
            'ViroReact powers an AR experience that presents local products through the phone rather than limiting discovery to static catalog imagery.',
        },
        {
          title: 'Map-based shop navigation',
          description:
            'Mapbox connects product discovery to real shop locations, helping tourists and residents move from browsing a regional product to finding where it can be explored or purchased.',
        },
        {
          title: 'Product and location data',
          description:
            'Supabase and FastAPI support the application data used by the mobile experience, keeping products and related location information available to the client application through structured services.',
        },
        {
          title: 'Supporting administration',
          description:
            'A supporting web administration workflow uses Next.js with the same backend stack so product content can be managed separately from the consumer mobile experience.',
        },
      ],
      technicalNotes: [
        'React Native provides the mobile application layer, while ViroReact handles augmented reality and Mapbox provides map rendering and navigation context.',
        'FastAPI exposes backend services and Supabase provides application data services used across the project.',
        'The mobile and administration experiences are separated by use case while sharing the same product domain and backend data.',
      ],
      outcome: [
        'The project combines AR and map-based discovery in one mobile experience focused specifically on products from La Union.',
        'Users can move between digital product exploration and physical shop discovery without treating those as unrelated features.',
        'The supporting administration workflow keeps product content management separate from the consumer-facing mobile interface.',
      ],
    },
  },
  {
    slug: 'civitas-au',
    name: 'Civitas AU',
    shortName: 'Civitas AU',
    description:
      'Built and customized the Civitas AU website for BYND Digital on Odoo, shaping a polished company presence for a Queensland-based investment and development group across real estate, healthcare, and community infrastructure.',
    overview:
      'The Civitas AU project is an Odoo website build for a Queensland investment and development group with work spanning real estate, healthcare, and community infrastructure. The website needed to present those sectors as one coherent organization while remaining responsive and manageable inside the client\'s CMS.',
    seoDescription:
      'An Odoo website build and customization for Civitas AU, a Queensland investment and development group spanning real estate, healthcare, and infrastructure.',
    period: 'BYND Digital • Jul 2025 - Present',
    context: 'Client work at BYND Digital',
    skills: ['Odoo', 'Website Customization', 'CMS', 'Responsive Web Design'],
    highlights: [
      'Built and customized the company website using Odoo.',
      'Structured the site around Civitas AU\'s work across real estate, healthcare, and community infrastructure.',
      'Delivered responsive website customization and CMS-based content presentation.',
    ],
    caseStudy: {
      role: 'Odoo website development and customization',
      deliverable: 'Responsive corporate website inside the Odoo CMS',
      challenge: [
        'Civitas AU operates across several sectors, so the website needed to explain a broad investment and development portfolio without making the organization feel fragmented.',
        'The work also had to fit the capabilities and editing model of Odoo so the finished site remained practical to manage as company content changed.',
      ],
      approach: [
        'I built and customized the site within Odoo, shaping responsive page layouts and content structure around the company rather than treating the CMS defaults as the finished design.',
        'The information architecture keeps real estate, healthcare, and community infrastructure connected to the same corporate identity while allowing each area to be presented clearly.',
      ],
      workflows: [
        {
          title: 'Corporate content structure',
          description:
            'The site organizes company information and sector content so visitors can understand the relationship between Civitas AU and its work across multiple investment and development areas.',
        },
        {
          title: 'Odoo page customization',
          description:
            'Pages are built and adjusted inside the Odoo environment, combining CMS-managed content with custom layout decisions instead of relying only on untouched default sections.',
        },
        {
          title: 'Responsive presentation',
          description:
            'The layout is adapted for desktop and smaller screens so company information remains readable and usable across devices.',
        },
        {
          title: 'Maintainable CMS delivery',
          description:
            'Content remains inside the Odoo CMS so future updates can continue within the platform already used for the website rather than requiring a separate front-end application for routine edits.',
        },
      ],
      technicalNotes: [
        'Odoo is used as both the website platform and CMS, so implementation decisions account for the editing environment as well as the public-facing layout.',
        'The build focuses on responsive structure, reusable content presentation, and clear multi-sector information architecture.',
        'The public site stays aligned with the company\'s existing Odoo workflow instead of introducing a second content-management system solely for presentation.',
      ],
      outcome: [
        'Civitas AU has one coherent public website for presenting its work across real estate, healthcare, and community infrastructure.',
        'The site is responsive while keeping content editable through Odoo.',
        'The implementation provides a more tailored company presentation without removing the CMS workflow used to maintain the site.',
      ],
    },
    demo: 'https://www.civitas.au/',
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
