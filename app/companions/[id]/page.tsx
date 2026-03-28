import { recentSessions } from "@/constants";

const CompanionSession = ({ params }: { params: { id: string } }) => {
  const session = recentSessions.find((s) => s.id === params.id);

  if (!session) {
    return <div>Session not found</div>;
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h1>{session.name}</h1>
      <p>
        <strong>Topic:</strong> {session.topic}
      </p>
      <p>
        <strong>Duration:</strong> {session.duration} minutes
      </p>
    </div>
  );
};

export default CompanionSession;