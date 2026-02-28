# Terraform AWS Provider
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
  required_version = ">= 1.3.0"
}

provider "aws" {
  region = var.aws_region
}

# EC2 Instance
resource "aws_instance" "web_server" {
  ami           = "ami-0c94855ba95c71c99" # Example Ubuntu AMI
  instance_type = var.ec2_instance_type
  tags = {
    Name = "cosmetics-web-server"
  }
}

# Jenkins Server (EC2)
resource "aws_instance" "jenkins_server" {
  ami           = "ami-0c94855ba95c71c99"
  instance_type = var.jenkins_instance_type
  tags = {
    Name = "jenkins-server"
  }
}

# EKS Cluster
resource "aws_eks_cluster" "cosmetics_eks" {
  name     = "cosmetics-eks-cluster"
  role_arn = "arn:aws:iam::123456789012:role/eks-cluster-role" # placeholder
  version  = "1.27"

  vpc_config {
    subnet_ids = ["subnet-xxxxxx", "subnet-yyyyyy"] # placeholders
  }
}