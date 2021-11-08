Rails.application.routes.draw do
  resources :genreships
  root 'pages#home'
  namespace :api do
    resources :best_seats, only: [:create]
    resources :genre
    resources :movie
  end
end
