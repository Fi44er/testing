
import { YMaps, Map } from "react-yandex-maps";

const MapResult = () => {
    return (
        <YMaps>
            <div>My awesome application with maps!</div>
            <Map defaultState={{ center: [51.784580, 55.098728], zoom: 100 }} />
        </YMaps>
    )
}

export default MapResult