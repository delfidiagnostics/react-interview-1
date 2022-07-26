import {mockUseAuth0} from "../../utils/test-utils";
import {useAuthWithPermissions} from "./use-auth-with-permissions";
import {describe} from "vitest";
import {auth0Config} from "../providers/auth-provider";


describe('useAuthWithPermissions', () => {
    const {audience} = auth0Config;
    const claimKey = `${audience}/permissions`;
    let user = {
        [claimKey]: ['test:read']
    };
    it('should return unauthenticated if custom claims not found even if user is authenticated', function () {
        const u = {
          name: 'foo'
        };
        mockUseAuth0({user: u, isAuthenticated: true});
        const {auth, hasPermissions} = useAuthWithPermissions(['some:perm']);
        expect(auth.isAuthenticated).toBeFalsy();
        expect(hasPermissions).toBeFalsy();
    });
    describe('when no required permissions', () => {
        it('should evaluate to true when there are no required permissions', () => {
            const requiredPermissions = undefined;
            mockUseAuth0({user, isAuthenticated: true});
            const {hasPermissions} = useAuthWithPermissions(requiredPermissions);
            expect(hasPermissions).toBeTruthy();
        });
    });
    describe('when there is one required permission', () => {

        it('should evaluate to no perms with user does not required permissions', () => {
            const requiredPermissions = ['some:perm'];
            mockUseAuth0({user, isAuthenticated: true});
            const {hasPermissions} = useAuthWithPermissions(requiredPermissions);
            expect(hasPermissions).toBeFalsy();
        });
        it('should evaluate to true when user has required permissions', () => {
            const requiredPermissions = ['test:read'];
            mockUseAuth0({user, isAuthenticated: true});
            const {hasPermissions} = useAuthWithPermissions(requiredPermissions);
            expect(hasPermissions).toBeTruthy();
        });

    });
    describe('when there are multiple required permissions', () => {
        it('should evaluate to false when user has no assigned permissions', () => {
            const requiredPermissions = ['test:read', 'some:perm'];
            let user = {
                [claimKey]: null
            };
            mockUseAuth0({user, isAuthenticated: true});
            const {hasPermissions} = useAuthWithPermissions(requiredPermissions);
            expect(hasPermissions).toBeFalsy();
        });
        it('should evaluate to true when user does has all required permissions', () => {
            const requiredPermissions = ['test:read', 'some:perm'];
            let user = {
                [claimKey]: ['test:read', 'some:perm']
            };
            mockUseAuth0({user, isAuthenticated: true});
            const {hasPermissions} = useAuthWithPermissions(requiredPermissions);
            expect(hasPermissions).toBeTruthy();
        });
        it('should evaluate to false when user does not have all required permissions', () => {
            const requiredPermissions = ['test:read', 'some:perm'];
            mockUseAuth0({user, isAuthenticated: true});
            const {hasPermissions} = useAuthWithPermissions(requiredPermissions);
            expect(hasPermissions).toBeFalsy();
        });

    })
});