import React, {PropsWithChildren, ReactNode, useCallback, useEffect, useRef, useState} from 'react';
import {User} from '@/types';
import {tabs} from "@tailus/themer";
import Separator from "@/Components/tailus-ui/separator/Separator";
import {UserSelect} from "@/Components/tailus-ui/UserSelect";
import {Notifications} from "@/Components/tailus-ui/sidebar/Notifications";
import {UserDropdown} from "@/Components/tailus-ui/UserDropdown";
import {Link as ReactLink} from '@inertiajs/react'
import Button from "@/Components/tailus-ui/Button/Button";

const {trigger, indicator} = tabs()

type TabsAppProps = "home" | "store" | "team" | "inbox" | "settings";

type NavLinksProps = {
  children: ReactNode;
};

function NavLinks({ children }: NavLinksProps) {
  const [dimensions, setDimensions] = useState({ width: 0, left: 0 });

  const activeLink = React.Children.toArray(children).find(
    (child) =>
      React.isValidElement(child) && child.type === Link && child.props.isActive === true
  );

  const updateDimensions = useCallback(() => {
    const activeTrigger = document.getElementById(activeLink?.props?.id || '') as HTMLElement;
    if (activeTrigger) {
      setDimensions({
        width: activeTrigger.offsetWidth,
        left: activeTrigger.offsetLeft,
      });
    }
  }, [activeLink]);

  useEffect(() => {
    updateDimensions();
    document.documentElement.style.setProperty("--current-tab-width", `${dimensions.width}px`);
  }, [dimensions, updateDimensions]);

  return (
    <nav className="flex pb-2 h-10 relative">
      <span
        className={indicator({
          indicatorVariant: "bottom",
          intent: "primary",
          className: "block w-[--current-tab-width] left-[--current-tab-left] transition-[left,width] duration-300 ease-in-out",
        })}
      ></span>
      {children}
    </nav>
  );
}

export default function Authenticated({user, header, children}: PropsWithChildren<{ user: User, header?: ReactNode }>) {
    const [state, setState] = useState<TabsAppProps>("home");
    const spanRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const activeTrigger = document.getElementById(state) as HTMLElement;
        if (spanRef.current) {
            spanRef.current.style.left = activeTrigger.offsetLeft + "px";
            spanRef.current.style.width = activeTrigger.offsetWidth + "px";
        }
    }, [state]);
    return (
        <>
            <header className="fixed top-0 z-10 w-full border-b feedback-bg">
                <div className="max-w-6xl mx-auto px-5">
                    <div className="py-4 flex items-center justify-between">
                        <div className="flex gap-4 items-center h-7">
                            <ReactLink href="/" hidden className="sm:block">

                            </ReactLink>
                            <Separator hidden className="rotate-12 sm:block" orientation="vertical"/>
                            <UserSelect variant="plain"/>
                        </div>
                        <div className="flex items-center gap-4">
                            <Link link="#" label="Help"/>
                            <Notifications/>
                            <div className="hidden sm:block">
                                <UserDropdown user={user}/>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-1">
                        <NavLinks>
                            <Link link="/" label="Home" isActive={true}/>
                            <Link link="/store" label="Store"/>
                            <Link link="/team" label="Team"/>
                            <Link link="/inbox" label="Inbox"/>
                            <Link link="/settings" label="Settings"/>
                        </NavLinks>
                    </div>
                </div>
            </header>
            <main className="mt-28 h-full max-w-6xl mx-auto py-6 px-5">
                {children}
            </main>
        </>
    );
}
const Link = ({link, label, isActive = false}: { link: string, label: string, isActive?: boolean }) => (
    <Button.Root href={link} size="sm" variant="ghost" intent="gray" id={link}>
        <Button.Label>
            {label}
        </Button.Label>
    </Button.Root>
)