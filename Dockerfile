# Utiliser l'image officielle node
FROM node:23

# Définir le dossier de travail dans le conteneur
WORKDIR /app

# Copier les fichiers nécessaires pour installer les dépendances
COPY package.json package-lock.json* ./

# Installer les dépendances
RUN npm install

# Copier tout le reste (dans le cas d'un développement local, ce sera monté via un volume)
COPY . .

# Exposer le port de Nuxt en dev
EXPOSE 8080

# Commande de démarrage
CMD ["npm", "run", "dev"]