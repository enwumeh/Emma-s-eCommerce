class Item < ApplicationRecord
  belongs_to :seller
  has_and_belongs_to_many :customers
end
