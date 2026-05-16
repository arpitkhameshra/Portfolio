export const personalInfo = {
  name: "Arpit Khameshra",
  role: "DevOps Engineer",
  tagline: "Cloud Infrastructure | CI/CD | IaC",
  taglines: [
    "DevOps Engineer",
    "Cloud Infrastructure",
    "CI/CD Pipelines",
    "Infrastructure as Code",
    "Kubernetes & Docker",
  ],
  oneLiner: "Building scalable cloud infrastructure — 40% faster deployments, 25% reduced latency.",
  email: "arpitkhameshara164@gmail.com",
  phone: "+91-9785863017",
  linkedin: "https://linkedin.com/in/arpit-khameshra",
  github: "https://github.com/arpitkhameshra",
  location: "Rajasthan, India",
  stats: [
    { label: "yr exp", value: 1.5, prefix: "", suffix: "+" },
    { label: "faster deploys", value: 40, prefix: "", suffix: "%" },
    { label: "less latency", value: 25, prefix: "", suffix: "%" },
  ],
};

export const professionalSummary =
  "DevOps Engineer with 1.5 years of experience in building scalable cloud infrastructure, implementing CI/CD pipelines, and automating deployments using AWS, Kubernetes, Docker, and Terraform. Skilled in monitoring, logging, and optimizing costs while ensuring high system availability and security compliance. Adept at cross-team collaboration to drive continuous improvement and innovation.";

export const aboutParagraphs = [
  "DevOps Engineer with 1.5 years of experience in building scalable cloud infrastructure, implementing CI/CD pipelines, and automating deployments using AWS, Kubernetes, Docker, and Terraform.",
  "Skilled in monitoring, logging, and optimizing costs while ensuring high system availability and security compliance. Adept at cross-team collaboration to drive continuous improvement and innovation.",
  "Currently at Webledger Solution Pvt. Ltd. (Surat), I design highly available infrastructure using AWS ECS, EKS, ELB, and RDS — and enhance monitoring with CloudWatch and automated SNS alerting for real-time insights.",
  "I hold a B.Tech in Electrical Engineering from Arya College of Engineering and IT, Rajasthan Technical University — and I bring an engineer's problem-solving mindset to every infrastructure challenge.",
];

export const heroTerminalCommands = [
  "$ kubectl get pods --all-namespaces",
  "$ terraform apply --auto-approve",
  "$ docker build -t app:latest .",
  "$ gh workflow run deploy.yml",
  "$ aws ecs update-service --force-new-deployment",
];

export const cloudPlatforms = [
  "EC2", "ECS", "EKS", "RDS", "S3", "VPC", "Route 53", "Lambda", "CloudFront",
  "ELB", "IAM", "EventBridge", "Lightsail", "Compute Engine", "Cloud SQL",
];

export const skills = [
  {
    category: "Cloud & Infrastructure",
    icon: "☁️",
    color: "orange",
    items: [
      "AWS — EC2, ECS, RDS, S3, VPC, Route 53, Lambda, CloudFront, ELB, IAM, EventBridge, Lightsail",
      "GCP — Compute Engine, Cloud SQL, Load Balancing, Networking",
    ],
  },
  {
    category: "Containers & Orchestration",
    icon: "🐳",
    color: "cyan",
    items: [
      "Docker",
      "Kubernetes (EKS)",
    ],
  },
  {
    category: "CI/CD & Infrastructure as Code",
    icon: "🔄",
    color: "green",
    items: [
      "GitHub Actions",
      "Jenkins",
      "Git",
      "Terraform",
    ],
  },
  {
    category: "Monitoring & Observability",
    icon: "📊",
    color: "yellow",
    items: [
      "Prometheus",
      "Grafana",
      "AWS CloudWatch",
      "OpenTelemetry",
      "SigNoz",
      "Site24x7",
    ],
  },
  {
    category: "Scripting, OS & Databases",
    icon: "🖥️",
    color: "red",
    items: [
      "Bash",
      "Shell Scripting",
      "Linux (Ubuntu, RHEL)",
      "Nginx",
      "MySQL",
      "PostgreSQL",
      "Redis",
    ],
  },
];

