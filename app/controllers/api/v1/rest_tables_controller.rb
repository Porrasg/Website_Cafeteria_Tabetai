class Api::V1::RestTablesController <ApplicationController
    before_action :set_table, only: [:edit, :update, :destroy]

    def index
        @tables = RestTable.all
        render json: @tables
    end
    
    def new
        @table = RestTable.new
    end
        
    def create
        @table = RestTable.new(table_params)
        
        if @table.save
            render json: @table, status: :created
        else
            render json: @table.errors, status: :unprocessable_entity
        end
    end
    
    def destroy
        @table.destroy
        head :no_content
    end
    
    def edit
        # Renderiza la vista de edición (puedes personalizar según tus necesidades)
        render json: @table
    end
    
    def update
        if @table.update(table_params)
            render json: @table
        else
            render json: @table.errors, status: :unprocessable_entity
        end
    end
    #---------------------------------------------------------------------------------#
    
    private
    
    def table_params
        params.require(:rest_tables).permit(:name_table, :spaces, :status, :reservation_id)
    end
    
    def set_table
        @table = RestTable.find(params[:id])
    end
    
end