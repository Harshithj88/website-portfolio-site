export const siteUrl = "https://harshithjulapelli.com";

export const profile = {
  name: "Harshith Julapelli",
  title: "Platform Engineer | DevOps | SRE | Cloud Automation",
  location: "Plano, Texas | Remote",
  githubUser: "Harshithj88",
  githubUrl: "https://github.com/Harshithj88",
  linkedInUrl: "https://www.linkedin.com/in/hjulapelli/",
  email: "harsh.julapelli@gmail.com",
  resumeFileName: "Harshith-Julapelli-Resume.pdf",
  availability: "Open to platform & SRE opportunities",
  headline:
    "I build reliable engineering platforms that help teams ship faster with confidence.",
  summary:
    "Azure DevOps Engineer Expert with 9+ years in DevOps and SRE. I run CI/CD, infrastructure as code and governance for 100+ repositories, and I automate the work that slows teams down.",
  about: [
    "I'm a Microsoft Certified Azure DevOps Engineer Expert. I started as a software engineer in regulated healthcare, moved into DevOps, and now run the delivery platform for a large mortgage lender: Azure DevOps, GitHub Actions, self-hosted runners, Terraform and Bicep.",
    "What I care about is the boring part that makes everything else work: pipelines that don't break, access that is least-privilege and auditable, and servers that are configured the same way every time. When something does break, I like finding the root cause and writing the runbook so it stays fixed.",
    "I work closely with development, security and audit teams, and I'm happiest when a team can ship without needing to ask me.",
  ],
  careerStartYear: 2016,
  heroLines: ["Hi, I'm Harshith.", "I build the platforms", "teams ship on."],
  howIWork: [
    "I treat delivery as a product: pipelines should be boring, access should be least-privilege, and every server should be configured the same way every time.",
    "When something breaks I look for the root cause, fix it in code, and write the runbook so the next person doesn't need me.",
  ],
  experienceAreas: [
    { name: "CI/CD & release engineering", since: 2016 },
    { name: "Git & source control", since: 2016 },
    { name: "Azure", since: 2018 },
    { name: "Windows Server & IIS", since: 2018 },
    { name: "Infrastructure as Code", since: 2021 },
    { name: "Kubernetes & GitOps", since: 2021 },
  ],
  achievements: [
    "Supported 100+ repositories across enterprise engineering teams",
    "Built an enterprise GitHub Actions runner platform from the ground up",
    "Led source control modernization from TFS to Azure DevOps and GitHub",
    "Implemented Terraform and Bicep infrastructure standards",
    "Improved deployment governance and release automation",
    "Upgraded 60+ application servers to Windows Server 2022 with TLS 1.3",
  ],
  tagline:
    "Improving system reliability, automating operational workflows, and reducing deployment risk.",
  metrics: [
    { value: "100+", label: "Repositories Supported", note: "Git workflows, branch policies and governance" },
    { value: "30+", label: "Pipelines Modernized", note: "Classic TFS build and release moved to YAML" },
    { value: "500+", label: "Service Accounts Managed", note: "Service accounts and gMSAs with audit evidence" },
    { value: "60+", label: "Servers Upgraded", note: "Windows Server 2022 and TLS 1.3 enablement" },
  ],
  certifications: [
    {
      title: "Microsoft Certified: DevOps Engineer Expert",
      issuer: "Microsoft",
      code: "AZ-400",
      description: "Advanced DevOps practices, CI/CD strategy, infrastructure automation, and release governance.",
      url: "https://learn.microsoft.com/api/credentials/share/en-us/HarshithRao-8644/D123BD4010FF44AC?sharingId=2C43860096F8C19A",
    },
    {
      title: "Microsoft Certified: Azure Administrator Associate",
      issuer: "Microsoft",
      code: "AZ-104",
      description: "Azure administration, identity, governance, storage, compute, and virtual networking.",
      url: "https://learn.microsoft.com/api/credentials/share/en-us/HarshithRao-8644/BD3BFC251544413A?sharingId=2C43860096F8C19A",
    },
  ],
  stack: {
    Cloud: ["Azure", "AWS"],
    "CI/CD": ["Azure DevOps", "GitHub Actions", "Release Automation"],
    IaC: ["Terraform", "Bicep", "ARM Templates"],
    Languages: ["PowerShell", "Python", "Bash", "YAML"],
    Platforms: ["Linux", "Windows Server", "Docker", "Kubernetes"],
    Tools: ["Git", "REST APIs", "Dynatrace", "Helm"],
  },
  projects: [
    {
      title: "AKS Enterprise Platform Engineering",
      summary:
        "A production-style AKS platform built with modular Bicep and secretless CI/CD through GitHub Actions OIDC. Includes VNet isolation, ACR, Key Vault with RBAC, Log Analytics and multi-environment parameters.",
      impact: "No long-lived GitHub-to-Azure credentials: OIDC federation and managed identities replace them.",
      tags: ["Bicep", "GitHub Actions", "AKS", "OIDC", "Key Vault"],
      url: "https://github.com/Harshithj88/aks-platform-bicep-github-actions",
    },
    {
      title: "AKS Reliability Engineering Platform",
      summary:
        "An SRE platform with Helm-based deployments, Prometheus and Grafana observability, SLO-based alerting, OpenTelemetry tracing and incident response docs.",
      impact: "SLO-driven alerts keep on-call focused on real user impact.",
      tags: ["AKS", "Helm", "Prometheus", "Grafana", "SLOs"],
      url: "https://github.com/Harshithj88/aks-sre-platform-lab",
    },
    {
      title: "DevOps & SRE Operations Toolkit",
      summary:
        "PowerShell automation for server fleets, certificate lifecycle, IIS administration and rolling deployments, plus pipeline templates, KQL queries and compliance checks.",
      impact: "Reusable automation for hybrid on-prem and cloud environments.",
      tags: ["PowerShell", "Azure DevOps", "IIS", "KQL", "Bicep"],
      url: "https://github.com/Harshithj88/devops-sre-operations-toolkit",
    },
    {
      title: "SRE / DevOps Handbook",
      summary:
        "An open-source knowledge base with 9 troubleshooting runbooks, 10 cheat sheets, 5 production checklists and reusable SRE templates.",
      impact: "A practical playbook for incident response, capacity planning and change management.",
      tags: ["SRE", "Runbooks", "Kubernetes", "Documentation"],
      url: "https://github.com/Harshithj88/sre-devops-handbook",
    },
  ],
  experience: [
    {
      company: "loanDepot",
      role: "Senior DevOps Configuration Engineer",
      location: "Plano / Remote",
      period: "Mar 2021 – Present",
      bullets: [
        "Run the enterprise Azure DevOps and GitHub Actions platforms supporting 100+ repositories across multiple engineering teams.",
        "Cut deployment cycle times by 40% through CI/CD automation, self-hosted runners, approval workflows and release governance.",
        "Built reusable Terraform and Bicep modules that standardize provisioning across 4 environments and reduced manual provisioning effort by 60%.",
        "Migrated repositories from TFS to Azure DevOps and GitHub and modernized 30+ classic build and release pipelines into YAML.",
        "Support AKS deployments with GitOps/Flux, Helm and Bicep for more consistent releases across environments.",
        "Manage 500+ service accounts and gMSAs, and represent the team in IT Controls, SOX and UAR audits.",
        "Led Windows Server 2022 upgrades and TLS 1.3 enablement across 60+ application servers.",
        "Write PowerShell automation for server discovery, IIS, Windows services, configuration validation and health checks.",
        "Onboard and support 150+ applications and components tracked in the CMDB across on-prem and Azure.",
        "Troubleshoot pipelines, build agents, SonarQube scans, NuGet restores, Kubernetes deployments, IIS apps and RabbitMQ.",
      ],
    },
    {
      company: "WellStack",
      role: "Senior Cloud DevOps Engineer",
      location: "Madison, WI",
      period: "Oct 2018 – Mar 2021",
      bullets: [
        "Cut Azure hosting spend by 20% through cost optimization and cost management tooling.",
        "Architected cloud solutions on Azure Functions, Log Analytics, Cosmos DB and Azure DevOps for redundancy, scalability and monitoring.",
        "Managed releases across Dev, QA, UAT and Production with Octopus Deploy, TeamCity and Jenkins.",
        "Provided Tier 3 production support with on-call rotation and set monitoring standards with Nagios and New Relic.",
        "Led the Meaningful Use Stage 3 certification effort across multiple internal teams.",
      ],
    },
    {
      company: "WellStack",
      role: "Software Engineer",
      location: "Madison, WI",
      period: "Mar 2018 – Oct 2018",
      bullets: [
        "Built healthcare applications in a regulated environment (CLIA, HIPAA, SOX), including HL7 integrations with Mirth.",
        "Owned release deployments to Dev and QA, and ran CI/CD with Octopus Deploy, TeamCity and Jenkins.",
        "Led QA automation with Sahi Pro and coordinated with offshore teams.",
      ],
    },
    {
      company: "CloudRay",
      role: "DevOps Engineer",
      location: "Monroe, NJ",
      period: "Aug 2016 – Mar 2018",
      bullets: [
        "Built Jenkins CI/CD pipelines with Git integration and Maven builds across multiple environments.",
        "Defined Git branching strategies and wrote Bash tooling for monitoring, health checks and capacity alerts.",
      ],
    },
    {
      company: "University of Central Missouri",
      role: "Graduate Research Assistant",
      location: "Warrensburg, MO",
      period: "Jan 2016 – Dec 2016",
      bullets: [
        "Managed research databases and optimized SQL queries for data retrieval and reporting.",
      ],
    },
  ],
  recommendations: [
    {
      name: "Patricia Chin",
      title: "Senior DevOps Engineer",
      company: "loanDepot",
      quote: "All of my interactions with Harshith have increased my respect and positive opinion of him. We usually work together on bigger projects together that require a change to production in some way - and his quick and accurate analyses have always impressed me. Harshith is great with communication and collaboration and when things need to be broken into different tasks, he's quick to tackle some of them and work with you to get the job done. Whenever I need to hand off tasks to the configuration team, he is able to assess whatever missing pieces of information he needs from me to get the job done.",
    },
    {
      name: "Michael Takata",
      title: "Director of DevOps",
      company: "loanDepot",
      quote: "There is no substitute for hard work. This quote comes to mind when I think about Harshith. Harshith is a hard-working individual who is willing to put in the hours necessary to get a project over the finish line. His hard work and dedication lead us to success. Over the past year Harshith has become an asset to our team. I look forward to many more years working with him as he continues to learn and grow as an individual and in automation.",
    },
    {
      name: "David Jamin",
      title: "Scrum Master | Agile Methodology",
      company: "loanDepot",
      quote: "People always asks DevOps for help and Harshith is the kind of DevOps engineer that you can depend on. He knows the ins and outs, and always eager and willing to jump in without being asked. He will tackle priority tickets that comes in and chime in if he has answers to questions. I know that I could always reach out to him and he will be glad to help me with my questions.",
    },
    {
      name: "Alia Wilkinson",
      title: "Principal Software Engineer, Systems Architecture for Developer Experience",
      company: "loanDepot",
      quote: "Harshith has been an extremely dependable colleague who is eager to jump in and help when things go wrong, learn new things, and collaborate with other coworkers and teams. Harshith can effectively troubleshoot in high pressure applications and has great knowledge in monitoring, application troubleshooting, and operational tasks. Working with Harshith is a pleasure and would thrive in any environment where collaboration, knowledge and fortitude are valuable.",
    },
    {
      name: "Sal Braico",
      title: "Founder and CEO",
      company: "Pivotal Healthcare",
      quote: "I worked closely with Harshith at SymphonyCare. He is an excellent engineer and an even better person. He came to us as a relatively inexperienced engineer but quickly showed his determination and drive by asking for more and more responsibility. Harshith played a major role in stabilizing our DevOps systems and processes and dramatically improved our ability to upgrade our applications.",
    },
    {
      name: "Jennifer Bayless",
      title: "Strategic Agile Product Manager",
      company: "WellStack",
      quote: "Harshith is a pleasure to work with, he always goes above and beyond to ensure the work is done and done right. He was always available night or day and willing to take on additional tasks beyond his job. He is truly a team player and I know he will succeed in any position.",
    },
  ],
};
