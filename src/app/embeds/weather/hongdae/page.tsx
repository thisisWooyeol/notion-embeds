import { WeatherScript } from '@/app/embeds/weather/weatherwidget-script';

const HongdaeWeatherWidget = () => {
  return (
    <>
      <WeatherScript />
      <a
        className="weatherwidget-io"
        href="https://forecast7.com/en/37d55126d91/hapjeong-dong/"
        data-label_1="홍대/합정"
        data-label_2="날씨"
        data-icons="Climacons Animated"
        data-theme="pure"
      />
    </>
  );
};

export default HongdaeWeatherWidget;
