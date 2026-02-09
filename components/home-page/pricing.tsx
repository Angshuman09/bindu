import { Check } from 'lucide-react';
import { useAuth } from '@clerk/nextjs';

declare global {
    interface Window {
        Clerk?: {
            __internal_openCheckout?: (options: {
                planId: string;
                planPeriod: 'month' | 'year';
                subscriberType: 'user' | 'organization';
            }) => Promise<void>;
        };
    }
}

// Map UI plan keys to actual Clerk billing plan IDs
const PLAN_ID_MAP: Record<string, string | undefined> = {
    free_user: process.env.NEXT_PUBLIC_CLERK_FREE_PLAN_ID,
    pro: process.env.NEXT_PUBLIC_CLERK_PRO_PLAN_ID,
};

export const PricingSection = () => {
    const { has } = useAuth();

    const handlePricing = async (planKey: string) => {
        const planId = PLAN_ID_MAP[planKey];

        if (!planId) {
            console.warn(
                `No Clerk billing plan ID configured for "${planKey}". Make sure NEXT_PUBLIC_CLERK_FREE_PLAN_ID / NEXT_PUBLIC_CLERK_PRO_PLAN_ID are set.`,
            );
            return;
        }
        const isCurrentPlan = planId ? has?.({ plan: planId }) : false;
        console.log(isCurrentPlan)

        if (isCurrentPlan) return; // Don't open checkout for current plan

        try {
            if (window.Clerk?.__internal_openCheckout) {
                await window.Clerk.__internal_openCheckout({
                    planId,
                    planPeriod: 'month',
                    subscriberType: 'user',
                });
            }
        } catch (error: unknown) {
            if (
                typeof error === 'object' &&
                error !== null &&
                'code' in error &&
                (error as { code?: string }).code === 'cannot_render_billing_disabled'
            ) {
                console.warn(
                    'Clerk billing is disabled; checkout is a no-op in development. Enable billing in the Clerk dashboard to use checkout.',
                );
                return;
            }

            console.error('Checkout error:', error);
        }
    };
    const pricingPlans = [
        {
            id: "free_user",
            name: "Starter",
            price: "$0",
            period: "/month",
            features: [
                "3 projects maximum",
                "20 exports per month",
                "Basic crop & resize",
                "Color adjustments",
                "Text Tool",
            ]
        },
        {
            id: "pro",
            name: "Pro",
            price: "$19.99",
            period: "/month",
            features: [
                "Unlimited projects",
                "Unlimited exports",
                "All Editing Tools",
                "AI Background Remover",
                "AI Image Extender",
                "AI Retouch, Upscaler and more",
            ],
            popular: true
        }
    ];

    return (
        <section id="pricing" className="py-16 border-t border-gray-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-3">
                        Simple Pricing
                    </h2>
                    <p className="text-base text-gray-400 max-w-2xl mx-auto">
                        Choose the plan that fits your workflow.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {pricingPlans.map((plan, index) => {
                        const planId = PLAN_ID_MAP[plan.id];
                        const isCurrentPlan = planId ? has?.({ plan: planId }) : false;
                        // console.log(isCurrentPlan)
                        return (
                            <div
                                key={index}
                                className={`p-6 rounded-xl border ${plan.popular
                                    ? 'border-indigo-500 bg-gray-900'
                                    : 'border-gray-800 bg-gray-900/60'
                                    }`}
                            >
                            {plan.popular && (
                                <div className="mb-3">
                                    <span className="inline-block px-2.5 py-0.5 bg-indigo-500 text-white text-xs font-medium rounded-full">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
                            <div className="mb-5">
                                <span className="text-3xl font-semibold">{plan.price}</span>
                                <span className="text-gray-500 ml-1 text-sm">{plan.period}</span>
                            </div>

                            <ul className="space-y-2.5 mb-6">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2.5 text-sm">
                                        <div className="w-5 h-5 rounded-full bg-indigo-500/10 flex items-center justify-center shrink-0 mt-0.5">
                                            <Check className="w-3 h-3 text-indigo-400" strokeWidth={2} />
                                        </div>
                                        <span className="text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => handlePricing(plan.id)}
                                disabled={isCurrentPlan}
                                className={`w-full py-2.5 rounded-lg text-sm font-medium ${
                                    isCurrentPlan
                                        ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                                        : plan.popular
                                            ? 'bg-indigo-500 text-white hover:bg-indigo-600'
                                            : 'bg-gray-800 text-white hover:bg-gray-700'
                                }`}
                            >
                                {isCurrentPlan ? 'Current Plan' : 'Get Started'}
                            </button>
                        </div>
                    )})}
                </div>
            </div>
        </section>
    )
}
