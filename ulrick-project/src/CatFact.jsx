
export default function CatFact() {

    let CatFact= fetch('https://catfact.ninja/fact')

  return (
    <div className="cat-fact">
      <h2>Random Cat Fact</h2>
      <p>The largest breed of cat is the Ragdoll with males weighing in at 1 5 to 20 lbs. The heaviest domestic cat on record was a neutered male tabby named Himmy from Queensland, Australia who weighed 46 lbs. 1 5 oz."</p>
    </div>
  );
}