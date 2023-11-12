export default async function getTickets() {
  const res = await fetch("http://localhost:7000/tickets");
  return res.json();
}

const TicketsList = () => {
  const tickets = getTickets();
  return <div>TicketsList</div>;
};

export { TicketsList };
