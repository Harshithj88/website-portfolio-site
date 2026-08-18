export const profile = {
  name: "Harshith Julapelli",
  initials: "Harsh",
  title: "Platform Engineer | DevOps | SRE | Cloud Automation",
  location: "Plano, Texas",
  githubUser: "Harshithj88",
  githubUrl: "https://github.com/Harshithj88",
  linkedInUrl: "https://www.linkedin.com/in/hjulapelli/",
  email: "your.email@example.com",
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
      role: "DevOps Configuration Engineer",
      location: "Plano / Irvine / Remote",
      period: "Current",
      bullets: [
        "Manage enterprise Azure DevOps and GitHub Actions platforms supporting 100+ repositories and multiple engineering teams across the organization.",
        "Design and maintain CI/CD automation that reduced deployment cycle times, enabling teams to ship with higher confidence and fewer manual gates.",
        "Implement Infrastructure as Code using Terraform and Bicep, creating reusable modules that standardize cloud provisioning across environments.",
        "Build and operate self-hosted runner infrastructure, approval workflows, and release governance that balance deployment velocity with operational control.",
        "Improve platform security through service account lifecycle management, gMSA configurations, branch protections, and least-privilege access models.",
        "Enable engineering teams through self-service automation, practical documentation, and cross-functional support that eliminates bottlenecks.",
      ],
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
