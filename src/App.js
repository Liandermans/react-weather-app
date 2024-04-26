import "./App.css";
import Header from "./Header";
import Form from "./Form";
import WeatherToday from "./WeatherToday";
import WeatherForecast from "./WeatherForecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="Weather">
        <Header />
        <Form />
        <WeatherToday />
        <WeatherForecast />
        <Footer />
      </div>
    </div>
  );
}
