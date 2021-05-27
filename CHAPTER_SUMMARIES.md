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
#### 9.3.1
In a test, you can access instance variables defined in a controller by using 'assigns' with the corresponding symbol.

#### 9.3.2 Testing the remember branch

### 10 Updating, showing, and deleting users
#### 10.1 Updating users
edit action responds to a POST request
update action responds to a PATCH request
##### 10.1.1 Edit form
Rails uses POST if a model instance with new_record? is true, and PATCH if false.

##### 10.1.2 Unsuccessful edits
##### 10.1.3 Testing unsuccessful edits
##### 10.1.4 Successful edits (with TDD)
Pass allow_nil: true option to validates in user, to allow blank passwords in the user edit form to indicate no changes to it. This does not mean users can have blank passwords when signing up, due to 'has_secure_passwords'.

#### 10.2 Authorization
Authentication allows identifying of users
Authorisation lets us control what they do
Currently eidt and upate actions have a security flaw: they allow anyone (even non-users) to access either action and update the info for any user. This section addresses that.

##### 10.2.1 Requiring logged-in users
before filters eg before_action, arrange for particular methods to be called before the given action

The patch method in the User controller test sends a PATCH request to the user_path(@user), which gets routed to the update action in the Users controller.

##### 10.2.2 Requiring the right user
So users can only edit their own info
##### 10.2.3 Friendly forwarding
If a non-logged-in user tries to go to the edit page, they are redirected to login. When then logged in, they should go straight to the edit page, rather than the root page.

#### 10.3
#### 10.3.1 Users index
#### 10.3.2 Sample users
Using faker
create! raises an exception rather than returning false, which the method create does instead
rails db:migrate:reset
rails db:seed
#### 10.3.3 Pagination
using special pagination Gems and methods
#### 10.3.4 Users index test

#### 10.3.5 Partial refactoring
Making compact views using partials, render, and @ with a model (eg @user)

#### 10.4 Deleting users
DELETE request (which is sent to a) destroy action
##### 10.4.1 Administrative users
$ rails generate migration add_admin_to_users admin:boolean
Ensure people can not make PATCH requests to make themselves admins by using 'require' and 'permit' on the 'params' hash without the admin attribute.

##### 10.4.2 The destroy action
Web browsers can't send DELETE request natively, so Rails fakes them with JavasScript (which therefore needs to be enabled in your browser).
Need access control on the destroy action to prevent attackers issuing a DELETE request directly from the command line to delete any user on the site. Do this using a before filter.

##### 10.4.3 User destroy tests
#### 10.5 Conclusion

To reset and use seed data in Heroku:
$ git push heroku
$ heroku pg:reset DATABASE
$ heroku run rails db:migrate
$ heroku run rails db:seed



### 11 Account activation
See p622 for table with the analogy between login, remembering, account activation, and password reset.

#### 11.1 Account activations resource
##### 11.1.1 Account activations controller
##### 11.1.2 Account activation data model
before_create can be used before an object is created. Along with the associated method, callbacks like these are called method references.

#### 11.2
Send emails with the help of the Action Mailer library. Mailers are structured much like controller actions, with email templates defined as views.
##### 11.2.1 Mailer templates
We  model activations using an Account Activations resource, so the token can appear as the argument of the named route: edit_account_activation_url(@user.activation_token, ...)
To include the email, use a query parameter, which in a URL appears as a key-value pair located after a question mark eg www.whatever.com/asdfaf/edit?email=foo%40example.com

Use CGI.escape(...) to find an escaped value

##### 11.2.2 Email previews
See results of email templates using email previews (special URLs exposed by Rails), by configurating our development environment.

##### 11.2.3 Email tests

##### 11.2.4 Updating the Users create action
... to use the mailer in our app.

#### 11.3 Activating the account
##### 11.3.1 Generalizing the authenticated? method
metaprogramming: essentially a program that writes a program (a strong suit of Ruby)
This is available to Ruby via the .send method, which allows calling a method with a name of our choice by 'sending a message' to a given object. (see p652 for eg)

