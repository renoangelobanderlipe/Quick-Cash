import { BreadcrumbItem, SharedData } from '@/types';
import { useForm, usePage } from '@inertiajs/react';
import { FormEventHandler } from 'react';

type ProfileForm = {
    first_name: string;
    middle_name: string;
    last_name: string;
    email: string;
    company_email: string;
    birthdate: Date;
    nationality: string;
    street: string;
    barangay: string;
    city: string;
    province: string;
    zipcode: string;
    tenant_name: string;
};

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Profile settings',
        href: '/settings/profile',
    },
];

export const useHooks = () => {
    const { auth } = usePage<SharedData>().props;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm<Required<ProfileForm>>({
        first_name: auth.user.first_name,
        middle_name: auth.user.middle_name,
        last_name: auth.user.last_name,
        email: auth.user.email,
        company_email: auth.user.company_email,
        birthdate: auth.user.birthdate,
        nationality: auth.user.nationality,
        street: auth.user.street,
        barangay: auth.user.barangay,
        city: auth.user.city,
        province: auth.user.province,
        zipcode: auth.user.zipcode,
        tenant_name: auth.user.tenant.name,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route('profile.update'), {
            preserveScroll: true,
        });
    };
    return {
        breadcrumbs,
        auth,
        data,
        setData,
        errors,
        processing,
        recentlySuccessful,
        submit,
    };
};
