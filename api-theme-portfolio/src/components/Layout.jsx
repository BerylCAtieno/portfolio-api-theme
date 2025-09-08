import Header from "./Header";
import Footer from "./Footer";


function Layout({children}) {
    return (
    <div className="layout-container">
      <Header />
        <main className="main">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout

// TODO: move theme mode, nav bar styling to index.css