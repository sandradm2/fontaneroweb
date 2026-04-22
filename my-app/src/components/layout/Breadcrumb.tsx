import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
    name: string;
    href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
    return (
        <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center flex-wrap gap-1 text-xs font-semibold text-brand-muted">
                <li>
                    <Link
                        href="/"
                        className="hover:text-brand-primary transition-colors"
                    >
                        Inicio
                    </Link>
                </li>
                {items.map((item, index) => (
                    <li key={index} className="flex items-center gap-1">
                        <ChevronRight size={12} className="text-brand-muted/50" />
                        {item.href ? (
                            <Link
                                href={item.href}
                                className="hover:text-brand-primary transition-colors"
                            >
                                {item.name}
                            </Link>
                        ) : (
                            <span
                                aria-current="page"
                                className="text-brand-secondary"
                            >
                                {item.name}
                            </span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
