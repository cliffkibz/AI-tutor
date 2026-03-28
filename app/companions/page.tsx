import { recentSessions } from "@/constants";
import Card from "@/components/Card";

const CompanionsLibrary = () => {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>Companions Library</h1>
      <div>
        {recentSessions.map((session) => (
          <Card key={session.id} session={session} />
        ))}
      </div>
    </div>
  );
};

export default CompanionsLibrary;
