output "web_server_public_ip" {
  description = "Public IP of the web server"
  value       = aws_instance.web_server.public_ip
}

output "jenkins_server_public_ip" {
  description = "Public IP of Jenkins"
  value       = aws_instance.jenkins_server.public_ip
}

output "eks_cluster_name" {
  description = "EKS Cluster Name"
  value       = aws_eks_cluster.cosmetics_eks.name
}