require 'resque/server'

Rails.application.routes.draw do
  get 'private/test'
  
  devise_for :users, path: '', path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    registration: 'signup'
  },
  controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post '/reservations', to: 'reservations#create'

  namespace :api do
    namespace :v1 do
      resources :clients,  only: [:index, :new, :create, :destroy, :edit, :update]
      resources :reservations, only: [:index, :new, :create, :destroy, :edit, :update]
      resources :rest_tables, only: [:index, :new, :create, :destroy, :edit, :update]
      resources :admins, only: [:index, :new, :create, :destroy, :edit, :update]
    end
  end

  namespace :api do
    namespace :v1 do
      resources :reservations do
        post 'send_email', on: :collection
      end
    end
  end
  
  

  mount Resque::Server.new, at: '/resque'
  
end
