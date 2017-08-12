# Setup Generator

Creates a printable worksheet based on user input. Personal project in very early stages of development. Please feel free to [post bug reports and feature requests](https://github.com/danfoy/setupgenerator/issues/new).

## Usage

Open `dist/setupgenerator.htm` to run. The output is self-contained and will work fine if moved elsewhere and even without an internet connection.

## Compiling

The output is compiled using [Grunt](http://www.gruntjs.com) and therefore requires [Node](http://www.nodejs.org) for development. It also uses [Sass](http://sass-lang.com), which in turn requires [Ruby](https://www.ruby-lang.org/en/).

On Mac, navigate to the `setupgenerator` folder inside Terminal and run `npm install`. This will install Grunt's dependencies. Then run `grunt` to compile the output. You can also run `grunt watch` to automatically recompile to `dist` after modified files in `src` are saved.
