# Chat-UI

Chat application UI made with Typescript and React.
[https://github.com/suomiton/Chat-UI](https://github.com/suomiton/Chat-UI)

##Compile

* Run `npm install`

###Either (using Gulp)
1. Run `gulp` for dev or `gulp production` for minified versions

###Or (manually)
1. Install Typescript compiler as global `npm install -g typescript`
2. Also install Browserify as global `npm install -g browserify`
3. Compile Typescript `tsc -p js/`
4. Bundle scripts `browserify js/app.js -o static/bundle.js` 

###Finally

* Open `index.html` with your favourite browser

##Third party libraries used

1. Emojify.js to convert text to emojis [https://github.com/Ranks/emojify.js](https://github.com/Ranks/emojify.js)

##Tips
* Try using emojis in messages [http://www.emoji-cheat-sheet.com/](http://www.emoji-cheat-sheet.com/)
* To add image paste image url from web to message field
