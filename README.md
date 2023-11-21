# O-Auth-Third-Party
Login with Google, Facebook, Discord, Github,....

Doc:
1. https://expressjs.com/en/5x/api.html#express
2. https://www.passportjs.org/docs/
3. https://sequelize.org/docs/v6/getting-started/
4. https://console.cloud.google.com/

npm init -y
npm i express passport cors nodemon dotenv
npm install passport-google-oauth20

npm install --save sequelize

npx sequelize-cli init => Create folder
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string => Create a model before connecting
npx sequelize-cli db:migrate => connect to DB craeate Table

Issuse:
https://stackoverflow.com/questions/38757728/using-an-enviroment-variable-for-local-sequelize-configuration
