export function ChartAnalyze() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      width: "100%",
    }}>
      <h3 style={{ color: "white" }}>Gráfico de Análise</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "300px",
          backgroundColor: "black",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <p style={{ color: "white" }}>Gráfico aqui</p>
      </div>
    </div>
  )
}
