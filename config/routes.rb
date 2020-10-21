Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  put 'items/:item_id/sellers/:id', to:'sellers#add_item'

  resources :sellers, only: :create
  resources :customers

  resources :items

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