##### 11.3.2 Activation edit action
##### 11.3.3 Activation test and refactoring
The assigns method lets us access instance variables in the corresponding action (although deprecated now)

#### 11.4 Email in production
Using SendGrid

### 12 Password reset
#### 12.1 Password resets resource
##### 12.1.1 Password resets controller
##### 12.1.2 New password resets
##### 12.1.3 Password resets create action

#### 12.2 Password reset emails
##### 12.2.1 Password reset mailer and templates
##### 12.2.2 Email tests

#### 12.3 Resetting the password
##### 12.3.1 Reset edit action
Use a hidden field to place (but not display) the email on a page.
##### 12.3.2 Updating the reset
##### 12.3.3 Password reset test

#### 12.4 Email in production (take two)
Using MailTrap instead of SendGrid & Heroku because of account issues with the latter two

#### 12.5 Conclusion

#### 12.6 Proof of expiration comparison

### 13 User microposts
#### 13.1 A Micropost model
##### 13.1.1 The basic model
- `$ rails generate model Micropost content:text user:references`
- We can use `text` instead of `string` for a model attribute, with no result in performance difference
- Adding an index to a column in a table is similar to adding an index to a book 
(eg finding a user by email is akin to finding a word on a page - difficult if you have to go through every page, but easy with an index section)

##### 13.1.2 Micropost validations

##### 13.1.3 User/Micropost associations
- When one model `belongs_to` another, the idiomatically correct way is to make it _through_ its association with that model eg `user.microposts.create` instead of `Micropost.create`, or 
`user.microposts.build` instead of `Micropost.new`

##### 13.1.4 Micropost refinements
- 'stabby lambda' syntax for Proc(edures)/lambdas (anonymous functions - those without names)
- they take in a block, and returns a Proc, which can be evaluated using the `.call` method
- eg. `$ -> { puts 'foo' }` returns a Proc object, but `$ -> { puts 'foo' }.call` puts `foo`
- Set a default scope in a model using the scope name `default_scope`
- we should include a dependent destroy option if there is a `has_one`:`belongs_to` association,
so there are no orphan objects

#### 13.2 Showing microposts
##### 13.2.1 Rendering microposts
- rails db:migrate:reset = db:drop, db:create, db:migrate
- ActionView has a `time_ago_in_words` method (use it with the `helper` object in the console)

##### 13.2.2 Sample microposts
- the `take` method returns the number of model instances as defined by the argument

##### 13.2.3 Profile micropost tests
- Nesting syntax for `assert_select h1>img.gravatar`checks for an `img` tag with class `gravatar` inside a top-level heading tag (`h1`)

#### 13.3 Manipulating microposts
##### 13.3.1 Micropost access control
- Make controller methods available to all controllers by putting it in the ApplicationController

##### 13.3.2 Creating microposts
- the `pluralize` method can be used to pluralize words
- pass objects to partials using a hash with key equal to the desired name of hte variable in the partial, and value equal to the object

##### 13.3.3 A proto-feed
- If you pass raw SQL into an ActiveRecord method (eg .where), be careful of SQL injection. Consider using a ? to escape a variable.
- You can pass params to will_paginate to determine what page it goes to, and which controller/actions to use

##### 13.3.4 Destroying microposts
- We can direct towars the referring page (without having to explicitly say what it is eg `root_url`) using `request.referrer`
- `redirect_to request.referrer || root_url` is an alternative to `redirect_back(fallback_location: :root_url)`

##### 13.3.5 Micropost tests

#### 13.4 Micropost images
##### 13.4.1 Basic image upload
- Active Storage is used to to upload and handle files, including images
- Add it with `$ rails active_storage:install`, and then run the migration created
- The `has_one_attached` method allows us to associate an uploaded file with a given model (and `has_many_attached`)
- To allow file uploads in a HTML form, use a `file_field` tag
- Then add the file to the newly created object using the Active Storage `attach` method (likely in the controller create action)
- Once uploaded, we can render it using a <img> tag (or the `image_tag` helper in Rails)

