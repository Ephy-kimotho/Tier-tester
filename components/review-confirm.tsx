/**
 * Review & Confirm Component - Step 4
 *
 * Displays a summary of all entered data for user review.
 * Allows users to edit data or confirm and proceed to analysis.
 */
"use client"

import { CheckCircle2, FileText, Download, Eye, Edit, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { DataType, TierData } from "./onboarding-flow"

interface ReviewConfirmProps {
  dataType: DataType
  tierData: TierData
  onConfirm: () => void
  onEdit: () => void
}

export function ReviewConfirm({ dataType, tierData, onConfirm, onEdit }: ReviewConfirmProps) {
  // Parse features from textarea input
  const features = tierData.features
    .split("\n")
    .filter((f) => f.trim())
    .slice(0, 5)

  return (
    <div className="mx-auto max-w-4xl">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="mb-3 text-4xl font-bold text-gray-900">Review & Confirm Your Data</h1>
        <p className="text-lg text-gray-600">Verify your information before we begin the analysis</p>
      </div>

      {/* Summary Card */}
      <div className="rounded-xl bg-white p-8 shadow-sm">
        {/* Header with AI Notice */}
        <div className="mb-6 flex items-start justify-between">
          <h2 className="text-2xl font-semibold text-gray-900">Tier Summary</h2>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Sparkles className="h-4 w-4" />
            <span>This data will be analyzed by our AI</span>
          </div>
        </div>

        {/* Tier Name and Key Metrics */}
        <div className="mb-6 grid gap-6 md:grid-cols-2">
          {/* Tier Name */}
          <div className="rounded-lg bg-gray-50 p-4">
            <div className="mb-1 text-sm text-gray-600">Tier Name</div>
            <div className="text-xl font-semibold text-gray-900">{tierData.tierName || "Premium Plan"}</div>
          </div>

          {/* Key Metrics */}
          <div className="rounded-lg bg-gray-50 p-4">
            <div className="mb-3 text-sm text-gray-600">Key Metrics</div>
            <div className="flex gap-6">
              <div>
                <div className="text-2xl font-bold text-blue-600">{tierData.customerCount || "1,247"}</div>
                <div className="text-xs text-gray-600">Customers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">{tierData.churnRate || "3.2"}%</div>
                <div className="text-xs text-gray-600">Churn Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">{tierData.conversionRate || "12.8"}%</div>
                <div className="text-xs text-gray-600">Conversion</div>
              </div>
            </div>
          </div>
        </div>

        {/* Price and Currency */}
        <div className="mb-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-gray-50 p-4">
            <div className="mb-1 text-sm text-gray-600">Price</div>
            <div className="text-xl font-semibold text-gray-900">${tierData.price || "29"}</div>
          </div>
          <div className="rounded-lg bg-gray-50 p-4">
            <div className="mb-1 text-sm text-gray-600">Currency</div>
            <div className="text-xl font-semibold text-gray-900">{tierData.currency || "USD"}</div>
          </div>
        </div>

        {/* Features */}
        {features.length > 0 && (
          <div className="mb-6">
            <div className="mb-3 text-sm text-gray-600">Features</div>
            <div className="flex flex-wrap gap-2">
              {features.map((feature, index) => (
                <Badge key={index} variant="secondary" className="bg-blue-50 px-3 py-1.5 text-sm text-blue-700">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* File Upload Info (if applicable) */}
        {tierData.uploadedFile && (
          <div className="mb-6 rounded-lg bg-blue-50 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-blue-600" />
                <div>
                  <div className="font-medium text-gray-900">{tierData.uploadedFile.name}</div>
                  <div className="text-sm text-gray-600">
                    Uploaded on{" "}
                    {new Date().toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}{" "}
                    at{" "}
                    {new Date().toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="gap-2 text-blue-600">
                  <Eye className="h-4 w-4" />
                  Preview
                </Button>
                <Button variant="ghost" size="sm" className="gap-2 text-blue-600">
                  <Download className="h-4 w-4" />
                  Download
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Success Message */}
        <div className="mb-6 text-center">
          <div className="mb-4 flex justify-center">
            <div className="inline-flex rounded-full bg-green-100 p-3">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <h3 className="mb-2 text-xl font-semibold text-gray-900">Everything looks great!</h3>
          <p className="text-sm text-gray-600">
            Once you confirm, TierTester will process your data and generate insights for your current tier.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-4">
          <Button onClick={onEdit} variant="outline" size="lg" className="gap-2 bg-transparent">
            <Edit className="h-4 w-4" />
            Edit Data
          </Button>
          <Button onClick={onConfirm} size="lg" className="gap-2">
            <Sparkles className="h-4 w-4" />
            Confirm & Analyze
          </Button>
        </div>

        {/* Cancel Link */}
        <div className="mt-4 text-center">
          <button className="text-sm text-gray-500 hover:text-gray-700">Cancel Setup</button>
        </div>
      </div>
    </div>
  )
}
