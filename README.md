# Stackbit Sanity Starter Theme

![Sanity Starter in Stackbit Visual Editor](https://res.cloudinary.com/stackbit-com/image/upload/v1674847517/docs/integrations/sanity/sanity-page-editing_t7w8et.png)

## Setup

These are the steps needed to get this project running locally.

### Install Dependencies

After cloning the project, begin by installing all necessary dependencies.

    npm install

### Sign Into Sanity

If you are not already signed into Sanity via the CLI, install the CLI package and then run the login command.

    npm install -g @sanity/cli
    sanity login

This will open a browser and walk you through the authentication process.

### Import Content

Once authenticated, you'll be able to create a Sanity project and import content.

    npm run create-project

_Note: You may want to sign into Sanity in the browser and rename your project._

Once the project exists and you've set the environment variables, you can import the content.

    npm run import {projectId}

Replace `{projectId}` with the project ID output from the previous command.

### Store Sanity Values

Sign into Sanity to create an editor token, and then set and store the following environment variables:

- `SANITY_PROJECT_ID`
- `SANITY_DATASET`
- `SANITY_TOKEN`

### Run Sanity Studio

Sanity Studio code exists for this project in the `studio` directory. First, install the dependencies in this directory.

    cd studio
    npm install

Then run the studio locally.

    npm start

If you want to see the content, you can open your browser and navigate to localhost:3333.

### Start Development Server

Now you can start your Next.js development server.

    npm run dev

And the Stackbit development server.

    stackbit dev -c sanity --sanity-project-id $SANITY_PROJECT_ID --sanity-dataset $SANITY_DATASET --sanity-token $SANITY_TOKEN

This command outputs an `app.stackbit.com` URL. Open this URL in your browser and start building your visual editing experience!

## Questions & Feedback

[Join the community](https://www.stackbit.com/community) or [contact us directly](https://www.stackbit.com/contact) for feedback, help, and other questions along your Stackbit journey.
