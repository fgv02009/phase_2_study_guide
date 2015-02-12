require 'Faker'


20.times do
  Article.create(title: Faker::Lorem.word, content: Faker::Lorem.paragraph)
end

30.times do
  Category.create(title: Faker::Lorem.word)
end

articles = Article.all
categories = Category.all

articles.each do |article|
  # begin
    ArticleInCategory.create!(category: categories.sample, article: article)
    ArticleInCategory.create!(category: categories.sample, article: article)
  # rescue ActiveRecord::RecordInvalid => e
  #   puts "In rescue"
  #   retry
  # end
end
