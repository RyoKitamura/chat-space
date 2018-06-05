class AddBodyToMessages < ActiveRecord::Migration[5.0]
  def change
    add_column :messages, :body, :string
  end
end
