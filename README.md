# Express-Node-Mongoose Boilerplate
#### This is a simple starter template for projects using nodejs, expressjs, mongoose and pug for templating

## Modules included
- Passportjs - Authentication
- Mongoose - Elegant mongodb object modeling for node.js
- Sass - CSS Preprocessor
- Momentjs - Parse, validate, manipulate, and display dates and times in JavaScript.

- Multer - Node.js middleware for handling `multipart/form-data`.
- Jimp - An image processing library written entirely in JavaScript

## Quick Overview

```sh
$ git clone https://github.com/Kimkykie/expressjs-mongoose-boilerplate.git
$ cd expressjs-mongoose-boilerplate
$ npm or yarn install
To run application
$ npm run start
Open your browser on localhost:5555/
```



## Sass
#### Sass files are found in `public/sass` directory
#### You can find individual .scss files in the `/partials/` directory
#### When you add a new .scss file import it in the style.scss file
```sh
@import 'partials/variables';
@import 'partials/layout';
@import 'partials/normalize';
@import 'partials/typography';
...

```

## Javascript
#### The javascript directory is `public/javascripts`
#### Webpack takes one javascript file as an entry point which is our `main.js`
#### Import your additional javascript files into the `main.js` file

```sh
import "../sass/style.scss";

import { $, $$ } from './modules/bling'
...
```

## Models
#### Models are located in the `models` directory
#### After creating a model, require it in start.js
```
  // Import Models Here
  ....
  require('./models/User')
```

## Variables.env
#### Rename variables.env.sample to variables.env and enter the evironmental variables
- I use [mLab](https://mlab.com "mLab") to create demo MongoDB databases
- [Mailtrap](https://mailtrap,io "Mailtrap.io") for dummy email testing
  
## Note
#### Default port is 555, you can change your preferred port on the variables.env file

```sh
...
  PORT=5555
```


## Credits
#### This boilerplate is highly inspired by Wes Bos' Learn Node course source code.

#### [Learn Node](https://learnnode.com "Learn Node")