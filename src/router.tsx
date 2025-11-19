import { createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import { SettingsPage } from './components/SettingsPage';
import { ChatPage } from './components/ChatPage';

const rootRoute = createRootRoute({
    component: () => <Outlet />,
});

const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: SettingsPage,
});

const chatRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/chat',
    component: ChatPage,
});

const routeTree = rootRoute.addChildren([indexRoute, chatRoute]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}
