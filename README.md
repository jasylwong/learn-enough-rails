# Learn enough Rails 

https://fathomless-woodland-70494.herokuapp.com/

Rails is a web development framework written in the Ruby programming language.

# Ruby on Rails Tutorial sample application

This is the sample application for
[*Ruby on Rails Tutorial:
Learn Web Development with Rails*](https://www.railstutorial.org/)
by [Michael Hartl](http://www.michaelhartl.com/).

## License

All source code in the [Ruby on Rails Tutorial](https://www.railstutorial.org/)
is available jointly under the MIT License and the Beerware License. See
[LICENSE.md](LICENSE.md) for details.

## Getting started

To get started with the app, clone the repo and then install the needed gems:

```
$ bundle install --without production
```

Next, migrate the database:

```
$ rails db:migrate
```

Finally, run the test suite to verify that everything is working correctly:

```
$ rails test
```

If the test suite passes, you'll be ready to run the app in a local server:

```
$ rails server
```

For more information, see the
[*Ruby on Rails Tutorial* book](https://www.railstutorial.org/book).

---
## Chapter 1: From zero to deploy
---

###  1.1: Intro
#### 1.1.1 Prerequesites
See website for list of resources

#### 1.1.2 Conventions used in this book
### 1.2: Up and running
#### 1.2.1: Development environment

Three essential components needed to develop web applications:
- Text editor
- File navigator
- Command-line terminal

See website for steps for getting started with the cloud development environment.

#### 1.2.2: Installing Rails
```
$ gem install rails -v 5.1.6
```

### 1.3: The first application ("Hello world")

Start a new rails app using:
```
$ rails new app_name
```
See website for table of main directories in a Rails app

#### 1.3.1: Bundler
To install and include the gems needed by the app:
```
bundle
```
You may need to move sqlite into development and test environment in the Gemfile, to prevent potential conflict with the db used by eg Heroku.

#### 1.3.2: rails server
Run a local webserver to use app:
```
rails server 
```

#### 1.3.3 Model-View-Controller (MVC)
#### 1.3.4 Hello world!
Add a controller action (method) to render the string "hello world"
Then amend the routes.rb in ./config/ for the root: root 'controller_name#action_name'

### 1.4: Version control with Git
#### 1.4.1 Installation and setup
#### 1.4.2 What good does Git do you?
#### 1.4.3 Bitbucket
#### 1.4.4 Branch, edit, commit, merge

### 1.5: Deploying
#### 1.5.1 Heroku setup
Heroku uses the PostgreSQL db, so we need to add the pg gem into the production environment
(remember to also remove the sqlite gem from production environment, as the db is not supported at Heroku).
Run bundle with a special flag to prevent the local installation of any production gems (ie in this case, PostgreSQL):
```
$ bundle --without production
```
(See website for complete steps on deploying to Heroku)
Create a place on the Heroku servers for your app to live:
```
$ heroku create
```

#### 1.5.2: Heroku deployment, step one
```
$ git push -u heroku master
```

#### 1.5.4: Heroku commands
$ heroku help



---
## Chapter 2:
---

---
## Chapter 3: Mostly static pages
---

### 3.1 Sample app setup

### 3.2 Static pages
#### 3.2.1 Generated static pages
- Generate a controller using, eg: $ rails g controller ControllerName list_of_actions
  - This creates the controller, and updates the routes for the (optional) list of actions given
  - CamelCase for class names, snake case for filenames

#### Sidenote: Undoing things
- Uses the rails destroy to undo all the actions just committed eg for the above, use $ rails destroy controller ControllerName list_of_actions
- Undo a single migration step using: $ rails db:rollback
- To go all the way back to the beginning, use $ rails db:migrate VERSION=0


#### 3.2.2 Custom static pages

### 3.3 Getting started with testing

#### 3.3.1 Our first test
Run rails tests with: $ rails test

#### 3.3.2 Red
#### 3.3.3 Green
#### 3.3.4 Refactor

### 3.4 Slightly dynamic pages
#### 3.4.1 Testing titles (Red)
#### 3.4.2 Adding page titles (Green)



