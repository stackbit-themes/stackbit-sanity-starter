# Stackbit Sanity Starter Theme

TODO: Make scripts in package.json

npm install

npm install -g @sanity/cli
sanity login

node sanity-export/create-project.js
-> Outputs project id

Sign in and rename the project??

node sanity-export/import.js {projectId}

Create **editor** token
Set Environment variables
TODO: Need to test this with `stackbit.config.js`

- `SANITY_PROJECT_ID`
- `SANITY_DATASET`
- `SANITY_TOKEN`

cd studio
npm install

If you want to see changes in the studio, you can run this locally, too.

npm start
(Note that I had to switch from Node 18 to 16 to get the studio to work)
Runs at localhost:3333

Start up Stackbit (yaml)
stackbit dev -c sanity --sanity-project-id $SANITY_PROJECT_ID --sanity-dataset $SANITY_DATASET --sanity-token $SANITY_TOKEN
