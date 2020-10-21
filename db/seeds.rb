# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or create!d alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create!([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Customer.destroy_all
Item.destroy_all
Seller.destroy_all


@seller = Seller.create(username: 'admin', email: 'admin@email.com', password: 'elephant3')
puts "#{User.count} users created"

@item = Item.create!(name: 'bike', price: 70, seller: @seller)
@item = Item.create!(name: 'flat iron', price: 30, seller: @seller)
@item = Item.create!(name: 'smart watch', price: 80, seller: @seller)
@item = Item.create!(name: 'oven', price: 200, seller: @seller)
@item = Item.create!(name: 'multivitamins', price: 15, seller: @seller)
@item = Item.create!(name: 'smart tv', price: 70, seller: @seller)
@item = Item.create!(name: 'protein powder', price: 25, seller: @seller)



@customer = Customer.create!(name: "Billy Joe", address: '321 Oak Street, HI')
@customer = Customer.create!(name: "Peggy Sue", address: '123 Elm Road, CA')
@customer = Customer.create!(name: "Jamie Lynn", address: '567 Spruce Lane, CO')
@customer = Customer.create!(name: "Amy Beth", address: '987 Fern Way, WY')