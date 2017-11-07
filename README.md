# Setup Generator

Creates a printable worksheet based on user input. Designed for use in Team Knowhow service bars. Currently in beta. Please feel free to [post bug reports and feature requests](https://github.com/danfoy/setupgenerator/issues/new).

## Usage

### Download

* Download the latest bleeding-edge version by clicking 'Clone or download' at the top of [this page](https://github.com/danfoy/setupgenerator) and choosing 'Download ZIP'

or

* Download the latest stable release from [The Releases page](https://github.com/danfoy/setupgenerator/releases)

### Installation

* Drag the file `Setup Generator.htm` from the `/dist/` folder to your desktop or anywhere else

### Usage

* Click to open `Setup Generator.htm` in your default browser
* Click to allow plugins, scripts, or activeX controls if asked 
    * (this is a safety feature in many browsers to stop maliciously-crafted webpages harming your computer, but `Setup Generator.htm` is completely safe if downloaded from the [original repository](https://github.com/danfoy/setupgenerator))
* Follow the onscreen instructions, and click 'PRINT' at the bottom of the page when ready.
* You can preview the worksheet to be printed (not to scale) by checking the 'Worksheet Preview' checkbox at the bottom of the page

The output is self-contained and will work fine if moved elsewhere, including without an internet connection.

## Compiling

The output is compiled using [Grunt](http://www.gruntjs.com) and therefore requires [Node](http://www.nodejs.org) for development. It also uses [Sass](http://sass-lang.com), which in turn requires [Ruby](https://www.ruby-lang.org/en/).

### on macOS
 
* Download Node from [the Node website](http://www.nodejs.org) and git from [the git website](https://git-scm.com/downloads) (macOS comes with git preinstalled, but it's an old version).
* Run `gem install sass` in the terminal to download and install the SASS CSS preprocessor.
* In the terminal, navigate to where you would like to store the `setupgenerator` folder.
* Run `git clone https://github.com/danfoy/setupgenerator.git` in the terminal.
* Navigate to the root `setupgenerator` folder inside the terminal and run `npm install` to install Grunt's dependencies.
* Run `grunt` in the terminal to compile the output. 
    * You can also run `grunt watch` to automatically recompile to `dist` after tracked files in `src` are modified and saved.
    * Note that if new files are added to `src` they will be need to be manually added to `gruntfile.js` in order to be included in the output.

### on Linux

* Install [node](https://nodejs.org/en/download/) and [Ruby](https://www.ruby-lang.org/en/documentation/installation/) from source, or via whichever package manager your distro uses. You probably already have [git](https://git-scm.com/downloads).
* Follow instructions from bullet 2 above.

### on Windows

* I don't use Windows.
* You'll need all of the above, plus [git for Windows](https://git-scm.com/downloads), probably also [bash](https://msdn.microsoft.com/en-gb/commandline/wsl/about?f=255&MSPPError=-2147217396).
* If someone wants to write a guide for Windows feel free to send a pull request, but I can't see that happening tbqh.
