require 'json'
require 'net/https'
require 'uri'

uri = URI.parse("https://raw.githubusercontent.com/Deathmax/bravefrontier_data/master/evo_list.json")
http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(uri.request_uri)

response = http.request(request)
response.body
response["header-here"] # All headers are lowercase

unit_list = JSON.parse(response.body)
puts unit_list.first
