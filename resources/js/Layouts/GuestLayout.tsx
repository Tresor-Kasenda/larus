import ApplicationLogo from '@/Components/ApplicationLogo';
import { PropsWithChildren } from 'react';
import Card from "@/Components/tailus-ui/Card";
import {Caption, Text, Title} from "@/Components/tailus-ui/typography";
import {Link} from "@inertiajs/react";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <Card
            className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-50 dark:bg-gray-925 dark:border-gray-800/50"
            variant="soft">
            <Card className="-m-px py-10 px-7 flex flex-col justify-center card-shadow" variant="outlined">
                <div>
                    <Title size="lg">Welcome to Tailus UI</Title>
                    <Text className="my-0" size="base">Please Sign In to continue</Text>
                </div>
                <div data-shade="glassy" className="mt-6 space-y-6">
                    {children}
                </div>
            </Card>
        </Card>
    );
}
