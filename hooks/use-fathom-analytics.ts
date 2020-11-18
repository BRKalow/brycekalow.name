import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Fathom from 'fathom-client';

function onRouteChangeComplete() {
    Fathom.trackPageview()
}

export function useFathomAnalytics() {
    const router = useRouter();

    useEffect(() => {
        if (process.env.NODE_ENV === 'production') {
            Fathom.load(process.env.NEXT_PUBLIC_FATHOM_SITE_ID, {
                includedDomains: ['brycekalow.name']
            })

            // Record a pageview when route changes
            router.events.on('routeChangeComplete', onRouteChangeComplete)

            // Unassign event listener
            return () => {
                router.events.off('routeChangeComplete', onRouteChangeComplete)
            }
        }
    }, [])
}