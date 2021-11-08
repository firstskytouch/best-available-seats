require "test_helper"
require 'json'


class BestSeatControllerTest < ActionDispatch::IntegrationTest
  # for a venue with 10 rows and 12 columns with all seats open, the best seat would be A6
  test "Get One Available Seat" do
    file = File.read('./test/controllers/data/1.json')
    params = JSON.parse(file)
    params["number_of_seats"] = 1

    post "/best_seat", params: params
    assert_equal 200, status
    assert_response :success
    res = @response.parsed_body

    assert_equal 1, res.length()
    assert_equal "a6", res[0]["id"]
  end

  #for a venue with 10 rows and 12 columns with all seats open, the best seat would be A6 because A5 and A6 is reserved
  test "Get One Available Seat with Reserved" do
    file = File.read('./test/controllers/data/2.json')
    params = JSON.parse(file)
    params["number_of_seats"] = 1

    post "/best_seat", params: params
    assert_equal 200, status
    assert_response :success
    res = @response.parsed_body

    assert_equal 1, res.length()
    assert_equal "a7", res[0]["id"]
  end
  
  #best open group of seats together. for a venue with 10 rows and 12 columns, for 3 seats, it would be A6, A7, and A5.
  test "Get Multiple Available Seat" do
    file = File.read('./test/controllers/data/1.json')
    params = JSON.parse(file)
    params["number_of_seats"] = 3

    post "/best_seat", params: params
    assert_equal 200, status
    assert_response :success
    res = @response.parsed_body

    assert_equal 3, res.length()
    assert_equal "a6", res[0]["id"]
    assert_equal "a7", res[1]["id"]
    assert_equal "a5", res[2]["id"]
  end

  #For 5 columns and 2 requested seats the best open seats - assuming the first row A is fully occupied and the second row B is fully open, would be B3 and B4.
  test "Get Multiple Available Seat with" do
    file = File.read('./test/controllers/data/3.json')
    params = JSON.parse(file)
    params["number_of_seats"] = 2

    post "/best_seat", params: params
    assert_equal 200, status
    assert_response :success
    res = @response.parsed_body

    assert_equal 2, res.length()
    assert_equal "b3", res[0]["id"]
    assert_equal "b4", res[1]["id"]
  end
end