##### 13.4.2 Image validation
- We should add constraints on the uploaded file eg size or type
- Active Storage doesn't offer much native support, but we can use the active_storage_validations gem in the backend
- Should also use client-side checks:
  - eg JS for restricting size
  - `accept` value in html `file_field`
- However, it is still possible to bypass front end validations by issuing direct POST requests using eg `curl`. This is why backend validations are essential

##### 13.4.3 Image resizing
- Resize images using the image manipulation program ImageMagick: `$ brew install imagemagick`, and gems `image_processing` and `mini_magick`
- imagemagick is only needed on dev if using Heroku for deployment, as it comes preinstalled in prod
- Then use Active Storage's `variant` method for creating transformed images, with the `resize_to_limit` option

##### 13.4.4 Image upload in production
- Using a cloud storage service to store files eg AWS S3 (see PDF for fuller notes & screenshots)
- Add aws-sdk-s3 gem to production env
- Sign up for AWS
- Create a user via AWS Identity and Access Management (AIM)
- Set up Heroku ENV variables
- Use them in a special YAML file for configuring storage options
- Add the Active Storage service configuration parameter
- deploy

#### 13.5 Conclusion
- Deploying to heroku:
  - `$ git push heroku`
  - `$ heroku pg:reset DATABASE`
  - `$ heroku run rails db:migrate`
  - `$ heroku run rails db:seed`

### 14 Following users
#### 14.1 The Relationship model
##### 14.1.1 A problem with the data model (and a solution)
- Add followers and followeds via a relationship table

##### 14.1.2 User/relationship associations
- We can set up a has_many relationship assocation as a different name through a class with a foreign key

##### 14.1.3 Relationship validations

##### 14.1.4 Followed users
- Add a second `has_many` association 'following' to access the users one user follows via the
`Relationship` table
- We use the additional `source` option here because we've used a different plural word ('following') for the singular 'followed', which Rails will not be able to register

##### 14.1.5 Followers
- Add the equivalent as before, but this time for followers
- We don't need to use a `source` option in the user model `has_many` association, because Rails
can understand 'followers' is plural of 'follower'
- running methods on user.following (like .include?) is more efficient because Rails arranges for the comparison to happen directly in the database, rather than pulling out all the followed users out of the db first

#### 14.2 A web interface for following users
##### 14.2.1 Sample following data

##### 14.2.2 Stats and a follow form
- using the `member` method in routes arranges for them to respond to URLs containing the ID. eg. '/users/1/following'
- The `collection` method in routes works without the id, eg for a URL to see ALL cases eg '/users/following'

##### 14.2.3 Following and followers pages

##### 14.2.4 A working follow button the standard way

##### 14.2.5 A working follow button with Ajax
- The previous section redirected back to the original page after the create or destroy actions in the Relationships controller
- Ajax (Async JS And Xml) allows web pages to send requests asynchronously to the server without leaving the page
- Do this in web forms by changing `local: true` to `remote: true` (this is `data-remote` in actual HTML)
- This tells Rails to allow the form to be handled by JS
- Then have to arrange for the Relationships controller to respond to Ajax requests using `respond_to` method
- In the block:
```
respond_to do |format|
  format.html { redirect_to user }
  format.js
end
```
only one of the lines gets executed
- Configuration is needed to make it work in browsers with JS disabled
- For Ajax requests, Rails uto calls a JS embedded Ruby file (.js.erb) with the same name as the action. Need to create these to update the user profile page upon being (un)followed. 
- In .js.erb files, Rails auto provides the jQuery helpers to manipulate the page using the DOM. 
- The `escape_javascript` method is needed to escape out the result when inserting HTML in a JS file

##### 14.2.6 Following tests
- For testing Ajax, use the `xhr: true` option (XmlHttpRequest)

#### 14.3

#### 14.4
