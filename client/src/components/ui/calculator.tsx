import * as React from "react";
import { cn } from "@/lib/utils";

const Calculator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-lg", className)}
    {...props}
  />
));
Calculator.displayName = "Calculator";

const CalculatorHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex justify-between items-center mb-4", className)}
    {...props}
  />
));
CalculatorHeader.displayName = "CalculatorHeader";

const CalculatorTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-2xl font-bold", className)}
    {...props}
  />
));
CalculatorTitle.displayName = "CalculatorTitle";

const CalculatorDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-gray-600 dark:text-gray-300 mb-6", className)}
    {...props}
  />
));
CalculatorDescription.displayName = "CalculatorDescription";

const CalculatorBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("grid grid-cols-1 md:grid-cols-2 gap-8", className)}
    {...props}
  />
));
CalculatorBody.displayName = "CalculatorBody";

const CalculatorInputGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mb-6", className)}
    {...props}
  />
));
CalculatorInputGroup.displayName = "CalculatorInputGroup";

const CalculatorResult = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-800 dark:to-gray-700 rounded-xl border border-primary-200 dark:border-gray-600 shadow-inner", className)}
    {...props}
  />
));
CalculatorResult.displayName = "CalculatorResult";

const CalculatorFormula = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("bg-primary-50 dark:bg-gray-800 p-4 rounded-lg border border-primary-100 dark:border-gray-700", className)}
    {...props}
  />
));
CalculatorFormula.displayName = "CalculatorFormula";

export {
  Calculator,
  CalculatorHeader,
  CalculatorTitle,
  CalculatorDescription,
  CalculatorBody,
  CalculatorInputGroup,
  CalculatorResult,
  CalculatorFormula
};
