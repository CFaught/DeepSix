Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'home#index'

  # For jwt authentication
  post 'authenticate', to: 'authentication#authenticate'

  namespace :api do
    namespace :v1 do
      resources :dives
    end
  end
end
