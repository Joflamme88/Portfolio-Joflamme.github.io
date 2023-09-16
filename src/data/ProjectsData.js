import othello from '../assets/othello.jpg';
import cookBook from '../assets/cookBook.jpg';
import botDiscord from '../assets/botDiscord.jpg';

const ProjetsData = [
  {
    id: 1,
    name: 'Othello :',
    image: `${othello}`,
    description: [
      {
        description: 'Javascript Vanilla',
      },
    ],
    box_title: 'Othello : jeu de société',
    box_description: [
      'Différent monde',
      'Joueur contre joueur',
      'Joueur contre ordinateur',
      'Mode facile',
    ],
    link_box: 'https://github.com/Joflamme88/Joflamme-othello.github.io',
    button: true,
    button_title: 'Cliquer pour jouer',
    button_link: 'https://joflamme88.github.io/Joflamme-othello.github.io/',
  },
  {
    id: 2,
    name: 'Livre de recettes :',
    image: `${cookBook}`,
    description: [
      {
        title: 'Front-End à venir :',
        description: 'React - Tailwind',
      },
      {
        title: 'Back-End : ',
        description: 'Node.js - Express - Sequelize - PostgreSQL',
      },
    ],
    box_title: 'CookBook',
    box_description: [
      'Livre de recette numérique :',
      'Back-end',
      'Front-End à venir',
    ],
    link_box: 'https://github.com/Joflamme88/Joflamme-CookBook.github.io',
    button: false,
  },
  {
    id: 3,
    name: 'Bots Discord :',
    image: `${botDiscord}`,
    description: [
      {
        description: 'TypeScript',
      },
    ],
    box_title: 'Bots Discords',
    box_description: [],
    link_box: 'https://github.com/Joflamme88/BotDiscord_EditionLimit',
    button: false,
  },
];

export default ProjetsData;