import { BASE_API_URL } from '@/app/api/constants';
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware';

const useUsers = create(persist(
    (set, get) => ({
        users: [],
        loading: false,
        error: null,
        fetchUsers: async () => {
            set({ error: null });
            set({ loading: true });
            try {
                const response = await fetch(`${BASE_API_URL}users`, {
                    credentials: "include"
                });
                const responseData = await response.json();
                if (response.ok) {
                    set({ users: responseData });
                } else {
                    set({ error: responseData.message })
                }
            } catch (err) {
                set({ error: err });
            } finally {
                set({ loading: false });
            }
        }
    }),
    {
        name: 'users-storage',
        storage: createJSONStorage(() => localStorage),
    },
));

export default useUsers;