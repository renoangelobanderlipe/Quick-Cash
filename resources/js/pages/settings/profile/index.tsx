import { Transition } from '@headlessui/react';
import { Head, Link } from '@inertiajs/react';

import DeleteUser from '@/components/delete-user';
import InputError from '@/components/input-error';
import DisabledTextInput from '@/components/templates/DisabledTextInput';
import EmailInput from '@/components/templates/Input/EmailInput';
import TextInput from '@/components/templates/Input/TextInput';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';
import { useHooks } from './useHooks';

type ProfileType = {
    mustVerifyEmail: boolean;
    status?: string;
};

export default function Profile({ mustVerifyEmail, status }: ProfileType) {
    const { breadcrumbs, auth, data, setData, errors, processing, recentlySuccessful, submit } = useHooks();

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Profile settings" />

            <SettingsLayout>
                <form onSubmit={submit} className="flex w-full flex-col gap-4 lg:flex-row lg:gap-6">
                    <Card className="h-full lg:w-[40%]">
                        <CardContent>IMAGE HERE</CardContent>
                        <CardFooter>
                            <DeleteUser />
                        </CardFooter>
                    </Card>
                    <Card className="w-full">
                        <CardContent className="grid gap-4 lg:grid-cols-2">
                            {/* First Name */}
                            <TextInput
                                id="first_name"
                                value={data.first_name}
                                onChange={(e) => setData('first_name', e.target.value)}
                                autoComplete="first_name"
                                placeholder="First Name"
                                size="lg"
                                label={<Label htmlFor="first_name">First Name</Label>}
                                error={<InputError className="mt-2" message={errors.first_name} />}
                            />

                            {/* Middle Name */}
                            <TextInput
                                id="middle_name"
                                value={data.middle_name}
                                onChange={(e) => setData('middle_name', e.target.value)}
                                autoComplete="middle_name"
                                placeholder="Middle Name"
                                size="lg"
                                label={<Label htmlFor="middle_name">Middle Name</Label>}
                                error={<InputError className="mt-2" message={errors.middle_name} />}
                            />

                            {/* Last Name */}
                            <TextInput
                                id="last_name"
                                value={data.last_name}
                                onChange={(e) => setData('last_name', e.target.value)}
                                autoComplete="last_name"
                                placeholder="Last Name"
                                size="lg"
                                label={<Label htmlFor="last_name">Last Name</Label>}
                                error={<InputError className="mt-2" message={errors.last_name} />}
                            />

                            {/* Email */}
                            <EmailInput
                                id="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                autoComplete="email"
                                placeholder="Email"
                                size="lg"
                                label={<Label htmlFor="email">Email</Label>}
                                error={<InputError className="mt-2" message={errors.email} />}
                            />

                            {/* Company */}
                            <DisabledTextInput
                                id="company"
                                value={data.email}
                                placeholder="Company"
                                label={<Label htmlFor="company">Company</Label>}
                                size="lg"
                            />

                            {/* Birth Date */}
                            <TextInput
                                id="last_name"
                                value={data.last_name}
                                onChange={(e) => setData('last_name', e.target.value)}
                                autoComplete="last_name"
                                placeholder="Last Name"
                                size="lg"
                                label={<Label htmlFor="last_name">Birth Date</Label>}
                                error={<InputError className="mt-2" message={errors.last_name} />}
                            />

                            {/* Nationality */}
                            <TextInput
                                id="last_name"
                                value={data.last_name}
                                onChange={(e) => setData('last_name', e.target.value)}
                                autoComplete="last_name"
                                placeholder="Nationality"
                                size="lg"
                                label={<Label htmlFor="last_name">Nationality</Label>}
                                error={<InputError className="mt-2" message={errors.last_name} />}
                            />

                            {/* Street */}
                            <TextInput
                                id="last_name"
                                value={data.last_name}
                                onChange={(e) => setData('last_name', e.target.value)}
                                autoComplete="last_name"
                                placeholder="Street"
                                size="lg"
                                label={<Label htmlFor="last_name">Street</Label>}
                                error={<InputError className="mt-2" message={errors.last_name} />}
                            />

                            {/* Barangay */}
                            <TextInput
                                id="last_name"
                                value={data.last_name}
                                onChange={(e) => setData('last_name', e.target.value)}
                                autoComplete="last_name"
                                placeholder="Barangay"
                                size="lg"
                                label={<Label htmlFor="last_name">Barangay</Label>}
                                error={<InputError className="mt-2" message={errors.last_name} />}
                            />

                            {/* City */}
                            <TextInput
                                id="last_name"
                                value={data.last_name}
                                onChange={(e) => setData('last_name', e.target.value)}
                                autoComplete="last_name"
                                placeholder="City"
                                size="lg"
                                label={<Label htmlFor="last_name">City</Label>}
                                error={<InputError className="mt-2" message={errors.last_name} />}
                            />

                            {/* Province */}
                            <TextInput
                                id="last_name"
                                value={data.last_name}
                                onChange={(e) => setData('last_name', e.target.value)}
                                autoComplete="last_name"
                                placeholder="Province"
                                size="lg"
                                label={<Label htmlFor="last_name">Province</Label>}
                                error={<InputError className="mt-2" message={errors.last_name} />}
                            />

                            {/* Zip Code */}
                            <TextInput
                                id="last_name"
                                value={data.last_name}
                                onChange={(e) => setData('last_name', e.target.value)}
                                autoComplete="last_name"
                                placeholder="Zip Code"
                                size="lg"
                                label={<Label htmlFor="last_name">Zip Code</Label>}
                                error={<InputError className="mt-2" message={errors.last_name} />}
                            />

                            {mustVerifyEmail && auth.user.email_verified_at === null && (
                                <div>
                                    <p className="text-muted-foreground -mt-4 text-sm">
                                        Your email address is unverified.{' '}
                                        <Link
                                            href={route('verification.send')}
                                            method="post"
                                            as="button"
                                            className="text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500"
                                        >
                                            Click here to resend the verification email.
                                        </Link>
                                    </p>

                                    {status === 'verification-link-sent' && (
                                        <div className="mt-2 text-sm font-medium text-green-600">
                                            A new verification link has been sent to your email address.
                                        </div>
                                    )}
                                </div>
                            )}
                        </CardContent>
                        <CardFooter>
                            <div className="flex w-full items-center gap-4">
                                <div className="flex w-full justify-end">
                                    <Button disabled={processing}>Save changes</Button>
                                </div>

                                <Transition
                                    show={recentlySuccessful}
                                    enter="transition ease-in-out"
                                    enterFrom="opacity-0"
                                    leave="transition ease-in-out"
                                    leaveTo="opacity-0"
                                >
                                    <p className="text-sm text-neutral-600">Saved</p>
                                </Transition>
                            </div>
                        </CardFooter>
                    </Card>
                </form>
            </SettingsLayout>
        </AppLayout>
    );
}
