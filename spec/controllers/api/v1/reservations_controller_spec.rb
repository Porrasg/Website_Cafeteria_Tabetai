# RSpec.describe Api::V1::ReservationsController, type: :controller do
#     describe "GET index" do
#       it "returns a successful response" do
#         get :index
#         expect(response).to be_successful
#       end
  
#       it "assigns @reservations with all reservations" do
#         reservation = create(:reservation)
#         get :index
#         expect(assigns(:reservations)).to eq([reservation])
#       end
  
#       it "renders JSON with reservations" do
#         reservation = create(:reservation)
#         get :index
#         json_response = JSON.parse(response.body)
#         expect(json_response[0]["id"]).to eq(reservation.id)
#         # Agrega más expectativas según los atributos que desees verificar
#       end
#     end
  
#     describe "POST create" do
#       context "with valid parameters" do
#         it "creates a new reservation" do
#           expect {
#             post :create, params: { reservation: attributes_for(:reservation) }
#           }.to change(Reservation, :count).by(1)
#         end
  
#         it "sends a notification email" do
#           expect(NotifierMailer).to receive(:new_account).and_return(double(deliver_now: true))
#           post :create, params: { reservation: attributes_for(:reservation) }
#         end
  
#         it "returns a created response" do
#           post :create, params: { reservation: attributes_for(:reservation) }
#           expect(response).to have_http_status(:created)
#         end
#       end
  
#       context "with invalid parameters" do
#         it "does not create a new reservation" do
#           expect {
#             post :create, params: { reservation: attributes_for(:reservation, party: nil) }
#           }.not_to change(Reservation, :count)
#         end
  
#         it "returns an unprocessable entity response" do
#           post :create, params: { reservation: attributes_for(:reservation, party: nil) }
#           expect(response).to have_http_status(:unprocessable_entity)
#         end
  
#         it "returns error details in the response" do
#           post :create, params: { reservation: attributes_for(:reservation, party: nil) }
#           json_response = JSON.parse(response.body)
#           expect(json_response).to include("errors")
#         end
#       end
#     end
  
#     describe "DELETE destroy" do
#       it "destroys the requested reservation" do
#         reservation = create(:reservation)
#         expect {
#           delete :destroy, params: { id: reservation.id }
#         }.to change(Reservation, :count).by(-1)
#       end
  
#       it "returns a no content response" do
#         reservation = create(:reservation)
#         delete :destroy, params: { id: reservation.id }
#         expect(response).to have_http_status(:no_content)
#       end
#     end
#   end
  