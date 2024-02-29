import Box from "./components/TopBox";
import Info from "./components/Info";
import Map from "./components/Map";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Box/>
      <Info/>
      <Map/>
    </main>
  );
}
