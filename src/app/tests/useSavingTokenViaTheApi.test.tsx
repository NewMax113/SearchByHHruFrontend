import { GetCookie, SetCookie } from "../../shared/utils";
import useSavingTokenViaTheApi from "../hooks/useSavingTokenViaTheApi";
import { useFetch } from "../../shared/hooks";
import "@testing-library/jest-dom";
import { renderHook, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";

jest.mock("../../shared/hooks", () => ({
    useFetch: jest.fn()
}));
jest.mock('../../shared/utils', () => ({
    GetCookie: jest.fn(),
    SetCookie: jest.fn()
}))

describe('useSavingTokenViaTheApi hook', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("должен вызывать SetCookie, когда данные содержат access_token", async () => {
        (useFetch as jest.Mock).mockReturnValue({
            data: null, 
            loading: true
        });

        const { result, rerender } = renderHook(() => useSavingTokenViaTheApi({ code: "mockCode" }));

        expect(SetCookie).not.toHaveBeenCalled();

        (useFetch as jest.Mock).mockReturnValue({
            data: { access_token: "newAccessToken", refresh_token: "newRefreshToken", expires_in: 3600 },
            loading: false
        });

        act(() => {
            rerender();
        });

        await waitFor(() => {
            expect(SetCookie).toHaveBeenCalledWith(expect.objectContaining({
                name: "token",
                value: "newAccessToken",
                time: 3600 * 1000
            }));

            expect(SetCookie).toHaveBeenCalledWith(expect.objectContaining({
                name: "refresh_token",
                value: "newRefreshToken",
                time: 86400000
            }));
        });
    });
})