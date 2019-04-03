export class Storage {
    activities = [
        [
          'Soins infirmiers',
          {
            type: 'rubrique',
            firstTitle: 'Aides et soins',
            secondTitle: 'Soins à domicile',
            icon: 'aideetsoins'
          }
        ],
        [
          'Physiothérapeute',
          {
            type: 'Profession',
            firstTitle: 'Aides et soins',
            secondTitle: 'Soins à domicile',
            icon: 'aideetsoins'
          }
        ],
        [
          'Chirurgie de la cataracte',
          {
            type: 'rubrique',
            firstTitle: 'Itinéraire clinique',
            secondTitle: 'HUG',
            icon: 'hug'
          }
        ],
        [
          'Unité accueil temporaire',
          {
            type: 'rubrique',
            firstTitle: 'Accueil temporaire',
            secondTitle: 'Personne agée',
            icon: 'accueiltemporaire'
          }
        ],
        [
          'Maintient domicile suite chute',
          {
            type: 'docteur',
            firstTitle: 'Programme de soins',
            secondTitle: 'Docteur Karim Médecin traitant',
            icon: 'photokarim'
          }
        ],
        [
          'Prothèse genou patient < 40 ans',
          {
            type: 'docteur',
            firstTitle: 'Programme de soins',
            secondTitle: 'Docteur Karim Chirurgien',
            icon: 'photokarim'
          }
        ],
      ];

      praticiens = [
        {
          id: 1,
          name: 'Mrs. Nathalie Pastore',
          type: 'Praticien',
          title: 'Physiothérapeute',
          phone: '022 432 1100',
          scores: [
            ['Ponctualité', 'star', 'star', 'star-outline'],
            ['Flexibilité', 'star', 'star', 'star'],
            ['Sympathie', 'star', 'star', 'star-outline'],
          ],
          workingFields: ['Gériatrie', 'Pédiatrie', 'Cicatrices'],
          comments: [
            [5.5, 'Super thérapeute, va droit au but. Je recommande.'],
            [3.5, 'Très pro, ne laisse rien au hasard.'],
            [4.5, 'Un peu trop directe, mais ça m\'a plu.'],
          ],
        },
        {
          id: 2,
          name: 'Mrs. Anouk Goumaz',
          type: 'Praticien',
          title: 'Physiothérapeute',
          phone: '022 120 4400',
          scores: [
            ['Flexibilité', 'star', 'star', 'star'],
            ['Professionnalisme', 'star', 'star', 'star-outline'],
            ['Empathie', 'star', 'star', 'star-outline'],
          ],
          workingFields: ['Rhumatologie', 'Physio respiratoire', 'Lymphalogie'],
          comments: [
            [4.5, 'bien'],
            [3.5, 'moyen'],
            [5.5, 'pas mal'],
          ],
        },
        {
          id: 3,
          name: 'Mr. Hector Ticoli',
          type: 'Praticien',
          title: 'Physiothérapeute',
          phone: '022 220 5612',
          scores: [
            ['Empathie', 'star', 'star', 'star'],
            ['Accueil', 'star', 'star', 'star'],
            ['Ponctualité', 'star', 'star', 'star-outline'],
          ],
          workingFields: ['Gériatrie', 'Soins palliatifs', 'Pédiatrie', 'Rhumatologie'],
          comments: [
            [5.5, 'Super thérapeute, va droit au but. Je recommande.'],
            [3.5, 'Très pro, ne laisse rien au hasard.'],
            [4.5, 'Un peu trop directe, mais ça m\'a plu.'],
          ],
        },
        {
          id: 4,
          name: 'Mr. Loïs Lane',
          type: 'Praticien',
          title: 'Physiothérapeute',
          phone: '022 456 7743',
          scores: [
            ['Tournus', 'star', 'star', 'star'],
            ['Flexibilité', 'star', 'star', 'star'],
            ['Ponctualité', 'star', 'star', 'star-outline'],
          ],
          workingFields: ['Gériatrie', 'Pédiatrie', 'Cicatrices'],
          comments: [
            [5.5, 'Super thérapeute, va droit au but. Je recommande.'],
            [3.5, 'Très pro, ne laisse rien au hasard.'],
            [4.5, 'Un peu trop directe, mais ça m\'a plu.'],
          ],
        },
        
      ];

      transports = [
        {
          id: 1,
          name: 'IMAD',
          favoris: true,
          type: 'Transport ambulatoire',
          score: 4.5,
          comments: [
            [5.5, 'Super transporteur, va droit au but. Je recommande.'],
            [3.5, 'Très pro, ne laisse rien au hasard.'],
            [4.5, 'Un peu trop directe, mais ça m\'a plu.'],
          ],
        },
        {
          id: 2,
          name: 'Transport Accompagné C.G.',
          favoris: false,
          type: 'Transport pour personnes handicapées',
          score: 4.5,
          comments: [
            [4.5, 'bien'],
            [3.5, 'moyen'],
            [5.5, 'pas mal'],
          ],
        },
      ];

      criteres = [
        'respiratoire',
        'traumatologie/orthopédie',
        'rhumatologie',
        'gériatrie',
        'pédiatrie',
        'lymphologie',
        'soins palliatifs',
      ];
}
