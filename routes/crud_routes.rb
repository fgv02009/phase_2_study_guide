get '/dogs' do
  #list dogs
end

get '/dogs/new' do
  #render form for dog
end

post '/dogs' do
  #take info from form and create new dog
end

get '/dogs/:id'
  #show specific dog
end

get '/dogs/:id/edit' do
  #render edit form
end

put '/dogs/:id' do
  #take edit info and update db
end

delete '/dogs/:id' do
  #delete/destroy from db
end


