import {
    Check,
    ChevronRight,
    HelpCircle,
    LogOut,
    MessageCircleQuestion,
    Settings,
    Settings2,
    User,
    UserPlus
} from "lucide-react"
import DropdownMenu from "@/Components/tailus-ui/DropdownMenu";
import Button from "@/Components/tailus-ui/Button";
import Avatar from "@/Components/tailus-ui/avatar/Avatar";
import {Caption, Title} from "@/Components/tailus-ui/typography";

export const AdminAvatar = ({src = "https://pbs.twimg.com/profile_images/1767582956082561024/TLJvxR_V_400x400.jpg"}: {
    src?: string
}) => (
    <Avatar.Root size="md" className="rounded-none">
        <Avatar.Image src={src} loading="lazy" alt="Méschac Irung" width={120} height={120}/>
        <Avatar.Fallback children="MI"/>
    </Avatar.Root>
)


// @ts-ignore
export const UserDropdown = ({user}) => {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger data-shade="900"
                                  className="rounded-[--avatar-radius] hover:ring ring-[--ui-soft-bg] data-[state=open]:ring">
                <AdminAvatar/>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <DropdownMenu.Content side="bottom" mixed align="end" sideOffset={6} intent="gray" variant="soft"
                                      className="z-50 dark:[--caption-text-color:theme(colors.gray.400)]">
                    <div className="grid gap-3 [grid-template-columns:auto_1fr] p-3">
                        <AdminAvatar/>
                        <div>
                            <Title className="text-sm" as="span" weight="medium">{user.name}</Title>
                            <Caption>{user.email}</Caption>

                            <div className="mt-4 grid grid-cols-2 gap-3" data-rounded="large">
                                <Button.Root className="bg-gray-50" variant="outlined" size="xs" intent="gray">
                                    <Button.Icon size="xs" type="leading">
                                        <Settings/>
                                    </Button.Icon>
                                    <Button.Label>Manage</Button.Label>
                                </Button.Root>
                                <Button.Root method="post" href={route('logout')} className="bg-gray-50" variant="outlined"
                                             size="xs" intent="gray">
                                    <Button.Icon size="xs" type="leading">
                                        <LogOut/>
                                    </Button.Icon>
                                    <Button.Label>Sign Out</Button.Label>
                                </Button.Root>
                            </div>
                        </div>
                    </div>
                    <DropdownMenu.Separator/>
                    <DropdownMenu.Sub>
                        <DropdownMenu.SubTrigger>
                            <DropdownMenu.Icon>
                                <User/>
                            </DropdownMenu.Icon>
                            Switch Account
                            <DropdownMenu.RightIcon className="ml-auto" children={<ChevronRight className="size-4"/>}/>
                        </DropdownMenu.SubTrigger>
                        <DropdownMenu.Portal>
                            <DropdownMenu.SubContent mixed
                                                     className="z-[51] min-w-[18rem] dark:[--caption-text-color:theme(colors.gray.400)]">
                                <div className="p-3">
                                    <Title className="text-sm" as="span" weight="medium">Accounts</Title>
                                    <Caption>You have two accounts</Caption>
                                </div>
                                <DropdownMenu.Separator/>
                                <DropdownMenu.Item className="h-fit py-2">
                                    <div className="grid gap-3 [grid-template-columns:auto_1fr]">
                                        <AdminAvatar/>
                                        <div>
                                            <Title className="text-sm" as="span" weight="medium">Méschac Irung</Title>
                                            <Caption>hello@tailus.io</Caption>
                                        </div>
                                    </div>
                                    <DropdownMenu.RightIcon className="ml-auto" children={<Check className="size-4"/>}/>
                                </DropdownMenu.Item>
                                <DropdownMenu.Item className="h-fit py-2">
                                    <div className="grid gap-3 [grid-template-columns:auto_1fr]">
                                        <AdminAvatar
                                            src="https://mars-images.imgix.net/1704976070160-1704976065843icon.png?auto=compress&fit=max&w=128"/>
                                        <div>
                                            <Title className="text-sm" as="span" weight="medium">Tailus UI</Title>
                                            <Caption>hello@tailus.io</Caption>
                                        </div>
                                    </div>
                                </DropdownMenu.Item>
                                <DropdownMenu.Separator/>
                                <DropdownMenu.Item>
                                    <DropdownMenu.Icon>
                                        <UserPlus/>
                                    </DropdownMenu.Icon>
                                    Add an account
                                </DropdownMenu.Item>
                                <DropdownMenu.Item>
                                    <DropdownMenu.Icon>
                                        <LogOut/>
                                    </DropdownMenu.Icon>
                                    Sign out of all accounts
                                </DropdownMenu.Item>
                            </DropdownMenu.SubContent>
                        </DropdownMenu.Portal>
                    </DropdownMenu.Sub>
                    <DropdownMenu.Item>
                        <DropdownMenu.Icon>
                            <Settings2/>
                        </DropdownMenu.Icon>
                        Preferences
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator/>
                    <DropdownMenu.Item>
                        <DropdownMenu.Icon>
                            <HelpCircle/>
                        </DropdownMenu.Icon>
                        Help
                    </DropdownMenu.Item>
                    <DropdownMenu.Item>
                        <DropdownMenu.Icon>
                            <MessageCircleQuestion/>
                        </DropdownMenu.Icon>
                        Send feedback
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    )
}