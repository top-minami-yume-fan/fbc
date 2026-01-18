export default function NewsLayout({
    children,
}: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col w-full px-6 md:px-10 py-10">
            {children}
        </div>
    );
}