import Avatar from "@/Components/tailus-ui/avatar/Avatar";
import Button from "@/Components/tailus-ui/Button";
import {Caption, Text} from "@/Components/tailus-ui/typography";
import Badge from "@/Components/tailus-ui/badge/Badge";
import {twMerge} from "tailwind-merge"

export const ChatLink = ({isActive = false, userName, link, avatar, lastMessage, unread, date, isUnread}: {
    isActive?: boolean,
    isUnread?: boolean,
    avatar: string,
    lastMessage: string,
    unread?: number,
    date: string,
    userName?: string,
    link: string
}) => {
    return (
        <Button.Root
            href={link}
            variant={isActive ? "soft" : "ghost"}
            intent="gray"
            className={twMerge("grid [grid-template-columns:auto_1fr] gap-3 p-3 h-auto", isActive && "dark:bg-[--ui-soft-bg]")}
            aria-label={userName}
        >
            <Avatar.Root size="lg" status="busy" topStatus={isUnread} className="before:-top-1 before:-right-1">
                <Avatar.Image src={avatar} loading="lazy" alt={userName} width={120} height={120}/>
                <Avatar.Fallback children="MI"/>
            </Avatar.Root>
            <div className="flex flex-col">
                <div className="flex">
                    <Text as="p" size="sm" className="my-0 line-clamp-1" weight="medium">{userName}</Text>
                    <Caption as="p" size="xs" className="ml-auto">{date}</Caption>
                </div>
                <div
                    className="flex justify-between [--body-text-color:theme(colors.gray.500)] dark:[--body-text-color:theme(colors.gray.400)]">
                    <Text as="p" className="my-0 text-sm line-clamp-1">{lastMessage}</Text>
                    {
                        (unread && unread > 0) &&
                        <Badge size="xs" intent="primary" variant="solid" className="rounded-full">{unread}</Badge>
                    }
                </div>
            </div>
        </Button.Root>
    )
}