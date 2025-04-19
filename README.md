# Projet e-commerce - Microservices 

Ce projet est une version adaptée d’un site e-commerce, découpé en microservices avec Docker.  
Il contient un **frontend** en Vue.js et un **backend** en Node.js (API de produits).

## Pour lancer le projet 

### 1. Prérequis

- Avoir installé **Docker** et **Docker Compose** (version 2)
- Cloner le projet :

git clone https://github.com/AMINE9200/ecommerce-microservices.git
cd ecommerce-microservices


### 2. Lancer le projet

docker compose up --build


Ensuite ouvre ton navigateur à l’adresse :

👉 http://localhost:8080

> Le front appelle l’API à http://localhost:3000/api/products


## Structure des dossiers


ecommerce-microservices/
├── frontend/               # Vue.js (site client)
├── backend/product-service # API Node.js (produits)
├── docker-compose.yml      # Lance tout automatiquement



## Kubernetes 

Si tu veux essayer sur Kubernetes (Minikube, Docker Desktop...), regardez le dossier `k8s/`.

