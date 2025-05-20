"use client"

import { CardSummary } from "@/components/card-summary";
import { Category } from "@/components/category";
import { ChartAnalyze } from "@/components/chart-analyze";
import { Header } from "@/components/header";
import { TransactionTable } from "@/components/transactions/transactions-table";
import { Banknote, BanknoteArrowDown, BanknoteArrowUp, Car, CircleEllipsis, Hamburger, Pill, TreePalm } from "lucide-react";


const categories = [
  {
    id: "1",
    icon: Hamburger,
    name: "Alimentação",
    quantity: 10,
    amount: 1508,
  },
  {
    id: "2",
    icon: Car,
    name: "Transporte",
    quantity: 5,
    amount: 200,
  },
  {
    id: "3",
    icon: TreePalm,
    name: "Lazer",
    quantity: 3,
    amount: 200,
  },
  {
    id: "4",
    icon: Pill,
    name: "Saúde",
    quantity: 2,
    amount: 500,
  },
  {
    id: "5",
    icon: CircleEllipsis,
    name: "Educação",
    quantity: 1,
    amount: 100,
  },  
]


const cards = [
  {
    icon: BanknoteArrowDown,
    title: "Entradas",
    amount: 7840.56,
    description: "Soma de todas as entradas do período",
    color: "#50C878",
  },
  {
    icon: BanknoteArrowUp,
    title: "Saídas",
    amount: 1580.45,
    description: "Soma de todas as saídas do período",
    color: "#C0392B",
  },
  {
    icon: Banknote,
    title: "Balanço",
    amount: 6260.11,
    description: "Soma de todas as entradas e saídas do período",
    color: "#50C878",
  }
]

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        justifyContent: "start",
        alignItems: "start",
        height: "100vh",
        maxWidth: "1000px",
        width: "100%",
        margin: "0 auto",
        padding: "1rem",
      }}
    >
      <Header />

      <section
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          width: "100%",
        }}
      >
        {cards.map((card) => (
          <CardSummary key={card.title} card={card} />
        ))}
      </section>

      <section
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          width: "100%",
        }}
      >
        <ChartAnalyze />
        <Category categories={categories} />
      </section>

      <section
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          width: "100%",
        }}
      >
        <TransactionTable />
      </section>
    </main>
  );
}