require 'nokogiri'

file = File.open('tst.html', 'rb')
contents = file.read

doc = Nokogiri::HTML(contents)

rows = doc.xpath('//table/tbody/tr')

data = []

rows.each_with_index do |row, index|
  cols = row.xpath('td')
  data << {
    id: index,
    stars: cols[0].xpath('span/text()').to_s,
    thumbnail_url: cols[0].xpath('a/img/@src').to_s,
    text: cols[1].xpath('b/a/text()').to_s,
    cost: cols[3].text().strip,
    materials: cols[4].xpath('a').map { |a| a['title'] }
  }
end

puts data
