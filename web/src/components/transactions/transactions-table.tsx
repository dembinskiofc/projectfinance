import * as lucide from "lucide-react";
import transactions from "../../assets/transactions.json" with { type: "json" };
import React, { useEffect } from "react";

type Transaction = typeof transactions[0];

export function TransactionTable() {
  const cellStyle: React.CSSProperties = {
    textAlign: "start",
    fontWeight: "normal",
    padding: "0.75rem",
    backgroundColor: "black",
    color: "white",
  };

  useEffect(() => {
    import("lucide-react").then((mod) => console.log(mod));
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "100%",
        height: "100%",
      }}
    >
      <h3 style={{ color: "white" }}>Transações</h3>

      <div style={{ overflowY: "auto", width: "100%", height: "100%" }}>
        <table
          style={{
            borderCollapse: "separate",
            borderSpacing: "0 12px", // espaçamento entre linhas
            width: "100%",
          }}
        >
          <thead>
            <tr>
              <th></th>
              <th style={{ textAlign: "start", color: "#aaa", fontWeight: "normal" }}>Descrição</th>
              <th style={{ textAlign: "start", color: "#aaa", fontWeight: "normal" }}>Tipo</th>
              <th style={{ textAlign: "start", color: "#aaa", fontWeight: "normal" }}>Valor</th>
              <th style={{ textAlign: "start", color: "#aaa", fontWeight: "normal" }}>Banco</th>
              <th style={{ textAlign: "start", color: "#aaa", fontWeight: "normal" }}>Data</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction: Transaction, index) => (
              <tr
                key={transaction.id}
                style={{
                  borderRadius: "8px",
                  boxShadow: "0 2px 6px rgba(126, 126, 126, 0.2)",
                  overflow: "hidden",
                }}
              >
                <td
                  style={{
                    ...cellStyle,
                    borderTopLeftRadius: "8px",
                    borderBottomLeftRadius: "8px",
                  }}
                >
                  {transaction.category.icon in lucide
                    ? React.createElement(
                        lucide[transaction.category.icon as keyof typeof lucide] as React.ElementType
                      )
                    : null}
                </td>
                <td style={cellStyle}>{transaction.description}</td>
                <td style={cellStyle}>
                  {transaction.type === "income" ? "Entrada" : "Saída"}
                </td>
                <td
                  style={{
                    ...cellStyle,
                    color: transaction.type === "income" ? "#50C878" : "#C0392B",
                  }}
                >
                  {transaction.amount.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </td>
                <td style={cellStyle}>{transaction.bank}</td>
                <td
                  style={{
                    ...cellStyle,
                    borderTopRightRadius: "8px",
                    borderBottomRightRadius: "8px",
                  }}
                >
                  {new Date(transaction.date).toLocaleString("pt-BR")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
