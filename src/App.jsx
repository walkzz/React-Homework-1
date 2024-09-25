import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import './App.css';
function App() {
    return (
        <div>
            <Header />
            <Menu />
            <main className="content">
                <h2>Main Content</h2>
                <p>Main content goes here.</p>
            </main>
            <Footer />
        </div>
    )
}
export default App;