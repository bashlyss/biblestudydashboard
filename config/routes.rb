Rails.application.routes.draw do

  root 'pages#index'
  get 'signup/', to: 'pages#noauth'
  get 'login/', to: 'pages#noauth'
  post 'login/', to: 'users#login'
  post 'logout/', to: 'users#logout'
  get 'docs/:id', to: 'docs#getDocument'

  #scope '/api' do
    resources :groups do
      resources :docs
    end
    resources :users, :bible
  #end


  get '*catchall', to: 'pages#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
