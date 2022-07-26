/* eslint-disable import/export */
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {useAuth0, User} from "@auth0/auth0-react";
import {Mock} from "vitest";
import {
    GetIdTokenClaimsOptions,
    GetTokenSilentlyOptions,
    GetTokenSilentlyVerboseResponse,
    GetTokenWithPopupOptions,
    IdToken,
    PopupConfigOptions,
    PopupLoginOptions
} from "@auth0/auth0-spa-js";
import {RedirectLoginOptions} from "@auth0/auth0-react/src/auth0-context";

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => children,
    ...options,
  });
const renderWithRouter = (ui: JSX.Element, {route = '/'} = {}) => {
    window.history.pushState({}, 'Test page', route)

    return {
        user: userEvent.setup(),
        ...render(ui, {wrapper: BrowserRouter}),
    }
}
vi.mock('@auth0/auth0-react', () => {
    return {
        Auth0Provider: vi.fn().mockImplementation(({ children }) => {
            return children;
        }),
        useAuth0: vi.fn(),
    };
});

interface MockAuth {
    user?: User;
    isAuthenticated?: boolean;
    isLoading?: boolean;
    loginWithRedirect?: (options?: RedirectLoginOptions) => Promise<void>;
    loginWithPopup?: (
        options?: PopupLoginOptions,
        config?: PopupConfigOptions
    ) => Promise<void>;
    getAccessTokenSilently?: {
        (options: GetTokenSilentlyOptions & { detailedResponse: true }): Promise<
            GetTokenSilentlyVerboseResponse
            >;
        (options?: GetTokenSilentlyOptions): Promise<string>;
        (options: GetTokenSilentlyOptions): Promise<
            GetTokenSilentlyVerboseResponse | string
            >;
    };
    getIdTokenClaims?: (
        options?: GetIdTokenClaimsOptions
    ) => Promise<IdToken | undefined>;
    getAccessTokenWithPopup?: (
        options?: GetTokenWithPopupOptions,
        config?: PopupConfigOptions
    ) => Promise<string>;
}
function mockUseAuth0(mockAuth: MockAuth): Mock {
    const defaultMock = {
        isAuthenticated: false,
        isLoading: false,
        loginWithRedirect: vi.fn(),
        loginWithPopup: vi.fn(),
        getAccessTokenSilently: vi.fn(),
        getIdTokenClaims: vi.fn(),
        getAccessTokenWithPopup: vi.fn()
    };
    const mockObj = {...defaultMock, ...mockAuth};
    return (useAuth0 as unknown as Mock).mockReturnValue(mockObj);
}

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
// override render export
export { customRender as render, renderWithRouter, mockUseAuth0 };
