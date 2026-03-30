export const personalInfo = {
  name: "Arpit Khameshra",
  role: "DevOps Engineer",
  taglines: [
    "DevOps Engineer",
    "Cloud Infrastructure",
    "CI/CD Pipeline",
    "Kubernetes & Docker",
    "AWS",
  ],
  oneLiner: "Building resilient infrastructure that scales — 40% faster deployments, 99.9% uptime.",
  email: "arpitkhameshara164@gmail.com",
  phone: "+91-9785863017",
  linkedin: "https://linkedin.com/in/arpit-khameshra",
  github: "https://github.com/arpitkhameshra",
  location: "Rajasthan, India",
  stats: [
    { label: "yr exp", value: 1, prefix: "", suffix: "+" },
    { label: "faster deploys", value: 40, prefix: "", suffix: "%" },
    { label: "uptime", value: 99.9, prefix: "", suffix: "%" },
  ],
};

export const aboutParagraphs = [
  "I'm a results-driven DevOps Engineer with 1+ year of hands-on experience designing, automating, and maintaining scalable cloud infrastructure on AWS and GCP.",
  "I specialize in CI/CD pipeline automation (GitHub Actions, Jenkins), container orchestration (Docker, Kubernetes, AWS ECS/EKS), and Infrastructure as Code using Terraform and Ansible — cutting deployment time by 40% and improving availability by 25% in production.",
  "Currently at Webledger Solution Pvt. Ltd (Jaipur), I architect fault-tolerant AWS ECS deployments, manage 10+ containerized microservices, and run a full observability stack with CloudWatch, OpenTelemetry, and Prometheus + Grafana.",
  "I hold a B.Tech in Electrical Engineering from Arya College of Engineering, Rajasthan Technical University — and I bring an engineer's problem-solving mindset to every infrastructure challenge."
];

export const heroTerminalCommands = [
  "$ kubectl get pods --all-namespaces",
  "$ terraform apply --auto-approve",
  "$ docker build -t app:latest .",
  "$ gh workflow run deploy.yml",
  "$ aws ecs update-service --force-new-deployment"
];

export const cloudPlatforms = [
  "EC2", "ECS", "EKS", "RDS", "S3", "Lambda", "CloudFront",
  "Route53", "ELB", "ECR", "SNS", "SQS", "IAM", "EventBridge"
];

export const skills = [
  {
    category: "Cloud & Infrastructure",
    icon: "☁️",
    color: "orange",
    items: [
      "AWS (EC2, EKS, RDS, S3, VPC, Route53, Lambda, CloudFront, ELB, Lightsail, SNS, SQS, IAM, EventBridge)",
      "GCP (Compute Engine, Cloud SQL, Networking, IAM)"
    ]
  },
  {
    category: "Containerization & Orchestration",
    icon: "🐳",
    color: "cyan",
    items: ["Docker", "Kubernetes", "AWS ECS", "AWS ECR"]
  },
  {
    category: "CI/CD & Version Control",
    icon: "🔄",
    color: "green",
    items: ["GitHub Actions", "Jenkins", "Git", "GitHub"]
  },
  {
    category: "IaC & Configuration Management",
    icon: "🏗️",
    color: "purple",
    items: ["Terraform", "Ansible"]
  },
  {
    category: "Monitoring & Observability",
    icon: "📊",
    color: "yellow",
    items: ["AWS CloudWatch", "Prometheus", "Grafana", "OpenTelemetry", "SigNoz"]
  },
  {
    category: "Servers, DB & Scripting",
    icon: "🖥️",
    color: "red",
    items: [
      "Nginx", "Apache", "MySQL", "PostgreSQL", "Redis",
      "Bash/Shell Scripting", "Linux (Ubuntu, CentOS, RHEL)", "Windows"
    ]
  }
];

