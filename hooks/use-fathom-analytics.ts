import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Fathom from 'fathom-client';

export function useFathomAnalytics() {
    const router = useRouter();

    useEffect(() => {
        if (process.env.NODE_ENV === 'production') {
            Fathom.load(process.env.NEXT_PUBLIC_FATHOM_SITE_ID, {
                includedDomains: ['brycekalow.name']
            })
        }

        function onRouteChangeComplete() {
            Fathom.trackPageview()
        }
        // Record a pageview when route changes
        router.events.on('routeChangeComplete', onRouteChangeComplete)

        // Unassign event listener
        return () => {
            router.events.off('routeChangeComplete', onRouteChangeComplete)
        }
    }, [])
}