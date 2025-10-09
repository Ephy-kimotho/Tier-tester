/**
 * Select Data Type Component - Step 1
 *
 * Allows users to choose the type of business data they want to add:
 * - Pricing Structures
 * - Customer Behavior
 * - Competitive Data
 */
"use client";

import { useState } from "react";
import { DollarSign, Users, List, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { DataType } from "./onboarding-flow";

interface SelectDataTypeProps {
  selectedType: DataType;
  onSelect: (type: DataType) => void;
}

const dataTypes = [
  {
    id: "pricing" as const,
    title: "Pricing Structures",
    description:
      "Add your current pricing tiers, plans, and subscription models.",
    icon: DollarSign,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: "customer" as const,
    title: "Customer Behavior",
    description:
      "Upload customer usage patterns, conversion rates, and engagement metrics.",
    icon: Users,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    id: "competitive" as const,
    title: "Competitive Data",
    description:
      "Input competitor pricing, features, and market positioning data.",
    icon: List,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
];

export function SelectDataType({
  selectedType,
  onSelect,
}: SelectDataTypeProps) {
  const [selected, setSelected] = useState<DataType>(selectedType);

  const handleSelect = (type: DataType) => {
    setSelected(type);
  };

  const handleContinue = () => {
    if (selected) {
      onSelect(selected);
    }
  };

  return (
    <section className="mx-auto max-w-5xl">
      <header className="mb-12 text-center">
        <h2 className="mb-3 text-4xl font-bold text-gray-900">
          What type of data would you like to add?
        </h2>
        <p className="text-lg text-gray-600">
          Choose the category that best describes your business data.
        </p>
      </header>

      {/* Data Type Cards */}
      <div className="mb-8 grid gap-6 md:grid-cols-3">
        {dataTypes.map((type) => {
          const Icon = type.icon;
          const isSelected = selected === type.id; // boolean

          return (
            <div
              role="button"
              aria-label="select type of data to add"
              key={type.id}
              onClick={() => handleSelect(type.id)}
              className={`group cursor-pointer relative rounded-xl border-2 bg-white p-8 text-left transition-all hover:shadow-lg ${
                isSelected
                  ? "border-primary shadow-md"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              {/* Icon */}
              <div className={`mb-6 inline-flex rounded-xl ${type.iconBg} p-4`}>
                <Icon className={`size-8 ${type.iconColor}`} />
              </div>

              {/* Content */}
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {type.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {type.description}
              </p>

              {/* Selection Indicator */}
              {isSelected && (
                <div className="absolute right-4 top-4  size-6 flex items-center justify-center rounded-full bg-primary">
                  <Check color="white" className="size-4" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Continue Button */}
      <div className="flex justify-end">
        <Button
          onClick={handleContinue}
          disabled={!selected}
          size="lg"
          className="min-w-32 cursor-pointer"
        >
          Continue
        </Button>
      </div>
    </section>
  );
}
