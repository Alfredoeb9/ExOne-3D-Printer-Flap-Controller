type FlapState = "open" | "closed" | "unknown";

type FlapProps = {
    flapA: FlapState;
    flapB: FlapState;
};

const colors: Record<FlapState, string> = {
    open: "#00c781",
    closed: "#9aa8ba",
    unknown: "#f59e0b",
};

export default function FlapStatus({ flapA, flapB }: FlapProps) {
    const flaps = [
        { name: "Flap A", state: flapA, x: 70 },
        { name: "Flap B", state: flapB, x: 510 },
    ];

    return (
        <div className="w-full min-w-0">
            {/* Builds the inner flap status visualization */}
            <svg
                viewBox="0 0 650 280"
                className="block h-auto w-full"
                role="img"
                aria-label={`Flap A: ${flapA}. Flap B: ${flapB}.`}
            >
                <rect x="150" y="20" width="350" height="240" rx="8" fill="#15283b" stroke="#8297ab" strokeWidth="5" />
                <rect x="185" y="50" width="280" height="180" rx="8" fill="#34495e" stroke="#71879b" strokeWidth="3" />

                {flaps.map(({ name, state, x }) => (
                    <g key={name}>
                        <rect x={x - 20} y="140" width="110" height="80" fill="none" stroke={colors[state]} strokeWidth="3" />
                        <rect x={x} y="110" width="80" height="65" rx="5" fill={colors[state]} />
                    </g>
                ))}
            </svg>

            {/* Builds the Flap Status Labels */}
            <div className="flex justify-between gap-4 px-4 text-sm">
                {flaps.map(({ name, state }) => (
                    <div key={name}>
                        <p className="text-slate-300">{name}</p>
                        <p className="capitalize" style={{ color: colors[state] }}>
                            {state}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}