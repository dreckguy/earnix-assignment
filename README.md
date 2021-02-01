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
1. exercise 1 url - for the first exercise // should serve the current time
2. exercise 2 url - for the second exercise //should serve the text "I am a Response for Earnix Devops Team!"

## known issues
1. From my windows workstation ecr login is failing. If it's hapenning and exercise 2 url show an error the user should login and push the newly created docker image manually. These step should fix the service.
2. both urls should be based on the main api gateway endpoint and route to the docker url should be based upon {proxy}.
In the time span I didn't defined an integration between the main api and exercise 2 lb.

## Clean resources
1. run 'terraform destroy' and aprove with 'yes'

## some security thoughts:
1. For securing the response over the network we should work over https protocol which will make the data we send encrypted.
We should add at least basic authentication based on username and password of the group reaching out for the service in order to know we send the data to the ones we want.
We should prevent requests from unwanted destinations with firewalls that will define expected ips and ports
We should prevent unexpected behaviour with deniel of service from destinations that are sending too frequent requests.

2. If the api is consumed by machines we should watch out from frequent repepative requests that we don't expect.
We could based our authentication on long and complex tokens since they less prone to forget those.
We could define more easilly ips and dns for the firewall since they can be allocated dynamically. 


