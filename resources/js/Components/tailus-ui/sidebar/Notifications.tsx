import {Bell} from "lucide-react"
import Button from "@/Components/tailus-ui/Button";
import {Text, Title} from "@/Components/tailus-ui/typography";
import Popover from "@/Components/tailus-ui/Popover";
import {ChatLink} from "@/Components/tailus-ui/ChatLink";
import Tabs from "@/Components/tailus-ui/tabs/Tabs";

const ChatLinks = () => {
    return (
        <Tabs.Root defaultValue="all" className="space-y-4 -mx-3">
            <Tabs.List className="w-fit gap-2 px-3 [--tabs-radius:9999px]" variant="plain" triggerVariant="softToSoft"
                       size="sm" intent="primary">
                <Tabs.Trigger value="all">All</Tabs.Trigger>
                <Tabs.Trigger value="unread">Unread</Tabs.Trigger>
                <Tabs.Trigger value="archived">Archived</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="all" className="space-y-1">
                <ChatLink userName="Méschac Irung"
                          avatar="https://pbs.twimg.com/profile_images/1767582956082561024/TLJvxR_V_400x400.jpg"
                          lastMessage="Hello, how are you doing today?" date="12:00 PM" link="#"/>
                <ChatLink isUnread userName="Tailus UI"
                          avatar="https://mars-images.imgix.net/1704976070160-1704976065843icon.png?auto=compress&fit=max&w=128"
                          lastMessage="Hello, how are you doing today?" date="12:00 PM" link="#"/>
                <ChatLink userName="Bernard Ng"
                          avatar="https://pbs.twimg.com/profile_images/1660255666617892866/aJV_B5cN_400x400.jpg"
                          lastMessage="We're live 🚀" date="24 May" link="#"/>
                <ChatLink isUnread userName="Théo Balick"
                          avatar="https://pbs.twimg.com/profile_images/1679957923823247360/47FJpyBb_400x400.jpg"
                          lastMessage="Good news ! I'll be working on the CLI this week" date="20 May" link="#"/>
            </Tabs.Content>
            <Tabs.Content value="unread" className="space-y-1">
                <ChatLink isUnread userName="Tailus UI"
                          avatar="https://mars-images.imgix.net/1704976070160-1704976065843icon.png?auto=compress&fit=max&w=128"
                          lastMessage="Hello, how are you doing today?" date="12:00 PM" link="#"/>
                <ChatLink isUnread userName="Théo Balick"
                          avatar="https://pbs.twimg.com/profile_images/1679957923823247360/47FJpyBb_400x400.jpg"
                          lastMessage="Good news ! I'll be working on the CLI this week" date="20 May" link="#"/>
            </Tabs.Content>
            <Tabs.Content value="archived" className="space-y-1">
                <ChatLink userName="Glodie Lukose"
                          avatar="https://pbs.twimg.com/profile_images/1585976646468763648/OlbJkLL0_400x400.jpg"
                          lastMessage="Hello, how are you doing today?" date="12:00 PM" link="#"/>
            </Tabs.Content>
        </Tabs.Root>
    )
}

export const Notifications = () => (
    <Popover.Root>
        <Popover.Trigger asChild>
            <div className="relative">
                <span
                    className="block absolute top-2.5 right-2.5 size-1.5 ring-2 ring-white dark:ring-gray-925 rounded-full bg-danger-600"></span>
                <Button.Root size="md" variant="ghost" intent="gray">
                    <Button.Label hidden>Notifications</Button.Label>
                    <Button.Icon type="only">
                        <Bell/>
                    </Button.Icon>
                </Button.Root>
            </div>
        </Popover.Trigger>
        <Popover.Content mixed sideOffset={6} align="end" className="w-96" data-shade="900">
            <div className="mb-6">
                <Title size="base" as="h3" weight="medium">Notifications</Title>
                <div className="flex items-center gap-6 justify-between">
                    <Text size="sm" className="my-0">You have 3 new notifications</Text>
                    <Button.Root size="xs" variant="ghost" intent="primary" className="-mr-2">
                        <Button.Label>Mark all as read</Button.Label>
                    </Button.Root>
                </div>
            </div>
            <div className="-mb-3">
                <ChatLinks/>
            </div>
        </Popover.Content>
    </Popover.Root>
)