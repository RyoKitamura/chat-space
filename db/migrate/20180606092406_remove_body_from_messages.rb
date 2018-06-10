class RemoveBodyFromMessages < ActiveRecord::Migration[5.0]
  def change
    remove_column :messages, :Body, :string
  end
end
