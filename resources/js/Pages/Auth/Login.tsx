import { useEffect, FormEventHandler } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import Label from '@/Components/Label';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, Link, useForm } from '@inertiajs/react';
import {Input} from "@/Components/Input";
import Button from '@/Components/tailus-ui/Button';
import {Caption} from "@/Components/tailus-ui/typography";

export default function Login({ status, canResetPassword }: { status?: string, canResetPassword: boolean }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit}>
                <div>
                    <Label size="md" htmlFor="email">Your email</Label>

                    <Input
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        size="lg"
                        variant="mixed"
                        placeholder="Your email"
                        className="mt-1 block w-full px-3"
                        autoComplete="username"
                        onChange={(e: any) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2"/>
                </div>

                <div className="mt-4">
                    <Label size="md" htmlFor="password">Your Password</Label>

                    <Input
                        id="password"
                        type="password"
                        name="password"
                        variant="mixed"
                        size="lg"
                        value={data.password}
                        className="mt-1 block w-full px-3"
                        autoComplete="current-password"
                        onChange={(e: any) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2"/>
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        <span className="ms-2 text-sm text-white">Remember me</span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Button.Root variant="solid" intent="primary" disabled={processing} size="sm" className="w-full">
                        <Button.Label>Log in</Button.Label>
                    </Button.Root>
                </div>
                <div className="flex items-center justify-start mt-4">
                    <Link
                        href={route('register')}
                        className="underline text-sm text-gray-300"
                    >
                        Create an account
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}
