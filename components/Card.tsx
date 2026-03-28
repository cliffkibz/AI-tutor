import { subjectsColors } from "@/constants";
import Link from "next/link";

const Card = ({ session }) => {
  const color = subjectsColors[session.subject.toLowerCase()] || "#FFFFFF";

  return (
    (<Link
      href={`/companions/${session.id}`}
      style={{
        backgroundColor: color,
        padding: "1rem",
        borderRadius: "0.5rem",
        marginBottom: "1rem",
        display: "block",
        color: "black",
        textDecoration: "none",
      }}
    >
      <h3 style={{ margin: 0 }}>{session.name}</h3>
      <p style={{ margin: 0, marginTop: "0.5rem" }}>{session.topic}</p>
    </Link>)
  );
};

export default Card;
