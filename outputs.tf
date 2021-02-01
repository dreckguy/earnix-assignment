output "lambda_url" {
  value = aws_api_gateway_deployment.example.invoke_url
}

output "docker_url" {
    value = aws_alb.application_load_balancer.dns_name
}