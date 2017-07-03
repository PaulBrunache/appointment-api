Rails.application.routes.draw do
  root to: 'react_app#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      namespace :resource do
        get '/appointments',to: 'appointments#all'
        post '/appointments/new', to: 'appointments#create'
        post '/appointments/query', to: 'appointments#query'
      end
    end
  end
end
