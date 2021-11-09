require "test_helper"

class Api::GenreControllerTest < ActionDispatch::IntegrationTest
  test "Create a New Genre" do
    post "/api/genre", params: {"name" => "Comedy"}
    assert_equal 200, status
    assert_response :success
    res = @response.parsed_body
    assert_equal "Comedy", res['name']
  end

  test "Get All Genre" do
    get "/api/genre"
    assert_equal 200, status
    assert_response :success
    res = @response.parsed_body
    assert_equal 2, res.length()
  end

  test "Get Genre Detail" do
    get "/api/genre"
    assert_equal 200, status
    assert_response :success
    res = @response.parsed_body
    assert_equal 2, res.length()

    get "/api/genre/%d" % res[0]["id"]
    assert_equal 200, status
    assert_response :success
    res = @response.parsed_body
  end

  test "Delete a Genre" do
    get "/api/genre"
    assert_equal 200, status
    assert_response :success
    res = @response.parsed_body
    assert_equal 2, res.length()

    delete "/api/genre/%d" % res[0]["id"]
    assert_equal 200, status
    assert_response :success
    res = @response.parsed_body
    assert_equal "Successfully deleted book", res['message']
  end

end
