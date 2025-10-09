/**
 * Data Entry Component - Step 3
 *
 * Provides form fields for manual data entry or file upload interface.
 * Includes validation and structured input for tier information.
 */
"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, Layers, Star, TrendingUp, Info, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import type { InputMethod, TierData } from "./onboarding-flow"

interface DataEntryProps {
  inputMethod: InputMethod
  initialData: TierData
  onSubmit: (data: TierData) => void
  onBack: () => void
}

export function DataEntry({ inputMethod, initialData, onSubmit, onBack }: DataEntryProps) {
  const [formData, setFormData] = useState<TierData>(initialData)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)

  const handleInputChange = (field: keyof TierData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setUploadedFile(file)
      setFormData((prev) => ({ ...prev, uploadedFile: file }))
    }
  }

  const handleSubmit = () => {
    onSubmit(formData)
  }

  const isFormValid = () => {
    if (inputMethod === "upload") {
      return uploadedFile !== null
    }
    return (
      formData.tierName && formData.price && formData.customerCount && formData.churnRate && formData.conversionRate
    )
  }

  // Render file upload interface
  if (inputMethod === "upload") {
    return (
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <h1 className="mb-3 text-3xl font-bold text-gray-900">Upload Your Data</h1>
          <p className="text-base text-gray-600">Upload a CSV or JSON file containing your tier information</p>
        </div>

        <div className="rounded-xl border-2 border-dashed border-gray-300 bg-white p-12 text-center">
          <div className="mb-6 flex justify-center">
            <div className="inline-flex rounded-full bg-blue-100 p-6">
              <Upload className="h-10 w-10 text-blue-600" />
            </div>
          </div>

          <h3 className="mb-2 text-xl font-semibold text-gray-900">
            {uploadedFile ? uploadedFile.name : "Choose a file to upload"}
          </h3>
          <p className="mb-6 text-sm text-gray-600">CSV or JSON format, up to 10MB</p>

          <input type="file" id="file-upload" accept=".csv,.json" onChange={handleFileUpload} className="hidden" />
          <label htmlFor="file-upload">
            <Button asChild variant="outline" size="lg">
              <span className="cursor-pointer">Select File</span>
            </Button>
          </label>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <Button onClick={onBack} variant="outline" size="lg" className="gap-2 bg-transparent">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          <Button onClick={handleSubmit} disabled={!isFormValid()} size="lg" className="min-w-32">
            Finish
          </Button>
        </div>
      </div>
    )
  }

  // Render manual entry form
  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">Enter Tier Information</h1>
        <p className="text-base text-gray-600">Fill out the details for your pricing tier</p>
      </div>

      <div className="space-y-8 rounded-xl bg-white p-8 shadow-sm">
        {/* Tier Details Section */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <Layers className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold text-gray-900">Tier Details</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-1">
              <Label htmlFor="tierName" className="mb-2 flex items-center gap-2">
                Tier Name
                <span className="text-red-500">*</span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-gray-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>e.g., Basic, Pro, Enterprise</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              <Input
                id="tierName"
                placeholder="e.g., Basic, Pro, Enterprise"
                value={formData.tierName}
                onChange={(e) => handleInputChange("tierName", e.target.value)}
              />
            </div>

            <div className="md:col-span-1">
              <Label htmlFor="price" className="mb-2 flex items-center gap-2">
                Price (per month)
                <span className="text-red-500">*</span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-gray-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Monthly subscription price</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              <Input
                id="price"
                type="number"
                placeholder="9.99"
                value={formData.price}
                onChange={(e) => handleInputChange("price", e.target.value)}
              />
            </div>

            <div className="md:col-span-1">
              <Label htmlFor="currency" className="mb-2">
                Currency
                <span className="text-red-500">*</span>
              </Label>
              <Select value={formData.currency} onValueChange={(value) => handleInputChange("currency", value)}>
                <SelectTrigger id="currency">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USD">USD</SelectItem>
                  <SelectItem value="EUR">EUR</SelectItem>
                  <SelectItem value="GBP">GBP</SelectItem>
                  <SelectItem value="JPY">JPY</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <Star className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold text-gray-900">Features</h2>
          </div>

          <div>
            <Label htmlFor="features" className="mb-2 flex items-center gap-2">
              Feature List
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Enter one feature per line</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <Textarea
              id="features"
              placeholder="Enter features separated by new lines&#10;e.g.:&#10;5 Projects&#10;10GB Storage&#10;Email Support"
              rows={6}
              value={formData.features}
              onChange={(e) => handleInputChange("features", e.target.value)}
              className="resize-none"
            />
          </div>
        </div>

        {/* Performance Metrics Section */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold text-gray-900">Performance Metrics</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <Label htmlFor="customerCount" className="mb-2 flex items-center gap-2">
                Customer Count
                <span className="text-red-500">*</span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-gray-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Total number of customers</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              <Input
                id="customerCount"
                type="number"
                placeholder="1250"
                value={formData.customerCount}
                onChange={(e) => handleInputChange("customerCount", e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="churnRate" className="mb-2 flex items-center gap-2">
                Churn Rate (%)
                <span className="text-red-500">*</span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-gray-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Monthly customer churn percentage</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              <Input
                id="churnRate"
                type="number"
                step="0.1"
                placeholder="5.2"
                value={formData.churnRate}
                onChange={(e) => handleInputChange("churnRate", e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="conversionRate" className="mb-2 flex items-center gap-2">
                Conversion Rate (%)
                <span className="text-red-500">*</span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-gray-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Trial to paid conversion rate</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              <Input
                id="conversionRate"
                type="number"
                step="0.1"
                placeholder="12.5"
                value={formData.conversionRate}
                onChange={(e) => handleInputChange("conversionRate", e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-8 flex items-center justify-between">
        <Button onClick={onBack} variant="outline" size="lg" className="gap-2 bg-transparent">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
        <Button onClick={handleSubmit} disabled={!isFormValid()} size="lg" className="min-w-32">
          Finish
        </Button>
      </div>
    </div>
  )
}
