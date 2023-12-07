# config/initializers/cors.rb

# ------------------------------------------
# Rails.application.config.middleware.insert_before 0, Rack::Cors do
#     allow do
#         origins '*' # Esto permitirá solicitudes desde cualquier dominio
#         resource '*', headers: :any, methods: [:get, :post, :put, :patch, :delete, :options, :head]
#     end
# end
# --------------------------------------------


# Rails.application.config.middleware.insert_before 0, Rack::Cors do
#     allow do
#         origins '*' # later change to the domain of the frontend app
#         resource '*',
#                 headers: :any,
#                 methods: %i[get post put patch delete options head],
#                 expose: [:Authorization]
#     end
# end

Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
        origins 'http://localhost:3005'
        resource '*',
        headers: ["Authorization"],
        expose: ["Authorization"],
        methods: [:get, :post, :put, :patch, :delete, :options, :head],
        max_age: 600
    end
end