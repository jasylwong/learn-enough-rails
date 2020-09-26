# Ruby on Rails Tutorial sample application

This is the sample application for [*Ruby on Rails Tutorial: Learn Web Development with Rails*](https://www.railstutorial.org/) (6th Edition) by [Michael Hartl](https://www.michaelhartl.com/).

App here: https://learn-enough-rails-blog.herokuapp.com/

## License
All source code in the [Ruby on Rails Tutorial](https://www.railstutorial.org/) is available jointly under the MIT License and the Beerware License. See [LICENSE.md](LICENSE.md) for details.

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

## Contents

### 4 Rails-flavored Ruby
#### 4.1 Motivation
##### 4.1.1 Built-in helpers
##### 4.1.2 Custom helpers
- helpers: custom made functions

#### 4.2 Strings and methods
##### 4.2.1 Strings
##### 4.2.2 Objects and message passing
##### 4.2.3 Method definitions
##### 4.2.4 Back to the title helper

#### 4.3 Other data structures
##### 4.3.1 Arrays and ranges
```
$ (0..4).to_a is the same as [0, 1, 2, 3, 4] (also works on letters eg a to e)
```
Ranges can also be used to get a range of elements in an array

##### 4.3.2 Blocks
Blocks are closures, ie one-shot anonymous functions with data attached

##### 4.3.3 Hashes and symbols
##### 4.3.4 CSS revisited

#### 4.4 Ruby classes
##### 4.4.1 Constructors
##### 4.4.2 Class inheritance
##### 4.4.3 Modifiying built-in classes
##### 4.4.4 A controller class
##### 4.4.5 A user class

### 5 Filling in the layou
#### 5.1 Adding some structure
##### 5.1.1 Site navigation
##### 5.1.2 Bootstrap and custom CSS
##### 5.1.3 Partials

#### 5.2 Sass and the asset pipeline
#### 5.2.1 The asset pipeline
Three main features to understand about asset pipeline: asset directories, manifest files, pre-processor engines
#### 5.2.2 Syntactically awesome stylesheets
SASS allows us to use nesting and variables in our stylesheets

#### 5.3 Layout links
#### 5.3.1 Contact page
#### 5.3.2 Rails routes
#### 5.3.3 Using named routes
#### 5.3.4 Layout link tests

#### 5.4 User signup: A first step
##### 5.4.1 Users controller
##### 5.4.2 Signup URL

### 6 Modeling users (295)
#### 6.1 User model
Active Record - default library for interacting with the database
##### 6.1.1 Database migrations
$ rails generate migration migration_name
Most migrations are reversible using: $ rails db:rollback
##### 6.1.2 The model file
##### 6.1.3 Creating user objects
Use the rails console in sandbox mode when we don't want any changes to be made to the database(s).
##### 6.1.4 Finding user objects
##### 6.1.5 Updating user objects
We can update objects by direct assignment, or .update (or .update_attribute for a single attribute)
The former requires a .save after to make permanent db changes

#### 6.2 User validations
##### 6.2.1 A validity test
##### 6.2.2 Validating presence
##### 6.2.3 Length validation
##### 6.2.4 Format validation
See p328 for Regex overview table, or use Rubular
##### 6.2.5 Uniqueness validation
- For uniquness tests, we actually have to put a record in the db
- Use .dup to create a duplicate object
- Need to enforce uniqueness at the database level as well, using a database index in our migrations
- callback: a method that gets invoked at a particular point in the lifecycle of an Active Record object

#### 6.3 Adding a secure password
##### 6.3.1 A hashed password
.has_secure_password in
##### 6.3.2 User has secure password
##### 6.3.3 Minimum password standards
##### 6.3.4 Creating and authenticating a user
To get models working in production, need to run the migrations at heroku using 
  $ heroku run rails db:migrate
And can verify by running a console in production:
  $ heroku run rails console --sandbox

### 7 Sign up
#### 7.1 Showing users
##### 7.1.1 Debug and Rails environments
$ rails server --environment production
$ rails db:migrate RAILS_ENV=production
##### 7.1.2 A Users resource
See Table 7.1 (p367) for RESTful routes provided by the Users resource

#### 7.1.3 Debugger
- byebug: add 'debugger' in our code to stop it running at a particular point so we can see current state
- Ctrl-D to exit it

#### 7.1.4 A Gravatar image and a sidebar
- methods defined in any helper file are automatically available in any view, but we usually sort them into separate directories for convenience

#### 7.2 Signup form
##### 7.2.1 Using form_with
##### 7.2.2 Signup form HTML

#### 7.3 Unsuccessful signups
##### 7.3.1 A working form
##### 7.3.2 Strong parameters
##### 7.3.3 Signup error messages
After an invalid submission Rails automatically wraps the fields with errors in divs with the CSS class field_with_errors. These labels then allow us to style the error messages with the SCSS shown in Listing 7.22, which makes use of Sass’s @extend function to include the functionality of the Bootstrap class has-error.
##### 7.3.A test for invalid submission

#### 7.4 Successful signups
#### 7.4.1 The finished signup form
#### 7.4.2 The flash
#### 7.4.3 The first signup
rails db:migrate:reset
#### 7.4.4 A test for valid submission

#### 7.5 Professional-grade deployment
##### 7.5.1 SSL in production
SSL - Secure Sockets Layer (SSL): for secure communications
Enforce SSL by setting config.force_ssl = true in production.rb
##### 7.5.2 Production webserver
Puma: an HTTP server capable of handling a large number of incoming requests.
If using Heroku, need to adjust the config/puma.rb file.
Create a Procfile to tell Heroku to run a Puma process in production.

##### 7.5.3 Production database configuration
Configure the production db by updating the production section of the db config file: config/database.yml.

##### 7.5.4 Production deployment
heroku run rails db:migrate after deploying to Heroku

### 8 Basic login
#### 8.1 Sessions
Session: semi-permanent connection between two computers (eg client computer and server)
Cookies: small pieces of text placed on a user's browser
Sessions resource will use cookies instead of a db back-end to persist data
#### 8.1.1 Sessions controller
#### 8.1.2 Login form
#### 8.1.3 Finding and authenticating a user
#### 8.1.4 Rendering with a flash message
Contents of the flash persist for one request, but—unlike a redirect, re-rendering a template with render doesn’t count as a request. 
#### 8.1.5 A flash test
Use flash.now for the above - the contents disappear after an additional request.

#### 8.2 Logging in
Modules allow using functions across multiple controllers and views.
Helper modules are auto included in Rails views.
##### 8.2.1 The log_in method
reset_session prevents session fixation hack attacks
User.find(id) raises an exception if user id doesn't exist. .find_by(id: id) returns nil instead.
Memoization: remembering variable assignments from one method invocation to the next
##### 8.2.3 Changing the layout links
For using dropdown menus: $ yarn add jquery@3.5.1 bootstrap@3.4.1
  and add jQuery configuration to config/webpack/environment.js and jQuery and bootrap to JS packs

###### Mobile styling
Add to your html: <meta name="viewport" content="width=device-width, initial-scale=1">
See p 477 for further code.

##### 8.2.4 Testing layout changes
Fixtures: way of organizing data to be loaded into the test db.

##### 8.2.5 Login upon signup
Helper methods aren't availabe in tests by default

#### 8.3 Logging out
reset_session to remove all (not just one) session variables

### 9 Advanced login
499
Fill this part in
##### 9.1.3 Forgetting users
##### 9.1.4 Two subtle bugs

#### 9.2 "Remember me" checkbox

#### 9.3 Remember tests
533


#### 9.3.1
#### 9.3.2
539


### 10 Updating, showing, and deleting users
549

### 11 Account activation
621

### 12 Password reset
675

### 13 User microposts
723

### 14 Following users
829 - 905


