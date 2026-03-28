const Subscription = () => {
    return (
        <div style={{ padding: "1rem" }}>
            <h1>Subscription</h1>
            <p>Subscribe to our newsletter to receive the latest updates.</p>
            <form>
                <input
                    type="email"
                    placeholder="Enter your email"
                    style={{ padding: "0.5rem", marginRight: "0.5rem" }}
                />
                <button type="submit" style={{ padding: "0.5rem" }}>
                    Subscribe
                </button>
            </form>
        </div>
    );
};

export default Subscription;