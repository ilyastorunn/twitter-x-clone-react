import { Popover } from "@headlessui/react"
import {Link} from "react-router-dom"

export default function Footer() {
    return (
        <footer className="mb-4 px-4 flex flex-wrap gap-2">
            <Link to="/" className="text-[color:var(--color-base-secondary)] leading-4 text-[#13px] hover:underline">Terms of Service</Link>
            <Link to="/" className="text-[color:var(--color-base-secondary)] leading-4 text-[#13px] hover:underline">Privacy Policy</Link>
            <Link to="/" className="text-[color:var(--color-base-secondary)] leading-4 text-[#13px] hover:underline">Imprint</Link>
            <Link to="/" className="text-[color:var(--color-base-secondary)] leading-4 text-[#13px] hover:underline">Cookie Policy</Link>
            <Link to="/" className="text-[color:var(--color-base-secondary)] leading-4 text-[#13px] hover:underline">Accessibility</Link>
            <Link to="/" className="text-[color:var(--color-base-secondary)] leading-4 text-[#13px] hover:underline">Ads Info</Link>
            <div className="w-full flex gap-2">
                <Popover className="relative inline-flex leading-4">
                    <Popover.Button
                        className="text-[color:var(--color-base-secondary)] outline-none leading-4 text-[#13px] hover:underline inline-flex items-center">
                        More
                        <svg viewBox="0 0 24 24" className="h-[1em] px-[0.5]">
                            <path
                                fill="currentColor"
                                d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
                            />
                        </svg>
                    </Popover.Button>
                    <Popover.Panel className="w-[150px] max-w-[384px] bg-[color:var(--background-primary)] shadow-box rounded-xl absolute bottom-0 right-0 grid overflow-hidden">
                        <Link to="/" className="py-3 px-4 text-white text-[15px] leading-5 font-bold hover:bg-[color:var(--background-secondary)] transition-colors">
                            About
                        </Link>
                        <Link to="/" className="py-3 px-4 text-white text-[15px] leading-5 font-bold hover:bg-[color:var(--background-secondary)] transition-colors">
                            Status
                        </Link>
                        <Link to="/" className="py-3 px-4 text-white text-[15px] leading-5 font-bold hover:bg-[color:var(--background-secondary)] transition-colors">
                            X for Business
                        </Link>
                        <Link to="/" className="py-3 px-4 text-white text-[15px] leading-5 font-bold hover:bg-[color:var(--background-secondary)] transition-colors">
                            Developers
                        </Link>
                    </Popover.Panel>
                </Popover>
                <p className="text-[color:var(--color-base-secondary)] leading-4 text-[13px]">
                    &copy; 2023 X Corp.
                </p>
            </div>
        </footer>
    )
}