// BUTTON FUNCTION

$("#btnShowData").click(function () {
  let country = $("input").val();
  let search = $("input[id=search]:checked", "#searchPart").val();

  if (country) {
    $("#btnShowData").addClass("visually-hidden");
    $("#btnLoading").removeClass("visually-hidden");
    if (search === "country" || !search) {
      $.ajax({
        url: `https://restcountries.com/v3.1/name/${country}`,
        success: function (data) {
          $("#btnShowData").removeClass("visually-hidden");
          $("#btnLoading").addClass("visually-hidden");
          data.forEach((country) => {
            $("#country").html(
              `<li> Country: ${country.name.common} - Capital: ${country.capital} </li>`
            );
          });
        },
      });
    } else if (search === "capital") {
      $.ajax({
        url: `https://restcountries.com/v3.1/capital/${country}`,
        success: function (data) {
          $("#btnShowData").removeClass("visually-hidden");
          $("#btnLoading").addClass("visually-hidden");
          data.forEach((country) => {
            $("#country").html(
              `<li> Country: ${country.name.common} - Capital: ${country.capital} </li>`
            );
          });
        },
      });
    }
  } else {
    getAllCountries();
  }
});

// RESET FUNCTION

$("#btnReset").click(function () {
  getAllCountries();
});

// SELECT FUNCTION

$("select").change(function () {
  select = $("select option:selected").val();

  console.log(select);
  $.ajax({
    url: `https://restcountries.com/v3.1/region/${select}`,
    success: function (data) {
      $("li").remove();
      data.forEach((country) => {
        console.log(select);
        $("#country").append(
          `<li> Country: ${country.name.common} - Capital: ${country.capital} </li>`
        );
      });
    },
  });
});

// API REQUEST + LIST ALL

function getAllCountries() {
  $("#btnShowData").addClass("visually-hidden");
  $("#btnLoading").removeClass("visually-hidden");
  $.ajax({
    url: "https://restcountries.com/v3.1/all",
    success: function (data) {
      $("#btnShowData").removeClass("visually-hidden");
      $("#btnLoading").addClass("visually-hidden");
      $("li").remove();
      data.forEach((country) => {
        $("#country").append(
          `<li> Country: ${country.name.common} - Capital: ${country.capital} </li>`
        );
      });
    },
  });
}

getAllCountries();
