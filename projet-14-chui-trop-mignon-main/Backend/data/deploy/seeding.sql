-- Deploy meugnon_sqitch:meugnon_seeding_animals to pg

BEGIN;
-- Seeding roles

INSERT INTO "role" ("status") 
VALUES 
    ('user'),
    ('admin')
;

-- Seeding 2 users and 1 admin

INSERT INTO "user_account" ("firstname", "lastname", "email", "password", "address", "phone_number", "role_id")
VALUES ('Valentin', 'Cahour', 'valentin.cahour@gmail.com', '$2b$10$ZIfsyssajUjVMWwyMgbeI.ycsNJDHS9jVWUc6GjlWsggjfGU4V.ii', 'rue de la paix', '0623456789', 1),
('Francois', 'lefrancais', 'francois.lefrancais@outlook.fr', '$2b$10$3nJZDXsqhFBMsOBGfAPK/eKge5d20RlY4e8TbKZ5Uw.iFE.EuJ3rC', 'en France', '0897654689', 1),
('Mathieu', 'Bottet', 'mathou@gmail.com', '$2b$10$HiT/3zp.Xg5Hc4ssv8GroeqozSg1DXVVH08zb0FqOFqm.DKwRmr9q', 'quelque part vers Paris', '0785346467', 2);

-- Seeding Asso
INSERT INTO "association" ("name", "address", "email", "phone_number", "slogan", "user_account_id")
VALUES 
    (
        'Chui Trop Meugnon',
        '1, chemin de l''Amour, 84750 Pipouville',
        'meugnon.asso@gmail.com',
        '0600000000',
        'A chaque humain son Pipou',
        3
    )
;

-- Seeding Pipous(<3)

INSERT INTO "animal"("name", "picture", "sex", "age", "species", "color", "description", "user_account_id")
VALUES
    (
        'Virginie', 
        'Virginie.jpeg', 
        'femelle',
        DEFAULT, 
        'chat', 
        'blanc/roux/noir', 
        'grande gourmande qui aime les câlins, pas de soucis de santé. Aime beaucoup donner de l''attention et passer du temps avec ses hoomans pour les soutenir !', 
        3
    ),
    (
        'Renfri', 
        'Renfri.jpg', 
        'femelle',
        DEFAULT, 
        'chat',
        DEFAULT, 
        'aime passer son temps devant la télé, caractérielle elle adore se bastonner avec les humains, s''entends bien avec Gabriel (disponible aussi à l''adoption', 
        3
    ),
    (
        'Enzo', 
        'Enzo.jpg', 
        'male', 
        '3 ans', 
        'chien',
        DEFAULT, 
        'alimentation a controler (n''aime que la marque ESlint), aime beaucoup courir pour chasser les pokémons', 
        3
    ),
    (
        'Nounouille',
        'Nounouille.jpg',
        'male',
        '3 ans',
        'chien',
        DEFAULT,
        'Nounouille est un chien dont l''un des parents était croisé loup ; Il en garde un énorme besoin de se dépenser ce qui le réserve à une famille capable de lui offrir beaucoup de temps, d''espace et d''attention. Pour les heureux élus, il sera un animal extrêmement fidèle, sociable et attentionné.',
        3
    ),
    (
        'Perle',
        'Perle.jpg',
        'femelle',
        '1 an',
        'chat',
        DEFAULT,
        'Perle est une chatte au caractère bien trempé, que nous reservons à une famille habituée aux chats, afin de savoir s''occuper d''elle et parachever son éducation. Têtue mais pas aggressive, elle a besoin d''autorité en face d''elle mais sait alors devenir douce et très aimante.',
        3
    ),
    (
        'Spot',
        'spot.jpg',
        'male',
        '6 ans',
        'chien',
        'Noir / Blanc',
        'Spot est un chien qui ne posera aucune difficulté à ses propriétaires pourvu qu''ils lui donnent suffisamment d''attention ; très sportif, joueur, aimant, c''est un animal parfait pour une famille avec enfants.',
        3
    ),
    (
        'Fidji',
        'Fidji.jpg',
        'male',
        '5 ans',
        'chat',
        'gris',
        'Fidgi est un chat très doux et facile à vivre, avec un caractère joueur, parfait pour une famille avec enfants. Elle ne nécessitera qu''un petit temps d''adaptation.',
        3
    ),
    (
        'Laurent',
        'Laurent.png',
        'male',
        '26 ans',
        'chat',
        DEFAULT,
        'adore l''obscurité, miaule de colère quand il entend le nom "Charlelie" ou le mot "instance", faites attention à vos claviers il a tendance à les mordre.',
        3
    ),
    (
        'Benjamin',
        'Benjamin.jpg',
        'male',
        '4 ans',
        'chat',
        'Noir / Blanc',
        'Très affectueux, on peut toujours compter sur lui en cas de problèmes. Né à Auch, on peut donc dire qu''il est passé chez Sauch !',
        3
    ),
    (
        'Jordan',
        'Jordan.png',
        'male',
        '2 ans',
        'chat',
        'Noir / Blanc',
        'Toujours disponible et aidant, son rire peut vous surprendre, attention aux oreilles ! Krkrkrkrkr',
        3
    ),
    (
        'Gabriel',
        'Gabriel.jpg',
        'male',
        '4 ans',
        'chat',
        DEFAULT,
        'aime la baston, adore les conflits de voisinnage, miaule de bonheur quand il voit des images de Red Dead Redemption 2',
        3
    ),
    (
        'Sandro',
        'Sandro.jpg',
        'male',
        '1 an',
        'chat',
        'Gris / Blanc',
        'Equipé d''un super moteur, il saura vous rendre plein d''amour et d''attention. Il n''a pas peur de s''attaquer aux plus grandes espèces et peut vite prendre le contrôle de votre maison quand vous vous y attendez le moins. A prendre si vous avez un budget important pour le nourrir .',
        3
    ),
    (
        'Pablo',
        'Pablo.jpg',
        'male',
        '1 an',
        'chat',
        'Noir / Blanc',
        'Il s''installe chez vous comme s''il y vivait! Vous saurez vite l''adopter, c''est un sacré chasseur de mouche. Il est adorable et plein d''attention. A prendre mais pas à prendre finalement, je vais le garder je pense ! ',
        3
    ),
    (
        'Gaetan',
        'Gaetan.jpg',
        'male',
        '2 ans',
        'lapin',
        DEFAULT,
        'Très attachant mais à tendance à perdre un peu trop ses poils',
        3
    )

;

-- Seeding Favorites
INSERT INTO "add_favorite"("user_account_id", "animal_id")
VALUES
    ('1', '1'),
    ('1', '10'),
    ('1', '7'),
    ('2', '9'),
    ('2', '14'),
    ('2', '2'),
    ('2', '11')
;

COMMIT;
