import CartProvider from "./components/Context/cartProvider";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import MainNavigationRoutes from "./components/Layout/MainNavigationRoutes";
import NavBar from "./components/Layout/Navbar";

function App() {
  return (
    <CartProvider>
      <div style={{ paddingBottom: "50px" }}>
        <NavBar />
        <Header />
        <MainNavigationRoutes />
      </div>
      <Footer />
    </CartProvider>
  );
}

export default App;