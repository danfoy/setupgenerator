# Setup Generator

Creates a printable worksheet based on user input. Personal project in very early stages of development. Please feel free to [post bug reports and feature requests](https://github.com/danfoy/setupgenerator/issues/new).

## Usage

Open `dist/setupgenerator.htm` to run. Requires an internet browser, and is targeted at IE11 for operational reasons. Development during testing and on new branches is done in the latest version of Chrome, however, for practical reasons.

The output is self-contained and will work fine if moved elsewhere, including without an internet connection.

## Compiling

The output is compiled using [Grunt](http://www.gruntjs.com) and therefore requires [Node](http://www.nodejs.org) for development. It also uses [Sass](http://sass-lang.com), which in turn requires [Ruby](https://www.ruby-lang.org/en/).

### on macOS

Download Node from [the Node website](http://www.nodejs.org). Run `gem install sass` to download and install the SASS CSS preprocessor. Navigate to the `setupgenerator` folder inside Terminal and run `npm install` to install Grunt's dependencies. Run `grunt` to compile the output. You can also run `grunt watch` to automatically recompile to `dist` after tracked files in `src` are modified and saved. Note that if new files are added to `src` they will be need to be manually added to `gruntfile.js` in order to be included in the output.