export const experiences = [
  {
    company: "Webledger Solution Pvt. Ltd",
    period: "Aug 2025 – Present",
    role: "DevOps Engineer",
    location: "Jaipur, India",
    current: true,
    skills: ["AWS ECS", "ELB", "RDS", "GitHub Actions", "Docker", "Kubernetes", "CloudWatch", "OpenTelemetry", "CloudFront"],
    bullets: [
      "Architected highly available AWS ECS infrastructure with ALB + RDS Multi-AZ — achieving 99.9% uptime",
      "Designed CI/CD pipelines with GitHub Actions → 40% faster deployments across 5+ microservices",
      "Integrated CloudFront CDN + Route 53 → 30% better availability, 25% lower global latency",
      "Managed 10+ containerized services with Docker, ECR, Kubernetes (RBAC + namespace isolation)",
      "Built centralized observability: CloudWatch + OpenTelemetry + SNS → 35% reduction in MTTD"
    ]
  },
  {
    company: "Tetari Innovations",
    period: "Jan 2025 – Aug 2025",
    role: "DevOps Engineer",
    location: "Bhilwara, India",
    current: false,
    skills: ["AWS EC2", "S3", "IAM", "GitHub Actions", "Docker", "Kubernetes", "Nginx", "MySQL", "PostgreSQL"],
    bullets: [
      "Provisioned AWS infrastructure (EC2, S3, IAM) with least-privilege access controls",
      "Configured Nginx + Apache + MySQL/PostgreSQL for apps serving 1,000+ daily active users",
      "Built CI/CD pipelines for Django + Node.js → 30% faster releases",
      "Containerized and orchestrated workloads on Kubernetes → 50% fewer environment bugs",
      "Authored infrastructure runbooks → cut new team member onboarding time by 20%"
    ]
  }
];

export const projects = [
  {
    title: "Office & Books Multi-Product Deployment",
    tags: ["GitHub Actions", "AWS S3", "CloudFront", "ECS Fargate", "ECR", "RDS", "EFS"],
    metrics: [
      { text: "Sub-2-minute", label: "deployments", isImprovement: true },
      { text: "99.95%", label: "availability", isImprovement: true },
      { text: "45%", label: "faster builds", isImprovement: true }
    ],
    highlights: [
      "Sub-2-minute frontend deployment via S3 + CloudFront pipeline",
      "99.95% CDN availability achieved",
      "45% reduction in Docker image build + push time",
      "Zero-downtime deployments across 3+ product lines",
      "40% fewer release-related errors"
    ],
    pipeline: ["Code Push", "GitHub Actions", "ECR", "ECS Fargate", "RDS/EFS"]
  },
  {
    title: "Website Management on AWS Lightsail",
    tags: ["AWS Lightsail", "Git", "GitHub Actions", "Node.js"],
    metrics: [
      { text: "99.9%", label: "uptime", isImprovement: true },
      { text: "20%", label: "cost reduction", isImprovement: true }
    ],
    highlights: [
      "99.9% uptime across 4 production instances",
      "Full rollback capability on every release",
      "20% cost reduction via right-sizing",
      "Consistent releases with Git + GitHub Actions workflows"
    ],
    pipeline: []
  },
  {
    title: "Scalable CI/CD Pipeline (Jenkins + AWS EKS)",
    tags: ["Jenkins", "Docker", "Kubernetes", "AWS EKS", "AWS Secrets Manager"],
    metrics: [
      { text: "99%+", label: "uptime", isImprovement: true },
      { text: "3×", label: "traffic handled", isImprovement: true }
    ],
    highlights: [
      "Full end-to-end DevOps pipeline for multi-tier full-stack app",
      "99%+ uptime with EKS auto-scaling node groups",
      "Handled 3× traffic spikes without degradation",
      "Hardcoded credentials eliminated via Secrets Manager injection"
    ],
    pipeline: ["Jenkins", "Docker Build", "Private Registry", "EKS", "Live"]
  }
];
