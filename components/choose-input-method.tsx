/**
 * Choose Input Method Component - Step 2
 *
 * Allows users to select how they want to input their data:
 * - Upload File (CSV or JSON)
 * - Manual Entry (Form-based input)
 */
"use client"

import { useState } from "react"
import { CloudUpload, FileText, ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { InputMethod } from "./onboarding-flow"

interface ChooseInputMethodProps {
  selectedMethod: InputMethod
  onSelect: (method: InputMethod) => void
  onBack: () => void
}

const inputMethods = [
  {
    id: "upload" as const,
    title: "Upload File",
    description: "Upload your data in CSV or JSON format for quick and easy analysis",
    icon: CloudUpload,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: "manual" as const,
    title: "Manual Entry",
    description: "Type in your data directly into structured forms with guided input",
    icon: FileText,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
]

export function ChooseInputMethod({ selectedMethod, onSelect, onBack }: ChooseInputMethodProps) {
  const [selected, setSelected] = useState<InputMethod>(selectedMethod)

  const handleSelect = (method: InputMethod) => {
    setSelected(method)
  }

  const handleNext = () => {
    if (selected) {
      onSelect(selected)
    }
  }

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-12 text-center">
        <h1 className="mb-3 text-4xl font-bold text-gray-900">Choose Input Method</h1>
        <p className="text-lg text-gray-600">Select how you'd like to input your data for analysis</p>
      </div>

      {/* Input Method Cards */}
      <div className="mb-12 grid gap-8 md:grid-cols-2">
        {inputMethods.map((method) => {
          const Icon = method.icon
          const isSelected = selected === method.id

          return (
            <button
              key={method.id}
              onClick={() => handleSelect(method.id)}
              className={`group relative rounded-xl border-2 bg-white p-10 text-center transition-all hover:shadow-lg ${
                isSelected ? "border-primary shadow-md" : "border-gray-200 hover:border-gray-300"
              }`}
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className={`inline-flex rounded-full ${method.iconBg} p-6`}>
                  <Icon className={`h-10 w-10 ${method.iconColor}`} />
                </div>
              </div>

              {/* Content */}
              <h3 className="mb-3 text-2xl font-semibold text-gray-900">{method.title}</h3>
              <p className="text-base leading-relaxed text-gray-600">{method.description}</p>

              {/* Selection Indicator */}
              {isSelected && (
                <div className="absolute right-6 top-6 flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                  <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
            </button>
          )
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between">
        <Button onClick={onBack} variant="outline" size="lg" className="gap-2 bg-transparent">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
        <Button onClick={handleNext} disabled={!selected} size="lg" className="gap-2">
          Next
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
