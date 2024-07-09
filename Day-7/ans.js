// Fetch data from the REST countries API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(countries => {
    // a. Get all the countries from Asia continent /region using Filter method
    const asianCountries = countries.filter(country => country.region === 'Asia');
    console.log('Asian Countries:', asianCountries);

    // b. Get all the countries with a population of less than 2 lakhs using Filter method
    const smallPopulationCountries = countries.filter(country => country.population < 200000);
    console.log('Countries with Population less than 2 lakhs:', smallPopulationCountries);

    // c. Print the following details name, capital, flag, using forEach method
    countries.forEach(country => {
      console.log(`Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flags.png}`);
    });

    // d. Print the total population of countries using reduce method
    const totalPopulation = countries.reduce((sum, country) => sum + country.population, 0);
    console.log('Total Population:', totalPopulation);

    // e. Print the country that uses US dollars as currency
    const usdCountries = countries.filter(country => {
      if (country.currencies) {
        return Object.values(country.currencies).some(currency => currency.name === 'United States dollar');
      }
      return false;
    });
    console.log('Countries using US Dollars:', usdCountries);
  })
  .catch(error => console.error('Error fetching data:', error));
