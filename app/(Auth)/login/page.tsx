"use client";

import React, { useReducer } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "react-toastify";

type State = {
  email: string;
  password: string;
  error: string;
  isLoading: boolean;
};

type Action =
  | {
      type: "SET_FIELD";
      field: keyof Omit<State, "error" | "isLoading">;
      value: string;
    }
  | { type: "SET_ERROR"; error: string }
  | { type: "SET_LOADING"; isLoading: boolean }
  | { type: "RESET_FORM" };

const initialState: State = {
  email: "",
  password: "",
  error: "",
  isLoading: false,
};

function loginReducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value, error: "" }; // Clear error on field change
    case "SET_ERROR":
      return { ...state, error: action.error, isLoading: false };
    case "SET_LOADING":
      return { ...state, isLoading: action.isLoading };
    case "RESET_FORM":
      return { ...initialState }; // Or selectively reset fields
    default:
      return state;
  }
}

export default function LoginPage() {
  const router = useRouter();
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const { email, password, error, isLoading } = state;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: "SET_LOADING", isLoading: true });
    dispatch({ type: "SET_ERROR", error: "" });

    // This is a mock authentication - in a real app, you would call an API endpoint
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (email === "admin@example.com" && password === "password") {
        toast.success("Login successful! Redirecting...");
        router.push("/admin");
      } else {
        const errorMessage = "Invalid email or password";
        dispatch({ type: "SET_ERROR", error: errorMessage });
        toast.error(errorMessage);
      }
    } catch (err) {
      const errorMessage = "An error occurred. Please try again.";
      dispatch({ type: "SET_ERROR", error: errorMessage });
      toast.error(errorMessage);
    } finally {
      // isLoading is already set to false in the SET_ERROR action within the reducer
      // or will be set if success path is taken before redirect.
      // If not redirecting immediately on success, ensure isLoading is set to false.
      // For this case, it's handled by SET_ERROR or the redirect makes it a non-issue.
      // If an error occurs, SET_ERROR in reducer sets isLoading to false.
      // If successful, the page redirects, so isLoading state on this page becomes irrelevant.
      // However, if there was a scenario where success didn't redirect, we'd need:
      // dispatch({ type: "SET_LOADING", isLoading: false });
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="text-3xl font-bold text-silver">MF</span>
              <span className="text-2xl font-semibold text-white">
                Miguel Figuera
              </span>
            </div>
          </Link>
        </div>

        <Card className="bg-gray-950 border-gray-800">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Admin Login</CardTitle>
            <CardDescription className="text-center text-gray-400">
              Enter your credentials to access the admin area
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@example.com"
                  value={email}
                  onChange={(e) =>
                    dispatch({
                      type: "SET_FIELD",
                      field: "email",
                      value: e.target.value,
                    })
                  }
                  required
                  className="bg-gray-900 border-gray-800 text-white"
                />
              </div>
              <div className="space-y-2">
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) =>
                    dispatch({
                      type: "SET_FIELD",
                      field: "password",
                      value: e.target.value,
                    })
                  }
                  required
                  className="bg-gray-900 border-gray-800 text-white"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm font-normal">
                  Remember me
                </Label>
              </div>
              <Button
                type="submit"
                className="w-full bg-silver hover:bg-gray-300 text-black"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Link href="/" className="text-sm text-gray-400 hover:text-silver">
              Return to website
            </Link>
          </CardFooter>
        </Card>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Miguel Figuera. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
