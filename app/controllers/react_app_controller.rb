class ReactAppController < ApplicationController
  layout "reactApp"

  def index
    @appointments = Appointment.all.as_json
    puts "#{@appointments}"
    @appointments
  end
end
