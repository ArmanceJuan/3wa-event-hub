# Event-hub

<div align="center">

![Node.js](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?style=for-the-badge&logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)

</div>

## 📝 Table des matières

- [📝 Table des matières](#-table-des-matières)
- [Description](#description)
- [Structure du projet](#structure-du-projet)
- [📦 Installation](#-installation)
- [🚀 Démarrage](#-démarrage)
- [🔧 Commits Conventionnels](#commits-conventionnels)
  - [Règles](#règles)
  - [Exemples](#exemples)
- [Technologies](#technologies)

## Description

Ce projet est une application web qui permet aux utilisateurs de gérer leurs événements. Elle est conçue pour être facile à utiliser et à maintenir.

### Fonctionnalités principales

Inscription et connexion pour les différents types d'utilisateurs (participants et organisateurs)
Création et gestion d’événements avec suivi des ventes pour les organisateurs
Réservation et génération de billets électroniques pour les participants
Administration des utilisateurs et des contenus

## Structure du projet

```bash
3wa-event-hub
.
├── backend-event-hub
├── frontend-event-hub
└── README.md
```

## 📦 Installation

```bash
# Clone the repository
git clone git@github.com:ArmanceJuan/3wa-event-hub.git

# Go to the backend-event-hub directory
cd backend-event-hub

# Install dependencies
npm install

# Go to the frontend-event-hub directory
cd ../frontend-event-hub

# Install dependencies
npm install
```

## 🚀 Démarrage

### Backend

Pour démarrer le backend, exécutez la commande suivante :

```bash
npm run dev
```

### Frontend

Pour démarrer le frontend, exécutez la commande suivante :

```bash
npm run dev
```

## 🔧 Commits Conventionnels

Ce projet utilise la spécification Conventional Commits pour maintenir un historique de commits propre et lisible.

### Règles

- Les commits doivent être faits en anglais.
- Les commits doivent être simples et courts.
- Les commits doivent démarrer par la majuscule selon la partie impacté par les changement effectué :
  - Si les changements sont uniquement dans le back-end, il faut utiliser la majuscule B-.
  - Si les changements sont uniquement dans le front-end, il faut utiliser la majuscule F-.
  - Si les changements sont dans le back-end et dans le front-end et ne sont pas divisible en 2 commits distinct, il faut utiliser la majuscule A- (pour all).
- Les commits doivent être écrits àl'impératif.
- Les commits doivent être structurés en fonction des types de changements suivi de ":" :
  - **feat**: Nouvelle fonctionnalité
  - **fix**: Correction de bug
  - **chore**: Changements aux outils de build ou dépendances
  - **wip**: Travail en cours
  - **style**: Changements qui n'affectent pas le sens du code (espaces, formatage, etc.)
  - **install**: Changements de dépendances ou mise à jour de la configuration de l'outil de build
  - **docs**: Documentation

### Exemples

```bash
git commit -m "B-feat: add login functionality route"
git commit -m "F-fix: resolve user data fetching issue"
git commit -m "A-chore: add delete button for users table"
git commit -m "F-wip: change tree view permission structure for more logical auto-completion"
git commit -m "F-style: change dark mode color scheme"
git commit -m "A-docs: add contributing guidelines"
```

## 📝 Technologies

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)

<div>
</br>
</br>
</br>
<div align="right">
<a href="#top">🔝 Retour en haut de page</a>
</div>
</br>
<p align="right">Réalisé par ArmanceJuan</p>
</div>
