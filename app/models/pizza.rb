class Pizza < ApplicationRecord
    has_many :toppings, dependent: :destroy
end
