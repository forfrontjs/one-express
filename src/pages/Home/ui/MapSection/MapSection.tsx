import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import styles from "./MapSection.module.scss";
import L from "leaflet";

const MapSection: React.FC = () => {
  const position: [number, number] = [42.87563257447988, 74.6262935];

  const customMarkerIcon = L.icon({
    iconUrl: "/src/assets/images/Vector.png",
    iconSize: [30, 40],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  });

  const CustomZoomControl = () => {
    const map = useMap();

    useEffect(() => {
      const attributionControl = document.querySelector(
        ".leaflet-control-attribution"
      );
      if (attributionControl) {
        attributionControl.remove();
      }

      const zoomControl = L.control
        .zoom({
          position: "bottomleft",
        })
        .addTo(map);

      // Настройка для горизонтального отображения
      const zoomControlContainer = document.querySelector(
        ".leaflet-control-zoom"
      );
      if (zoomControlContainer) {
        zoomControlContainer.classList.add(styles.customZoomControl);
      }

      return () => {
        map.removeControl(zoomControl);
      };
    }, [map]);

    return null;
  };

  return (
    <MapContainer
      center={position}
      zoom={20}
      className={styles.mapContainer}
      zoomControl={false}
    >
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />

      <Marker position={position} icon={customMarkerIcon}>
        <Popup>Бишкек, пр. Чуй 119/1</Popup>
      </Marker>

      <CustomZoomControl />
    </MapContainer>
  );
};

export default MapSection;
