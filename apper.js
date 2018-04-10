$(document).ready(function() {

  var makeCatalog = function(url){
  $.ajax({
    url: url,
    contentType: "application/json; charset=utf-8",
    dataType: "text",
    success: function(data) {
        var person = $.parseJSON(data);

        for (var i=0; i<person.length; ++i) {
        var $template = $($('#personTemplate').html());

            $template.find('img').attr("src", person[i]["picture"]);
            $template.find('h3').text(person[i]["name"]);
            $template.find('p').text(person[i]["description"].substring(0,80));
            $template.find('.numeral').text(person[i]["quantity"]);
            $template.find('.new').text(person[i]["category"]);

            $("<li></li>").append($template).appendTo("#gallery-items");

        }
      }
  });
  }


  $('#but').on('click', function() {


      $('input[required]').addClass('req');


      $('.int').each(function() {
        if ($(this).val() != '') {

          var NameL = $('input.int').val();

          if (NameL == 'Liza') {

            $("#gallery-items").empty();
            makeCatalog("data/liza.json");

          } else if (NameL == "Rima") {

            $("#gallery-items").empty();
            makeCatalog("data/rima.json");

          } else {

            $("#gallery-items").text("User not found");

          }

        }
      });


    });

  });
