export interface DriveFile {
    driveFileId: string;
    fileName: string;
    mimeType: string;
    updatedAt: string;
}

const authFetch = async (url: string, options: RequestInit = {}) => {
    const token = sessionStorage.getItem('jwt');
    
    return fetch(url, {
        ...options,
        headers: {
            ...options.headers,
            Authorization: `Bearer ${token}`,
        },
    });
};

export const driveService = {
    listFiles: async (): Promise<DriveFile[]> => {
        const response = await authFetch("/api/google-drive/files", {
            method: 'GET'
        });

        if (!response.ok) 
            throw new Error(`Failed to fetch files: ${response}`)
            
        return response.json();
    },

    uploadFile: async (file: File): Promise<String> => {
        const formData = new FormData();
        formData.append('file', file);
        const response = await authFetch('/api/google-drive/upload', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            console.error('Failed to upload file:', response);
            throw new Error(`Failed to upload file: ${response}`)
        }

        return response.text();
    },

    downloadFile: async (fileId: string, fileName: string): Promise<void> => {
        const response = await authFetch(`/api/google-drive/download/${fileId}`);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    },

    deleteFile: async (fileId: string): Promise<void> => {
        await authFetch(`/api/google-drive/delete/${fileId}`, {
            method: 'DELETE'
        });
    },
};