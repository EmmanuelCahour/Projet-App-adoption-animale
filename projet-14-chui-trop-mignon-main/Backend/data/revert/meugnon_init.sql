-- Revert meugnon_sqitch:meugnon_init from pg

BEGIN;

DROP TABLE role, user_account, association, animal, add_favorite;

COMMIT;
