Rails.application.routes.draw do
  root 'pages#home'
  namespace :api do
    resources :best_seats, only: [:create]
  end
end
