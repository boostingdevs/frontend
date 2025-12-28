export default function RoadmapTitle({ title, subtitle }: { title: string, subtitle: string }) {
    return (
        <section className="flex flex-col w-full items-center justify-center py-12">
            <h2 className="text-7xl font-dm-mono text-neutral-100 mb-4 font-bold">{title}</h2>
            <p className="text-neutral-300 text-base text-center flex">{subtitle}</p>
        </section>
    )
}