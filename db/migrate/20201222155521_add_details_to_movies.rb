class AddDetailsToMovies < ActiveRecord::Migration[6.0]
  def change
    add_column :movies, :title, :string
    add_column :movies, :rated, :string
    add_column :movies, :released, :string
    add_column :movies, :runtime, :string
    add_column :movies, :genre, :string
    add_column :movies, :language, :string
    add_column :movies, :awards, :string
    add_column :movies, :director, :string
    add_column :movies, :writer, :string
    add_column :movies, :actors, :string
    add_column :movies, :plot, :text
    add_column :movies, :rating, :float
  end
end
