export default function DummyContent({content}: {content: string}) {

    return (
        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">{content}</p>
    )
}