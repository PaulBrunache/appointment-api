class Api::V1::Resource::AppointmentsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
        if params.has_key?(:time) && params.has_key?(:date) && params.has_key?(:description)
            @appointment = Appointment.new(time: params[:time],
            description: params[:description], date: params[:date])

            if @appointment.valid?
                @appointment.save!
            else
                render :json => { :errors => @model.errors.full_messages }
            end
        else
            render :json => { :errors => "Not sure what went wrong but something did" }
        end
    end

    def query
        if params.has_key?(:query)
             @query= Appointment.where("description LIKE ?" , "%#{farming}%" )
             render :json => @query.as_json
        else
            render :json => { :errors => "Something went wrong" }
        end
    end
    def all
        puts "in all action\n #{params}"
        @appointments = Appointment.all.as_json
        render :json => @appointments
    end
end