class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user
            login(@user)
            render 'api/users/show'
        else
            render json: {error: "invalid credentials"}.to_json, status: 420
        end
    end

    def destroy
        if logged_in?
            logout
            render json: {text: "Logged Out!"}.to_json
        else
            render json: {error: "Nobody logged in"}.to_json, status: 420
        end


    end

end