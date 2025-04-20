import { Transition } from '@headlessui/react';
import { Head } from '@inertiajs/react';

import DeleteUser from '@/components/delete-user';
import InputError from '@/components/input-error';
import DisabledTextInput from '@/components/templates/DisabledTextInput';
import EmailInput from '@/components/templates/Input/EmailInput';
import TextInput from '@/components/templates/Input/TextInput';
import ProfileUpload from '@/components/templates/ProfileUpload';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';
import moment from 'moment';
import { useHooks } from './useHooks';

export default function Profile() {
    const { breadcrumbs, data, setData, errors, processing, recentlySuccessful, submit } = useHooks();

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Profile settings" />

            <SettingsLayout>
                <form onSubmit={submit} className="flex w-full flex-col gap-4 lg:flex-row lg:gap-6">
                    <Card className="flex h-full flex-col items-center lg:w-[40%]">
                        <CardContent>
                            <ProfileUpload />
                        </CardContent>
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

                            {/* Company */}
                            <DisabledTextInput
                                id="company"
                                value={data.tenant_name}
                                placeholder="Company"
                                label={<Label htmlFor="company">Company</Label>}
                                size="lg"
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

                            {/* Company Email */}
                            <DisabledTextInput
                                id="company_email"
                                value={data.company_email}
                                placeholder="Company Email"
                                size="lg"
                                label={<Label htmlFor="company_email">Company Email</Label>}
                            />

                            {/* Birth Date */}
                            <DisabledTextInput
                                id="birthdate"
                                value={moment(data.birthdate).format('MMMM D, YYYY')}
                                placeholder="Last Name"
                                size="lg"
                                label={<Label htmlFor="birthdate">Birth Date</Label>}
                            />

                            {/* Nationality */}
                            <TextInput
                                id="nationality"
                                value={data.nationality}
                                onChange={(e) => setData('nationality', e.target.value)}
                                autoComplete="nationality"
                                placeholder="Nationality"
                                size="lg"
                                label={<Label htmlFor="nationality">Nationality</Label>}
                                error={<InputError className="mt-2" message={errors.nationality} />}
                            />
                        </CardContent>
                        <CardHeader className="h-2 text-lg font-bold">Address</CardHeader>
                        <CardContent className="grid gap-4 py-2 lg:grid-cols-2">
                            {/* Street */}
                            <TextInput
                                id="street"
                                value={data.street}
                                onChange={(e) => setData('street', e.target.value)}
                                autoComplete="street"
                                placeholder="Street"
                                size="lg"
                                label={<Label htmlFor="street">Street</Label>}
                                error={<InputError className="mt-2" message={errors.street} />}
                            />

                            {/* Barangay */}
                            <TextInput
                                id="barangay"
                                value={data.barangay}
                                onChange={(e) => setData('barangay', e.target.value)}
                                autoComplete="barangay"
                                placeholder="Barangay"
                                size="lg"
                                label={<Label htmlFor="barangay">Barangay</Label>}
                                error={<InputError className="mt-2" message={errors.barangay} />}
                            />

                            {/* City */}
                            <TextInput
                                id="city"
                                value={data.city}
                                onChange={(e) => setData('city', e.target.value)}
                                autoComplete="city"
                                placeholder="City"
                                size="lg"
                                label={<Label htmlFor="city">City</Label>}
                                error={<InputError className="mt-2" message={errors.city} />}
                            />

                            {/* Province */}
                            <TextInput
                                id="province"
                                value={data.province}
                                onChange={(e) => setData('province', e.target.value)}
                                autoComplete="province"
                                placeholder="Province"
                                size="lg"
                                label={<Label htmlFor="province">Province</Label>}
                                error={<InputError className="mt-2" message={errors.province} />}
                            />

                            {/* Zip Code */}
                            <TextInput
                                id="zipcode"
                                value={data.zipcode}
                                onChange={(e) => setData('zipcode', e.target.value)}
                                autoComplete="zipcode"
                                placeholder="Zip Code"
                                size="lg"
                                label={<Label htmlFor="zipcode">Zip Code</Label>}
                                error={<InputError className="mt-2" message={errors.zipcode} />}
                            />

                            {/* {mustVerifyEmail && auth.user.email_verified_at === null && (
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
                            )} */}
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
