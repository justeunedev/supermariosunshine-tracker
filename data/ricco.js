window.blueCoinsData = window.blueCoinsData || [];

const riccoCoins = {
    zoneName: "Port Ricco",
    folder: "ricco",
    mapImage: "map.jpg",
    mapText: "Meilleur épisode pour les pièces bleues : 8<br>Pièces 1, 2 et 4 disponible uniquement dans l'épisode 1<br>Pièce 6 disponible uniquement dans l'épisode 2<br>Meilleur épisode pour les 100 pièces : 2 ou 6",
    coins: [
        {
            id: "ricco-01",
            episode: "Episode 1",
            description: "Effacer le M au sol du vaisseau sous Goop, juste devant le point de départ."
        },
        {
            id: "ricco-02",
            episode: "Episode 1",
            description: "Effacer le M au sol près de l'emplacement de la tour Ricco."
        },
        {
            id: "ricco-03",
            episode: "N'importe quel épisode",
            description: "Effacer le M sur le côté gauche de la coque du navire"
        },
        {
            id: "ricco-04",
            episode: "Episode 1",
            description: "sortir le sous-marin jaune de l'eau en arrosant l'hélice situé au-dessus"
        },

        {
            id: "ricco-05",
            episode: "N'importe quel épisode",
            description: "Flottant au-dessus de l'eau, au bord du port, cette pièce bleue peut être obtenue en sautant à bord d'un Surf Bloops ou avec une Turbobuse , ou en utilisant la Catabuse"
        },
        {
            id: "ricco-06",
            episode: "Episode 2",
            description: "Flottant légèrement au-dessus de l'eau, suer la route route vers le parcours de surf secret."
        },
        {
            id: "ricco-07",
            episode: "N'importe quel épisode",
            description: "Effacer le M sur le toit d'un entrepôt situé derrière le point de départ."
        },
        {
            id: "ricco-08",
            episode: "N'importe quel épisode",
            description: "Effacer le M sur le mur de l'entrepôt"
        },
        {
            id: "ricco-09",
            episode: "Episode 3 à 8",
            description: "Vaincre l'araignée situé sur la paroi du navire, devant le point de départ"
        },
        {
            id: "ricco-10",
            episode: "Episode 3 à 8",
            description: "Vaincre l'araignée situé au plafond de la cage dans le vaisseau, devant le point de départ"
        },
        {
            id: "ricco-11",
            episode: "N'importe quel épisode",
            description: "Sur une planche à côté de la tour Ricco."
        },
        {
            id: "ricco-12",
            episode: "N'importe quel épisode",
            description: "Flottant au-dessus d'une fontaine dans le quartier du port."
        },
        {
            id: "ricco-13",
            episode: "Episode 8 avec Yoshi",
            description: "Utilisez Yoshi pour manger un essaim de papillons bleus au quartier du port"
        },
        {
            id: "ricco-14",
            episode: "N'importe quel épisode",
            description: "Effacer le M sur la façade d'une maison verte en centre-ville"
        },
        {
            id: "ricco-15",
            episode: "N'importe quel épisode",
            description: "Sur une plateforme sans issue de la passerelle située au-dessus du quartier."
        },
        {
            id: "ricco-16",
            episode: "N'importe quel épisode",
            description: "Sur une plateforme sans issue de la partie de la passerelle située à droite du navire au point de départ."
        },
        {
            id: "ricco-17",
            episode: "Episode 3 à 8 (Yoshi recommandé)",
            description: "Éliminez une araignée isolé situé sur le mur près de la Tour Ricco. Vous pouvez le faire en la mangeant avec Yoshi, ou en l'aspergeant d'eau et en glissant le long du mur à sur elle lorsqu'elle est immobilisé."
        },
        {
            id: "ricco-18",
            episode: "N'importe quel épisode",
            description: "Effacer le M sur le toit d'une maison en ville"
        },
        {
            id: "ricco-19",
            episode: "N'importe quel épisode",
            description: "Caché dans une caisse à gauche de la tour Ricco."
        },

        {
            id: "ricco-20",
            episode: "N'importe quel épisode",
            description: "Cachée sous l'eau, sous une plateforme rouge au-dessus de l'eau."
        },
        {
            id: "ricco-21",
            episode: "N'importe quel épisode",
            description: "Effacer le graffiti X correspondant sur la tour Ricco. La pièce apparaît devant une maison du centre-ville."
        },
        {
            id: "ricco-22",
            episode: "N'importe quel épisode",
            description: "Effacer le graffiti X correspondant devant la maison du quartier. La pièce apparaît devant la tour Ricco."
        },
        {
            id: "ricco-23",
            episode: "N'importe quel épisode",
            description: "Effacer un marquage bleu caché sur le mur à côté de la tour Ricco"
        },
        {
            id: "ricco-24",
            episode: "Episode 4 à 8",
            description: "Vaincre le bloops isolé à l'intérieur de la grande cage jaune"
        },
        {
            id: "ricco-25",
            episode: "N'importe quel épisode",
            description: "Sur un mur situé au bord de la partie basse de la plateforme"
        },
        {
            id: "ricco-26",
            episode: "Episode 3 à 8 avec la Catabuse",
            description: "Flottant au-dessus du sommet de la tour Ricco."
        },
        {
            id: "ricco-27",
            episode: "N'importe quel épisode",
            description: "Effacer le M sur le mur d'une corniche située de l'autre côté des plateformes bleues. Ces dernières sont celles qu'il faut traverser lors de la mission principale de l'épisode 8."
        },
        {
            id: "ricco-28",
            episode: "N'importe quel épisode",
            description: "Effacer le M sur une plateforme bleue flottant au-dessus de l'eau"
        },
        {
            id: "ricco-29",
            episode: "Episode 6 à 8",
            description: "Envoyer de l'eau/du nectar de Yoshi entre deux paniers de poissons dans la zone quartier"
        },
        {
            id: "ricco-30",
            episode: "N'importe quel épisode",
            description: "Au sommet d'une grue en mouvement, à droite du navire."
        },
    ]
};

window.blueCoinsData.push(riccoCoins);