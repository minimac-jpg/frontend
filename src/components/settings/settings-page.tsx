"use client";

import { CreditCard, KeyRound, Trash2, User } from "lucide-react";
import { useState } from "react";
import { AccountSection } from "./account-section";
import { BillingSection } from "./billing-section";
import { DangerSection } from "./danger-section";
import { ProfileSection } from "./profile-section";

const sections = [
  { id: "profile", label: "Profile", icon: User },
  { id: "account", label: "Account", icon: KeyRound },
  { id: "billing", label: "Billing", icon: CreditCard },
  { id: "danger", label: "Danger Zone", icon: Trash2 },
];

export function SettingsPage() {
  const [activeSection, setActiveSection] = useState("profile");

  return (
    <div className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Settings</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage your account and workspace settings
        </p>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
        <nav className="flex shrink-0 gap-1 overflow-x-auto lg:w-48 lg:flex-col">
          {sections.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => setActiveSection(id)}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-left whitespace-nowrap transition-colors ${
                activeSection === id
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-gray-200/90"
              }`}
            >
              <Icon className="size-4 shrink-0" />
              {label}
            </button>
          ))}
        </nav>

        <div className="flex-1 space-y-8">
          {activeSection === "profile" && <ProfileSection />}
          {activeSection === "account" && <AccountSection />}
          {activeSection === "billing" && <BillingSection />}
          {activeSection === "danger" && <DangerSection />}
        </div>
      </div>
    </div>
  );
}
