output "exercise_1_url" {
  value = aws_api_gateway_deployment.example.invoke_url
}

output "exercise_2_url" {
    value = aws_alb.application_load_balancer.dns_name
}