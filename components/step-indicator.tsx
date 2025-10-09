/**
 * Step Indicator Component
 *
 * Visual progress indicator showing the current step in the onboarding flow.
 * Displays completed steps with checkmarks and upcoming steps as numbered circles.
 */
import { Check } from "lucide-react";

interface StepIndicatorProps {
  currentStep: number;
}

const steps = [
  { number: 1, label: "Select Data Type" },
  { number: 2, label: "Choose Input Method" },
  { number: 3, label: "Data Entry / Upload" },
];

export function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <article className="flex items-center justify-center gap-4">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center">
          {/* Step Circle */}
          <div className="flex  items-center gap-3">
            <div
              className={`flex size-10 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                step.number < currentStep
                  ? "bg-green-500 text-white"
                  : step.number === currentStep
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {step.number < currentStep ? (
                <Check className="size-5" />
              ) : (
                <span>{step.number}</span>
              )}
            </div>

            {/* Step Label */}
            <div className="flex flex-col">
              <span className="text-xs text-gray-500">Step {step.number}</span>
              <span
                className={`text-sm font-medium ${
                  step.number <= currentStep ? "text-gray-900" : "text-gray-500"
                }`}
              >
                {step.label}
              </span>
            </div>
          </div>

          {/* Connector Line */}
          {index < steps.length - 1 && (
            <div
              className={`mx-4 h-0.5 w-24 transition-colors ${
                step.number < currentStep ? "bg-green-500" : "bg-gray-300"
              }`}
            />
          )}
        </div>
      ))}
    </article>
  );
}
