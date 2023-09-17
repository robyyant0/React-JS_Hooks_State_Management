import { ListKontak, FormKontak } from "./components";


function App() {
  return (
    <div style={{ padding: '30px' }}>
        <h1>Kontak App</h1>
        <hr />
        <FormKontak />
        <hr />
        <ListKontak />
    </div>
  );
}

export default App;
