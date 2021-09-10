# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
pizza = Pizza.create(name: "Veggie Pizza", price:17.00, description:'google')
pizza1 = Pizza.create(name: "Margherita Pizza", price:15.00, description:'my eyes')
pizza2 = Pizza.create(name: "BBQ Chicken Pizza", price:18.00, description:'internet')
pizza3 = Pizza.create(name: "Hawaiian Pizza", price:16.50, description:"pizza!")
pizza4 = Pizza.create(name: "Buffalo Pizza", price:16.99, description:"pizza is the best!")
pizza5 = Pizza.create(name: "Pepperoni Pizza.", price:16.99, description:"pizza is the best!")

pizza.toppings.create(name:"peppers,", category:"veggie")
pizza.toppings.create(name:"Onions,", category:"veggie")
pizza1.toppings.create(name:"basil", category:"veggie")
pizza2.toppings.create(name:"bhicken", category:"meat")
pizza3.toppings.create(name:"Ham", category:"meat")
pizza4.toppings.create(name:"onion", category:"veggie")
pizza5.toppings.create(name:"pepperoni", category:"meat")

