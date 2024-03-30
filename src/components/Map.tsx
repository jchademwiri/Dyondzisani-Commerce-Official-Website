interface Map {
  address: string;
  location: string;
}

const Map = ({ address, location }: Map) => {
  return (
    <div className="relative flex min-h-[300px] w-full items-end justify-start overflow-hidden rounded-lg bg-muted-foreground/40 px-10 py-4 sm:mr-10 md:p-12">
      <iframe
        width="100%"
        height="100%"
        className="absolute inset-0  "
        title="map"
        src={location}
      ></iframe>
      <div className="relative flex w-full flex-wrap rounded bg-secondary/90 p-2 shadow-md md:p-6">
        <div className="">
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
