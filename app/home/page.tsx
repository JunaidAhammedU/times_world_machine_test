import CountryList from "@/components/CountryList";
import HeroSlider from "@/components/HeroSlider";

export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto p-6">
      <HeroSlider />

      <CountryList />
    </main>
  );
}