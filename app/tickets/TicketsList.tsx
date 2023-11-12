async function getTickets() {
  const res = await fetch("http://localhost:7000/tickets", {
    next: {
      revalidate: 15,
    },
  });
  return res.json();
}

const TicketsList = async () => {
  const tickets = await getTickets();

  return (
    <>
      {tickets.map((ticket: any) => (
        <div className="card my-5" key={ticket.id}>
          <h3>{ticket.title}</h3>
          <p>{ticket.body.slice(0, 300)}</p>
          <div className={`pill ${ticket.priority}`}>{ticket.priority}</div>
        </div>
      ))}
      {tickets.length === 0 && (
        <p className="text-center">There is no ticket Available Here,Yea!!</p>
      )}
    </>
  );
};

export default TicketsList;
