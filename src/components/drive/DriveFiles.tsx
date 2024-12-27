import { useState, useEffect } from 'react';
import { Upload, Trash2, Download, FileText } from 'lucide-react';
import { driveService, DriveFile } from '../../services/driveService';

const DriveFiles = () => {
    const [files, setFiles] = useState<DriveFile[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchFiles = async () => {
        setLoading(true);
        try {
            const data = await driveService.listFiles();
            setFiles(data);
        } catch (error) {
            console.error('Error fetching files:', error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchFiles();
    }, []);

    const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            try {
                await driveService.uploadFile(file);
                fetchFiles();
            } catch (error) {
                console.error('Error uploading file:', error);
            }
        }
    };

    const handleDownload = async (fileId: string, fileName: string) => {
        try {
            await driveService.downloadFile(fileId, fileName);
        } catch (error) {
            console.error('Error downloading file:', error);
        }
    };

    const handleDelete = async (fileId: string) => {
        try {
            await driveService.deleteFile(fileId);
            fetchFiles();
        } catch (error) {
            console.error('Error deleting file:', error);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Google Drive Files</h1>
            <label className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-600">
            <Upload size={16} />
            Upload File
            <input
                type="file"
                className="hidden"
                onChange={handleUpload}
            />
            </label>
        </div>

        {loading ? (
            <div className="text-center">Loading...</div>
        ) : (
            <div className="space-y-2">
            {files.map((file) => (
                <div key={file.driveFileId} className="flex items-center justify-between p-4 border rounded hover:bg-gray-50">
                <div className="flex items-center gap-2">
                    <FileText size={20} className="text-gray-500" />
                    <span>{file.fileName}</span>
                </div>
                <div className="flex gap-2">
                    <button
                    onClick={() => handleDownload(file.driveFileId, file.fileName)}
                    className="p-2 hover:bg-gray-100 rounded"
                    title="Download"
                    >
                    <Download size={16} />
                    </button>
                    <button
                    onClick={() => handleDelete(file.driveFileId)}
                    className="p-2 hover:bg-gray-100 rounded text-red-500"
                    title="Delete"
                    >
                    <Trash2 size={16} />
                    </button>
                </div>
                </div>
            ))}
            </div>
        )}
        </div>
    );
};

export default DriveFiles;