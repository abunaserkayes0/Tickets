async function getTicket(slug: any) {
  const res = await fetch("http://localhost:7000/tickets/" + slug, {
    next: {
      revalidate: 15,
    },
  });
  return res.json();
}

export default async function TicketsDetails({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const data = await getTicket(slug);
  console.log(data);

  return (
    <main>
      <nav>
        <h2>TicketDetails</h2>
      </nav>
      <div className="card">
        <h3>{data.title}</h3>
        <small>{data.user_email}</small>
        <p>{data.body.slice(0, 300)}</p>
        <div className={`pill ${data.priority}`}>{data.priority}</div>
      </div>
    </main>
  );
}
