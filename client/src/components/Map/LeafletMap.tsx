import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./leafletMap.css";

type MapProps = {
  long: number;
  lat: number;
  description: string;
};
function LeafletMap({ long, lat, description }: MapProps) {
  const emojiIcon = L.divIcon({
    html: "📍",
    className: "emoji-marker",
    iconAnchor: [16, 32],
  });
  return (
    <MapContainer
      center={[lat, long]}
      zoom={10}
      scrollWheelZoom={true}
      className="mapContainer"
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
        attribution="&copy; CARTO"
      />
      <Marker position={[lat, long]} icon={emojiIcon}>
        <Popup>{description}</Popup>
      </Marker>
    </MapContainer>
  );
}
export default LeafletMap;
