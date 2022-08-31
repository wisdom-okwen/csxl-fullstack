# CSXL full-stack workshop setup!

## Back-end

## Front-end

##### Hello! Thanks for signing up for our workshop – I'm so excited! For now, let's walk through setting up your workspace.

#### The basics
1. If you've made it here, you've possibly already cloned this repository! If you haven't, do that now, and open it in your fav text editor (I'm using vscode)
2. You will need Node.js and NPM installed on your system to run anything. First, check if you have both already by opening a terminal and running `node -v` and `npm --v`.
    1. If both of these produce numbers (>=14.0.0 for Node and >=5.6 for npm), you're all set!
    2. If not, [download them here](https://nodejs.org/en/download/). After download, return to step 2 to make sure it worked!

#### Housekeeping
3. Let's get you into the right directory. 
    1. If you're in vscode, you can right-click on the `front-end` directory and press 'open in integrated terminal'. Boom.
    2. (If you're in vscode or not), you can open a terminal and `cd` (change directory) into `front-end`. You can do this by first running `pwd` to make sure you're in the `csxl-fullstack` directory (what prints out should end with csxl-fullstack), then run `cd front-end`. This is a simple way to navigate directories via the command line!
3. Now we're in the front-end directory. Here is where all of the starter code for the workshop is! What we're concerned with now is making sure you have all the dependencies we'll need installed. 
    - To do this, run `npm i`. That's it! This magic command looks at the dependencies/dev dependencies listed in `package.json` and makes sure you have them installed locally.

#### Sanity check!
1. Now, to make sure everything installed smoothly, let's test the two development environments we'll be using.
    1. We will be using [Storybook](https://storybook.js.org/docs/react/get-started/introduction) to develop and test components. In the terminal, run `npm run storybook` to run the application. Go to the URL the command outputs (likely localhost6006), and make sure you see a Storybook page that begins with 'Hey, welcome to Storybook!' If you see this, you're golden.
    2. To start the development server for our web app, run `npm start`. This should start a local dev server (probably localhost3000) – go to this page, and you should see a pink/purple webpage that begins with 'Hello, dev!'
2. If you were able to see these two environments, you're all set! If not, consider this a time to explore StackOverflow and/or come to the XL for help! (I will be there whenever I can be – if I'm not there and someone else can't help you, reach out to me via email! (clairehh@live.unc.edu))

#### You're done!
Nice work! I'm excited to meet and work with y'all – feel free to peruse the workspace if you'd like, but we will go through everything together on Thursday! Cheers!
