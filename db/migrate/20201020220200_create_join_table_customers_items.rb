class CreateJoinTableCustomersItems < ActiveRecord::Migration[6.0]
  def change
    create_join_table :customers, :items do |t|
      # t.index [:customer_id, :item_id]
      # t.index [:item_id, :customer_id]
    end
  end
end
