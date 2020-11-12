## Async development

* [Presentation](https://sulemanof.github.io/js-lectures/async-development/presentation/#/)
* Weather app
  * Go to [Weather stack](https://weatherstack.com/) and create account
  * Clone [this](https://github.com/tr3v3r/weather-app) repository
  * Using [Weather stack api](https://weatherstack.com/documentation) fetch weather for the data from input
  * Render weather for each city in the table
  * If weather for city has already fetched - replace it
  * On **Clear** button press - clear table
  * If table has no raws - hide it


<img src="./assets/weather-app.png" width="400">

## Hometask
* Clone your **TMS-your-name** repository
* Create folder with name **weather-app** in master branch
* Copy files from repository from *class work* to **weather-app** folder
* push your changes into master
* Create and switch to branch with name **weather-app**
* Open **weather-app** folder in your VSCode / WebStorm
* Go to [locationiq](https://locationiq.com/) and create account
* Take **lat, lan** data from weather api response and using **locationiq** [api](https://locationiq.com/docs#forward-geocoding) put map under the table with marker on the folowing location.

## Exampe 
* After fetching weather data for *New York* you'll get response like:
```
{
    "request": {
        "type": "City",
        "query": "New York, United States of America",
        "language": "en",
        "unit": "m"
    },
    "location": {
        "name": "New York",
        "country": "United States of America",
        "region": "New York",
        "lat": "40.714",
        "lon": "-74.006",
...
```
* Take **lat**(latitude) and **lan**(longitude) and render map with marker on this point

## DOM. BOM

* [Presentation](https://slides.com/danielsuleiman/dombom/#/)
* Notifications
  * Clone [this](https://github.com/tr3v3r/notification) repository
  * Notification must be shown after page loads and hide after 5 seconds.
  * Closing icon. Click on it closes the component
  * Checkbox that disables notification and sets a flag into local storage. If the flag is set, component won't be shown when the page reloads
  * Add logic for arrows ( left/ right ). Change notification text and active dot.
  * Keyboard support. Component supports keyboard control: switching back and forward, closing by clicking on the cross.

<img src="./assets/notification.png" width="400">

## Hometask ( Upgrade you weather-app)
### To do this task please complete class fork from [previous classes](https://github.com/tr3v3r/TMS/blob/master/Async.md)
* Clone your **TMS-your-name** repository
* Create and switch to branch with name **weather-app-bom**
* Add a **My weather** button, clicking it wil interact with **navigator.geolocation** API and fetch weather data of your current location;
* Store fetched data at the localstorage and render it in the a table;
* Update your data from a localstorage with the newest from the server when access the app; ( When open page you shuld take all saved cities and re-fetch data )
* After competing the task maket pull request for review


