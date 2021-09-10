# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
pizza = Pizza.create(name: "Veggie Pizza", price:17.77, description:'The Holy Grail of pizzas for your veggie fanatic, it is piled high with...you guessed it! PEPPERS!!!')
pizza1 = Pizza.create(name: "Margherita Pizza", price:15.15, description:'Sadly many alcohol lovers see the name and confuse it with their favorite beverage. I do not reccommend drinking this one, its best chewed')
pizza2 = Pizza.create(name: "BBQ Chicken Pizza", price:18.28, description:'Sweet and savory, just like my sock collection')
pizza3 = Pizza.create(name: "Hawaiian Pizza", price:16.50, description:"Pizza! No pig being cooked in the dirt, but the darn tastiest pizza around")
pizza4 = Pizza.create(name: "Buffalo Pizza", price:16.99, description:"No Buffalos were harmed in the making of this pizza")
pizza5 = Pizza.create(name: "Pepperoni Pizza.", price:16.99, description:"Love pepperoni? Then you are looking at the right pizza...seriously, dont you dare look at the other choices...I see those eyes roaming! STOP!")

pizza.toppings.create(name:"Green pepper,", category:"veggie")
pizza.toppings.create(name:"Red pepper,", category:"veggie")
pizza.toppings.create(name:"Yellow pepper,", category:"veggie")
pizza.toppings.create(name:"Cayenne pepper,", category:"veggie")
pizza.toppings.create(name:"Onions,", category:"veggie")
pizza1.toppings.create(name:"Basil", category:"veggie")
pizza1.toppings.create(name:"Mozzarella", category:"dairy")
pizza2.toppings.create(name:"BBQ Chicken", category:"meat")
pizza3.toppings.create(name:"Ham", category:"meat")
pizza3.toppings.create(name:"Pineapple", category:"fruit")
pizza3.toppings.create(name:"Jalapeno pepper", category:"veggie")
pizza4.toppings.create(name:"Onion", category:"veggie")
pizza4.toppings.create(name:"Chicken", category:"meat")
pizza4.toppings.create(name:"Buffalo Sauce", category:"sauce")
pizza5.toppings.create(name:"pepperoni", category:"meat")
pizza5.toppings.create(name:"Cheese mix", category:"dairy")

