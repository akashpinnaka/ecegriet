class PeopleController < ApplicationController

  before_action :find_person, only: [:show, :edit, :update, :destroy]

	def index
    
  end

  def show
    
  end

  def new
    @person = Person.new
  end

  def create
    @person = Person.new person_params
    if @person.save
      redirect_to new_person_path
      flash[:notice] = "#{}{@person} is successfully added to the list."
    else
      render "new"
      flash[:notice] = "Unable to add #{@person}. Please check for errors."
    end
  end

  def edit
    
  end

  def update
    if @person.update person_params
      redirect_to @person
      flash[:notice] = "#{@person} is successfully updated."
    else
      render "edit"
      flash[:notice] = "Unable to update #{@person}. Please check for errors."
    end
  end

  def destroy

  end


  private

  def person_params
    params.require(:person).permit(:name, :id_number, :designation, :qualification, :teaching_experience, :industry_experience, :research_interest, :description)
  end

  def find_person
    @person = Person.find(params[:id]);
  end
end
