-- Verify meugnon_sqitch:meugnon_init on pg

BEGIN;

SELECT * FROM role;
SELECT * FROM user_account;
SELECT * FROM association;
SELECT * FROM animal;
SELECT * FROM add_favorite;

ROLLBACK;
