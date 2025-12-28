import React from "react";
import frontendData from "../../data/roadmaps/frontend/frontend.json";

interface NodeData {
    width: number;
    height: number;
    data: {
        label: string;
    };
    position: {
        x: number;
        y: number;
    };
}

interface EdgeData {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    stroke: string;
    "stroke-width": number;
}

const Box = ({ node }: { node: NodeData }) => {
    const { width, height, position, data } = node;
    const { x, y } = position;
    const textX = x + width / 2;
    const textY = y + height / 2;

    const handleClick = () => {
        console.log(`Clicked on node: ${data.label}`);
        // Add your modal logic or navigation here
    };

    return (
        <g
            onClick={handleClick}
            style={{ cursor: "pointer" }}
            className="hover:opacity-80 transition-opacity duration-200"
        >
            <rect
                x={x}
                y={y}
                width={width}
                height={height}
                fill="#C5FF91"
                stroke="white"
                strokeWidth="2"
                rx="0"
            />
            <text x={textX} y={textY} textAnchor="middle" dominantBaseline="middle" className="pointer-events-none">
                <tspan
                    fill="black"
                    fontSize="14"
                    fontWeight="500"
                >
                    {data.label}
                </tspan>
            </text>
        </g>
    );
};

export default function Roadmap() {
    return (
        <div className="flex items-center justify-center h-full overflow-auto mx-auto">
            <svg
                width="1000"
                height="322"
                viewBox="0 0 800 322"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Render Edges first so they are behind nodes */}
                {frontendData.steps[0].edge.map((edge: EdgeData, index: number) => (
                    <line
                        key={`edge-${index}`}
                        x1={edge.x1}
                        y1={edge.y1}
                        x2={edge.x2}
                        y2={edge.y2}
                        stroke={edge.stroke}
                        strokeWidth={edge["stroke-width"]}
                    />
                ))}

                {/* Render Nodes */}
                {frontendData.steps[0].node.map((node: NodeData, index: number) => (
                    <Box key={`node-${index}`} node={node} />
                ))}
            </svg>
        </div>
    );
}