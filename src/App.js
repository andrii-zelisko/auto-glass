import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "./theme/theme";
import Navbar from "./component/Navbar";
import Hero from "./pages/Hero";
import Section from "./component/Section";
import About from "./pages/About";
import Services from "./pages/Services";
import Advantages from "./pages/Advantages";
import Companies from "./pages/Companies";
import Gallery from "./pages/Gallery";
import Footer from "./component/Footer";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <>
        <Hero />

        <Section id="about" title="Про компанію">
          <About />
        </Section>

        <Section id="services" title="Наші послуги">
          <Services />
        </Section>

        <Section id="brands" title="Виробники скла">
          <Companies />
        </Section>

        <Section id="advantages" title="Чому обирають нас">
          <Advantages />
        </Section>

        <Section id="gallery" title="Наші роботи">
          <Gallery />
        </Section>

        <Section id="contact" title="Контакти">
          <Contact />
        </Section>
      </>
      <Footer />
    </ThemeProvider>
  );
}