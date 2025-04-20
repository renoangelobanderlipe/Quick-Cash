import { default as useForm } from '@inertiajs/react';
import { useRef, useState, type FormEvent } from 'react';
import { Props } from '.';

export const ProfileUpload = ({ avatarUrl }: Props) => {
    const [preview, setPreview] = useState<string | null>(avatarUrl ?? null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const { data, setData, post, processing, progress, reset, errors } = useForm<{
        avatar: File | null;
    }>({
        avatar: null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setData('avatar', file);
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
    };

    const handleUpload = (e: FormEvent) => {
        e.preventDefault();

        post('/profile/avatar', {
            onSuccess: () => {
                reset('avatar');
            },
        });
    };

    return (
        <form onSubmit={handleUpload} className="space-y-4">
            <h2 className="text-lg font-semibold text-white">Upload avatar</h2>

            <div className="flex justify-center">
                <div className="relative cursor-pointer" onClick={() => fileInputRef.current?.click()}>
                    <img
                        src={preview || '/default-avatar.png'}
                        // alt="Avatar preview"
                        className="h-28 w-28 rounded-full border-4 border-gray-500 object-cover shadow-lg"
                    />
                    <input type="file" accept="image/*" className="hidden" ref={fileInputRef} onChange={handleChange} />
                </div>
            </div>

            <p className="text-center text-sm text-gray-400">
                Allowed *.jpeg, *.jpg, *.png, *.gif
                <br />
                Max size of 3 Mb
            </p>

            {errors.avatar && <p className="text-center text-sm text-red-500">{errors.avatar}</p>}

            <div className="flex justify-center">
                <button
                    type="submit"
                    className="rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500 disabled:opacity-50"
                    disabled={processing}
                >
                    {processing ? 'Uploading...' : 'Upload'}
                </button>
            </div>

            {progress && (
                <div className="h-2 rounded bg-gray-200">
                    <div className="h-2 rounded bg-indigo-600" style={{ width: `${progress.percentage}%` }} />
                </div>
            )}
        </form>
    );
};
