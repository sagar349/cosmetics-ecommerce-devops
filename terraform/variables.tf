variable "aws_region" {
  description = "AWS region to deploy resources"
  type        = string
  default     = "us-east-1"
}

variable "ec2_instance_type" {
  description = "EC2 instance type for web server"
  type        = string
  default     = "t3.micro"
}

variable "jenkins_instance_type" {
  description = "EC2 instance type for Jenkins server"
  type        = string
  default     = "t3.medium"
}