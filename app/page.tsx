async function getData() {
  const res = await fetch("http://localhost:3000/users", {
    cache: "no-store"
  });

  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <div>
      <h1>Clientes</h1>
      <pre>{ data.map((data:any) => data.name) }</pre>
    </div>
  );
}
