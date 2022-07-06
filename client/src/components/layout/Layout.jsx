import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
