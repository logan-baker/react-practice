class ApplicationController < ActionController::Base
  # make the controller throw a null session because we’re going to request json, which is different to the html (which is requested by default).
  protect_from_forgery with: :null_session
end
