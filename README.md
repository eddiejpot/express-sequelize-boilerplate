# Express-Sequelize-Boilerplate

## DB Setup 🤖

**If you have not created the DB on your local**
Step 1: Change username in config/config.js
Step 2: Create DB
`npx sequelize db:create`

**If DB is already created on local**

Setup DB:
`npm run setup`

Reset DB:
`npm run reset`

## Start Server 🤖

Start Server:
`npm run watch`

## Sequelize-cli Cheat Sheet 🤖

**migration**
Generates a new migration file
e.g.npx sequelize migration:generate --name create-items-table
`npx sequelize migration:generate --name <NAME>`

Run migrations
`npx sequelize db:migrate`

Reverts a migration
`npx sequelize db:migrate:undo`

Reverts all migrations that ran
`npx sequelize db:migrate:undo:all`

**seeders**
Generates a new seed file
`npx sequelize seed:generate --name <seed-data>`

Run specified seeder
`npx sequelize db:seed --seed <FILENAME.js>`

Run all seeders
`npx sequelize db:seed:all`

Deletes data from the database / undo seeders
`npx sequelize db:migrate:undo:all`
