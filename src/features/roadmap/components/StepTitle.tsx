export default function StepTitle({ title, description }: { title: string, description: string }) {
    return (
        <section className="flex flex-col items-start justify-start w-full">
            <h2 className="text-2xl font-dot text-neutral-100 tracking-wide mb-4">{title}</h2>
            <p className="text-neutral-300 text-sm mb-8">{description}</p>
        </section>
    )
}