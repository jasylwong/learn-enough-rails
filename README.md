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
#### 6.2.1 A validity test
#### 6.2.2 Validating presence
#### 6.2.3 Length validation
#### 6.2.4 Format validation
See p328 for Regex overview table, or use Rubular


354