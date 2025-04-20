import { LucideIcon } from 'lucide-react';
import type { Config } from 'ziggy-js';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    sidebarOpen: boolean;
    [key: string]: unknown;
}

export interface Tenant {
    id: string;
    name: string;
    address: string;
    details: string;
    capital: Decimal;
    created_at: Date;
    updated_at: Date;
}
export interface User {
    id: number;
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
    is_active: string;
    md5_email?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    tenant: Tenant;
}
