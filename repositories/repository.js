//repository.js для хранения запросов в одном месте, деление по модулям для удобства
import Airlines from "./Airlines";
import Flights from "./Flights";

export default ($axios) => ({
        airlines: Airlines($axios),
        flights: Flights($axios)
})