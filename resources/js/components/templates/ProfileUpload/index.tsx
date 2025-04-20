import { router, useForm } from '@inertiajs/react';
import { memo, useRef, useState } from 'react';

type FileUpload = {
    avatar: File | null;
};

const ProfileUpload = () => {
    const [preview, setPreview] = useState<string | null>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const { data, setData, post, progress, errors, reset } = useForm<FileUpload>({
        avatar: null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setPreview(URL.createObjectURL(file));
        setSelectedFile(file);
    };
    const handleSubmit = () => {
        if (selectedFile) {
            setData('avatar', selectedFile);
            console.log('Data before post:', data); // Add this line
            router.post('settings/profile/avatar', data, {
                forceFormData: true,
            });
            // post(route('settings/profile/avatar'), {
            //     forceFormData: true,
            //     preserveScroll: true,
            //     onSuccess: () => {
            //         reset('avatar');
            //         setSelectedFile(null);
            //         setPreview(null);
            //     },
            // });
        }
    };

    console.log('data', data);

    return (
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {' '}
            {/* Prevent default form submission */}
            <div className="flex justify-center pt-14">
                <div className="relative cursor-pointer" onClick={() => fileInputRef.current?.click()}>
                    <img
                        src={preview || '/default-avatar.png'}
                        alt="Avatar preview"
                        className="h-28 w-28 rounded-full border-4 border-gray-500 object-cover shadow-lg"
                    />
                    <input type="file" name="avatar" accept="image/*" className="hidden" ref={fileInputRef} onChange={handleChange} />
                </div>
            </div>
            <p className="text-center text-sm text-gray-400">
                Allowed *.jpeg, *.jpg, *.png, *.gif
                <br />
                Max size of 3 Mb
            </p>
            {errors.avatar && <p className="text-center text-sm text-red-500">{errors.avatar}</p>}
            {progress && (
                <div className="h-2 rounded bg-gray-200">
                    <div className="h-2 rounded bg-indigo-600" style={{ width: `${progress.percentage}%` }} />
                </div>
            )}
            {selectedFile && (
                <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full rounded bg-indigo-500 py-2 text-white hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:outline-none"
                >
                    Upload Avatar
                </button>
            )}
        </form>
    );
};

export default memo(ProfileUpload);
