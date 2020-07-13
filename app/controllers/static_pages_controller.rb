class StaticPagesController < ApplicationController
  def home
    render html: "Home page!!!"
  end

  def help
  end
end
