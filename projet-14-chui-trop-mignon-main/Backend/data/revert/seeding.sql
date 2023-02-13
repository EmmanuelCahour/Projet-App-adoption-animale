-- Revert meugnon_sqitch:meugnon_seeding_animals from pg

BEGIN;

TRUNCATE TABLE animal, add_favorite, association, user_account, role;

COMMIT;
