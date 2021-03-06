
<p>
  <div align="center">
    <img src="./readme/header.png" width="100%"/>
   </div>
 </p>
 
  # Disclaimer ๐
 `FYI, We arenโt facebook to collect your data!` ๐
 
 # About ๐
 A location tracking application for mobile devices built by The Boys as Minor Project. MapMe tracks your location and give you details on the route, average speed,time and distance covered. To track just tap on 'Start Tracking' and the app will now start collecting your coordinates and starts to draw PolyLines which are used to depict a route from one place to another. You can also view your tracked history and all these details are not collected by us, it is safely stored on your personal device.
 
 # What's in here? ๐ค
 - React Native :atom:
 - Async Storage ๐๏ธ
 - GoogleMaps API ๐บ๏ธ
 
 
<p>
  <div align="center">
    <img src="./readme/mockup.png" width="100%"/>
   </div>
 </p>
 
 
# How to Build the App ๐ฑ

## Fork the repo ๐ด

## Clone the repo ๐ป
```
git clone <url>
```
- example : `git clone https://github.com/swaaz/Mapme.git`

## Add API key before building ๐
We canโt afford Googleโs API for everyone. ๐ข
### Open [Google Developer Page](https://developers.google.com/maps/documentation/android-sdk/get-api-key)
copy the API key and paste it inside `~Mapme/app.json`
```
{
  "expo": {
   "name": "MapMe",
   "icon": "./assets/icons/logo.png",
   "version": "2.0.0",
   "slug": "MapMe",
   "ios": {
     "bundleIdentifier": "com.yourcompany.yourappname",
     "buildNumber": "1.0.0"
   },
   "android": {
     "package": "com.yourcompany.yourappname",
     "versionCode": 1,
        "config": {
          "googleMaps": {
              "apiKey": "" //Add the Google Map Android SDK API here
          }
      }
   }
  }
}
```
### Open [Weather API](https://openweathermap.org/api)
copy the API key and paste it inside `~Mapme/screens/HomeScreen.jsx` line number `97`
```
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${getCurrentLocation.latitude}&lon=${getCurrentLocation.longitude}&units=metric&appid=`) // Add the Weather API Key here
.then((response) => response.json())
.then((json) => setWeather({ temperature : json.main.temp, loaded : true}))
.catch((error) => console.error(error))
```
## Install Dependencies โ๏ธ
```
expo install
or 
npm install
```
## Now you're good to go! ๐ฅ
```
expo build
```
## If you think you can work and contribute to it and actually make something more cool out of it? ๐
Then check this [issue](https://github.com/swaaz/Mapme/issues/20)

### Resources ๐
- [Expo Documentation](https://docs.expo.io/)
- [React Native](https://reactnative.dev/)
- [Map View](https://docs.expo.io/versions/latest/sdk/map-view/)
- [Location API](https://docs.expo.io/versions/latest/sdk/location/)
