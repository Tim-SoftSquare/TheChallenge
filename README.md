The challenge aka "ClientIp6"

The challenge is a simple microservice comprised of a containerized web server. It’s created to return a 
JSON response with the following structure, when it’s / URL path is accessed:

{
  "timestamp": "<current date and time>",
  "ip": "<the IP address of the visitor>"
}
 
The source code is written using Node.js with Express.js.  The project file structure includes a
Dockerfile that was used to produce the containerized image which is published to, and is publicly
available on, Docker Hub at the following web address:

https://hub.docker.com/r/timbbishop/date-ip

Also located in the project file structure is the Kubernetes manifest deployment.yaml file containing a
deployment and a service that’s utilized for deployment of the microservice on Kubernetes.  

To deploy the Microservice to K8s

Pull the image from docker hub using the following Docker Pull command:
docker pull timbbishop/date-ip
After cloning The Challenge from this GitHub repo, the only command needed to deploy this microservice to
Kubernetes is below:

kubectl apply -f deployment.yml

*Note* Please first ensure that the Docker cli and Kubectl are both installed on your machine. Links for
this installation process are below.

https://docs.docker.com/get-docker/
https://kubernetes.io/docs/tasks/tools/

Resources Sited

https://docs.docker.com/get-started/
https://kubernetes.io/docs/tutorials/   

