import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ServiceOptions from "./pages/Service";
import Gallery from "./pages/Gallery";
import FormSection from "./pages/FormSection";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import { ModalProvider } from "./context/ModalContext";

function App() {
  return (
    <ModalProvider>
      <Navbar />
      <Home />
      <ServiceOptions />
      <Gallery />
      <FormSection />
      <Footer />
      <Modal />
    </ModalProvider>
  );
}

export default App;
