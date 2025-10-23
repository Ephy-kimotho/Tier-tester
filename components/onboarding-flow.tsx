/**
 * Onboarding Flow Component
 *
 * Manages the multi-step progressive form for business data entry.
 * Handles state management across all steps and navigation between them.
 *
 * Flow:
 * 1. Select Data Type (Pricing Structures, Customer Behavior, Competitive Data)
 * 2. Choose Input Method (Upload File or Manual Entry)
 * 3. Data Entry/Upload (Form fields or file upload)
 * 4. Review & Confirm (Summary with edit capability)
 */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { StepIndicator } from "./step-indicator";
import { SelectDataType } from "./select-data-type";
import { ChooseInputMethod } from "./choose-input-method";
import { DataEntry } from "./data-entry";
import { ReviewConfirm } from "./review-confirm";

// Type definitions for form data
export type DataType = "pricing" | "customer" | "competitive" | null;
export type InputMethod = "upload" | "manual" | null;

export interface TierData {
  tierName: string;
  price: string;
  currency: string;
  features: string;
  customerCount: string;
  churnRate: string;
  conversionRate: string;
  uploadedFile?: File;
}

export function OnboardingFlow() {
  const router = useRouter();

  // State management for the multi-step form
  const [currentStep, setCurrentStep] = useState(1);
  const [dataType, setDataType] = useState<DataType>(null);
  const [inputMethod, setInputMethod] = useState<InputMethod>(null);
  const [tierData, setTierData] = useState<TierData>({
    tierName: "",
    price: "",
    currency: "USD",
    features: "",
    customerCount: "",
    churnRate: "",
    conversionRate: "",
  });

  // Navigation handlers
  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 4));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleDataTypeSelect = (type: DataType) => {
    setDataType(type);
    handleNext();
  };

  const handleInputMethodSelect = (method: InputMethod) => {
    setInputMethod(method);
    handleNext();
  };

  const handleDataSubmit = (data: TierData) => {
    setTierData(data);
    handleNext();
  };

  const handleConfirm = () => {
    // TODO: Send Tier data to the backend via service layer
    // Will be implemented when backend is connected

    // Redirect to dashboard after confirmation
    router.push("/pricing-tiers");
  };

  const handleEdit = () => {
    // Go back to the data entry step
    setCurrentStep(3);
  };

  return (
    <section className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center px-6">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg bg-primary">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <p className="text-xl font-semibold">TierTester</p>
          </div>
          {currentStep < 4 && (
            <div className="ml-8 border-l border-gray-300 pl-8">
              <span className="text-base font-medium text-gray-900">
                Add Business Data
              </span>
            </div>
          )}
        </div>
      </header>

      {/* Step Indicator - Only show for steps 1-3 */}
      {currentStep < 4 && (
        <div className="border-b border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-6">
            <StepIndicator currentStep={currentStep} />
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-12">
        {currentStep === 1 && (
          <SelectDataType
            selectedType={dataType}
            onSelect={handleDataTypeSelect}
          />
        )}

        {currentStep === 2 && (
          <ChooseInputMethod
            selectedMethod={inputMethod}
            onSelect={handleInputMethodSelect}
            onBack={handleBack}
          />
        )}

        {currentStep === 3 && (
          <DataEntry
            inputMethod={inputMethod}
            initialData={tierData}
            onSubmit={handleDataSubmit}
            onBack={handleBack}
          />
        )}

        {currentStep === 4 && (
          <ReviewConfirm
            dataType={dataType}
            tierData={tierData}
            onConfirm={handleConfirm}
            onEdit={handleEdit}
          />
        )}
      </main>
    </section>
  );
}
