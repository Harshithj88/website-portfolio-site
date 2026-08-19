export const profile = {
  name: "Harshith Julapelli",
  initials: "Harsh",
  title: "Platform Engineer | DevOps | SRE | Cloud Automation",
  location: "Plano, Texas | Remote",
  githubUser: "Harshithj88",
  githubUrl: "https://github.com/Harshithj88",
  linkedInUrl: "https://www.linkedin.com/in/hjulapelli/",
  email: "harsh.julapelli@gmail.com",
  resumeFileName: "Harshith-Julapelli-Resume.pdf",
  headline:
    "I build reliable engineering platforms that help teams ship faster with confidence.",
  summary:
    "Microsoft Certified Azure DevOps Engineer Expert focused on building reliable, scalable, and secure engineering platforms that enable development teams to deliver software efficiently.",
  about: [
    "I'm a Microsoft Certified Azure DevOps Engineer Expert with experience in DevOps, Site Reliability Engineering (SRE), cloud operations, and platform automation. My focus is on building reliable, scalable, and secure engineering platforms that enable development teams to deliver software efficiently while maintaining high availability and operational excellence.",
    "I enjoy solving complex infrastructure and reliability challenges through automation, observability, and engineering best practices. My areas of expertise include Azure DevOps, GitHub Enterprise & GitHub Actions, CI/CD Pipeline Engineering, Infrastructure as Code, Platform Engineering, Monitoring & Observability, Cloud Automation, Release Engineering, Incident Response, and Operational Excellence.",
    "Throughout my career, I have partnered with development, security, and business teams to improve deployment reliability, reduce manual operational effort, strengthen governance, and increase platform stability.",
  ],
  achievements: [
    "Supported 100+ repositories across enterprise engineering teams",
    "Built enterprise GitHub Actions runner platform from the ground up",
    "Led source control modernization initiatives across the organization",
    "Implemented Terraform and Bicep infrastructure standards",
    "Improved deployment governance and release automation",
  ],
  tagline:
    "Improving system reliability, automating operational workflows, reducing deployment risk, and strengthening DevOps and SRE practices.",
  metrics: [
    {
      value: "50+",
      label: "CI/CD Pipelines Automated",
      note: "Enterprise delivery workflows standardized across teams",
    },
    {
      value: "100+",
      label: "Repositories Governed",
      note: "Modern Git workflows, branch policies, and governance at scale",
    },
    {
      value: "1000+",
      label: "Deployments Enabled",
      note: "Consistent, repeatable releases through pipeline automation",
    },
    {
      value: "99.9%",
      label: "Platform Availability",
      note: "Uptime-focused infrastructure and incident response practices",
    },
  ],
  certifications: [
    {
      title: "Microsoft Certified: DevOps Engineer Expert",
      issuer: "Microsoft",
      code: "AZ-400",
      description: "Advanced DevOps practices, CI/CD strategy, infrastructure automation, and release governance.",
    },
    {
      title: "Microsoft Certified: Azure Developer Associate",
      issuer: "Microsoft",
      code: "AZ-204",
      description: "Azure development, cloud-native solutions, integrations, and application deployment.",
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
  expertise: [
    {
      title: "Cloud & Infrastructure",
      body: "Design and operate Azure-first infrastructure with AWS exposure. Repeatable provisioning through Terraform, Bicep, and ARM templates — enabling teams to deploy compliant environments consistently.",
      tags: ["Azure", "AWS", "Terraform", "Bicep", "ARM Templates"],
    },
    {
      title: "CI/CD & Delivery Automation",
      body: "Build and maintain enterprise CI/CD platforms across Azure DevOps and GitHub Actions. Self-hosted runners, approval gates, and release automation that reduce deployment time from hours to minutes.",
      tags: ["Azure DevOps", "GitHub Actions", "Release Automation", "Git"],
    },
    {
      title: "Governance & Security",
      body: "Implement least-privilege access, branch protections, deployment controls, service account lifecycle management, and gMSA workflows. Audit-friendly documentation that satisfies compliance without slowing teams down.",
      tags: ["RBAC", "Branch Policies", "gMSA", "Compliance"],
    },
    {
      title: "Automation Engineering",
      body: "Transform manual operational processes into repeatable, self-service automation using PowerShell, Bash, and Python. Pipeline templates, operational scripts, and runbooks that eliminate toil.",
      tags: ["PowerShell", "Bash", "Python", "Runbooks"],
    },
    {
      title: "Platform Reliability",
      body: "Incident response, root cause analysis, performance optimization, and monitoring handoffs across Windows and Linux. Keep critical business applications running with minimal downtime.",
      tags: ["Monitoring", "Incident Response", "Windows", "Linux"],
    },
    {
      title: "Source Control Modernization",
      body: "Lead repository migrations from legacy source control into modern Git-based workflows. Branching strategies, enablement documentation, and cross-functional team support that accelerate adoption.",
      tags: ["Git", "Migration", "Branching Strategy", "Enablement"],
    },
  ],
  projects: [
    {
      title: "AKS Platform — Bicep + GitHub Actions",
      summary:
        "Production-style AKS platform with modular Bicep IaC and secretless CI/CD via GitHub Actions OIDC. Includes VNet isolation, ACR, Key Vault with RBAC, Log Analytics, and multi-environment parameters.",
      impact:
        "Zero stored secrets — OIDC auth and managed identity eliminate credential rotation entirely",
      tags: ["Bicep", "GitHub Actions", "AKS", "OIDC", "Key Vault"],
      url: "https://github.com/Harshithj88/aks-platform-bicep-github-actions",
    },
    {
      title: "AKS SRE Platform Lab",
      summary:
        "End-to-end SRE platform with Helm-based Kubernetes deployments, Prometheus + Grafana observability, SLO-based alerting, OpenTelemetry tracing, and full incident response documentation.",
      impact:
        "Full observability stack with SLO-driven alerts reduces noise and focuses on-call on real user impact",
      tags: ["AKS", "Helm", "Prometheus", "Grafana", "SLOs"],
      url: "https://github.com/Harshithj88/aks-sre-platform-lab",
    },
    {
      title: "DevOps & SRE Operations Toolkit",
      summary:
        "Production-grade PowerShell automation for server fleet management, certificate lifecycle, IIS administration, rolling deployments, CI/CD pipeline templates, KQL queries, and security compliance.",
      impact:
        "Covers 10 core DevOps/SRE job duties with reusable automation across hybrid on-prem and cloud environments",
      tags: ["PowerShell", "Azure DevOps", "IIS", "KQL", "Bicep"],
      url: "https://github.com/Harshithj88/devops-sre-operations-toolkit",
    },
    {
      title: "SRE / DevOps Handbook",
      summary:
        "Open-source knowledge base with 9 troubleshooting runbooks, 10 cheat sheets, 5 production checklists, architecture diagrams, and reusable SRE documentation templates.",
      impact:
        "Battle-tested operational playbook covering incident response, capacity planning, toil reduction, and change management",
      tags: ["SRE", "Runbooks", "Kubernetes", "Documentation"],
      url: "https://github.com/Harshithj88/sre-devops-handbook",
    },
  ],
  experience: [
    {
      company: "loanDepot",
      role: "Senior DevOps Configuration Engineer",
      location: "Plano / Remote",
      period: "Current",
      bullets: [
        "Manage enterprise Azure DevOps and GitHub Actions platforms supporting 100+ repositories across multiple engineering teams.",
        "Design and maintain CI/CD automation that cut deployment cycle times by 40%, enabling teams to ship with higher confidence and fewer manual gates.",
        "Implement Infrastructure as Code using Terraform and Bicep, creating reusable modules that standardize cloud provisioning across 4 environments.",
        "Build and operate self-hosted runner infrastructure, approval workflows, and release governance that balance deployment velocity with operational control.",
        "Strengthen platform security through service account lifecycle management, gMSA configurations, branch protections, and least-privilege access models.",
        "Enable engineering teams through self-service automation, practical documentation, and cross-functional support that eliminates bottlenecks.",
        "Onboard, configure, and support 150+ enterprise applications and components tracked in CMDB across on-prem and Azure platforms.",
        "Support AKS deployments using GitOps/Flux, Helm, HelmRelease, Kubernetes manifests, and Bicep, improving release consistency and environment standardization.",
        "Develop and maintain Bicep modules, ARM templates, and IaC deployment patterns, reducing manual provisioning effort by 60%.",
        "Migrate source code repositories from TFS to Azure DevOps and GitHub, accelerating version control modernization across the organization.",
        "Modernize 30+ legacy TFS/classic build and release pipelines into Azure DevOps YAML pipelines, improving maintainability and source-controlled configuration.",
        "Build PowerShell automation for server discovery, IIS administration, Windows services, configuration validation, log cleanup, and environment health checks.",
        "Configure newly provisioned Windows servers for application readiness, including IIS setup, services, dependencies, access validation, and deployment support.",
        "Create and maintain 500+ service accounts and gMSA accounts supporting secure authentication, automation workflows, and production operations.",
        "Represent the team in IT Controls, SOX, and UAR audits by validating access, ownership, service accounts, and compliance evidence.",
        "Lead Windows Server 2022 upgrades and TLS 1.3 enablement across 60+ application servers, improving security posture and compliance readiness.",
        "Troubleshoot CI/CD pipelines, build agents, SonarQube scans, NuGet restore issues, Kubernetes deployments, IIS apps, and RabbitMQ resources, reducing mean time to resolution.",
      ],
    },
    {
      company: "WellStack",
      role: "Senior Cloud DevOps Engineer",
      location: "Madison, WI",
      period: "Oct 2018 – Mar 2021",
      bullets: [
        "Supported the full software development lifecycle across cross-functional teams using Scrum/Agile methodology, driving continuous improvement in delivery processes.",
        "Designed and implemented Azure hosting cost optimization strategies, reducing cloud spend by 20%.",
        "Provided Tier 3 production support via JIRA with on-call rotation, reducing time-to-resolution for customer-facing issues.",
        "Served as key liaison between offshore development teams and onsite Product Owners, ensuring alignment on priorities and deliverables.",
        "Architected cloud solutions using Azure App Functions, Log Analytics, Cosmos DB, and Azure DevOps for redundancy, scalability, and monitoring.",
        "Led Meaningful Use Stage 3 certification effort, coordinating across multiple internal teams to achieve compliance.",
        "Managed release deployments across Dev, QA, UAT, and Production environments using Octopus Deploy, TeamCity, and Jenkins.",
        "Established server monitoring standards using Nagios and New Relic, improving production visibility and incident response times.",
        "Implemented cloud cost management best practices using Microsoft Cloudyn, achieving measurable savings in Azure consumption.",
        "Collaborated with Engineering, QA, and Integration teams to plan, develop, test, and maintain mobile and web applications.",
        "Automated routine operational tasks with shell scripts for management reports, resource utilization alerts (CPU, memory, disk), and environment checks.",
      ],
    },
    {
      company: "WellStack",
      role: "Software Engineer",
      location: "Madison, WI",
      period: "Mar 2018 – Oct 2018",
      bullets: [
        "Built and maintained complex healthcare applications in high-performing cross-functional teams.",
        "Maintained code quality and automated testing using Git and Sahi Pro across the development lifecycle.",
        "Set up multi-tiered web applications in a highly regulated environment (CLIA, HIPAA, SOX).",
        "Integrated healthcare clinical data using Mirth and HL7 standards.",
        "Deployed and managed web services and web applications on IIS.",
        "Developed front-end features using JavaScript libraries, HTML5, data visualization, and UX design patterns.",
        "Architected and deployed cloud-native solutions on Azure.",
        "Managed project tracking and documentation using the Atlassian suite (Jira, Confluence).",
        "Owned release deployments to Dev and QA servers, ensuring consistent delivery cadence.",
        "Operated CI/CD tooling including Octopus Deploy, TeamCity, Jenkins, and MS SQL Server.",
        "Led QA automation efforts in a fast-paced environment, coordinating with offshore teams.",
      ],
    },
    {
      company: "CloudRay",
      role: "DevOps Engineer",
      location: "Monroe, NJ",
      period: "Aug 2016 – Mar 2018",
      bullets: [
        "Configured Jenkins CI/CD pipelines with Git integration, automating build and deployment workflows across multiple environments.",
        "Developed build and deployment scripts using Maven in Jenkins, streamlining promotion between environments.",
        "Built inventory tracking and capacity alerting in Jenkins, reducing unplanned server outages.",
        "Defined branching strategies and Git best practices to enable parallel development and Agile workflows.",
        "Created Bash shell scripts for performance monitoring, health checks, and routine operational tasks.",
        "Set up Jira as the defect tracking system with custom workflows, plug-ins, and issue lifecycle management.",
        "Monitored critical system services, reporting on performance metrics and server health.",
        "Evaluated and recommended system improvements, optimizations, and maintenance strategies.",
        "Provisioned virtual environments for development teams and resolved day-to-day infrastructure issues.",
        "Produced systems utilization and headroom reports to support troubleshooting and performance tuning.",
        "Partnered with internal customers to develop and troubleshoot cloud-based solutions.",
        "Documented procedures and created troubleshooting guides for software and hardware systems.",
        "Monitored and maintained system performance against SLA targets.",
      ],
    },
    {
      company: "University of Central Missouri",
      role: "Graduate Research Assistant",
      location: "Warrensburg, MO",
      period: "Jan 2016 – Dec 2016",
      bullets: [
        "Conducted qualitative data collection, analysis, and meta-analysis under faculty guidance.",
        "Produced research reports and performed general analysis across multiple datasets.",
        "Managed database operations including data entry, merging, and query development across various databases.",
        "Optimized SQL queries for research data retrieval and reporting accuracy.",
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
  posts: [
    {
      title: "Building Secure Self-Hosted GitHub Runners at Scale",
      desc: "Architecture patterns for enterprise runner infrastructure",
    },
    {
      title: "Terraform Module Design Patterns for Platform Teams",
      desc: "Reusable IaC that scales across environments",
    },
    {
      title: "Lessons Learned from Enterprise Repository Migrations",
      desc: "Minimizing risk when modernizing source control",
    },
    {
      title: "Automating Azure DevOps Governance Without Slowing Teams Down",
      desc: "Approval gates, branch policies, and deployment controls",
    },
    {
      title: "Troubleshooting Production CI/CD Failures",
      desc: "A systematic approach to pipeline debugging",
    },
  ],
};
