class UsersController < ApplicationController
  def new
    debugger
  end

  def index
  end
  
  def show
    @user = User.find(params[:id])
  end
end