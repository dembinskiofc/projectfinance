import { CirclePlus } from "lucide-react";
import Image from "next/image";
import LogoImage from "../assets/logo.svg";
import "./header.css"; 

export function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
      }}
    >
      <button
        className="logo-button"
        onClick={() => alert("Logo clicado!")}
        style={{
          background: "transparent",
          border: "none",
          padding: 0,
          cursor: "pointer",
          borderRadius: "8px"
        }}
      >
        <Image
          src={LogoImage}
          width={40}
          height={40}
          alt="Picture of the author"
          className="logo-image"
        />
      </button>

      <button
        style={{
          backgroundColor: "#50C878",
          color: "black",
          padding: "0.5rem",
          borderRadius: "8px",
        }}
      >
        <CirclePlus />
      </button>
    </header>
  );
}
