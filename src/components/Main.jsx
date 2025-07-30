export default function Main({ children }) {
    return (
        <main className="component-showcase">
            {/* <section className="component-group">
                <h2>Variants</h2>
                <div className="component-card">
                    <Button>
                        <span>⬅</span>Hello children prop
                    </Button>
                    <Button>
                        Hello children prop<span>➡</span>
                    </Button>
                    <Button icon="❤" text="Primary" />
                    <Button text="Secondary" variant="secondary" />
                    <Button text="Danger" variant="danger" />
                    <Button text="Gradient" variant="gradient" />
                    <Button text="Outline" variant="outline" />
                </div>
            </section> */}

            {/* вместо children будут подставляться Section с кнопками */}
            {children}

            {/* <section className="component-group">
                <h2>Button States</h2>
                <div className="component-card">
                    <Button text="Default" variant="primary" />
                    <Button text="Disabled" variant="primary" isDisabled />
                </div>
            </section>

            <section className="component-group">
                <h2>Full Width Button</h2>
                <div className="component-card">
                    <Button text="Full Width" variant="secondary" fullWidth />
                </div>
            </section> */}
        </main>
    );
}
