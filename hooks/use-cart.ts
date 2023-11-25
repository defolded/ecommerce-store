import { Product } from '@/types'
import toast from 'react-hot-toast'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface CartProps {
    items: Product[]
    addItem: (data: Product) => void
    removeItem: (id: string) => void
    removeAll: () => void
}

export const useCart = create(
    persist<CartProps>((set, get) => ({
        items: [],
        addItem: (data: Product) => {
            const currentItems = get().items
            const existingItem = currentItems.find((i) => i.id === data.id)

            if (existingItem) return toast('Item already in cart.')

            set({ items: [...get().items, data] })
            toast.success('Item added to cart.')
        },
        removeItem: (id: String) => {
            set({ items: [...get().items.filter((i) => i.id !== id)] })
            toast.success('Item removed from the cart.')
        },
        removeAll: () => set({ items: [] }),
    }),
        {
            name: 'cart-storage',
            storage: createJSONStorage(() => localStorage)
        })
)

export default useCart