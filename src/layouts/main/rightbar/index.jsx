import Premium from "~/layouts/main/rightbar/premium";
import Search from "./search";
import Topics from "~/layouts/main/rightbar/Topics";
import WhoToFollow from "./who-to-follow";
import Footer from "./footer";

export default function RightBar() {
    return (
        <aside className="w-[350px] mr-2.5">
            <Search />
            <Premium />
            <Topics />
            <WhoToFollow />
            <Footer />
        </aside>
    )
}