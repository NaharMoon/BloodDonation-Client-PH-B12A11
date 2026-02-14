import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import Featured from "../components/home/Featured";
import ContactUs from "../components/home/ContactUs";

export default function Home() {
  return (
    <div className="page-bg">
      <Hero />
      <Stats />
      <Featured />
      <ContactUs />
    </div>
  );
}
