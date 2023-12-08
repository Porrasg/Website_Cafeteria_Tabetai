# require_relative "boot"

# require "rails/all"

# # Require the gems listed in Gemfile, including any gems
# # you've limited to :test, :development, or :production.
# Bundler.require(*Rails.groups)

# module FinalProject
#   class Application < Rails::Application
#     # Initialize configuration defaults for originally generated Rails version.
#     config.load_defaults 7.0

#     # Configuration for the application, engines, and railties goes here.
#     #
#     # These settings can be overridden in specific environments using the files
#     # in config/environments, which are processed later.
#     config.after_initialize do
#       Rails.application.executor.wrap do
#         CleanupRestTableJob.set(wait: 1.minute).perform_later(reservation_id)
#       end
#     end
    
#     # config.time_zone = "Central Time (US & Canada)"
#     # config.eager_load_paths << Rails.root.join("extras")
#   end

# end

# require_relative "boot"

# require "rails/all"

# # Require the gems listed in Gemfile, including any gems
# # you've limited to :test, :development, or :production.
# Bundler.require(*Rails.groups)

# module FinalProject
#   class Application < Rails::Application
#     # Initialize configuration defaults for originally generated Rails version.
#     config.load_defaults 7.0

#     # Configuration for the application, engines, and railties goes here.
#     #
#     # These settings can be overridden in specific environments using the files
#     # in config/environments, which are processed later.
#     config.after_initialize do
#       Rails.application.executor.wrap do
#         # Provide a specific reservation_id here
#         reservation_id = 123 # Replace with an actual reservation_id

#         CleanupRestTableJob.set(wait: 1.minute).perform_later(reservation_id)
#       end
#     end
#     #
#     # config.time_zone = "Central Time (US & Canada)"
#     # config.eager_load_paths << Rails.root.join("extras")
#   end
# end

require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module FinalProject
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    config.after_initialize do
      Rails.application.executor.wrap do
        # Provide a specific reservation_id here
        reservation_id = 71 # Replace with an actual reservation_id

        CleanupRestTableJob.set(wait: 1.minute).perform_later(reservation_id)
      end
    end
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")
  end
end
