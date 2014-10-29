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

unit_array = []

unit_list.each do |unit_id, unit_hash|
  unit_array << {
    id: unit_id,
    stars: "*" * unit_hash['evo_rarity'],
    thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_#{unit_id}.png",
    text: unit_hash['name'],
    cost: unit_hash['amount'],
    materials: unit_hash['mats']
  }
end

puts unit_array

#{
#  "amount"=>200000,
#  "evo_name"=>"Mech Cannon Grybe",
#  "evo_rarity"=>5,
#  "mats"=>["Thunder Totem", "Thunder Idol", "Thunder Idol", "Thunder Pot", "Thunder Pot"],
#  "name"=>"Mech Arms Grybe",
#  "rarity"=>4
#}
#
#{
#  id: 0,
#  stars: "**",
#  thumbnail_url: "http://img3.wikia.nocookie.net/__cb20131008160641/bravefrontierglobal/images/thumb/f/f4/Unit_ills_thum_10011.png/42px-Unit_ills_thum_10011.png",
#  text: "Fencer Vargas",
#  cost: "2,500",
#  materials: ["Fire Nymph"]
#},
