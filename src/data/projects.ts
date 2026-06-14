export interface ProjectChallenge {
  challenge: string;
  solution: string;
}

export interface ProjectSection {
  title: string;
  content: string;
}

export interface Project {
  slug: string;
  title: string;
  category: "Web" | "Cloud" | "AI" | "Security" | "Mobile";
  year: string;
  role: string;
  timeline: string;
  impact: string;
  summary: string;
  techStack: { name: string; type: string }[];
  overview: string;
  problemStatement: string;
  painPoints: string[];
  goals: { title: string; description: string }[];
  architecture: {
    description: string;
    points: { title: string; description: string }[];
  };
  challenges: ProjectChallenge[];
  lessons: string[];
  featuredImage: string;
  screenshots: { url: string; alt: string }[];
  nextSlug: string;
  prevSlug: string;
}

export const projectsData: Project[] = [
  {
    slug: "bookafrica",
    title: "BookAfrica",
    category: "Web",
    year: "2023",
    role: "Lead Systems Engineer",
    timeline: "8 Months (Q1-Q3 2024)",
    impact: "+140% Booking Growth",
    summary: "A high-performance hospitality booking engine designed for the African market, handling complex inventory management and multi-currency transactions with sub-second latency.",
    techStack: [
      { name: "Rust / Node.js", type: "Backend" },
      { name: "Next.js 14 / Tailwind CSS", type: "Frontend" },
      { name: "PostgreSQL (Prisma)", type: "Primary DB" },
      { name: "AWS (Lambda, S3, RDS)", type: "Cloud" }
    ],
    overview: "BookAfrica is a modern reservation and payment infrastructure designed to bridge the gap between African hospitality/tourism service providers and international travelers. Built to withstand inconsistent local internet connectivity, it aggregates safari lodging, transfers, and experiences, providing native multi-currency payouts including localized mobile money and international credit card rails.",
    problemStatement: "Despite a booming tourism industry across the African continent, local service providers often struggle with outdated legacy booking systems. These applications lack direct integration with global credit networks and localized mobile money solutions. Users faced high friction during high-value transactions, while tour operators and hoteliers managed room blocks and vehicle inventory manually across disparate spreadsheets, causing frequent overbookings and lost revenue.",
    painPoints: [
      "Inconsistent API availability and high network jitter across regional African banking institutions.",
      "High transaction confirmation latency for cross-border conversions.",
      "Inability to sync real-time visual seat and lodge inventory across multi-day curated itineraries."
    ],
    goals: [
      { title: "Zero Latency", description: "Real-time room and tour availability synchronization across multiple global timezones under 200ms." },
      { title: "Omni-Channel Pay", description: "Support for Visa, Mastercard, AMEX, M-Pesa, MTN Mobile Money, and Orange Money in a single checkout flow." }
    ],
    architecture: {
      description: "We adopted a microservices-based, event-driven infrastructure built on AWS to scale seamlessly during seasonal tourist peaks. This structure decouples payment webhook ingestion from slow legacy payment APIs through intermediate messaging queues.",
      points: [
        { title: "Global Edge Caching", description: "Reduced TTFB by 40% using CloudFront and lightweight edge functions to handle localized language, geolocation routing, and currency detection." },
        { title: "Event-Driven Inventory Lockout", description: "Utilized Amazon SQS and AWS Lambda to handle rapid booking locks and resolve race conditions during high-demand booking windows." }
      ]
    },
    challenges: [
      {
        challenge: "Payment Settlement Jitter & Delay",
        solution: "Localized mobile money providers can take up to 30 seconds to transmit transaction push confirmations. This latency caused users to abandon checkouts midway. We implemented an optimistic UI state engine backed by background SSE polling. The customer remains on a relaxed, informative progress screen while payment resolves concurrently in the background."
      },
      {
        challenge: "Offline Synchronization in Safari Lodges",
        solution: "Lodge operators in remote national parks suffer from intermittent 2G/3G connectivity. Manual data entries while offline routinely caused double bookings. We built a Progressive Web App (PWA) with client-side IndexedDB databases that caches write mutations locally, queueing booking updates. Once connection returns, a background synchronization worker safely merges states using conflict-free replicated data types (CRDTs)."
      }
    ],
    lessons: [
      "Infrastructure-as-Code (Terraform) is non-negotiable for keeping multi-region deployments uniform.",
      "Distributed tracing (OpenTelemetry) is indispensable when troubleshooting complex payment failures across multiple remote financial services.",
      "Minimalist UI workflows maximize local conversions far better than overwhelming complex panels."
    ],
    featuredImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgi3JPFEBPrecThoiL37cB7pVgDJZrUC6IjaWccaGFdIkIE7ZrMlfeyprRy0CB5LdxBti6WbHg0PPLDR-YFvaQqo_YO-NiNfpQLMPJIJ5fsPJKAlN0QPF8qoT1b0ptSkHSmHWjMgMDM623qkc2YQZwLNAGQ5gsVXrJKFb4v9pAmHzD_JATWtXyh0P_rt3zuuKlBZ_OTr3AYiCPhWpxxcNKrE0fbXLjLOrv-O-PskoFPl4C-IWn3FTy2vEaq_UHAZPPFcTK0xkAv2g",
    screenshots: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgm3vEM1L73R_6i4EeO6z8BHtcVsLWGVznV1djOldlZ-mm-astvDDBMcXaGYb93aSqTsRn850KgwbyAJw2dX1a87Hsxtim_IKt_Z3QbcCO4aSbB9u-phkrcjilKN7wci76QO-AVXCS3Ia1cU2jxIgFft-6OCPTjtcP0Mjm8VzeuON8cZf3w9PaeDeIq4B13ULKGgSH03mtTRvHKyFU5zvpCU4i8WZJtQ5LxcNSLhJpEVGQIrldlWdYU6QEKhDbcK7ppJGAjfUmgMA",
        alt: "Booking Interface Mockup on High-End Laptop"
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOFMPcm5qcaByfOpnjDuaasznncE5Ezan47ELdq_enxrHv4T-4UkHUzmr3xT6Gk9xkbQJlY_esWhce9lT6opf6Mp_xkepziiwX1-6mpXZgRaL5mkn_i3qdszB91FSxpTbeJ7BGbTq-CbLKJO9bBqSq-K8He6MSBEDuZDx1Wk1XvmKzcDPWcqAz-UQ81rQL-Uf6Q_Pph6y4cST6t_EUEhPBKy0LNyZVl_DX-Owd5NNwR58lUP0xOIzKO3MOUls9yn4arkvBDgUNdJI",
        alt: "Backend Implementation code in robust IDE"
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCT1fjLlGckEcJtyfkpF3BL3lWhg4eAmVuA1R7hWdQq5hO2NjRc8iaa-DiEkpz5ROafnW8E_eONNouvLTfPPpeiTCqydB_5hMinReAey8w8ZJfPL_gJQqagk1PC9eZGVT95RGAlgbHUWKswGTF8cZkMxnEW0uLrGb_HFZS7LYYDu9X8-QQsvUzGKTdpOVyZZtXBMGEvAlvEGScBJ5t8A_vDL7kHPrimFpHnKkEfmUZY4G3ZfqGdpT0rAouk0bnbjAtHy6kND0aXalQ",
        alt: "Interactive analytics dashboards tracking payments"
      }
    ],
    nextSlug: "topicsimplify",
    prevSlug: "ride-hailing-premium"
  },
  {
    slug: "topicsimplify",
    title: "TopicSimplify",
    category: "AI",
    year: "2023",
    role: "Founding Engineer & AI Researcher",
    timeline: "5 Months (Q3-Q4 2023)",
    impact: "+320% Processing Efficiency",
    summary: "NLP-driven platform that distills complex, multi-modal research papers and engineering logs into digestible executive summaries and knowledge graphs.",
    techStack: [
      { name: "Python / FastAPI", type: "Backend" },
      { name: "OpenAI / Claude APIs", type: "AI Engine" },
      { name: "React / Vite", type: "Frontend" },
      { name: "ChromaDB / pgvector", type: "Vector Store" }
    ],
    overview: "TopicSimplify leverages cutting-edge NLP and semantic graph pipelines to process massive technical documentation sets. It extracts key architectural decisions, API schemas, and deployment flows, presenting them as highly scannable, interactive visual documents for fast review.",
    problemStatement: "High-growth engineering organizations waste thousands of collective hours monthly reading fragmented research, out-of-date documentation, and lengthy slack discussions. Technical writers and product leads struggled to synthesize highly specific domains quickly without losing deep context, leading to repetitive questions, architectural misalignment, and sluggish onboarding.",
    painPoints: [
      "Traditional search tools fetch keywords but ignore architectural relationships.",
      "Long context windows of standard LLMs often hallucinate on complex engineering specifications.",
      "High costs and sluggish API response limits when batch processing heavy technical catalogs."
    ],
    goals: [
      { title: "Deterministic Context Retrieval", description: "Implement strict Retrieval-Augmented Generation (RAG) bounding hallucinations near 0%." },
      { title: "Visual Relationship Mapping", description: "Design an interactive canvas which displays code block dependency tree visualizations." }
    ],
    architecture: {
      description: "Built using Python FastAPI for modular ML services, decoupling dense PDF parsing and embedding calculation pipelines onto async worker pools managed via Redis queues.",
      points: [
        { title: "Hierarchical Document Chunking", description: "Splits engineering logs and diagrams by semantic Markdown sections instead of basic character count, preserving full functional context." },
        { title: "Cache-optimized Vectors", description: "Integrates standard semantic cache layers to route repeated structural queries directly, avoiding costly redundant LLM calls." }
      ]
    },
    challenges: [
      {
        challenge: "Parsing Complex Architectural Diagrams",
        solution: "Traditional text parsers omit images and technical diagrams completely. We resolved this by pipeline-routing architectural schema figures through visual multimodal layout analyses. This converts flowchart graphs directly into formatted Mermaid.js text graphs in real-time."
      },
      {
        challenge: "Sub-Second Latency on Large Knowledge Corpora",
        solution: "Interrogating thousands of technical pages in realtime suffered from heavy server response times. We created localized caching index partitions on the frontend client (indexed through SQLite WebAssembly) reducing overall round-trip queries by 72%."
      }
    ],
    lessons: [
      "Visual chart diagrams carry more technical truth than thousands of sentences.",
      "A well-structured local caching layer on client memory is better than endless cloud indexing optimization.",
      "Always design custom boundary rules for GenAI text models to suppress creative phrasing in high-precision technical fields."
    ],
    featuredImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBg3GQ_Xp1MUI69EFOZvtDL-i7iqIxPF1lgLVnOb1C2v6VIDA1jpwFRW8zLeCmxFLk9PFQqXevNOhe4QtwWMVSfQWCBjcMuL5GyXesfZ-3wpIReoocJvH3zE51fLwzadZVaXmwNnyI4mvqZpMK9WRjdAWu_kSJ4gyecp9dBava7IfUMAKU-0tQLt1Mx2Iy20zvfsPwbHjsH3T9zMGTisMB2BjAOC8YbywLBqFe5PY4xVsddXzHvvYVBQqau3h3pVsGPgFpl8pVk38s",
    screenshots: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBg3GQ_Xp1MUI69EFOZvtDL-i7iqIxPF1lgLVnOb1C2v6VIDA1jpwFRW8zLeCmxFLk9PFQqXevNOhe4QtwWMVSfQWCBjcMuL5GyXesfZ-3wpIReoocJvH3zE51fLwzadZVaXmwNnyI4mvqZpMK9WRjdAWu_kSJ4gyecp9dBava7IfUMAKU-0tQLt1Mx2Iy20zvfsPwbHjsH3T9zMGTisMB2BjAOC8YbywLBqFe5PY4xVsddXzHvvYVBQqau3h3pVsGPgFpl8pVk38s",
        alt: "Clean lines of coding in a developer IDE"
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLWOCFqAsWHQCf9WKe1zBB_rNCDhLe__g9Nsmpo8qJYVwCpPkOOg2UUa5tQ0CmrmCCyeiPmx1aIz1LwKE6OBqVWodm2cQYpvtXksrP4u45PIIa9cnSnx3lz6ILtLAaDkTMI-75s0R3Xif0KFO6QBRiLv_-JNBDsXo_woXPgjtqr_RDwzvKIszV9-wEWoSTxak-OZ3-xi_gDG4F7RZ8L7MP9c4VF1E8nVfoBxKx6pDAXuE8KrMkKTCxRiaAmaB19gZx33ZGspXi8FM",
        alt: "Abstract network nodes representation of AI logic"
      }
    ],
    nextSlug: "ceo-dashboard",
    prevSlug: "bookafrica"
  },
  {
    slug: "ceo-dashboard",
    title: "CEO Dashboard",
    category: "Cloud",
    year: "2022",
    role: "Fullstack Architect",
    timeline: "4 Months (Q1-Q2 2022)",
    impact: "Saves Executives 12 Hours / Week",
    summary: "Real-time, ultra-high performance business intelligence dashboard for C-suite executive decision-making, aggregating live operational indices across 12 global regions.",
    techStack: [
      { name: "TypeScript / React", type: "Frontend" },
      { name: "D3.js / Canvas", type: "Visualization" },
      { name: "Go / gRPC", type: "Backend Core" },
      { name: "Redis / TimescaleDB", type: "Caching & Timeseries" }
    ],
    overview: "CEO Dashboard serves as the central hub for real-time monitoring of corporate performance. It aggregates multi-million dollar supply-chain latency, server health metrics, customer churn indices, and cash flow cycles from 12 separate locations into one single, lag-free dashboard experience designed for continuous high-visibility screen display.",
    problemStatement: "Chief executives of international companies must navigate a highly fragmented ocean of secondary dashboards (like separate Jira metrics, Stripe charts, cloud cost pages, and warehousing monitors). Logging in and wait-refreshing these siloed layouts wastes valuable executive hours, obscuring critical emerging system outages or fiscal trends.",
    painPoints: [
      "Stale or unsynchronized data feeds that update on manual schedules.",
      "Sluggish loading speeds when pulling millions of transaction records across old databases.",
      "Complex, cluttered charts overflowing with telemetry clutter that distracts and is hard to scan."
    ],
    goals: [
      { title: "Sub-Second Updates", description: "Stream real-time gRPC backend event logs directly to browser canvas charts at 60 FPS without UI jank." },
      { title: "One-Click Insights", description: "Enable executives to drill-down deep into localized warehouse anomalies in less than 3 total interactions." }
    ],
    architecture: {
      description: "An ultra-lean Go microservice queries intermediate aggregated TimescaleDB tables continuously. Ingested events map directly to Redis pub/sub topics and are broadcast cleanly via localized persistent WebSockets.",
      points: [
        { title: "Declarative D3.js Grid", description: "Bespoke high-performance SVG and canvas render loops update only the exact visual nodes affected by live changes, bypassing heavy DOM re-renders." },
        { title: "Hierarchical Time Ranges", description: "Renders time periods with rolling pre-aggregated bucket slices rather than computing raw logs at runtime, saving cloud query costs." }
      ]
    },
    challenges: [
      {
        challenge: "Handling Rapid Event Spikes Elegantly",
        solution: "During large system disruptions, thousands of telemetry points stream in per second. This causes browser tabs to lock up completely. We engineered dynamic, server-authoritative debouncing and batching algorithms that throttle UI canvas refreshes to a clean 300ms cycle, while keeping absolute numeric values current."
      },
      {
        challenge: "Displaying Deep Global Data Privately",
        solution: "Executives often view charts on laptops in airports or public cafes, risking data leaks. We introduced a persistent 'Shield Mode' gesture. This blurs exact values behind subtle, relative glowing trend bars when a physical mouse-hover is absent."
      }
    ],
    lessons: [
      "Simple, high-contrast flat charts carry far more analytical clarity than pseudo-3D interfaces.",
      "Aggressively aggregating data server-side keeps clients amazingly light and snappy.",
      "Designing UI interfaces with ample visual breathing room reduces executive decision anxiety."
    ],
    featuredImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrhlD7kb3mze9Nnj_yf6K2jsrEc3ccImOaW3E3DJB67741JbQXq85AlMG1NSg1BIBfcHdQsjR0y2KciJgyYnmev8EiNRWy-UD38Rh7TTtGQa-fq-Wq4CjUgsGm_BO16asQkxgK4YakBoaV1krN3uAbGsNK5pdzfljn29xYHdwinwiLJ94LAtKWiU7oB4_dv_2zY_7Ywjksrnwe0dnTC6y3JNyF61aslKETs_wMFO3wb3KgPsTi1Sm-B0fjdOZO1UJrc4YXQXsavxU",
    screenshots: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrhlD7kb3mze9Nnj_yf6K2jsrEc3ccImOaW3E3DJB67741JbQXq85AlMG1NSg1BIBfcHdQsjR0y2KciJgyYnmev8EiNRWy-UD38Rh7TTtGQa-fq-Wq4CjUgsGm_BO16asQkxgK4YakBoaV1krN3uAbGsNK5pdzfljn29xYHdwinwiLJ94LAtKWiU7oB4_dv_2zY_7Ywjksrnwe0dnTC6y3JNyF61aslKETs_wMFO3wb3KgPsTi1Sm-B0fjdOZO1UJrc4YXQXsavxU",
        alt: "Clean operational chart displaying charts on professional hardware"
      }
    ],
    nextSlug: "security-intelligence",
    prevSlug: "topicsimplify"
  },
  {
    slug: "security-intelligence",
    title: "Security Intelligence App",
    category: "Security",
    year: "2024",
    role: "Lead Platform Security Architect",
    timeline: "6 Months (Q1-Q2 2024)",
    impact: "+99.99% Exploit Prevention Rate",
    summary: "An enterprise-level platform threat detection and vulnerability mitigation system utilizing behavior sequence analysis to stop zero-day attacks in Kubernetes multi-cluster routing.",
    techStack: [
      { name: "Rust", type: "Core Engine" },
      { name: "Kubernetes / eBPF", type: "Platform Hook" },
      { name: "React", type: "Client Dashboard" },
      { name: "ELK Stack / ClickHouse", type: "Telemetry Analysis" }
    ],
    overview: "Security Intelligence App is a high-grade intrusion monitoring platform. It hooks seamlessly into localized Linux kernel systems via eBPF probes, observing multi-container system requests to block malicious outbound connections or privilege escalation scripts prior to exploit execution.",
    problemStatement: "Modern microservices run thousands of background container tasks. Traditional pattern-matching firewalls check for known files but fail entirely during novel, zero-day threat operations that utilize authorized commands in suspicious temporal relationships (e.g., executing a curl download right after an unexpected binary write).",
    painPoints: [
      "Heavy performance overhead of older scanning agents running in containers.",
      "High volumes of false alerts that cause fatigue in security control staff.",
      "Complex, confusing configuration text files that complicate active firewall management."
    ],
    goals: [
      { title: "Zero Agent Overhead", description: "Use eBPF to monitor raw kernel syscall events directly, maintaining overall container CPU overhead under 1%." },
      { title: "Visual Attack Path", description: "Trace the sequential chain of exploit activities visually as a clean timeline diagram, from entry to blockade." }
    ],
    architecture: {
      description: "Implemented as a highly performant Rust monitoring daemon deployed as a Kubernetes DaemonSet, transmitting structured trace data via secure memory rings back to a central streaming parser cluster.",
      points: [
        { title: "Kernel-Level Hooks", description: "Direct syscall monitoring via eBPF probes avoids proxy injection delays entirely." },
        { title: "Behavioral Graph Modeling", description: "Translates active container processes into localized behavioral graph vectors, flagging abnormalities in real-time." }
      ]
    },
    challenges: [
      {
        challenge: "Ingesting Terabytes of Active Trace Telemetry Daily",
        solution: "Monitoring container syscalls generates massive volumes of raw data. This can easily saturate server network links. We engineered a decentralized local parser in Rust that filters 95% of standard, repetitively verified operations on edge nodes, uploading only suspicious or high-risk operational profiles to ClickHouse databases."
      },
      {
        challenge: "Rendering Threat Timelines Clearly",
        solution: "Security incidents display hundreds of confusing log lines, which hinders rapid human mitigation. We designed an elegant temporal layout. This automatically chains key related actions (e.g. process starts, network links, file updates) into a clean, highly understandable sequence map that pinpoints structural root causes immediately."
      }
    ],
    lessons: [
      "Operating inside kernel layers is vastly more secure than proxy injection systems.",
      "Decentralized edge filtering saves massive cloud database budget.",
      "Readable visual graphs allow network operators to react to zero-day incidents in minutes instead of hours."
    ],
    featuredImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7NEu4bbzFYkxPcHfu78C06JwVMf-_AVb4Gv-3UO4u-8JXA3rCv-lBJF5-RuSD-6-Pi1u3QCFUEA56MxAyDjCbgT8g1O91S-xuwo1ozm7NOazH9ZLAz4-hWbhRhDr_ha4wNb5qYQejzGDJCkvm6pD0goXD7rSXu6xwfU9g0wFQLfaXLnYRKs9XY2NlgJ-y5uU_THBy1lbvdq7Xf0TI_Ld8oNNQIV40ajlvjb1DUBr0bbpo-5s3jpkdbBwzFCsRE9l3N_Firbicuss",
    screenshots: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7NEu4bbzFYkxPcHfu78C06JwVMf-_AVb4Gv-3UO4u-8JXA3rCv-lBJF5-RuSD-6-Pi1u3QCFUEA56MxAyDjCbgT8g1O91S-xuwo1ozm7NOazH9ZLAz4-hWbhRhDr_ha4wNb5qYQejzGDJCkvm6pD0goXD7rSXu6xwfU9g0wFQLfaXLnYRKs9XY2NlgJ-y5uU_THBy1lbvdq7Xf0TI_Ld8oNNQIV40ajlvjb1DUBr0bbpo-5s3jpkdbBwzFCsRE9l3N_Firbicuss",
        alt: "Secure server racks server room glowing blue indicators"
      }
    ],
    nextSlug: "ride-hailing-premium",
    prevSlug: "ceo-dashboard"
  },
  {
    slug: "ride-hailing-premium",
    title: "Ride Hailing Premium",
    category: "Mobile",
    year: "2022",
    role: "Lead Mobile Architect",
    timeline: "7 Months (Q2-Q4 2022)",
    impact: "Used by 14,000+ High-Net-Worth Executives",
    summary: "A ultra-premium white-label luxury mobility platform featuring pre-scheduled rides, localized security dispatch, concierge APIs, and custom payment integrations for elite travelers.",
    techStack: [
      { name: "Go / Microservices", type: "Backend Core" },
      { name: "Flutter", type: "Cross-Platform Client" },
      { name: "Google Maps Platform", type: "Mapping & Routing" },
      { name: "Redis", type: "Real-time Geospatial Storage" }
    ],
    overview: "Ride Hailing Premium is a boutique transit solution designed to cater to high-net-worth executives, state delegates, and corporate travelers requiring high security and premium service. In addition to high-end ride matching, the application features an instant connection to private guard services, detailed vehicle manifests, and silent, localized multi-card checkouts.",
    problemStatement: "Elite travelers in metropolises face a massive drop in safety and reliability when utilizing mass-market ridesharing services. Standard drivers frequently reject complex schedules, and standard app interfaces fail to integrate emergency support networks, secure pre-arranged pickup manifests, or direct multi-tier corporate invoices.",
    painPoints: [
      "Inaccurate vehicle arrival predictions that cause embarrassing executive delays.",
      "Lack of emergency support and localized dispatch systems.",
      "Messy checkout tracking for multi-stop corporate business itineraries."
    ],
    goals: [
      { title: "Precise ETA Tracking", description: "Integrate specialized mapping API algorithms, providing real-time location ETA predictions accurate to within 10 seconds." },
      { title: "Direct Guard Link", description: "Establish a one-tap panic overlay that instantly routes vehicle diagnostics, current path, and microphone feeds directly to physical security guards." }
    ],
    architecture: {
      description: "Designed using Go microservices with extreme attention to real-time sync. Drivers continuously stream coordinates via lightweight WebSockets to geospatial index collections maintained inside an in-memory Redis cluster.",
      points: [
        { title: "Geospatial indexing", description: "Stores and queries real-time driver coordinates via high-performance spatial Redis collections, bypassing database queries completely during rides." },
        { title: "Resilient Routing", description: "Bespoke routing pipelines compute alternative paths continuously, bypass dynamic traffic blocks, and ensure secure schedules." }
      ]
    },
    challenges: [
      {
        challenge: "Maintaining Accurate Location Tracking on Weak Mobile Signals",
        solution: "Frequent drop-outs in cellular coverage caused GPS markers to freeze or teleport erratically on active maps, creating user concern. We implemented a dead-reckoning movement interpolation engine on the client device. This utilizes accelerometer vectors and road-snapping algorithms to keep map movement incredibly fluid and natural."
      },
      {
        challenge: "Automating Dynamic Corporate Billing Splits",
        solution: "Enterprise customers need to split single itineraries between separate administrative billing cost allocations. We programmed a multi-invoice splitting engine that processes complex corporate billing rules at point of payment, sending customized invoices to accounts departments automatically."
      }
    ],
    lessons: [
      "Elegant movement details on maps reduce overall customer anxiety far better than simple numeric ETAs.",
      "Modular routing design allows the platform to switch between map providers easily, reducing operational cost.",
      "Reliability and executive trust are won through simple interface design and consistent service quality."
    ],
    featuredImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBP1QK0jfzbNtylSGvOY_gJWVw2RkUtRi2O5PrCSzammpmd0C9RgjsogI4tNcIE1SmqhokC5Q7LGEClD8j_yUGctE-_Jz0EdcOvNCD4_R1HdV8E7-gI5xuV-n-_eoTbzBpGaIgs57MdfkQFpTxYWjPUrZq7Ub-Oxy2Aip5Bf_AfxRMmCh07ad3HpgbL_peRIVfyIlakbsn3Bur4rNdc4CBRk5wgsbNNg9i7qHrKgSxg3NCgExALJCZiXDfDaBAa2W7DOYe1aHj8bo",
    screenshots: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWY-AGFl3dQN1K6ysvGwZQRveR5YQB14DlwgEX4YxbymmWNETtSjH7MhRdkLsPKmTWmxsUABo-k5WHKqMNqjfDrTMSVjN--xBl3DffmhwxuyHBJTv8L-hX9DUr1aLZeVK5-0ej83NRq3oHykajKss-dkKEbstbLsgwxEZv7kurI8ImOgaK2VcNlkAahvAXcoYsZ3LzsthE7E2kLnWwHcxHEQlIxvbi-efbCLzt8RavyW5wkW-GV-9OK2ctBFq2EkOK-H320aFVL34",
        alt: "Smartphone mockup on sophisticated clean desk layout"
      }
    ],
    nextSlug: "bookafrica",
    prevSlug: "security-intelligence"
  }
];

export const articlesData = [
  {
    slug: "scaling-event-driven-redis",
    title: "Scaling Event-Driven Architectures with Redis",
    date: "OCT 2024",
    readTime: "6 min read",
    summary: "How we leveraged redis publisher-subscriber patterns and timeseries bucketing to ingest millions of real-time server tracking events with zero browser lag."
  },
  {
    slug: "ethics-product-growth-emerging-markets",
    title: "The Ethics of Product Growth in Emerging Markets",
    date: "AUG 2024",
    readTime: "8 min read",
    summary: "Designing technical software for contexts with inconsistent network connectivity, mobile-centric transactions, and high operational costs."
  },
  {
    slug: "modern-frontend-state-management",
    title: "Modern Frontend State Management: A Case for Simplicity",
    date: "JUN 2024",
    readTime: "5 min read",
    summary: "Rejecting overwhelming overhead state store libraries in favor of native context containers, custom hooks, and focused edge caching."
  }
];
