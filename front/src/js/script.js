// BUTTON FUNCTION

$("#btnShowData").click(function () {
  let country = $("input").val();
  let search = $("input[id=search]:checked", "#searchPart").val();

  if (country) {
    if (search === "country" || !search) {
      $.ajax({
        url: `https://restcountries.com/v3.1/name/${country}`,
        success: function (data) {
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

$("select").change(function () {
  select = $("select option:selected").val();

  console.log(select);
  $.ajax({
    url: `https://restcountries.com/v3.1/region/${select}`,
    success: function (data) {
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
  $.ajax({
    url: "https://restcountries.com/v3.1/all",
    success: function (data) {
      data.forEach((country) => {
        $("#country").append(
          `<li> Country: ${country.name.common} - Capital: ${country.capital} </li>`
        );
      });
    },
  });
}

getAllCountries();
