## Persistent Data:
Containers are usually immutable (to change, only re-deploy). However, databases are not, and Docker gives features to ensure 'separation of concerns'. Two ways to solve it: Volumes and Bind Mounts that will outlive the executable. Volumes make special location outside of container Union File System. Bind Mounts link container path to host path i.e. maps files from host directory into a directory in the container.

## Commands:
```
docker volume ls
docker volume rm <vol_name1> <vol_name2>
```
