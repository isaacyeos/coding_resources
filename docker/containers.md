# Containers: 
A container consists of an entire runtime environment: an application, plus all its dependencies, libraries and other binaries, and configuration files needed to run it, bundled into one package. By containerizing the application platform and its dependencies, differences in OS distributions and underlying infrastructure are abstracted away. Allows the application to run quickly and reliably from one computing environment to another. 

Processes that run inside host OS and are not mini-VMs. Though VMs provide full process isolation, comes at computational overhead cost to virtualize. Containers provide most of isolation of VMs at fraction of computing power. Containers can be listening on same port without conflicts if they are published on different host ports i.e. 80:80 or 8080:80. To make port available to outside services, need to use -p flag.

```
docker container run --publish 8080:80 --detach <specify_name> nginx
docker container run -d --name nginx1 nginx
docker container run -d --name mysql -e MYSQL_RANDOM_ROOT_PASSWORD=true mysql

1. Downloaded image 'nginx' from Docker Hub (if cannot find image locally).
2. Started a new container from that image.
3. Opened port 8080 on host IP (exposing host port).
4. Routes that traffic to container IP, port 80 (exposing container port).
5. Detach is to run server in background, gives unique container ID.

// to access, use curl or through browser with host IP + :8080
```


```
docker run hello-world                    For testing 

docker container run --rm <image>         Run and remove upon exit
docker container start                    Start an existing stopped one

docker container stop 690                 Type in first few digits of UID
docker stop $(docker ps -a -q)            Stop all containers

docker container ls -a
docker container logs <ID_or_name>

docker container rm <ID_or_name>
docker container rm -f <ID_or_name>       Force stop and remove container
docker container rm $(docker ls -a -q)

docker container top <name>                   Display running process of specified container
docker container inspect <name>               Details of one container config
docker container stats                        Performance stats for all containers
docker container update <OPTIONS> <name>      Change resources for given container

// get shell inside containers
docker container run -it --name proxy nginx bash
docker container run -it                     Start new container with interactive shell (with command 'exit' to close)
docker container exec -it <container> sh     Run additional process in existing container
docker container start -ai 
```

## Image vs Container:
- Image is the application to run i.e. Nginx web server.
- Container is an instance of that image running as a process.
- Can have many containers running off the same image.
- Docker's default image 'registry/repository' is called Docker Hub.
- Container is a single read/write layer on top of image.

## Exposing vs Publishing Ports:
- EXPOSE is for documentation purposes in docker build; doesn't actually map or open any ports.
- Publish flag makes container port available to outside world and maps container port to host port.

```
docker container run -p 80:5000 -d nginx
docker container run -p 8000-9000:5000 -d nginx       Binds to randomly available port on host
```

## Linux Distributions for Container Images:
Alpine, Ubuntu.

## Network:
Each container is connected to a private virtual network called 'bridge' (default network driver). Each virtual network routes through NAT firewall on host IP. All containers on a virtual network can talk to each other without -p. Each app with frontend/backend should sit on the same network. Can attach containers to more than one virtual network.

Terminologies:
- Network Driver: Built-in or third-party extensions that give virtual network features.
- Bridge: Network driver that allows containers to communicate with each other running on same docker host.

``` 
docker container run -d -p 80:80 --name webhost --network my_app_net nginx
docker container port webhost
docker container inspect --format '{{ .NetworkSettings.IPAddress }}' webhost
docker container inspect bridge

docker network ls
docket network create --driver
docker network connect/disconnect     Connect an existing container to new network

```
## DNS:
Static IP's for talking to containers is an anti-pattern and avoid it. Use DNS naming (host name). Docker daemon has built-in DNS server that containers use by default.

