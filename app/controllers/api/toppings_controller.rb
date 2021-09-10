class Api::ToppingsController < ApplicationController
    before_action :set_pizza
    before_action :set_topping, only: [:update, :destroy]

  def index
    render json: {piza: @pizza, toppings:@pizza.toppings}
  end

  def show
    render json: @topping
  end

  def create
    @topping = @pizza.toppings.new(topping_params)
    if (@topping.save)
      render json: @topping
    else
      render json: @topping.errors, status: 422
    end
  end


  def update
    if (@topping.update(topping_params))
      render json: @topping
    else
    end
  end

  def destroy
      render json: @topping.destroy
  end

  private

  def set_pizza
    @pizza = Pizza.find(params[:pizza_id])
  end

  def pizza_params
    params.require(:pizza).permit(:name, :description, :price)
  end

  def topping_params
    params.require(:topping).permit(:name, :category)
  end

  def set_topping
    @topping=@pizza.toppings.find(params[:id])
  end

end
