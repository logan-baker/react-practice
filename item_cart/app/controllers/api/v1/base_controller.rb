# base_controller will have global rules that apply to all of our API-based controllers.
class Api::V1::BaseController < ApplicationController
  respond_to :json
end
# The respond_to method ensures that all actions from the controllers, which inherit from the base controller, will respond with JSON. This is the standard approach for building JSON-based APIs. After we’re done with the base controller, we can create a controller for our Item model. We’ll make the controller inherit from the base controller and put the standard index, create update and destroy actions.
