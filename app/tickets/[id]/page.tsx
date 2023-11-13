import { error } from "console";

async function getTicket(id: any) {
  const res = await fetch(`http://localhost:7000/tickets/${id}`, {
    next: { revalidate: 30 },
  });
  return res.json();
}

export default async function TicketsDetails({
  params,
}: {
  params: { id: number };
}) {
  const data = await getTicket(params.id);
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
