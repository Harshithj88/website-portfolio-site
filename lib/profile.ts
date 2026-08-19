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
    "Platform automation engineer focused on CI/CD modernization, infrastructure as code, GitHub Actions, Azure DevOps, governance, and developer enablement.",
  about: [
    "I help engineering organizations eliminate operational friction through platform automation, CI/CD modernization, and cloud-native infrastructure. My work turns manual, fragile processes into reliable systems that help teams ship faster with confidence.",
    "At loanDepot, I manage Azure DevOps and GitHub Actions platforms that support 100+ repositories across multiple engineering teams. I design automation that doesn't just work — it creates leverage, enabling teams to ship faster while maintaining the governance and security that enterprise environments demand.",
    "I believe the best platform engineers are invisible: when the systems you build are working well, nobody notices. That's the goal — reliability so consistent it becomes the backdrop, not the headline.",
  ],
  achievements: [
    "Supported 100+ repositories across enterprise engineering teams",
    "Built enterprise GitHub Actions runner platform from the ground up",
    "Led source control modernization initiatives across the organization",
    "Implemented Terraform and Bicep infrastructure standards",
    "Improved deployment governance and release automation",
  ],
  tagline:
    "I don't just automate tasks — I design systems that create leverage for engineering teams.",
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
      title: "Source Control Modernization",
      summary:
        "Led enterprise-wide migration from legacy source control into modern Git workflows. Designed branching strategies, created enablement documentation, and provided cross-functional support that minimized operational risk during transition.",
      impact:
        "Accelerated team adoption of modern Git workflows, improved repository ownership, and reduced merge conflicts across engineering teams.",
      tags: ["Git", "Azure DevOps", "Migration", "Developer Enablement"],
    },
    {
      title: "GitHub Actions Runner Platform",
      summary:
        "Built and managed scalable self-hosted GitHub Actions runner infrastructure for enterprise engineering teams, improving CI/CD reliability while reducing dependency on hosted runners.",
      impact:
        "Enabled faster, more controlled build execution with improved governance around runner administration and access.",
      tags: ["GitHub Actions", "Self-hosted Runners", "CI/CD", "Governance"],
    },
    {
      title: "Infrastructure as Code Framework",
      summary:
        "Created reusable Terraform and Bicep modules that replaced manual, ticket-based provisioning with self-service patterns. Teams deploy compliant infrastructure consistently across all environments.",
      impact:
        "Improved provisioning consistency, reduced configuration drift, and strengthened audit readiness across cloud environments.",
      tags: ["Terraform", "Bicep", "Azure", "IaC"],
    },
    {
      title: "Release Governance Automation",
      summary:
        "Automated approval gates, deployment checks, and configurable access models across lower environments — balancing deployment speed with operational control and compliance requirements.",
      impact:
        "Eliminated ambiguity around release approvals, reduced manual deployment effort, and improved deployment quality.",
      tags: ["Azure DevOps", "Approvals", "Release Engineering", "Controls"],
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
      name: "Placeholder Name",
      title: "Senior Engineering Manager",
      company: "Company Name",
      quote: "Placeholder recommendation text. Replace with actual LinkedIn recommendation.",
    },
    {
      name: "Placeholder Name",
      title: "Staff DevOps Engineer",
      company: "Company Name",
      quote: "Placeholder recommendation text. Replace with actual LinkedIn recommendation.",
    },
    {
      name: "Placeholder Name",
      title: "Principal Software Engineer",
      company: "Company Name",
      quote: "Placeholder recommendation text. Replace with actual LinkedIn recommendation.",
    },
    {
      name: "Placeholder Name",
      title: "VP of Engineering",
      company: "Company Name",
      quote: "Placeholder recommendation text. Replace with actual LinkedIn recommendation.",
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
