class Api::V1::AdminsController <ApplicationController
    before_action :set_admin, only: [:edit, :update, :destroy]
    
    def index
        @admins = User.all
        render json: @admins
    end

    def new
        @admin = User.new
    end
        
    def create
        @admin = User.new(admin_params)
        
        if @admin.save
        render json: @admin, status: :created
        else
        render json: @admin.errors, status: :unprocessable_entity
        end
    end

    def destroy
        @admin.destroy
        head :no_content
    end

    def edit
        # Renderiza la vista de edición (puedes personalizar según tus necesidades)
        render json: @admin
    end

    def update
        if @admin.update(admin_params)
            render json: @admin
        else
            render json: @admin.errors, status: :unprocessable_entity
        end
    end

    private

    def admin_params
        params.require(:admin).permit(:email, :name, :created_at)
    end

    def set_admin
        @admin = User.find(params[:id])
    end
end