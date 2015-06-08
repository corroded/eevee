$(document).ready(function() {

  var units = [
               
               
               
               ];

  var unitInventory = $.totalStorage('unitInventory') || [];
  var evoMats = [];
  var totalEvoMats = {};

  render();

  $('#search-unit').select2({
    data: units
  }).on('change', function(selectedObject) {
    unitInventory.push(selectedObject.added);

    saveAndRender();
  });

  $('#clear-units').on('click', function() {
    unitInventory = [];
    evoMats = [];
    totalEvoMats = {};

    saveAndRender();
  });

  $('#unit-list').on('click', '.delete-unit', function(e) {
    e.preventDefault();

    unitInventory.splice($(this).attr('data-unit-index'), 1);
    saveAndRender();
    return false;
  });

  function saveAndRender() {
    saveUnits();
    render();
  }

  function saveUnits() {
    $.totalStorage('unitInventory', unitInventory);
  }

  function render() {
    tableBody = $('#unit-list tbody');
    tableBody.html('');

    $.each(unitInventory, function(index, unit) {
      tableRow = "<tr><td class='unit'><img class='unit-thumb' width='42' height='42' src='" + unit.thumbnail_url + "' /><span class='unit-name'>" + unit.text + "</span></td><td class='unit-cost'>" + unit.cost + "</td><td class='unit-materials'>" + renderEvoImages(unit.materials) + "</td><td class='actions'><a href='#' data-unit-index=" + index + " class='delete-unit btn btn-danger btn-sm'>Remove</a></td></tr>";
      tableBody.append(tableRow);
    });

    renderTotalEvoMatCounts();
    showTotalZelCost();
  }

  function renderEvoImages(materials) {
    materialString = '';
    $.each(materials, function(index, material) {
      materialString += renderEvoImage(material);
    });
    return materialString;
  }

  function renderEvoImage(material) {
    materialFileName = material.toLowerCase().replace(/ /g, '_') + '.png';
    return "<img src='images/" + materialFileName + "' alt='" + material + "' />";
  }

  function countEvoMats() {
    evoMats = [];
    totalEvoMats = {};

    $.each(unitInventory, function(index, unit) {
      evoMats.push(unit.materials);
    });

    // flatten the array
    evoMats = [].concat.apply([], evoMats);

    for(i = 0; i < evoMats.length; ++i) {
      if(!totalEvoMats[evoMats[i]])
        totalEvoMats[evoMats[i]] = 0;
      ++totalEvoMats[evoMats[i]];
    }
  }

  function renderTotalEvoMatCounts() {
    countEvoMats();

    $('.totem, .pot, .idol, .spirit, .nymph, .mimic, .bulb').text(0);

    for(key in totalEvoMats) {
      newKey = key.toLowerCase().replace(/\b([a-z])/g, ".$1");
      if(newKey == '.mimic') {
        newKey = '.plain .mimic';
      }

      $(newKey).text(totalEvoMats[key]);
    }
  }

  function showTotalZelCost() {
    var totalCost = 0;
    $('.unit-cost').each(function(index, unitCost) {
      unitCost = $(unitCost).text().replace(/,/g, '');
      if(unitCost.length > 0) {
        totalCost += parseInt(unitCost, 10);
      }
    });
    $('#total-cost').text(totalCost);
  }
});
