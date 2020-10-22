class AddSellerToItems < ActiveRecord::Migration[6.0]
  def change
    add_reference :items, :seller, null: false, foreign_key: true
  end
end
