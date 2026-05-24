function App(){
    return (
        <div className="app-shell">
            <aside className="sidebar">
                <h1>CubeAI</h1>
                <nav>
                    <button className="nav-btn">Timer</button>
                    <button className="nav-btn">Sessions</button>
                    <button className="nav-btn">Stats</button>
                    <button className="nav-btn">Algorithms</button>
                    <button className="nav-btn">Trainer</button>
                </nav>
            </aside>

            <main className="main-panel">
                <h2>Timer</h2>
                <section className="timer-card">
                    <p>scramble will go here</p>
                    <h3>0.00</h3>
                </section>
            </main>
        </div>
    );
}

export default App