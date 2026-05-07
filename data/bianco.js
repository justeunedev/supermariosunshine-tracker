window.blueCoinsData = window.blueCoinsData || [];

const biancoCoins = {
    zoneName: "Colline Bianco",
    folder: "bianco",
    mapImage: "map.jpg",
    mapText: "Meilleur épisode pour les pièces bleues : 8<br>Meilleur épisode pour les 100 pièces : 8 avec Yoshi",
    coins: [
        {
            id: "bianco-01",
            episode: "N'importe quel épisode",
            description: "Sous l'eau de la rivière"
        },
        {
            id: "bianco-02",
            episode: "N'importe quel épisode",
            description: "Nettoyer le graffiti M sur le mur bordant la rivière."
        },
        {
            id: "bianco-03",
            episode: "N'importe quel épisode",
            description: "Nettoyer le graffiti M sur la maison d'une dame Pianta."
        },
        {
            id: "bianco-04",
            episode: "N'importe quel épisode",
            description: "À l'intérieur d'une tour au dessus la maison de la dame Pianta."
        },
        {
            id: "bianco-05",
            episode: "N'importe quel épisode",
            description: "Sur un balcon d'une maison au bord de la rivière. Apparaît après avoir tiré sur de l'eau. Se trouve dans le balcon de gauche dans les épisodes 1, 3, 4 et 5, et dans le balcon de droite dans les épisodes 2, 6, 7 et 8"
        },
        {
            id: "bianco-06",
            episode: "N'importe quel épisode",
            description: "Nettoyer le graffiti M au-dessus d'un mur près de la roue à eau"
        },
        {
            id: "bianco-07",
            episode: "N'importe quel épisode",
            description: "Sur une plateforme munie d'une voile, au sud de la roue à eau."
        },
        {
            id: "bianco-08",
            episode: "N'importe quel épisode",
            description: "Nettoyer le graffiti X dans une fosse près de la roue à eau. La pièce bleue apparaît à côté du graffiti X correspondant"
        },
        {
            id: "bianco-09",
            episode: "N'importe quel épisode",
            description: "Nettoyer le graffiti X sur le mur de l'autre côté de la roue à eau. La pièce bleue apparaît à côté de l'emplacement du premier graffiti X"
        },
        {
            id: "bianco-10",
            episode: "N'importe quel épisode",
            description: "Envoyer de l'eau sur une mini-éolienne"
        },
        {
            id: "bianco-11",
            episode: "N'importe quel épisode",
            description: "Sous l'eau, à droite du moulin à vent."
        },
        {
            id: "bianco-12",
            episode: "N'importe quel épisode",
            description: "Nettoyer le M sur le chemin menant au moulin à vent"
        },
        {
            id: "bianco-13",
            episode: "N'importe quel épisode",
            description: "Envoyer de l'eau sur une plateforme située près du sommet de l'éolienne"
        },
        {
            id: "bianco-14",
            episode: "Episode 3 à 8",
            description: "Obtenu en nettoyant un touriste Pianta du village. Voici son emplacement dans chaque épisode:<br>Épisode 3 : Au pied du grand moulin à vent<br>Épisode 4 : Sur un rebord près de l'entrée de la grotte de Hillside<br>Épisode 5 : Dans la partie séparée de la grande zone des moulins à vent (séparée par la rivière)<br>Épisode 6 : Sur la falaise près de l’endroit où se trouvait Flora dans l’épisode 5.<br>Épisode 7 : Au sommet du grand moulin à vent, là où se trouvait Flora dans l’épisode 2<br>Épisode 8 : Dans la fosse où la pièce bleue n°8 a été trouvée"
        },
        {
            id: "bianco-15",
            episode: "Episode 3 à 8",
            description: "Vaincre un Pokey au sommet du moulin à vent."
        },
        {
            id: "bianco-16",
            episode: "Episode 6 à 8",
            description: "Flottant haut dans les airs au-dessus de la ville, accessible grâce au pianta lanceur rouge vif portant des lunettes."
        },
        {
            id: "bianco-17",
            episode: "Episode 4 à 8",
            description: "Sur la grille sous le pont."
        },
        {
            id: "bianco-18",
            episode: "Episode 4 à 8",
            description: "Vaincre un Pokey sur une plateforme près du bord du lac."
        },
        {
            id: "bianco-19",
            episode: "Episode 3 à 8",
            description: "Sur un rebord élevé de la ville, accessible uniquement grâce à la Catabuse ou en planant depuis une maison Pianta."
        },
        {
            id: "bianco-20",
            episode: "Episode 5 à 8",
            description: "Laver une Pianta sur un rebord dans le village."
        },
        {
            id: "bianco-21",
            episode: "Episode 5 à 8",
            description: "Sur une falaise près de laquelle Flora vole."
        },
        {
            id: "bianco-22",
            episode: "Episode 6 à 8",
            description: "On l'obtient en envoyant de l'eau sur la plateforme où dort Flora dans l'épisode 5. Cette plateforme n'est accessible qu'en utilisant plusieurs nuages ​​pour franchir le fossé."
        },
        {
            id: "bianco-23",
            episode: "Episode 3 à 8",
            description: "Sur le plus haut petit moulin à vent à l'extérieur de la ville"
        },
        {
            id: "bianco-24",
            episode: "Episode 7 et 8",
            description: "Sous l'eau dans le lac."
        },
        {
            id: "bianco-25",
            episode: "Episode 7 et 8",
            description: "Effacer le graffiti O d'une maison Pianta du village. La pièce bleue apparaît à côté d'un graffiti O identique."
        },
        {
            id: "bianco-26",
            episode: "Episode 7 et 8",
            description: "Effacer le graffiti O sur un bâtiment du village. La pièce bleue apparaît à côté de l'emplacement du premier graffiti O."
        },
        {
            id: "bianco-27",
            episode: "Episode 6 à 8",
            description: "Obtenu en arrosant un Oiseau Bleu haut au-dessus du village."
        },
        {
            id: "bianco-28",
            episode: "Episode 3 à 8",
            description: "Obtenu en arrosant un des arbres de la zone du Grand Moulin à vent."
        },
        {
            id: "bianco-29",
            episode: "Episode 8 avec Yoshi",
            description: "Obtenu en mangeant un papillon bleu avec Yoshi."
        },
        {
            id: "bianco-30",
            episode: "Episode 8 avec Yoshi",
            description: "Obtenu en mangeant les abeilles à l'intérieur d'une ruche avec Yoshi."
        },
    ]
};

window.blueCoinsData.push(biancoCoins);