import React from "react";
import Link from "next/link";

const ClientsPage = () => {
  const clients = [
    { id: "rom", name: "Romain" },
    { id: "bob", name: "Bob" },
  ];
  return (
    <div>
      <h1>Clientss</h1>
      <ul>
        {clients.map((client, i) => (
          <li key={i}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
        {clients.map((client, i) => (
          <li key={i}>
            <Link href={`/clients/${client.name}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;
