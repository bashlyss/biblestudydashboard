Rails.application.routes.draw do
  get 'users/new'

  root 'pages#index'

  namespace :api do
      resources :groups do
        resource :files
      end
      resources :users, :bible
  end
  get '*catchall', to: 'pages#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
