drivetocreate.org
=================

This site was scaffolded out with [Yeoman](http://yeoman.io) using `generator-webapp`. [Bower](http://bower.io/) is used for managing third-party libraries, and [Grunt](http://gruntjs.com) is used to run the development server and to build a distributable package. The original `generator-webapp` Gruntfile was modified to accommodate a multi-page website (as opposed to a single-page web app).

## Getting Started

### Requirements

Running and building this site relies on several tools that use [Node.js](http://nodejs.org/download/). You can check to see if you have Node installed by typing `npm -v` into the terminal. If a version number shows up, you should be good to go!

Once you have Node installed, pull down this repo and open up the terminal. Navigate into the project, alongside the `package.json` file and run the following commands from the terminal: 

* `$ npm install`
* `$ bower install`
* `$ grunt server`

If everything goes smoothly, the last command, `grunt server` should open up a new browser window with a preview of the site. Press `CTRL + C` in the terminal to stop the development server. On subsequent launches, you should only need to run `grunt server` -- if you get errors, a new dependency may have been added to the project that needs to be installed with either `npm install` or `bower install` -- try running one or both of those commands and then trying `grunt server` again.

*Note: Some elements of the site, like the embedded Podio webform, require a domain that isn't `localhost`. To preview these elements, you'll need to add `local.drivetocreate.org` to your computer's hosts file.*

## About the Project

### Structure

All the HTML, CSS and Javascript files live in the `app` directory. Everything outside this directory is used to help build or test the project. The `dist` directory holds a finished build of a project (this won't show up until you've built at least once). Note that the `dist` directory is not tracked by git. Changes should never be made to files in this directory, as they will not be tracked, and will be overwritten on the next build.

#### Sub-pages

The homepage, `index.html` lives directly inside of `app`, but all other pages go in the `pages` directory. Structure their filenames so that an underscore (`_`) indicates a subdirectory. For example, a file named 'foo' will be transformed to live at `foo/index.html`, and a file named `foo_bar` will be transformed to live at `foo/bar/index.html`. This pattern works great when being served from Apache, and lets you use 'pretty' URLs.

#### Partials

One of the benefits of using PHP to build sites is using `include()` to let you keep common elements like a header/footer in one spot, where a change applies to all the pages that import it. We use partials in this project in a similar fashion, but instead of letting PHP include these files when serving the site, we use Grunt to compile all the partials together in the development server, and on deploy.

Partials live in the `app/partials` folder. Any changes to these will apply to any pages that include them. To include a partial in a page, add this block where you want the partial to be inserted:

    <!-- htmlbuild:section topNav -->
    <!-- /htmlbuild -->

`htmlbuild` is the process in the Gruntfile that will replace this section. The `:section` part tells `htmlbuild` that this is an HTML snippet, and `topNav` is the section's name. 

To add a new partial, you'll need to link the partial name to the path of the file in the Gruntfile. Note that there are 2 places to update this in the Gruntfile. The development server and the deploy process handle things slightly differently, and an update needs to be made in both places. Notice, for example, that the Google Analytics snippet is only included when the site is built for deployment, but not when it's being build for development.

#### Bower Components

The `bower_components` directory is where Bower dumps all its packages. You'll notice references to files in here in the HTML. When the project gets built, the necessary packages will be pulled in to the `dist` directory and these links will be rebuilt. It's a magical way to manage 3rd-party libraries without having to check Foundation and jQuery in to GitHub. 

## Building & Deploying

When you're ready to deploy a new version of the site, running the `grunt` command will bundle everything together, minify, concatenate, make folders for your sub-pages, and dump it all in a `dist` directory. The contents of `dist` is ready for you to upload to the server. Compress the folder (.zip) and upload to GitHub with a new release tag any time you upload a new version to the server.

### Safely Deploying

On the server, `http://beta.drivetocreate.org` is set up as a staging domain. Upload the contents of `dist` into a folder called `beta.drivetocreate.org` (this should be alongside, not inside, of the `drivetocreate.org` folder on the server). Once it's uploaded, you can check your changes at the staging domain. When you're satisfied and ready to deploy, change the `drivetocreate.org` folder name to `outdated.drivetocreate.org`, and rename `beta.drivetocreate.org` -> `drivetocreate.org` -- now your staged changed will be live. Check the site again, and delete the `outdated.drivetocreate.org` folder to avoid clutter/confusion. If something went wrong, change the folder names back to revert to the last version of the site.

*Note: it should always be assumed that a folder on the server called `outdated.drivetocreate.org` is safe to be deleted.*
