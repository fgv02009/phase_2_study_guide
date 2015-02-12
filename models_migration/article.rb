require 'faker'
class Article < ActiveRecord::Base
  has_many :article_in_categories
  has_many :categories, through: :article_in_categories
  before_create :generate_secret_key

  validates :secret_key, uniqueness: :true


  def generate_secret_key
    self.secret_key = "#{Faker::Number.number(10)}"
  end
end
