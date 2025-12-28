import React from "react";
import frontendData from "../../data/roadmaps/frontend/frontend.json";
import RoadmapTitle from "./components/RoadmapTitle";
import StepTitle from "./components/StepTitle";

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
                    fontFamily="var(--font-dm-mono)"
                >
                    {data.label}
                </tspan>
            </text>
        </g>
    );
};

export default function Roadmap() {
    return (
        <div className="flex items-center justify-center h-full overflow-auto mx-auto flex-col bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px] border border-neutral-900">
            <RoadmapTitle title={frontendData.title} subtitle={frontendData.description} />

            {frontendData.steps.map((step, index) => (
                <div key={index} className="flex items-center justify-center mx-auto bg-neutral-950 flex-col p-12 border border-neutral-900 bg-[radial-gradient(#80808012_1px,transparent_1px)] [background-size:24px_24px] mb-8">
                    <StepTitle title={step.title} description={step.description} />
                    <svg
                        width={step.width}
                        height={step.height}
                        viewBox={`0 0 ${step.width} ${step.height}`}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {step.edge.map((edge: EdgeData, edgeIndex: number) => (
                            <line
                                key={`edge-${index}-${edgeIndex}`}
                                x1={edge.x1}
                                y1={edge.y1}
                                x2={edge.x2}
                                y2={edge.y2}
                                stroke={edge.stroke}
                                strokeWidth={edge["stroke-width"]}
                            />
                        ))}
                        {step.node.map((node: NodeData, nodeIndex: number) => (
                            <Box key={`node-${index}-${nodeIndex}`} node={node} />
                        ))}
                    </svg>
                </div>
            ))}
        </div>
    );
}