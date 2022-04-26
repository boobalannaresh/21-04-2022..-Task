const getcountries = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restcountries.com/v3.1/all");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () =>{
        const countries = xhr.response;
        for( let country of countries)
        console.log("All countries", country.name);
        for( let country of countries)
        console.log("All countries", country.population);
    };
};
getcountries(); 