require "test_helper"

class Api::GenreControllerTest < ActionDispatch::IntegrationTest
  test "Create a New Genre" do
    post "/api/genre", params: {"name" => "Comedy"}
    assert_equal 200, status
    assert_response :success
    res = @response.parsed_body
    assert_equal "Comedy", res['id']
  end

  test "Get All Genre" do
    get "/api/genre"
    assert_equal 200, status
    assert_response :success
    res = @response.parsed_body
    assert_equal 2, res.length()
  end

  test "Get Genre Detail" do
    get "/api/genre/Action"
    assert_equal 200, status
    assert_response :success
    res = @response.parsed_body
    assert_equal "Action", res['id']
  end

  test "Delete a Genre" do
    delete "/api/genre/Action"
    assert_equal 200, status
    assert_response :success
    res = @response.parsed_body
    assert_equal "Successfully deleted book", res['message']
  end

end
