-- Verify meugnon_sqitch:meugnon_seeding_animals on pg

BEGIN;

SELECT * FROM animal;

SELECT * FROM add_favorite;

SELECT * FROM role;

SELECT * FROM user_account;

SELECT * FROM association;

ROLLBACK;
