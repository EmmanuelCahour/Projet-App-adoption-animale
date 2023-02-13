# Taking postgres identity

export PGUSER=postgres

# Creating a user in database with login and password

createuser meugnon_admin --login --pwprompt

# Creating a database with meugnon_admin as owner

createdb meugnon --owner meugnon_admin

# Initialising Sqitch

sqitch init meugnon_sqitch --engine pg

# Creating version 1 for the database

#sqitch add meugnon_init -n "create tables"

#Adding last version (and previous ones)

bash add_version.sh

# Deploying Last version

bash deploy.sh
