# config/initializers/resque.rb
require 'resque'
require 'resque-scheduler'

Resque.redis = 'localhost:6379' # Ajusta esto según la configuración de tu Redis
Resque.schedule = YAML.load_file(Rails.root.join('config', 'resque_schedule.yml'))
