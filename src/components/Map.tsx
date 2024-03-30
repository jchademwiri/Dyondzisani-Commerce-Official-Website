interface Map {
  address: string;
  location: string;
}

const Map = ({ address, location }: Map) => {
  return (
    <div className="relative flex min-h-[300px] w-full items-end justify-start overflow-hidden rounded-lg bg-muted-foreground/50 p-12 sm:mr-10">
      <iframe
        width="100%"
        height="100%"
        className="absolute inset-0  "
        title="map"
        src={location}
      ></iframe>
      <div className="relative flex w-full flex-wrap rounded bg-secondary/90 py-6 shadow-md">
        <div className="px-6">
          <h2 className="title-font text-xs font-semibold tracking-widest text-muted-foreground">
            ADDRESS
          </h2>
          <p className="mt-1">{address}</p>
        </div>
      </div>
    </div>
  );
};
export default Map;
