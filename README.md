
## ColorPal

This project template was built with [Create React App](https://github.com/facebookincubator/create-react-app)

[Color-thief](https://github.com/lokesh/color-thief)

[DropZone](https://github.com/codingo-me/dropzoner)

ColorPal is an app that allows the user to drag and drop a photo and get back a unique color palette based on the most dominant colors in their photo. The user can add palettes to their favorites page.


## Project Status

This project is currently in development. Users can drag and drop a photo and get a color palette with corresponding photo to display. Functionality to add to favorites using local storage is in progress. I would also like to add hex codes to the palette.

## Project Screen Shot(s)
!

#### Example:   

![](http://i.imgur.com/W0Tv4pg.png)
![](http://i.imgur.com/gc9qFzl.jpg)
![](http://i.imgur.com/kUJKm30.jpg)

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Run Test Suite:  

`npm test`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000/`  

## Reflection

This was a 2 week long project built during my third module at Turing School of Software and Design. Project goals included using technologies learned up until this point and familiarizing myself with documentation for new features.  

I wanted to use technologies I haven't worked with before, which ended up being dropZone and color-theif. I also wanted to get a better understanding for Redux. I also had a hard time installing SASS, with a bug that deleted my scss file every time i started my app. For time's sake, I ended up using CSS.

My main challenge was using color-thief because it was not ES6 compatible. This lead me to adding the code into a helper function and converting it to ES6 instead of simply npm installing it.

 The technologies implemented in this project are React, React-Router 3, Redux, color-thief, and dropzone. I also used CSS and JSX. I chose to use the `create-react-app` boilerplate and built the `webpack.config`.
