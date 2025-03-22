import { withErrorBoundary } from "react-error-boundary";
import { ErrorHandler, logError } from "~shared/ui/error-handler";
import {
  Spinner,
  // spinnerModel
} from "~shared/ui/spinner";
import { QueryClientProvider } from "./QueryClientProvider";
import { Component } from "lucide-react";
import Router from "./Router";

const errorBoundary = withErrorBoundary(Component, {
  FallbackComponent: ErrorHandler,
  onError: logError,
});

// enhance 와같은 고차 컴포넌트의 경우, 요즘은 custom hook의 형태로 많이 사용된다고 합니다.

export const Provider = withErrorBoundary(
  () => (
    <>
      <GlobalSpinner />
      <QueryClientProvider>
        <Router />
      </QueryClientProvider>
    </>
  ),
  {
    FallbackComponent: ErrorHandler,
    onError: logError,
  }
);

function GlobalSpinner() {
  //   const display = spinnerModel.globalSpinner.use.display();

  return (
    <Spinner
      //   display={display}
      position="bottom-right"
    />
  );
}
