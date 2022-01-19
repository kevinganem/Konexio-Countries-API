// BUTTON FUNCTION

$("#btnShowData").click(function () {
    let country = $("input").val();
    let search = $('input[id=search]:checked', '#searchPart').val()

    console.log(country);
    console.log(search);
    console.log(country);
    if (country) {
        if (search === 1 || !search) {
            console.log(country);
            $.ajax({
                url: `https://restcountries.com/v3.1/name/${country}`,
                success: function (data) {
                    data.forEach((country) => {
                            $("#country").html(`<li> Country: ${country.name.common} - Capital: ${country.capital} </li>`);
                    })
                },
            });
        } else {
            $.ajax({
                url: `https://restcountries.com/v3.1/capital/${country}`,
                success: function (data) {
                    data.forEach((country) => {
                            $("#country").html(`<li> Country: ${country.name.common} - Capital: ${country.capital} </li>`);
                    })
                },
            });
        };
    } else {
        getAllCountries();
    }
});

// API REQUEST + LIST ALL

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