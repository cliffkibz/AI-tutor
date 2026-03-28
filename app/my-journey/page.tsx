import { recentSessions } from "@/constants";
import Card from "@/components/Card";

const Profile = () => {
    return (
        <div style={{ padding: "1rem" }}>
            <h1>My Journey</h1>
            <h2>Recent Sessions</h2>
            <div>
                {recentSessions.map((session) => (
                    <Card key={session.id} session={session} />
                ))}
            </div>
        </div>
    );
};
export default Profile;