class JwtDenylist < ApplicationRecord
    include Devise::JWT::RevocationStrategies::Denylist
    self.table_name = 'jwt_denylist'

    validates :jti, presence: true

    def self.add_jti(jti)
        create(jti: jti)
    end
end