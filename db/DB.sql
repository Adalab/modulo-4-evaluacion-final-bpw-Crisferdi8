CREATE DATABASE music_groups;
USE music_groups;

CREATE TABLE music_gr(
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR (60) NOT NULL,
musical_style VARCHAR (50) NOT NULL,
song VARCHAR(50)NOT NULL,
year INT 
);

INSERT INTO music_gr (name, musical_style, song, year )
VALUES ('Vetusta Morla', 'indie', 'Un dia en el mundo', '1998'),
('Sanguijuelas del Guadiana', 'rock alternativo', '100 amapolas', '2023');

SELECT * FROM music_gr;

SELECT * FROM music_gr WHERE id = 2;

 -- name: 'La Plazuela',
 -- musical_style: 'Flamenco-Rock',
 -- song: 'Peiname Juana',
  -- year: '2019'
  
INSERT INTO music_gr (name, musical_style, song, year)
VALUES ('La Plazuela', 'Flamenco-Rock', 'Peiname Juana', '2019');


UPDATE music_gr SET name = 'Iván Ferreiro', musical_style = 'Indie', song = 'El equilibrio es imposible y Turnedo', year = '1991' WHERE id = 6;

DELETE FROM music_gr WHERE id = 5;
