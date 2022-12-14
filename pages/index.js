import Hero from "../components/Hero/Hero";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import BgAnimation from "../components/BgAnimation/BgAnimation";
import Projects from "../components/Projects/Projects";
import Tech from "../components/technologies/Tech";
import Timeline from "../components/TimeLine/TimeLine";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Tech />
      <Timeline />
      <Footer />
    </Layout>
  );
}
