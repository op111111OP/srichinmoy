import { Map, Marker, ZoomControl } from "pigeon-maps";

export default function MyMap() {
  return (
    <Map height={500} defaultCenter={[50.91421, 34.83376]} defaultZoom={17}>
      <Marker width={80} anchor={[50.91421, 34.83376]} />
      <ZoomControl />
    </Map>
  );
}
