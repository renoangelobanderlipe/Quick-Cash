import InputError from '@/components/input-error';
import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';
import { Transition } from '@headlessui/react';
import { Head } from '@inertiajs/react';

import HeadingSmall from '@/components/heading-small';
import PasswordInput from '@/components/templates/Input/PasswordInput';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useHooks } from './useHooks';

export default function Password() {
    const { breadcrumbs, passwordInput, currentPasswordInput, data, setData, errors, processing, recentlySuccessful, updatePassword } = useHooks();
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Profile settings" />

            <SettingsLayout>
                <div className="space-y-6">
                    <div className="flex flex-col gap-4 lg:flex-row">
                        <HeadingSmall title="Update password" description="Ensure your account is using a long, random password to stay secure" />

                        <Card className="w-full">
                            <CardContent>
                                <form onSubmit={updatePassword} className="space-y-6">
                                    <PasswordInput
                                        id="current_password"
                                        ref={currentPasswordInput}
                                        value={data.current_password}
                                        onChange={(e) => setData('current_password', e.target.value)}
                                        className="mt-1 block w-full"
                                        autoComplete="current-password"
                                        placeholder="Current password"
                                        label={<Label htmlFor="current_password">Current password</Label>}
                                        error={<InputError message={errors.current_password} />}
                                        size="lg"
                                    />
                                    <PasswordInput
                                        id="password"
                                        ref={passwordInput}
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                        className="mt-1 block w-full"
                                        autoComplete="new-password"
                                        placeholder="New password"
                                        label={<Label htmlFor="password">New password</Label>}
                                        error={<InputError message={errors.password} />}
                                        size="lg"
                                    />
                                    <PasswordInput
                                        id="password_confirmation"
                                        value={data.password_confirmation}
                                        onChange={(e) => setData('password_confirmation', e.target.value)}
                                        className="mt-1 block w-full"
                                        autoComplete="new-password"
                                        placeholder="Confirm password"
                                        label={<Label htmlFor="password_confirmation">Confirm password</Label>}
                                        error={<InputError message={errors.password_confirmation} />}
                                        size="lg"
                                    />
                                    <div className="flex items-center gap-4">
                                        <div className="flex w-full justify-end">
                                            <Button disabled={processing}>Save password</Button>
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
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </SettingsLayout>
        </AppLayout>
    );
}
