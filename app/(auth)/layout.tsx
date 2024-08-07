import Sidebar from "@/components/sidebar";



export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="ml-4">
            <div className="fixed inset-y-0 z-40 hidden flex-col md:flex ">
                <Sidebar />
            </div>
            <main className="h-full md:pl-[200px]">
                {children}
            </main>
        </div>
    )
}