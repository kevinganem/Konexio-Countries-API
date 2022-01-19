$("#btnShowData").click(function () {
    let country = $("input").val();
    $.ajax({
        url: `https://restcountries.com/v3.1/name/${country}`,
        success: function (data) {
            data.forEach((country) => {
                    $("#country").html(`<li> Country: ${country.name.common} - Capital: ${country.capital} </li>`);
            })
        },
    });
});

function getAllCountries() {
    $.ajax({
        url: "https://restcountries.com/v3.1/all",
        success: function (data) {
            data.forEach((country) => {
                $("#country").append(`<li> Country: ${country.name.common} - Capital: ${country.capital} </li>`)
            })
        }
    })
}

getAllCountries();