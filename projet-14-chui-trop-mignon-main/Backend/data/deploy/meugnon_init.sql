-- Deploy meugnon_sqitch:meugnon_init to pg

BEGIN;

CREATE TABLE "role"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "status" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "user_account"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL, 
    "email" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "role_id" INT NOT NULL DEFAULT '1' REFERENCES role(id),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "association"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "email" TEXT NOT NULL, 
    "phone_number" TEXT NOT NULL,
    "slogan" TEXT,
    "user_account_id" INT NOT NULL REFERENCES user_account(id),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "animal"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "picture" TEXT NOT NULL,
    "sex" TEXT NOT NULL,
    "age" TEXT NOT NULL,
    "species" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "user_account_id" INT NOT NULL REFERENCES user_account(id),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "add_favorite"(
    "user_account_id" INT NOT NULL REFERENCES user_account(id),
    "animal_id" INT NOT NULL REFERENCES animal(id),
    UNIQUE(user_account_id, animal_id)
);


COMMIT;
