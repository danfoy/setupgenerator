# Setup Generator

Creates a printable worksheet based on user input. Personal project in very early stages of development.

## Usage

Open `dist/setupgenerator.htm` to run. The output is self-contained and will work fine if moved elsewhere and even without an internet connection.

## Compiling

The output is compiled using [Grunt](http://www.gruntjs.com) and therefore requires [Node](http://www.nodejs.org) for development.

On Mac, navigate to the `setupgenerator` folder inside Terminal and run `npm install`. This will install Grunt's dependencies. Then run `grunt` to compile the output. You can also run `grunt watch` to automatically recompile to `dist` after modified files in `src` are saved.
