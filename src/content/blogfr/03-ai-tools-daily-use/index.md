---
title: "Ce que j'utilise réellement avec l'IA"
summary: "Comment j'utilise l'IA chaque jour : un agent hébergé chez moi qui maintient mon site, m'aide dans ma recherche d'emploi et prend les ordres à la voix — sur un CPU de 2014 et un GPU de 4 Go."
date: "2026-07-21"
draft: false
tags:
  - IA
  - Outils
  - Infrastructure
  - Productivité
---

J'ai commencé à utiliser les outils d'IA quand ils étaient encore mauvais sur ce dont j'avais besoin. Pendant mon projet d'airdrop farming, ChatGPT savait m'aider à écrire du code, mais il fallait beaucoup d'allers-retours. Ça m'a appris à tester les outils par moi-même et à ignorer le battage médiatique.

## Mon installation

Aujourd'hui, une grande partie de mon travail avec l'IA ne se passe pas dans une fenêtre de chat. Je fais tourner [Hermes Agent](https://hermes-agent.nousresearch.com) sur un backend que j'héberge chez moi. Il utilise deux types de modèles :

- **Un petit modèle local.** Je fais tourner Qwen 3.5 sur ma propre machine, via Ollama. Ce modèle traite les tâches courantes — et il tourne entièrement sur mon GPU, sur un hardware qui a plus de dix ans. Pour le garder rapide, j'ai nettoyé le système d'exploitation de tout ce qui n'était pas indispensable.
- **Des modèles via OpenRouter.** Quand une tâche est plus difficile, l'agent appelle un modèle plus fort. Je peux choisir le meilleur modèle pour chaque job, donc je ne dépends d'un seul fournisseur.

L'agent peut aussi utiliser des outils externes via MCP, un standard pour connecter une IA à d'autres services. J'utilise MCP avec GitHub : l'agent modifie le code de mon site, et Cloudflare publie la mise à jour. Et je n'ai pas besoin d'être assis devant mon ordinateur pour donner des ordres. J'envoie un message vocal depuis mon téléphone, et l'agent fait le travail.

## Sous le capot : une machine de 2014 pour du travail de 2026

La machine derrière cette installation n'est pas une station de travail. C'est un desktop construit autour d'un Intel i7-4790 de 2014, 16 Go de RAM et un NVIDIA GTX 970 avec 4 Go de VRAM. Rien sur la fiche technique ne devrait permettre d'y faire tourner un agent IA.

La contrainte qui façonne tout, ce sont ces 4 Go de VRAM. Un gros modèle n'y tient pas, et un modèle qui déborde dans la RAM système devient douloureusement lent — je l'ai testé, et j'ai supprimé le modèle qui débordait. Donc le côté local fait tourner un petit modèle quantifié à la place, et l'objectif de conception n'est pas « faire tourner un gros modèle localement » mais « garder le travail courant gratuit et local, et router le travail difficile vers mieux ».

Voici le modèle local chargé dans Ollama — 1,7 Go, 100 % sur GPU, dans un contexte de 8k tokens :

![Ollama affichant le modèle Qwen 3.5 2B quantifié, chargé entièrement sur le GPU](/blog/hermes-infra/ollama-ps.png)

Et le même GPU quelques minutes plus tard, avec le serveur de modèles de l'agent qui occupe un peu plus de 3 Go des 4 disponibles :

![Sortie de nvidia-smi montrant le GTX 970 à 3,1 Go de 4 Go de VRAM utilisés par le serveur de modèles local](/blog/hermes-infra/nvidia-smi.png)

Deux autres briques tournent sur la même machine :

- **La transcription vocale.** Les messages vocaux que j'envoie depuis mon téléphone sont transcrits localement avec Whisper, sur le CPU, avec un petit modèle réglé pour le français. Rien ne sort de la machine pour une simple demande du type « mets à jour mon site ».
- **L'accès à distance.** Le tableau de bord de l'agent n'est accessible que depuis mes propres appareils, via un réseau maillé privé. Depuis le canapé, le téléphone et le desktop sont sur le même réseau tant que l'agent est concerné.

La chaîne de repli compte autant que les modèles : si un appel cloud échoue, l'agent retombe sur le modèle local au lieu de faire échouer la tâche. Gratuit et disponible pour les 80 % ennuyeux, qualité frontière sur demande pour les 20 % restants. C'est toute l'architecture, et elle tient dans un boîtier que j'avais déjà.

## Ce qu'il fait pour moi

- **Il maintient ce site.** L'agent met à jour le site que vous êtes en train de lire via GitHub et Cloudflare, et corrige les problèmes de déploiement. Cette page est elle-même maintenue comme ça.
- **Il m'aide dans ma recherche d'emploi.** Chaque matin, il ouvre mon navigateur avec des candidatures déjà pré-remplies pour des postes qui collent à mon profil. Ça m'épargne la saisie. Je les lis toujours une par une et j'envoie moi-même.
- **Il m'a aidé à sauver mes vieilles mixtapes.** J'avais environ 50 heures de mixtapes de collectionneur sur un vieux disque dur. Avec l'IA, je les ai transformées en vidéos, en utilisant chaque pochette comme image. Puis je les ai mises en ligne sur YouTube, avec la tracklist dans chaque description. C'est un petit projet, mais il montre ce que j'aime par-dessus tout : un long travail ennuyeux qu'on peut découper en étapes claires et confier à un agent.

Dans tout ça, je laisse l'agent faire le travail répétitif, et je garde les décisions.

## Là où je reste prudent

Il y a encore beaucoup de battage autour de l'IA. Une bonne démo n'est pas le même chose qu'un outil utilisable tous les jours, et je ne crois pas grand-chose de ce que je vois sur l'IA dans les réseaux sociaux. Au travail, je réfléchirais sérieusement au RGPD avant d'envoyer des données réelles dans un outil. Et je ne fais pas aveuglément confiance aux agents. Tout ce qui quitte ma machine, comme un formulaire soumis, passe d'abord par moi.

## Où je veux aller ensuite

Je ne vois pas de limite à ce qui peut être automatisé. Les vraies limites sont la clarté avec laquelle on sait décrire un process, et la qualité de la supervision de l'agent qui l'exécute.

Mon prochain objectif est de connecter l'IA à des objets physiques, avec un Arduino comme interface. L'agent enverrait des instructions, et Arduino les transformerait en actions réelles. Je n'ai pas un appareil précis en tête. La logique est la même que pour le logiciel : si on peut décrire une tâche comme un ensemble clair d'étapes et de règles, un agent peut la faire. Je veux appliquer ça aux objets du monde réel, pour qu'ils puissent être pilotés automatiquement.

Beaucoup de gens utilisent aujourd'hui les mêmes outils d'IA, donc utiliser l'IA devient rapidement la norme. Ce qui fera la différence, c'est de l'utiliser bien : choisir le bon modèle pour chaque tâche, donner des instructions claires, connecter les bons outils, et savoir quand un humain doit garder la main.
