import {
    Bars3Icon,
    MagnifyingGlassIcon,
    QuestionMarkCircleIcon,
    ShoppingBagIcon,
    XMarkIcon,
  } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react';
import Link from 'next/link';

export const Carte = () => {
    const [cartItems, setCartItems] = useState([])

    useEffect(()=>{
        const cart = JSON.parse(localStorage.getItem('cart'));
        if (cart){
            setCartItems(cart)
        }
    },[]);


    return (
        <div className="ml-4 flow-root lg:ml-8">
            <Link href="/Cart" className="group -m-2 flex items-center p-2">
                <ShoppingBagIcon className="h-6 w-6 flex-shrink-0 text-cyan-400 group-hover:text-cyan-500" aria-hidden="true" />
                <span className="ml-2 text-sm font-medium text-cyan-400 group-hover:text-cyan-500">{cartItems.length}</span>
                <span className="sr-only">items in cart, view bag</span>
            </Link>
        </div>
    )
}
