## Website Performance Optimization portfolio project

* Optimize the critical rendering path and make this page render as quickly as possible.

* apply the techniques picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).


### Requirements
* `Note:` **Familuarity with these type of instalations may be necessary.**

##### `Download`
> [python](https://www.python.org/)

> [node.js](https://nodejs.org/en/)

> [npm.js](https://github.com/npm/npm)

> [gulp.js](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

> [ngrok.js](https://ngrok.com/)

### Instalation
**`Test each install to confirm.`**
* Install Python.
* Install Node.js.
* Install npm.
#### Instructions Step by Step
* Navigate to your app directory.
* Install npm there folowed by gulp.
* Install ngrok to run your server(optional).

#### Gulp Modules

**`Use npm Package Manager You Previoulsy installed above.`**

* [gulp-minify-css](https://www.npmjs.com/package/gulp-minify-css "NPM Website")
* [gulp-cache](https://github.com/jgable/gulp-cache "jgable Github")
* [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin "NPM Website")
* [gulp-htmlmin](https://www.npmjs.com/package/gulp-htmlmin "NPM Website")
* [gulp-gzip](https://www.npmjs.com/package/gulp-gzip "NPM Website")

#### Some useful tips to help you get started:

**1. To inspect the site on your phone, you can run a local server.**
* use the python file already provided by clicking it.

**2. Install ngrok to the top-level of your project directory to make your local server accessible remotely.**

##### Linux terminal
  ``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8080
  ```

##### Windows cmd

  ```
  $> cd /path/to/your-project-folder
  $> ngrok http 8080
  ```

* Open a browser and visit localhost:8080
* Copy the public URL ngrok gives you.
* Paste the address in your browser hit enter.

#### Testing

[PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/ "Googles Developer Site")
* FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

**F12 in Crome to open Dev Tools in Windows**
* `check console for errors.`


 Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

### Website Optimizations
**Project Rubic**

#### Part 1: Critical Rendering Path


`index.html` achieves a PageSpeed score of at least 90 for Mobile and Desktop.
 frames per second rate is 60 fps or higher.

#### Part 2a: Frame Rate

Optimizations made to views/js/`main.js` make views/`pizza.html` render with a consistent frame-rate at 60fps when scrolling.

#### Part 2b: Computational Efficiency

Time to resize pizzas is less than 5 ms using the pizza size slider on the views/`pizza.html` page.
 Resize time is shown in the browser developer tools.

#### Part 3: README

A README file is included detailing all steps required to successfully run the application
 and outlines the optimizations that the student made in index.html and views/js/`main.js` for `pizza.html`.

#### Part 4: Comments

Comments in views/js/`main.js` for `pizza.html` are present and effectively explain longer code procedures.

#### Part 5: Extra(optional standout components)Credit

Research, identify and use build tools (For example: Gulp - see Web Tooling and Automation)
 to automatically perform optimizations
  such as minification of CSS and JS and image optimizations.
 If build tools are implemented, include the package.json and js files
  as well as both the source and the destination directories in the submission.
 If build tools are used, the code in the dist folder will be evaluated,
  so be sure the dist folder contains a working, post-task-runner, version of the project.
 All steps necessary to download, configure and implement the task runner on the reviewer's desktop
  should be included in the README.md file.

## Optimizations Deployed

#### HTML

app/
`index` -

    <!-- added async to stop render blocking -->
    <script async src="http://www.google-analytics.com/analytics.js"></script>

* and uglified the google object script.
* Removed google fonts external reference.

views/
`pizza` -

    <!-- added ascyn and then inlined missing scripts(uglified) -->
    <script asycn type="text/javascript" src="js/main.min.js"></script>

#### JS

views/js/
`main.js` -

**Created variables**

    line 407
      function changeSliderLabel(size) {
        var pizza_label = document.querySelector("#pizzaSize");

    line 466
      var randomPizzas = document.getElementsByClassName("randomPizzaContainer");
**Removed 466 from the loop**
**Used getElementsByClassName**
    line 451
    // Revamped pizza sizer

    // Reference; https://classroom.udacity.com/nanodegrees/nd001/parts/00113454012/modules/273584856175461/lessons/4147498575/concepts/41542085800923#

    // Iterates through pizza elements on the page and changes their widths
         function changePizzaSizes(size) {

    line 491
    // Took the query out of the loop for efficiency and changed the amount of displayed pizzas to 30

        var pizzasDiv = document.getElementById("randomPizzas");
       for (var i = 2; i < 100; i++) {
          pizzasDiv.appendChild(pizzaElementGenerator(i));
    }

    line 38
          <script type="text/javascript">
          var cols = 8;
          var s = 256;
          var intViewportHeight = window.innerHeight;
          for (var i = 0; i < (intViewportHeight / 30); i++) {
            var elem = document.createElement('img');
            elem.className = 'mover';
            elem.src = "dist/images/pizza.png";
            elem.style.height = "100px";
            elem.style.width = "73.333px";
            elem.basicLeft = (i % cols) * s;
            elem.style.top = (Math.floor(i / cols) * s) + 'px';
            document.querySelector("#movingPizzas1").appendChild(elem);
          }</script>

    line 161
    applied async
      <script asycn type="text/javascript" src="js/main.min.js"></script>

#### All Pages
    Added
    <meta name="viewport" content="width=device-width, initial-scale=1">
    and removed Psudo code to save bytes.

* Minified and inlined all relevant css.
* Async aplied to all external js
Internal js uglified and inlined then html minifed.


#### All HTML Files

* Compressed for use on servers with gzip enabled in dist/html_compressed
* Gulp does this for you.


#### Gulp

app/
`gulpfile` -

* delete dist folders and contents to refresh.
* task wrapper function - run gulp build in top-level-folder
* this rebuilds dist and its files.
* everything should work after you replace the old html with new from(dist).

**Gulp Task Runner `gulpfile.js`**

        gulp.task('build', [`views-images`, `images`, `css-min`, `html-min`, `views-css-min`, `compress`],
        function () {console.log('Building files, compressing images, minifying CSS and HTML.);
        });

#### CSS

`print` -

* Minified and inlined all css all pages.

`style` -

    line 32
    /*added will-change to the moving element*/
    .mover {
      will-change: height, width, left, right;
      /*older browsers*/
      transform: translateZ(0);
      position: fixed;
      width: 256px;
      z-index: -1;
    }

views/
`bootstrap-grid` -
`style` -
* Minified and inlined all css all pages.

#### JS

app/
`perfmatters` -

* Uglified and inlined.


views/
`main` -

* Uglified and asynced.


#### Images

* Compressed with gulp.
* In some cases resized oversized imgs in windows paint.

### References
**To acheive optimization requirements;**


* [OnlIne Markdown Editor ](http://dillinger.io/ "Mark down")
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api").
* [Navigation Timing API](https://developer.mozilla.org/en/docs/Web/API/Navigation_timing_API)
* [The fewer the downloads, the better](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html)
* [Reduce the size of text](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html)
* [Optimize images](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html)
* [HTTP caching](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html)

### Customization with Bootstrap
* The portfolio was built on Twitter's
[Bootstrap](http://getbootstrap.com/ "Framework CSS")

* All custom styles are in dist/css/`portfolio.css` in the portfolio repo.

* [Bootstrap's CSS Classes](http://getbootstrap.com/css/)
* [Bootstrap's Components](http://getbootstrap.com/components/)


License
----

MIT


**Free Software, Hell Yeah!**
