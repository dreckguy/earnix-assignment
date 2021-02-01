# Earnix devops assignment
## Prerequisites
1. aws cli installed and configured
2. terraform installed
3. docker installed
## Installation
1. clone repository
3. cd into it
4. run 'terraform apply' and aprove with 'yes'
## See if it works
2 public urls will be printed to screen as terraform outputs:
1. lambda url - for the first exercise // should print the current time
2. docker url - for the second exercise //should print the text "I am a Response for Earnix Devops Team!"

## known issues
1. from my windows workstation ecr login is failing and the created image should be pushed manually (through aws ecr console instructions)
2. both urls should be based on the main api gateway endpoint and route to the docker url should be based upon {proxy}




## Clean resources
1. run 'terraform destroy' and aprove with 'yes'
