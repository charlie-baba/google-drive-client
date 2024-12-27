export const authService = {
    getGoogleAuthUrl: async (): Promise<string> => {
        try {
            const response = await fetch('/api/auth/login/google');
        
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        
            const data = await response.text();
            return data;
        } catch (error) {
            console.error('Error getting Google auth URL:', error);
            throw error;
        }
    },
    
    // Check if user is authenticated
    isAuthenticated: async (): Promise<boolean> => {
        try {
            // Retrieve the JWT from sessionStorage
            const jwt = sessionStorage.getItem("jwt");
            if (!jwt) {
                return false; // User is not authenticated if JWT is missing
            }

            // Send a request to the backend with the JWT in the Authorization header
            const response = await fetch("/api/auth/check", {
                headers: {
                  Authorization: `Bearer ${jwt}`,
                },
            });

            return response.ok; // Returns true if the backend validates the JWT
        } catch (error) {
            console.error("Authentication check failed:", error);
            return false;
        }
    },

    logout: async (): Promise<void> => {
        try {
            const jwt = sessionStorage.getItem("jwt");
            sessionStorage.removeItem('jwt');

            // Call backend to invalidate the session/token
            await fetch("/api/auth/logout", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
        } catch (error) {
            console.error('Error during logout:', error);
            throw new Error('Logout failed');
        }
    }
};
