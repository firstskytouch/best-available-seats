require "test_helper"

class Api::MovieControllerTest < ActionDispatch::IntegrationTest
  test "Create a New Movie" do
    post "/api/movie", params: {"title" => "The Last Duel", "year" => 2021, "summary" => "summary", "imdb" => "https://www.imdb.com/title/tt4244994/", "genre" => ["Action", "Comedy"]}
    assert_equal 200, status
    assert_response :success
    res = @response.parsed_body
    assert_equal "The Last Duel", res['title']
  end

  test "Get All Movie" do
    get "/api/movie"
    assert_equal 200, status
    assert_response :success
    res = @response.parsed_body
    assert_equal 2, res.length()
  end

  test "Get Movie Detail" do
    get "/api/movie"
    assert_equal 200, status
    assert_response :success
    res = @response.parsed_body
    assert_equal 2, res.length()

    get '/api/movie/%d' % res[0]['id']
    assert_equal 200, status
    assert_response :success
    res = @response.parsed_body
    assert_equal "MyString", res['title']
  end

  test "Delete a Movie" do
    get "/api/movie"
    assert_equal 200, status
    assert_response :success
    res = @response.parsed_body
    assert_equal 2, res.length()

    delete '/api/movie/%d' % res[0]['id']
    assert_equal 200, status
    assert_response :success
    res = @response.parsed_body
    assert_equal "Successfully deleted book", res['message']
  end

end
