class Appointment < ApplicationRecord
    validates :date, presence: true
    validates :time, presence: true
    validates :description, presence: true
end
