class CreatePeople < ActiveRecord::Migration
  def change
    create_table :people do |t|
      t.string :name
      t.integer :id_number
      t.string :designation
      t.string :qualification
      t.integer :teaching_experience
      t.string :industry_experience
      t.string :research_interest
      t.text :description

      t.timestamps null: false
    end
  end
end
