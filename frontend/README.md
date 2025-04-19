## VueShop Projet

Petit projet e-commerce réalisé avec "Vue 3", "TypeScript", "Pinia", "Vue Router", "Bulma" et "Vite".

#  Objectif

Créer une interface simple de boutique en ligne permettant :

-  Navigation entre plusieurs pages
-  Ajout de produits au panier
-  Modification des quantités
-  Suppression d’un article
-  Authentification simple (login/déconnexion)
-  Validation d’une commande


# Technologies utilisées

- Vue 3 (Composition API)
- TypeScript
- Vue Router
- Pinia (state management)
- pinia-plugin-persistedstate (sauvegarde du panier)
- Bulma (framework CSS)
- Vite (environnement de développement rapide)

# Fonctionnalités principales

# Accueil (`/`)

- Affiche une liste de produits fictifs.
- Possibilité d’ajouter un article au panier.

#  Panier (`/cart`)

- Affichage dynamique des produits ajoutés.
- Modification des quantités.
- Calcul automatique du total.
- Possibilité de valider la commande (avec redirection).

#  Connexion (`/login`)

- Connexion simple avec identifiants :  
  - Utilisateur : `admin`
  - Mot de passe : `1234`
- Affichage conditionnel du contenu (header, bouton de déconnexion, etc).

#  Confirmation (`/success`)
- Page de succès après validation de la commande.

#  Persistance du panier
- Utilisation du plugin `pinia-plugin-persistedstate` pour que le panier reste enregistré meme apres actualisation de la page web ou changement de page ,il sauvegarde juste le panier dans le navigateur via localStorage. Ça permet de ne pas perdre les articles en cours.
- Les données sont stockées dans le `localStorage` de l'utilisateur, ce qui permet une expérience plus réaliste, proche d'un vrai site.

#  Pages disponibles

- `/` : Page d’accueil
- `/login` : Connexion
- `/cart` :  Panier
- `/success`: Validation
- `*`  : Page 404


# Lancer le projet

```bash
npm install
npm run dev
