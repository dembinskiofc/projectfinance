import { LucideIcon } from "lucide-react";

interface CardSummaryProps {
  card: {
    icon: LucideIcon;
    title: string;
    amount: number;
    description: string;
    color?: string; 
  };
}

export function CardSummary(props: CardSummaryProps) {
  const { card } = props;
  const { title, amount, description, icon: Icon, color = "red" } = card;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "100%",
        maxHeight: "300px",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem",
          gap: "1rem",
          backgroundColor: "black",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          height: "100%",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <span>{title}</span>
          {Icon && <Icon />}
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginTop: "0.5rem",
            color: color, 
          }}
        >
          <span>
            {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            }).format(amount)}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
          }}
        >
          <p
            style={{
              fontSize: "0.7rem",
              color: "#666",
              textAlign: "left",
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

