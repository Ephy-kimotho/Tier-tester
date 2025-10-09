/**
 * Onboarding Page - Entry point for new users
 *
 * This page serves as the main container for the multi-step onboarding process.
 * It manages the overall flow and redirects to the pricing tiers page upon completion.
 */
import { OnboardingFlow } from "@/components/onboarding-flow";

export default function OnboardingPage() {
  return <OnboardingFlow />;
}
