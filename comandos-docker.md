# Comandos Docker e Docker Compose

## Docker
> Comandos docker em geral

```
docker ps
```
Lista todos os containers que estão rodando

```
docker ps -a
```
Lista todos os containers

```
docker rm {{id do container}}
```
Remove um container

```
docker start {{id do container}}
```
Inicia um container

```
docker stop {{id do container}}
```
Para o container

```
docker logs {{nome do container}}
```
Lista os logs do container

```
docker logs {{nome do container}} -f
```
Lista os logs do container e fica observando, listando em tempo real

```
docker exec -t {{id do container ou nome do container}}
```
Acessa a "Máquina" onde está rodando o container


## Docker Compose
> * Comandos para serem usados em projetos que utilizam docker compose
> * Os comandos deve ser executados dentro da pasta do projeto

```
docker-compose up -d
```
**Sobe** um container em background

```
docker-compose stop
```
**Para** um container em execução


```
docker-compose down
```
**Remove** um container