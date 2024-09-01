import Button from "./components/Button";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="text-center bg-[#38bdf8] text-white text-5xl p-5">Hello world!</h1>
      <div className="text-center m-5">
        <Button title="Click" />
        <Button title="Login" />
        <Button title="Add Todo" />
      </div>

      <div className="flex justify-center gap-5 flex-wrap">
        <Card
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          title="Shoes"
          description="Best shoes in the world from Saddar Lunda Bazaar, Karachi"
        />
        <Card
          src="https://images.unsplash.com/photo-1721332149346-00e39ce5c24f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
          title="Camera"
          description="Original DSLR camera bought from Sheershah, Karachi"
        />
        <Card
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          title="Shoes"
          description="Best shoes in the world from Saddar Lunda Bazaar, Karachi"
        />
        <Card
          src="https://images.unsplash.com/photo-1721332149346-00e39ce5c24f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
          title="Camera"
          description="Original DSLR camera bought from Sheershah, Karachi"
        />
        <Card
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          title="Shoes"
          description="Best shoes in the world from Saddar Lunda Bazaar, Karachi"
        />
        <Card
          src="https://images.unsplash.com/photo-1721332149346-00e39ce5c24f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
          title="Camera"
          description="Original DSLR camera bought from Sheershah, Karachi"
        />
        <Card
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          title="Shoes"
          description="Best shoes in the world from Saddar Lunda Bazaar, Karachi"
        />
        <Card
          src="https://images.unsplash.com/photo-1721332149346-00e39ce5c24f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
          title="Camera"
          description="Original DSLR camera bought from Sheershah, Karachi"
        />
      </div>
    </>
  );
}

export default App;
