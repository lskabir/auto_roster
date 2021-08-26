class Car < ApplicationRecord
    belongs_to :origin

    def origin_id=(name)
        origin = Origin.find_or_create_by(name: name)
        self.origin = origin
    end

end
