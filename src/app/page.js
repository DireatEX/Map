import Map from "./map";

export default function Home() {
  return (
    <main>
      <div style={{display:"flex"}}>
      <form style={{display:"flex", flexDirection:"column"}}>
        <label>Starting location
          <input/>
        </label>
        <label>Drop-off point
          <input/>
        </label>
        <button>Submit</button>
        <button>Reset</button>
      </form>
      <Map/>
      </div>
    </main>
  );
}
