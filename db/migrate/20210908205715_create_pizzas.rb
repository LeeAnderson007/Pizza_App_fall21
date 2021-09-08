class CreatePizzas < ActiveRecord::Migration[6.1]
  def change
    create_table :pizzas do |t|
      t.float :price
      t.string :name
      t.string :description

      t.timestamps
    end
  end
end
