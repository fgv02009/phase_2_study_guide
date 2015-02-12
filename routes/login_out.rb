get '/' do
  # Look in app/views/index.erb
  erb :index
end

post "/login" do
  authenticated = User.authenticate(params[:login][:email], params[:login][:password])
  puts "[LOG] authenticated: #{authenticated}"
  if authenticated
    @user = User.find_by(email: params[:login][:email])
    session[:user_id] = @user.id
    redirect "/secret-page"
  else
    redirect "/"
  end
end

get "/secret-page" do
  @user = User.find(session[:user_id])

  if @user
    erb :secret
  else
    redirect "/"
  end
end

get "/logout" do
  session[:user_id] = nil

  redirect "/"
end
