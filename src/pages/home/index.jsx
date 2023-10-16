import StickyHeader from "~/components/sticky-header";
import Tab from "~/components/tab";

export default function Home() {
    return (
        <>
            <Tab activeTab="following">
                <StickyHeader title="Home">
                    <Tab.Items>
                        <Tab.Item id="for-you">
                            For you
                        </Tab.Item>
                        <Tab.Item id="following">
                            Following
                        </Tab.Item>
                    </Tab.Items>
                </StickyHeader>
                <Tab.Content id="for-you">
                    1. Content
                </Tab.Content>
                <Tab.Content id="following">
                    2. Content
                </Tab.Content>
            </Tab>
        </>
    )
}