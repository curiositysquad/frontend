export function getCurWeatherByLatLng(lat, lng) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=imperial&appid=1a08ff8281fd0ef09ac0112c2ddf0f57`)
    .then(res => res.json());
}