import Airlines from "./Airlines";
import Flights from "./Flights";

export default ($axios) => ({
        airlines: Airlines($axios),
        flights: Flights($axios)
})