export const experiences = [
  {
    company: "Webledger Solution Pvt. Ltd.",
    period: "Sept 2025 – Present",
    role: "DevOps Engineer",
    location: "Surat, India",
    current: true,
    tenurePercent: 100,
    skills: [
      "AWS ECS",
      "EKS",
      "ELB",
      "RDS",
      "GitHub Actions",
      "Docker",
      "CloudFront",
      "Route 53",
      "ECR",
      "Kubernetes",
      "Terraform",
      "Ansible",
      "CloudWatch",
      "SNS",
    ],
    bullets: [
      "Designed and implemented highly available infrastructure using AWS ECS, EKS, ELB, and RDS for large-scale applications.",
      "Built and optimized CI/CD pipelines with GitHub Actions reducing deployment time by **40%**.",
      "Integrated AWS CloudFront and Route53 to improve application availability and reduce latency by **25%**.",
      "Managed containerized applications using Docker, AWS ECR, and Kubernetes with enhanced security policies.",
      "Automated provisioning and configuration management using Terraform and Ansible.",
      "Enhanced monitoring with AWS CloudWatch and automated alerts via SNS for real-time insights.",
      "Documented architecture and deployment processes for knowledge sharing and reuse.",
    ],
    stats: [
      { value: "40%", label: "faster deployments" },
      { value: "25%", label: "latency reduction" },
      { value: "24/7", label: "real-time monitoring" },
    ],
  },
  {
    company: "Tetari Innovations",
    period: "Jan 2025 – Aug 2025",
    role: "Associate DevOps Engineer",
    location: "Bhilwara, India",
    current: false,
    tenurePercent: 75,
    skills: [
      "AWS S3",
      "EC2",
      "RDS",
      "Docker",
      "Linux",
      "GitHub Actions",
    ],
    bullets: [
      "Assisted in configuring AWS services like S3, EC2, and RDS for development environments.",
      "Deployed and managed Node.js applications in Docker containers.",
      "Automated server maintenance tasks with Linux shell scripting.",
      "Contributed to building CI/CD pipelines using GitHub Actions, accelerating developer workflows by **20%**.",
      "Documented infrastructure processes and supported troubleshooting of AWS and Docker issues.",
    ],
    stats: [
      { value: "20%", label: "workflow acceleration" },
      { value: "3+", label: "environments configured" },
      { value: "100%", label: "automated maintenance" },
    ],
  },
];

export const projects = [
  {
    title: "Office, Books and CRM Products",
    tags: [
      "GitHub Actions",
      "AWS S3",
      "CloudFront",
      "ECS",
      "Docker",
      "EKS",
      "RDS",
      "EFS",
      "Jenkins",
    ],
    metrics: [
      { text: "40%", label: "fewer release errors", isImprovement: true },
      { text: "Full-stack", label: "automated deployment", isImprovement: true },
      { text: "Multi-product", label: "standardized pipelines", isImprovement: true },
    ],
    highlights: [
      "Automated frontend and backend deployment with GitHub Actions, AWS S3, CloudFront, and ECS.",
      "Configured backend deployments on AWS ECS with automated Docker builds.",
      "Standardized deployment pipelines across multiple products, reducing release errors by 40%.",
      "Deployed Kubernetes workloads with Amazon EKS, RDS for databases, EFS for shared storage and Jenkins CI/CD for automation.",
    ],
    pipeline: [
      "Code Push",
      "GitHub Actions",
      "Docker Build",
      "ECS / EKS",
      "S3/CloudFront",
    ],
  },
];

export const education = {
  degree: "B.Tech – Electrical Engineering",
  college: "Arya College of Engineering and IT",
  university: "Rajasthan Technical University, Kota",
  graduation: "June 2017",
  gpa: "6.9 / 10",
};
