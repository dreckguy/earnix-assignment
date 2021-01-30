resource "aws_ecs_cluster" "foo" {
  name = "white-hart"
  capacity_providers = ["FARGATE"]
}