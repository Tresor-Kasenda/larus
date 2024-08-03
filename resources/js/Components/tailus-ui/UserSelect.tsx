import {ChevronsUpDown} from "lucide-react"
import {AdminAvatar} from "./AdminAvatar"
import {type TriggerProps} from "@tailus/themer"
import Select from "@/Components/tailus-ui/select/Select";
import {Text} from "@/Components/tailus-ui/typography";
import {User} from '@/types';

export const UserSelect = ({variant = "mixed", user: User}: { variant?: TriggerProps["variant"] , user: User}) => {
    return (
        <Select.Root defaultValue="meschacirung">
            <Select.Trigger variant={variant} className="pl-1.5 pr-2 py-2" aria-label="Accounts">
                <Select.Value/>
                <Select.TriggerIcon size="sm" className="ml-auto mr-0.5">
                    <ChevronsUpDown className="size-3.5"/>
                </Select.TriggerIcon>
            </Select.Trigger>
            <Select.Portal>
                <Select.Content mixed sideOffset={4} position="popper" intent="gray" variant="soft"
                                className="z-10 w-[--radix-select-trigger-width]">
                    <Select.Item value="meschacirung" className="h-auto p-2">
                        <Select.ItemText>
                            <div className="grid gap-2.5 items-center [grid-template-columns:auto_1fr]">
                                <AdminAvatar/>
                                <Text as="p" size="sm" neutral className="my-0">Méschac Irung</Text>
                            </div>
                        </Select.ItemText>
                    </Select.Item>
                    <Select.Item value="tailus" className="h-auto p-2">
                        <Select.ItemText>
                            <div className="grid gap-2.5 items-center [grid-template-columns:auto_1fr]">
                                <AdminAvatar
                                    src="https://mars-images.imgix.net/1704976070160-1704976065843icon.png?auto=compress&fit=max&w=128"/>
                                <Text as="p" size="sm" neutral className="my-0" align="left">Tailus UI</Text>
                            </div>
                        </Select.ItemText>
                    </Select.Item>
                </Select.Content>
            </Select.Portal>
        </Select.Root>
    )
}
