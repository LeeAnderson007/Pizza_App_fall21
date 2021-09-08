class Api::PizzasController < ApplicationController
  before_action :set_pizza, only: [:update, :show, :destroy]

  def index
    render json: Pizza.all
  end

  def create
    @pizza = Pizza.new(pizza_params)
    if (@pizza.save)
      render json: @pizza
    else
    end
  end

  def show
    render json: @pizza
  end

  def update
    if (@pizza.update(pizza_params))
      render json: @pizza
    else
    end
  end

  def destroy
      render json: @pizza.destroy
  end

  private

  def set_pizza
    @pizza = Pizza.find(params[:id])
  end

  def pizza_params
    params.require(:pizza).permit(:name, :description, :price)
  end
end