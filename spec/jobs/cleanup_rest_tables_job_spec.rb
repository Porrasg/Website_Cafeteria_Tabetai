# require 'rails_helper'

# RSpec.describe CleanupRestTablesJob, type: :job do
#   describe '#perform' do
#     let!(:reserved_table) { create(:rest_table, status: 'reserved', reservation_id: 1) }
#     let!(:available_table) { create(:rest_table, status: 'available', reservation_id: nil) }

#     it 'updates reserved tables to available status and clears reservation_id' do
#       expect(RestTable.count).to eq(2)

#       expect {
#         CleanupRestTablesJob.perform_now
#         reserved_table.reload
#         available_table.reload
#       }.to change { reserved_table.status }.from('reserved').to('available')
#         .and change { reserved_table.reservation_id }.from(1).to(nil)
#         .and not_change { available_table.status }
#         .and not_change { available_table.reservation_id }

#       expect(Rails.logger).to have_received(:info).with("Reservation 1 cleaned up.").once
#       expect(Rails.logger).to have_received(:info).with("2 reservations cleaned up.").once
#     end

#     it 'logs cleanup information for each table' do
#       expect {
#         CleanupRestTablesJob.perform_now
#       }.to output(/Reservation #{reserved_table.reservation_id} cleaned up./).to_stdout
#         .and output(/2 reservations cleaned up./).to_stdout
#     end
#   end
# end

