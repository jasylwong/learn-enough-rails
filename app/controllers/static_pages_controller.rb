class StaticPagesController < ApplicationController
  def home
    render html: 'home page!'
  end
  
  def help
    render html: 'help page!'
  end
end