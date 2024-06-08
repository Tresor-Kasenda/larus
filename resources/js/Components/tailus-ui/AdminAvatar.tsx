import {type AvatarFallbackProps, type AvatarRootProps} from "@tailus/themer"
import Avatar from "@/Components/tailus-ui/avatar/Avatar";

const intents: AvatarFallbackProps["intent"][] = ["primary", "success", "warning", "danger", "warning", "info", "gray", "accent", "secondary"];

export const AdminAvatar = ({
                                src = "https://pbs.twimg.com/profile_images/1767582956082561024/TLJvxR_V_400x400.jpg",
                                size = "xxs",
                                initial = "MI",
                            }: {
    src?: string;
    size?: AvatarRootProps["size"];
    initial?: string;
}) => {
    const randomIntent = intents[Math.floor(Math.random() * intents.length)];

    return (
        <Avatar.Root size={size}>
            <Avatar.Image src={src} loading="lazy" alt="User Avatar" width={120} height={120}/>
            <Avatar.Fallback intent={randomIntent} children={initial}/>
        </Avatar.Root>
    );
};