import { useEffect, FormEventHandler } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import Label from '@/Components/Label';
import { Head, Link, useForm } from '@inertiajs/react';
import Button from "@/Components/tailus-ui/Button";
import {Input} from "@/Components/Input";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <Label size="md" htmlFor="name">Your name</Label>

                    <Input
                        id="name"
                        type="text"
                        name="name"
                        value={data.name}
                        size="lg"
                        variant="mixed"
                        placeholder="Your name"
                        className="mt-1 block w-full px-3"
                        autoComplete="name"
                        onChange={(e: any) => setData('name', e.target.value)}
                    />

                    <InputError message={errors.name} className="mt-2"/>
                </div>

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

                <div className="mt-4">
                    <Label size="md" htmlFor="password_confirmation">Confirm Password</Label>

                    <Input
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        variant="mixed"
                        size="lg"
                        value={data.password_confirmation}
                        className="mt-1 block w-full px-3"
                        autoComplete="current-password"
                        onChange={(e: any) => setData('password_confirmation', e.target.value)}
                    />

                    <InputError message={errors.password_confirmation} className="mt-2"/>
                </div>

                <Button.Root variant="solid" intent="primary"  disabled={processing} size="sm" className="w-full mt-4">
                    <Button.Label>Register</Button.Label>
                </Button.Root>


                <div className="flex items-center justify-start mt-4">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-300"
                    >
                        Already registered?
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}
